import { Context } from 'koa'

import { validator, ValidatorType } from './validator'

describe('validator middleware', () => {
    type MockRequest = (valid: boolean) => Record<string, unknown>

    interface Example {
        schema : Record<string, unknown>
        mock: MockRequest
        error: string
    }

    const examples: Record<ValidatorType, Example> = {
        params: {
            schema: {
                type: 'object',
                properties: {
                    id: {
                        type: 'number'
                    }
                },
                additionalProperties: false,
                required: ['id']
            },
            mock: valid => ({ params: { id: valid ? 12 : 'abc' } }),
            error: 'params.id should be number'
        },
        query: {
            schema: {
                type: 'object',
                properties: {
                    order: {
                        type: 'string',
                        enum: ['ASC', 'DESC']
                    }
                },
                additionalProperties: false,
                required: ['order']
            },
            mock: valid => ({ query: { order: valid ? 'ASC' : 'XYZ' } }),
            error: 'query.order should be equal to one of: `ASC`, `DESC`'
        },
        body: {
            schema: {
                type: 'object',
                properties: {
                    date: {
                        type: 'string',
                        format: 'date'
                    }
                },
                additionalProperties: false,
                required: ['date']
            },
            mock: valid => ({ request: { body: { date: valid ? '2021-03-16' : 'abd' } } }),
            error: 'body.date is not a valid date'
        }
    }

    const mockContext = (scopes: string[], valid: boolean): Context => ({
        ...scopes.reduce((c, scope) => ({ ...c, ...examples[scope].mock(valid) }), {}),
        throw: jest.fn()
    } as unknown as Context)

    describe.each([
        'params',
        'query',
        'body',
        'params, body',
        'params, query',
        'params, query, body'
    ])('with schema defined for request %s', (test) => {
        const scopes = test.split(',').map(s => s.trim())
        const schema = scopes.reduce((sch, scope) => ({ ...sch, [scope]: examples[scope].schema }), {})

        it('should be able to validate with JSON schema', async () => {
            const next = jest.fn()
            const ctx = mockContext(scopes, true)

            await validator(schema)(ctx, next)

            expect(next).toHaveBeenCalledTimes(1)
            expect(ctx.throw).not.toHaveBeenCalled()
        })

        it('should throw error if JSON schema validation fails', async () => {
            const next = jest.fn()
            const ctx = mockContext(scopes, false)
            const details = [examples[scopes[0]].error]

            await validator(schema)(ctx, next)

            expect(ctx.throw).toHaveBeenCalledWith(400, { details })
        })
    })
})
