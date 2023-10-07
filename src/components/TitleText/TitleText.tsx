import React from 'react'
import {StyleSheet, Text, TextProps} from 'react-native'
import {colors} from '../../theme'

type Props = TextProps & {
  text: string
}

export const TitleText: React.FC<Props> = ({text, style, ...props}) => {
  return (
    <Text style={[styles.title, style]} {...props}>
      {text}
    </Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: colors.GREYISH_BROWN,
  },
})
