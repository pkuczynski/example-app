import { Middleware } from 'koa'

export const auth: Middleware = async (_ctx, next) => {
    // TODO: authenticate here and then call next()

    await next()
}
