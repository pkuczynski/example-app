import { FetchActionType } from './fetch'
import { FetchRequestAction, request } from './request'
import { FetchRefreshAction, refresh } from './refresh'
import { FetchSuccessAction, success } from './success'
import { FetchFailureAction, failure } from './failure'

export type FetchAction = FetchRequestAction | FetchRefreshAction | FetchSuccessAction | FetchFailureAction

export {
    request,
    refresh,
    success,
    failure,
    FetchActionType
}
