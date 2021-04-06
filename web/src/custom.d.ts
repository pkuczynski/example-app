/* eslint-disable one-var */

declare module '*.scss' {
    const classes: { [key: string]: string }

    export default classes
}

declare module '*.svg' {
    const content: string

    export default content
}
