import { getHealth } from './get-health'

describe('getHealth', () => {
    it('should respond with status and version', () => {
        const ctx = {} as any
        const next = jest.fn()
        const appVersion = process.env.APP_VERSION

        process.env.APP_VERSION = 'abcd'

        getHealth(ctx, next)

        expect(ctx.body).toStrictEqual({
            status: 'HEALTHY',
            version: process.env.APP_VERSION
        })

        process.env.APP_VERSION = appVersion
    })

    it('should respond with local version when not defined', () => {
        const ctx = {} as any
        const next = jest.fn()

        getHealth(ctx, next)

        expect(ctx.body).toStrictEqual({
            status: 'HEALTHY',
            version: 'local'
        })
    })
})
