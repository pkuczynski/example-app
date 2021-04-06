import { detectLocale } from './browser'
import { defaultLocale, locales } from './settings'

describe('i18n/browser', () => {
    const unsupportedLocales = ['xy', 'xy-XY', 'ab-CD']

    it('should return first fully matched locale', () => {
        const browserLocales = [...unsupportedLocales, locales[1], locales[2]]

        jest.spyOn(navigator, 'languages', 'get').mockReturnValue(browserLocales)

        expect(detectLocale()).toBe(locales[1])
    })

    it('should return first locale matched by language', () => {
        const language = locales[1].slice(0, 2)
        const browserLocales = [...unsupportedLocales, language, locales[2]]

        jest.spyOn(navigator, 'languages', 'get').mockReturnValue(browserLocales)

        expect(detectLocale()).toBe(locales[1])
    })

    it('should return when possible more specific locale if matched by language', () => {
        const language = locales[1].slice(0, 2)
        const browserLocales = [...unsupportedLocales, language, locales[2], `${language}-XY`, locales[1]]

        jest.spyOn(navigator, 'languages', 'get').mockReturnValue(browserLocales)

        expect(detectLocale()).toBe(locales[1])
    })

    it('should return default locale when no matches found', () => {
        jest.spyOn(navigator, 'languages', 'get').mockReturnValue(unsupportedLocales)

        expect(detectLocale()).toBe(defaultLocale)
    })
})
