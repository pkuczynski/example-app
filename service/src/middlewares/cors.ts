import koaCors from '@koa/cors'

import * as controllers from '../controllers'

const allowedOrigins = /^.*.example-app.com$/
const allowMethods = [...new Set(
    Object.values(controllers)
        .map(c => c.route.method)
        .flat()
        .map(m => m?.toString().toUpperCase())
        .filter(m => m) as string[]
)]

export const cors = koaCors({
    allowMethods,
    exposeHeaders: ['connection', 'content-length', 'content-type', 'www-authenticate'],
    allowHeaders: [
        'Content-Type',
        'Access-Control-Allow-Origin',
        'Access-Control-Allow-Credentials',
        'Authorization'
    ],
    maxAge: 24 * 60 * 60,
    credentials: true,
    keepHeadersOnError: true,
    origin: process.env.NODE_ENV === 'production'
        ? (ctx): string => {
            const requestOrigin = ctx.get('origin')

            ctx.assert(allowedOrigins.test(requestOrigin), 412, 'Unsupported origin')

            return requestOrigin
        }
        : (ctx): string => ctx.get('origin')
})
