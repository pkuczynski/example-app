import { combineReducers } from 'redux'

import { settings } from './settings'

export const scopedReducers = combineReducers({
    settings
})

export type Store = ReturnType<typeof scopedReducers>
