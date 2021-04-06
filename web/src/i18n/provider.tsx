import React, { useEffect, useState } from 'react'
import { IntlProvider } from 'react-intl'
import { useSelector } from 'react-redux'

import { Store } from '../store'

import { loadMessages } from './messages'
import { defaultLocale } from './settings'

export const Provider: React.FC = ({ children }) => {
    const [msg, setMessages] = useState(null as Record<string, string> | null)
    const locale = useSelector((state: Store) => state.settings.locale)

    useEffect(() => {
        (async (): Promise<void> => {
            const m = await loadMessages(locale) as Record<string, string>

            setMessages(m)
        })()
    }, [locale])

    if (!msg) {
        return null
    }

    return (
        <IntlProvider locale={locale} messages={msg || {}} defaultLocale={defaultLocale}>
            {children}
        </IntlProvider>
    )
}
