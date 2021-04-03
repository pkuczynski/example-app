import { Middleware } from 'koa'

import { logger } from '../logger'

const excludedPaths = ['/status/health']

export const levelFromStatus = (status: number): string => {
    switch (true) {
        case status >= 500: return 'error'
        case status >= 400: return 'warn'
        case status >= 100: return 'info'
        default: return 'error'
    }
}

export const logRequest: Middleware = async (ctx, next) => {
    try {
        await next()
    }
    finally {
        const { path } = ctx

        if (excludedPaths.indexOf(path) === -1) {
            const { method, status, query, response: { length } } = ctx
            const { error, duration } = ctx.state || {}
            const level = levelFromStatus(status)
            const message = `${method} ${path} ${status} ${duration}ms${error ? ` - ${error.message}` : ''}`

            logger.log(level, message, {
                method,
                path,
                query,
                status,
                duration,
                length
            })
        }
    }
}
