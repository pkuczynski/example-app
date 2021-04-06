import { Context } from 'koa'

import { Sentry } from '../sentry'
import { logger } from '../logger'

export const sentry = (error: Error, ctx: Context): void => {
    if (ctx.status >= 500) {
        logger.error(error)

        Sentry.withScope((scope) => {
            scope.addEventProcessor(event => Sentry.Handlers.parseRequest(event, ctx.req))

            Sentry.captureException(error)
        })
    }
}
