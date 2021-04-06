import { User } from '@example-app/service'

import { createFetchReducer, Fetch } from '../root/fetch/create-fetch-reducer'

export interface Users extends Fetch {
    readonly data?: Readonly<User>[]
}

export const users = createFetchReducer<Users>()
