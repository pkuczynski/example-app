import { Method } from '../../../enums'
import { Controller, EmptyRequest, EmptyState } from '../../controller'

interface GetHealthResponse {
    status: string
    version: string
}

export const getHealth: Controller<EmptyRequest, EmptyState, GetHealthResponse> = (ctx) => {
    ctx.body = {
        status: 'HEALTHY',
        version: process.env.APP_VERSION || 'local'
    }
}

getHealth.route = {
    method: Method.GET,
    path: '/status/health',
    isPublic: true
}
