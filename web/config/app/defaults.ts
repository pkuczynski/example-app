import { Config, Environment } from '../../src/config'

export const defaults: Config = {
    title: 'LOCAL',
    environment: (process.env.APP_ENVIRONMENT as Environment | undefined) || Environment.LOCAL,
    version: process.env.CI_COMMIT_SHORT_SHA || 'local',

    api: {
        url: 'http://localhost:3001'
    },

    sentry: {
        enabled: false,
        tracesSampleRate: 1
    }
}
