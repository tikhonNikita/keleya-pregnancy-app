import {useCallback, useState} from 'react'

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
      setEmailValidationError('Email is required')
      return null
    } else if (!isEmailValid(emailInputValue)) {
      setEmailValidationError('Invalid email format')
      return null
    } else {
      return emailInputValue
    }
  }, [emailInputValue])

  return {
    emailInputValue,
    emailValidationError,
    handleEmailInputChange,
    getEmailIfValid,
  }
}
