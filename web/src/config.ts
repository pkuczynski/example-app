export const enum Environment {
    local = 'local',
    test = 'test',
    stage = 'stage',
    prod = 'prod'
}

export interface Config {
    title: string | null
    environment: Environment
    version: string

    api: {
        url: string
    }

    sentry: {
        enabled?: boolean
        tracesSampleRate?: number
    }
}

declare let APP_CONFIG: Config

export const config: Config = APP_CONFIG
