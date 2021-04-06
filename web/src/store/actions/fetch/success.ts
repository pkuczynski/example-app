import { ActionWithScope, ActionWithScopeProps } from '../helpers/action-with-scope'

import { FetchActionType } from './fetch'

interface FetchSuccessProps<T = unknown> extends ActionWithScopeProps {
    readonly payload: T
}

export type FetchSuccessAction<T = unknown> = ActionWithScope<typeof FetchActionType.SUCCESS> & FetchSuccessProps<T> & {
    readonly fetchedAt: number
}

export const success = <T>({ scope, payload }: FetchSuccessProps<T>): FetchSuccessAction<T> => ({
    type: FetchActionType.SUCCESS,
    scope,
    payload,
    fetchedAt: Date.now()
})
