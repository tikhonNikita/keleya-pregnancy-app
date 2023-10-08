import {useCallback, useState} from 'react'
import {useLocalization} from '../../../localization'

const isValidPassword = (password: string) => {
  const regex = /^(?=.*[!@#$%^&*]).{6,}$/
  return regex.test(password)
}

type Props = {
  withStrengthValidation?: boolean
}

type UsePasswordInput = {
  passwordInputValue: string
  passwordValidationError: string
  handlePasswordChange: (value: string) => void
  getPasswordIfValid: () => string | null
}

export const usePasswordInput = ({
  withStrengthValidation = false,
}: Props = {}): UsePasswordInput => {
  const {i18n} = useLocalization()
  const [passwordInputValue, setPasswordInputValue] = useState('')

  const [passwordValidationError, setPasswordValidationError] = useState('')

  const handlePasswordChange = useCallback(
    (text: string) => {
      if (passwordValidationError !== '') {
        setPasswordValidationError('')
      }
      setPasswordInputValue(text)
    },
    [passwordValidationError],
  )

  const getPasswordIfValid = useCallback(() => {
    if (passwordInputValue === '') {
      setPasswordValidationError(i18n.t('passwordRequired'))
      return null
    } else if (withStrengthValidation && !isValidPassword(passwordInputValue)) {
      setPasswordValidationError(i18n.t('passwordStrength'))
      return null
    } else {
      setPasswordValidationError('')
      return passwordInputValue
    }
  }, [i18n, passwordInputValue, withStrengthValidation])

  return {
    passwordInputValue,
    passwordValidationError,
    handlePasswordChange,
    getPasswordIfValid,
  }
}
