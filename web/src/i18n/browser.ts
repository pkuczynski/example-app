import { defaultLocale, locales } from './settings'

export const detectLocale = (): string => {
    const browserLocales = navigator.languages || [navigator.language || defaultLocale]
    const validLocales = browserLocales.map((l): string | undefined => {
        for (let i = 0; i < locales.length; i++) {
            if (l === locales[i] || locales[i].startsWith(l)) {
                return locales[i]
            }
        }

        return undefined
    }).filter(l => l) as string[]

    const [firstLocale = defaultLocale, ...otherLocales] = validLocales

    if (otherLocales) {
        return otherLocales.find(l => l.startsWith(firstLocale)) || firstLocale
    }

    return firstLocale
}
