import data from '../../../../data/users.json'
import { Method } from '../../../enums'
import { Controller, EmptyRequest, EmptyState } from '../../controller'

export interface User {
    id: string
    avatar: string
    name: string
}

export type GetUsersResponse = User[]

export const getUsers: Controller<EmptyRequest, EmptyState, GetUsersResponse> = (ctx) => {
    ctx.body = data
}

getUsers.route = {
    method: Method.GET,
    path: '/users',
    isPublic: true
}
