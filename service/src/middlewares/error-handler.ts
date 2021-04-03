import { Middleware } from 'koa'

enum ErrorNameToCode {
    /* eslint-disable @typescript-eslint/naming-convention */
    EntityNotFound = 404
    /* eslint-enable */
}

// https://github.com/koajs/koa/wiki/Error-Handling
export const errorHandler: Middleware = async (ctx, next) => {
    try {
        await next()
    }
    catch (error) {
        // error.status can only come from EVError, so it should be removed once its gone
        ctx.status = ErrorNameToCode[error.name] || error.status || 500
        ctx.body = {
            error: error.message || error.name.replace('Error', '') || 'Internal Error',
            details: error.details
        }

        // attach error to state for the logger
        ctx.state.error = error

        ctx.app.emit('error', error, ctx)
    }
}
