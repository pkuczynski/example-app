import { Sentry } from './sentry' // import this as early as possible to catch early startup errors

import { logger } from './logger'
import * as server from './server'

const stop = async (signal: NodeJS.Signals) => {
    logger.info('Shutting down', signal)

    try {
        await server.stop()
    }
    catch (error) {
        Sentry.captureException(error)

        logger.error('Close failed')
        logger.error(error.stack)

        process.exitCode = 1
    }
}

process.on('unhandledRejection', (reason) => {
    Sentry.captureException(reason)

    logger.error('Unhandled rejection')
    logger.error(reason)
})

process.on('uncaughtException', (error) => {
    Sentry.captureException(error)

    logger.error('Uncaught exception')
    logger.error(error.stack)
})

process.on('SIGINT', stop)
process.on('SIGTERM', stop)

server.start().catch((error) => {
    Sentry.captureException(error)

    logger.error(error.stack)

    process.exitCode = 1
})
