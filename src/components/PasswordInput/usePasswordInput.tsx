import {useCallback, useState} from 'react'

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
    console.log('VALIDATE PASSWORD', passwordInputValue)
    if (passwordInputValue === '') {
      setPasswordValidationError('Password is required')
      return null
    } else if (withStrengthValidation && !isValidPassword(passwordInputValue)) {
      setPasswordValidationError(
        'Password must be at least 6 characters with a special symbol',
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
