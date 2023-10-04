import React, {forwardRef, useState} from 'react'
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native'
import {PressableIcon} from '../PressableIcon'
import {BaseTextInput} from '../BaseTextInput'
import {colors} from '../../theme'

type Props = TextInputProps & {
  error?: string
}

const _PasswordInput = forwardRef<TextInput, Props>((props, ref) => {
  const {error, ...rest} = props

  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <View style={styles.container}>
      <BaseTextInput
        ref={ref}
        errorMessage={error}
        placeholder="Enter a password"
        secureTextEntry={!showPassword}
        {...rest}
      />
      <PressableIcon
        style={styles.icon}
        name={showPassword ? 'eyeo' : 'eye'}
        size={24}
        color={colors.GREYISH_BROWN}
        onPress={toggleShowPassword}
      />
    </View>
  )
})

export const PasswordInput = React.memo(_PasswordInput)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 50,
  },
})
