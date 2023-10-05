import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {colors} from '../../theme'

type PressableTextProps = {
  onPress: () => void
  text: string
  color?: string
}

export const PressableText: React.FC<PressableTextProps> = ({
  onPress,
  text,
  color,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <Text style={[styles.text, {color: color ?? colors.WARM_GREY}]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
})
