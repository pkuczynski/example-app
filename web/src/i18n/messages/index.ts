export const loadMessages = (locale: string): Promise<Record<string, unknown>> => {
    switch (locale) {
        case 'de':
        case 'de-DE':
            return import(/* webpackChunkName: "messages-de" */ './de.json')

        default: return import(/* webpackChunkName: "messages-en" */ './en.json')
    }
}
