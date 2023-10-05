import {useCallback, useState} from 'react'

type UseNameInput = {
  nameInputValue: string
  nameValidationError: string
  handleNameChange: (value: string) => void
  getNameIfValid: () => string | null
}

const nameIsValid = (name: string): boolean => {
  const nameRegex = /^[\p{L}\d\s]+$/u
  return nameRegex.test(name)
}

export const useNameInput = (): UseNameInput => {
  const [nameInputValue, setNameInputValue] = useState('')
  const [nameValidationError, setNameValidationError] = useState('')

  const handleNameChange = useCallback(
    (value: string) => {
      if (nameValidationError !== '') {
        setNameValidationError('')
      }
      setNameInputValue(value)
    },
    [nameValidationError, setNameInputValue],
  )

  const getNameIfValid = (): string | null => {
    if (nameInputValue.trim().length === 0) {
      setNameValidationError('Name is required')
      return null
    } else if (!nameIsValid(nameInputValue)) {
      setNameValidationError('Invalid name format')
      return null
    } else {
      setNameValidationError('')
      return nameInputValue.trim()
    }
  }

  return {nameInputValue, nameValidationError, handleNameChange, getNameIfValid}
}
