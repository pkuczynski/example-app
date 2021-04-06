import { Reducer } from 'redux'

import { FetchAction } from '../../../actions/fetch'

import { Fetch, FetchStatus } from './interfaces'

export const initial: Fetch = {
    status: FetchStatus.IDLE
}

export const createFetchReducer = <T extends Fetch>(): Reducer<T, FetchAction> => (state = <T>initial): T => state

export {
    Fetch,
    FetchStatus
}
