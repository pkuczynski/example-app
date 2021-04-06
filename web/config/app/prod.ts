import { Config } from '../../src/config'

export const prod: Partial<Config> = {
    title: null,

    api: {
        url: 'https://...'
    },

    sentry: {
        enabled: true,
        tracesSampleRate: 0.5
    }
}
