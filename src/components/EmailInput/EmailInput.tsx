import React, {forwardRef} from 'react'
import {TextInput, TextInputProps} from 'react-native'

import {BaseTextInput} from '../BaseTextInput'

type Props = TextInputProps & {
  error?: string
}

export const EmailInput = forwardRef<TextInput, Props>((props, ref) => {
  const {error, ...rest} = props

  return (
    <BaseTextInput
      ref={ref}
      placeholder="example@gmail.com"
      keyboardType="email-address"
      autoCapitalize="none"
      inputMode="email"
      autoCorrect={false}
      errorMessage={error}
      {...rest}
    />
  )
})
