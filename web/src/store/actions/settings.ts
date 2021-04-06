import { Action } from 'redux'

export enum SettingsActionType {
    CHANGE_LOCALE = '@@settings/CHANGE_LOCALE',
}

interface ChangeLocaleProps {
    readonly locale: string
}

type ChangeLocaleAction = Action<typeof SettingsActionType.CHANGE_LOCALE> & ChangeLocaleProps

export const changeLanguage = (locale: string): ChangeLocaleAction => ({
    type: SettingsActionType.CHANGE_LOCALE,
    locale
})

export type SettingsAction = ChangeLocaleAction
