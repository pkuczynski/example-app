// import { AdditionalPropertiesParams, ErrorObject, FormatParams, RequiredParams } from 'ajv'
import { ErrorObject } from 'ajv'

interface Error {
    type: string
    field: string
    error: string
}

type FormatErrors = (scope: string, errors: ErrorObject[]) => (string | Error)[]

export const formatErrors: FormatErrors = (scope, errors) => errors.map((e) => {
    const dataPath = e.dataPath
        .replace(/\[\d+\]/g, (value: string) => value
            .replace(/\[/, '.')
            .replace(/\]/, '')
        )
    const prefix = `${scope}${dataPath}`

    return `${prefix} ${e.message}`
})
