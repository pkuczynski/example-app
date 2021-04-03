import { Middleware } from 'koa'

export const duration: Middleware = async (ctx, next) => {
    const start = Date.now()

    try {
        await next()
    }
    finally {
        ctx.state.duration = Date.now() - start
        // ctx.set('X-Response-Time', `${ctx.state.duration}ms`)
    }
}
