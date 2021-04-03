import * as Sentry from '@sentry/node'
import { ExtraErrorData, RewriteFrames } from '@sentry/integrations'

// Sentry should not have any dependency to our own code, so it can always safely report errors.
// That's why we are referencing `process.env` instead of using `config.ts`

Sentry.init({
    dsn: 'https://5519c0746e0741598d2241b9ce59b762@o435561.ingest.sentry.io/5423356',
    enabled: process.env.NODE_ENV === 'production',
    release: process.env.APP_VERSION,
    environment: process.env.APP_ENVIRONMENT,
    normalizeDepth: 10,
    integrations: [
        new ExtraErrorData(),
        new RewriteFrames({ root: process.cwd() })
    ]
})

export { Sentry }
