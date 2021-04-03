import { Server } from 'http'

import { app } from './app'
import { logger } from './logger'

let server: Server | undefined

const start = async (): Promise<Server> => {
    const port = 3001

    server = await app.listen(port)

    logger.info(`Server running on port ${port}`)

    return server
}

const stop = async (): Promise<void> => {
    if (server) {
        await server.close()
    }
}

export {
    start,
    stop
}
