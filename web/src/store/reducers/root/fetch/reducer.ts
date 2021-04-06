import { Reducer } from 'redux'

import { FetchAction, FetchActionType } from '../../../actions/fetch'
import { Store } from '../../scoped'
import { assign } from '../helpers/assign'
import { extend } from '../helpers/extend'

import { Fetch, FetchStatus } from './interfaces'

export { FetchStatus }

export const fetch: Reducer<Partial<Store>, FetchAction> = (state = {}, action) => {
    switch (action.type) {
        case FetchActionType.REQUEST: {
            return assign<Fetch>(state, action.scope, {
                status: FetchStatus.FETCHING
            })
        }

        case FetchActionType.REFRESH:
            return extend(state, action.scope, {
                status: FetchStatus.FETCHING
            })

        case FetchActionType.SUCCESS: {
            const { fetchedAt, payload } = action

            return assign(state, action.scope, {
                status: FetchStatus.SUCCESS,
                data: payload,
                fetchedAt
            })
        }

        case FetchActionType.FAILURE:
            return assign(state, action.scope, {
                status: FetchStatus.ERROR,
                error: action.error
            })

        default:
            return state
    }
}
