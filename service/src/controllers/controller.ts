import { Middleware } from 'koa'

import { Method, Status } from '../enums'
import { RequestSchema } from '../middlewares'

export type EmptyObject = Record<never, never>

export type Request = {
    params?: EmptyObject
    query?: EmptyObject
    body?: EmptyObject
}

export type EmptyRequest = Request
export type EmptyState = EmptyObject

interface Context<RequestT extends Request> {
    status: Status
    params: RequestT['params']
    query: RequestT['query']
    request: {
        body: RequestT['body']
    }
}

export interface Controller<RequestT extends Request = EmptyRequest, StateT = EmptyState, ResponseT = unknown>
    extends Middleware<StateT, Context<RequestT>, ResponseT> {
    route: {
        method?: Method | Method[]
        middleware?: Middleware<StateT, Context<RequestT>> | Middleware<StateT, Context<RequestT>>[]
        path: string
        schema?: RequestSchema
        isPublic?: boolean
    }
}
