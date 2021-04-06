import { ActionWithScope, ActionWithScopeProps } from '../helpers/action-with-scope'

import { FetchActionType } from './fetch'

export type FetchRefreshAction = ActionWithScope<typeof FetchActionType.REFRESH>

export const refresh = ({ scope }: ActionWithScopeProps): FetchRefreshAction => ({
    type: FetchActionType.REFRESH,
    scope
})
