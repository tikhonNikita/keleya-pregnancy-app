// react native button component
import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native'
import {colors} from '../../theme'

type Props = {
  title: string
  onPress: () => void
  disabled?: boolean
  errorMessage?: string
  loading?: boolean
}

const _Button: React.FC<Props> = ({
  title,
  onPress,
  disabled,
  errorMessage,
  loading = false,
}) => {
  const buttonDisabled = disabled || !!errorMessage
  const backgroundColor = buttonDisabled ? colors.WARM_GREY : colors.PALE_TEAL
  const margin = errorMessage ? 10 : 0

  return (
    <View style={styles.buttonContainer}>
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.button, {backgroundColor, margin}]}
        onPress={onPress}
        disabled={buttonDisabled || loading}>
        {loading ? (
          <ActivityIndicator size={'small'} color={colors.WHITE} />
        ) : (
          <Text style={styles.text}>{title}</Text>
        )}
      </TouchableOpacity>
    </View>
  )
}

export const Button = React.memo(_Button)

const styles = StyleSheet.create({
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: colors.PALE_TEAL,
    borderRadius: 8,
    padding: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: colors.WHITE,
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
  },
  error: {
    color: colors.BUBBLE_GUM,
    fontSize: 14,
  },
})

export default Button
