import { ErrorObject, ValidateFunction } from 'ajv'
import { Context, Middleware } from 'koa'

import { ajv } from './ajv'
import { formatErrors } from './format-errors'

export enum ValidatorType {
    PARAMS = 'params',
    QUERY = 'query',
    BODY = 'body'
}

const getData = (ctx: Context, scope: ValidatorType): Record<string, unknown> => {
    switch (scope) {
        case ValidatorType.PARAMS: return ctx.params
        case ValidatorType.QUERY: return ctx.query
        case ValidatorType.BODY: return ctx.request.body
    }
}

type Validate = (ctx: Context, scope: ValidatorType, validator: ValidateFunction) => void

const validate: Validate = (ctx, scope, validator) => {
    const valid = validator(getData(ctx, scope))

    if (!valid) {
        const details = formatErrors(scope, validator.errors as ErrorObject[])

        ctx.throw(400, { details })
    }
}

export type RequestSchema = Partial<Record<ValidatorType, Record<string, unknown>>>
type Validators = Partial<Record<ValidatorType, ValidateFunction>>

export const validator = (schema: RequestSchema): Middleware => {
    const validators: Validators = Object.keys(schema).reduce((v, scope) => ({
        ...v,
        [scope]: ajv.compile(schema[scope])
    }), {})

    return (ctx, next): Promise<any> => {
        Object.keys(validators).forEach((scope) => {
            validate(ctx, scope as ValidatorType, validators[scope])
        })

        return next()
    }
}
