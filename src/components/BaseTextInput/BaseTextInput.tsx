import React, {forwardRef} from 'react'
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  View,
  Text,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native'

import {colors} from '../../theme'

type Props = TextInputProps & {
  errorMessage?: string
  extraInputStyle?: TextInputProps['style']
}

export const BaseTextInput = forwardRef<TextInput, Props>(
  ({errorMessage, extraInputStyle, onFocus, onBlur, ...props}, ref) => {
    const [focused, setFocused] = React.useState(false)

    const isValid = !errorMessage
    const borderColor = focused ? colors.GREYISH_BROWN : colors.WARM_GREY
    const borderBottomColor = isValid ? borderColor : colors.BUBBLE_GUM

    const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onFocus && onFocus(e)
      setFocused(true)
    }

    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onBlur && onBlur(e)
      setFocused(false)
    }

    return (
      <View style={styles.container}>
        <TextInput
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          style={[styles.input, {borderBottomColor}, extraInputStyle]}
          placeholderTextColor={colors.WARM_GREY}
          {...props}
        />
        {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      </View>
    )
  },
)

const styles = StyleSheet.create({
  container: {
    width: '80%',
  },
  input: {
    backgroundColor: colors.WHITE,
    borderBottomWidth: 1,
    borderBottomColor: colors.WARM_GREY,
    paddingLeft: 20,
    fontSize: 20,
    height: 45,
  },
  error: {
    paddingLeft: 20,
    paddingTop: 5,
    color: colors.BUBBLE_GUM,
    fontSize: 14,
  },
})
