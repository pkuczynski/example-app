import { ActionWithScope, ActionWithScopeProps } from '../helpers/action-with-scope'

import { FetchActionType } from './fetch'

interface FetchFailureProps extends ActionWithScopeProps {
    readonly error: string
}

export type FetchFailureAction = ActionWithScope<typeof FetchActionType.FAILURE> & FetchFailureProps

export const failure = ({ scope, error }: FetchFailureProps): FetchFailureAction => ({
    type: FetchActionType.FAILURE,
    scope,
    error
})
