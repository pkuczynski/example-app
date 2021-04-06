import { Config } from '../../src/config'

export const stage: Partial<Config> = {
    title: 'STAGE',

    api: {
        url: 'https://...'
    },

    sentry: {
        enabled: true
    }
}
