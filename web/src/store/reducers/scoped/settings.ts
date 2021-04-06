import { Reducer } from 'redux'

import * as browser from '../../../i18n/browser'
import { SettingsAction, SettingsActionType } from '../../actions/settings'
import { Scope } from '../../scope'
import storage from '../../storage'

export interface Settings {
    readonly locale: string
}

const initial: Settings = {
    ...storage.restore<Settings>(Scope.settings, { locale: browser.detectLocale() })
}

export const settings: Reducer<Settings, SettingsAction> = (state = initial, action) => {
    switch (action.type) {
        case SettingsActionType.CHANGE_LOCALE: {
            return storage.persist<Settings>(Scope.settings, {
                ...state,
                locale: action.locale
            })
        }

        default:
            return state
    }
}
