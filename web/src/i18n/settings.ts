export enum Locales {
    'en-GB' = 'English',
    'de-DE' = 'Deutsch'
}

export const locales = Object.keys(Locales)

export const defaultLanguage = 'en'

export const defaultLocale = locales.find(l => l.startsWith(defaultLanguage)) as string
