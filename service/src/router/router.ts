import Router from '@koa/router'
import { Middleware } from 'koa'

import * as controllers from '../controllers'
import { Controller } from '../controllers/controller'
import { Method } from '../enums'
import { validator, auth } from '../middlewares'

import { comparePaths } from './compare-paths'

export const router = new Router()

Object.values(controllers)
    .sort(comparePaths)
    .forEach((controller) => {
        const {
            route: { method = Method.GET, middleware = [], path, schema, isPublic = false }
        } = controller as Controller

        const handlers = [
            !isPublic && auth,
            schema && validator(schema),
            middleware,
            controller
        ].filter(h => h).flat() as Middleware[]

        const methods = [method].flat()

        methods.forEach((m) => {
            router[m](path, ...handlers)
        })
    })
