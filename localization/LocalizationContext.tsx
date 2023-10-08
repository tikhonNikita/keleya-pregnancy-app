import React, {PropsWithChildren, createContext, useContext} from 'react'
import {getLocales} from 'expo-localization'
import {I18n} from 'i18n-js'

import {translations} from './translations'

const initI18n = () => {
  const locale = getLocales()[0]
  const i18n = new I18n(translations)
  i18n.locale = locale.languageCode
  return i18n
}

interface LocalizationContextValue {
  i18n: I18n
}

const LocalizationContext = createContext<LocalizationContextValue>({
  i18n: initI18n(),
})

export const LocalizationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const i18n = initI18n()

  return (
    <LocalizationContext.Provider value={{i18n}}>
      {children}
    </LocalizationContext.Provider>
  )
}

export const useLocalization = () => useContext(LocalizationContext)
