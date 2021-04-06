import merge from 'deepmerge'

import { Config, Environment } from '../../src/config'

import { defaults } from './defaults'
import { prod } from './prod'
import { stage } from './stage'
import { test } from './test'

type Stages = {
    [name in keyof typeof Environment]: Partial<Config>
}

const stages: Stages = { LOCAL: defaults, TEST: test, STAGE: stage, PROD: prod }

const select = (): Partial<Config> => {
    const appEnvironment = process.env.APP_ENVIRONMENT as Environment | undefined

    if (!appEnvironment) {
        if (process.env.CI) {
            throw new Error('APP_ENVIRONMENT is not defined')
        }

        return {}
    }

    if (!stages[appEnvironment]) {
        throw new Error(`Invalid value APP_ENVIRONMENT=${appEnvironment}`)
    }

    return stages[appEnvironment]
}

export default merge(defaults, select())
