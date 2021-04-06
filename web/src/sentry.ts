import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

import { config } from './config'

Sentry.init({
    dsn: 'https://1333325be4e848bea1717dc2ae3c4eee@o113173.ingest.sentry.io/5708008',
    environment: config.environment,
    release: config.version,
    enabled: config.sentry.enabled,
    maxBreadcrumbs: 25,
    normalizeDepth: 10,
    attachStacktrace: true,
    integrations: [
        new Integrations.BrowserTracing()
    ],
    tracesSampleRate: config.sentry.tracesSampleRate
})

export { Sentry }
