import { Middleware } from 'koa'

// Based on: https://github.com/helmetjs/nocache/blob/master/index.ts
export const noCache: Middleware = async (ctx, next) => {
    ctx.set('Surrogate-Control', 'no-store')
    ctx.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
    ctx.set('Pragma', 'no-cache')
    ctx.set('Expires', '0')

    await next()
}
