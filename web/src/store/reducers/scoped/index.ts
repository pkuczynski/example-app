import { combineReducers } from 'redux'

import { settings } from './settings'
import { users } from './users'

export const scopedReducers = combineReducers({
    settings,
    users
})

export type Store = ReturnType<typeof scopedReducers>
