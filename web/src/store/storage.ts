import { Sentry } from '../sentry'

import { Scope } from './scope'

const persist = <T>(scope: Scope, state: T): T => {
    try {
        localStorage.setItem(scope, JSON.stringify(state))
    }
    catch (error) {
        Sentry.captureException(error)
    }

    return state
}

const restore = <T>(scope: Scope, initial?: T, after?: (state: T) => T): T => {
    try {
        const state = JSON.parse(localStorage.getItem(scope) as string) || initial || {} as T

        return after ? after(state) : state
    }
    catch (error) {
        Sentry.captureException(error)
    }

    return initial || {} as T
}

export default {
    persist,
    restore
}
