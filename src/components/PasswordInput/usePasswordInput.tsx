import {useCallback, useState} from 'react'

const isValidPassword = (password: string) => {
  const regex = /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/
  return regex.test(password)
}

type Props = {
  withStrengthValidation?: boolean
}

export const usePasswordInput = ({
  withStrengthValidation = false,
}: Props = {}) => {
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
      setPasswordValidationError('Password is required')
      return null
    } else if (withStrengthValidation && !isValidPassword(passwordInputValue)) {
      setPasswordValidationError(
        'Password must be at least 6 characters and contain at least one special symbol',
      )
      return null
    } else {
      setPasswordValidationError('')
      return passwordInputValue
    }
  }, [passwordInputValue, withStrengthValidation])

  return {
    passwordInputValue,
    passwordValidationError,
    handlePasswordChange,
    getPasswordIfValid,
  }
}
