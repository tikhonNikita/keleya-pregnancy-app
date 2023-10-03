// react native button component
import React from 'react'
import {TouchableOpacity, StyleSheet, Text} from 'react-native'
import {colors} from '../../theme'

type Props = {
  title: string
  onPress: () => void
  disabled?: boolean
}

const _Button: React.FC<Props> = ({title, onPress, disabled}) => {
  const backgroundColor = disabled ? colors.WARM_GREY : colors.PALE_TEAL
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor}]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export const Button = React.memo(_Button)

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.PALE_TEAL,
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.WHITE,
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
  },
})

export default Button
