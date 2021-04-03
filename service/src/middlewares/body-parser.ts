import { Middleware } from 'koa'
import koaBodyParser from 'koa-bodyparser'

export const bodyParser: Middleware = koaBodyParser({
    enableTypes: ['json'],
    jsonLimit: '5mb'
})
