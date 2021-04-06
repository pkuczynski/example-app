import { ActionWithScope, ActionWithScopeProps } from '../helpers/action-with-scope'

import { FetchActionType } from './fetch'

export type FetchRequestAction = ActionWithScope<typeof FetchActionType.REQUEST> & ActionWithScopeProps

export const request = ({ scope }: ActionWithScopeProps): FetchRequestAction => ({
    type: FetchActionType.REQUEST,
    scope
})
