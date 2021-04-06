import { AnyAction, Reducer } from 'redux'

import { Store } from '../scoped'

import { fetch, FetchStatus } from './fetch'

const rootReducers = [
    fetch
] as Array<Reducer<Partial<Store>>>

export const rootReducer = (state: Partial<Store> = {}, action: AnyAction): Store => {
    const finalState = rootReducers
        .reduce((currState, reducer) => reducer(currState, action), state)

    return finalState as Store
}

export {
    FetchStatus
}
