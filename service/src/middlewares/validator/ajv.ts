import Ajv from 'ajv'

export const ajv = new Ajv({
    allErrors: true,
    removeAdditional: false,
    verbose: true,
    format: 'full',
    useDefaults: true,
    meta: true,
    coerceTypes: true,
    validateSchema: true,
    inlineRefs: true,
    missingRefs: true,
    uniqueItems: true,
    unicode: true,
    jsonPointers: false,
    messages: true,
    extendRefs: 'fail',
    $data: true
})
