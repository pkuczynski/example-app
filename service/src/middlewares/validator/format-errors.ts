// import { AdditionalPropertiesParams, ErrorObject, FormatParams, RequiredParams } from 'ajv'
import { ErrorObject } from 'ajv'

interface Error {
    type: string
    field: string
    error: string
}

type FormatErrors = (scope: string, errors: ErrorObject[]) => (string | Error)[]

export const formatErrors: FormatErrors = (scope, errors) => errors.map((e) => {
    const dataPath = e.dataPath.replace(/\[\d+\]/g, (value: string) => value.replace(/\[/, '.').replace(/\]/, ''))
    const prefix = `${scope}${dataPath}`

    return `${prefix} ${e.message}`
    //
    //
    // switch (e.keyword) {
    //     case 'additionalProperties':
    //         return `${prefix} should not have additional property: \`${(e.params as AdditionalPropertiesParams).additionalProperty}\``
    //     case 'required':
    //         // return `${prefix}.${error.params.missingProperty} is a required property`;
    //         return {
    //             type: prefix,
    //             field: (e.params as RequiredParams).missingProperty,
    //             error: 'is missing'
    //         }
    //
    //     case 'format':
    //         return `${prefix} should match ${(e.params as FormatParams).format} format`
    //     case 'enum':
    //         return `${prefix} should be equal to one of: \`${e.schema.join('`, `')}\``
    //     case 'allOf':
    //     case 'anyOf':
    //     case 'oneOf':
    //     case 'pattern':
    //     case 'type':
    //     default:
    //         return `${prefix} ${e.message}`
    // }
})
