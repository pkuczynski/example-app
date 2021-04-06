import { AnyAction, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { sentryReduxEnhancer } from './enhancers'
import { reducers } from './reducers'

const composeEnhancers = composeWithDevTools({
    actionSanitizer: <A extends AnyAction> (action: A): A => {
        const { scope, type } = action

        return scope
            ? { ...action, type: `${type}/${String(scope)}` }
            : action
    }
})

export const store = createStore(
    reducers,
    composeEnhancers(
        sentryReduxEnhancer
    )
)

// Enable Webpack hot module replacement for reducers
if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(reducers))
}
