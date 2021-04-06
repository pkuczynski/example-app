export enum Locales {
    /* eslint-disable @typescript-eslint/naming-convention */
    'en-GB' = 'English',
    'de-DE' = 'Deutsch'
    /* eslint-enable @typescript-eslint/naming-convention */
}

export const locales = Object.keys(Locales)

export const defaultLanguage = 'en'

export const defaultLocale = locales.find(l => l.startsWith(defaultLanguage)) as string
