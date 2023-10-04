import React from 'react'
import {StyleSheet, View, ViewStyle} from 'react-native'
import Checkbox from 'expo-checkbox'
import {colors} from '../../theme'

type Props = {
  label: React.ReactNode
  checked: boolean
  onChange: (checked: boolean) => void
  customStyle?: ViewStyle
}

const checkboxHitSlop = {top: 15, bottom: 15, left: 15, right: 15}

export const CheckboxWithText: React.FC<Props> = ({
  label,
  checked,
  onChange,
  customStyle,
}) => {
  return (
    <View style={[styles.container, customStyle]}>
      <Checkbox
        hitSlop={checkboxHitSlop}
        style={styles.checkbox}
        value={checked}
        onValueChange={onChange}
        color={colors.LIGHT_TEAL}
      />
      <View style={styles.label}>{label}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  checkbox: {
    borderRadius: 3,
    borderWidth: 1,
    width: 20,
    height: 20,
  },
  label: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    marginLeft: 10,
  },
})
