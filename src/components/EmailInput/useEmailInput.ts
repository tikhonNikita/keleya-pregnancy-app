import {useCallback, useState} from 'react'
import {useLocalization} from '../../../localization'

const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

type UseEmailInput = {
  emailInputValue: string
  emailValidationError: string
  handleEmailInputChange: (value: string) => void
  getEmailIfValid: () => string | null
}

export const useEmailInput = (): UseEmailInput => {
  const {i18n} = useLocalization()
  const [emailInputValue, setEmailInputValue] = useState('')
  const [emailValidationError, setEmailValidationError] = useState('')

  const handleEmailInputChange = useCallback(
    (text: string) => {
      if (emailValidationError !== '') {
        setEmailValidationError('')
      }
      setEmailInputValue(text)
    },
    [emailValidationError],
  )

  const getEmailIfValid = useCallback(() => {
    if (emailInputValue === '') {
      setEmailValidationError(i18n.t('emailRequired'))
      return null
    } else if (!isEmailValid(emailInputValue)) {
      setEmailValidationError(i18n.t('invalidEmail'))
      return null
    } else {
      return emailInputValue
    }
  }, [emailInputValue, i18n])

  return {
    emailInputValue,
    emailValidationError,
    handleEmailInputChange,
    getEmailIfValid,
  }
}
