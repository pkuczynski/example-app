import { Action } from 'redux'

import { Store } from '../../reducers'

export interface ActionWithScopeProps {
    readonly scope: keyof Store
}

export type ActionWithScope<T = unknown> = Action<T> & ActionWithScopeProps
