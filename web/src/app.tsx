import React from 'react'
import { Provider as Redux } from 'react-redux'

import './app.scss'

import { IntlProvider } from './i18n'
import { Router } from './router'
import { Sentry } from './sentry'
import { store } from './store'

export const App: React.FC = () => (
    <Sentry.ErrorBoundary>
        <Redux store={store}>
            <IntlProvider>
                <Router/>
            </IntlProvider>
        </Redux>
    </Sentry.ErrorBoundary>
)
