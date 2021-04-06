export const enum Environment {
    LOCAL = 'local',
    TEST = 'test',
    STAGE = 'stage',
    PROD = 'prod'
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

// eslint-disable-next-line @typescript-eslint/naming-convention
declare let APP_CONFIG: Config

export const config: Config = APP_CONFIG
