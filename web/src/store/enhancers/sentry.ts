import * as Sentry from '@sentry/react'

import { Store } from '../reducers'

export const sentryReduxEnhancer = Sentry.createReduxEnhancer({
    configureScopeWithState: (scope, state) => {
        scope.setTag('locale', (state as Store).settings.locale)
    }
})
