import { rootReducer, FetchStatus } from './root'
import { scopedReducers, Store } from './scoped'

export const reducers: typeof scopedReducers = (state, action) => scopedReducers(rootReducer(state, action), action)

export {
    FetchStatus,
    Store
}
