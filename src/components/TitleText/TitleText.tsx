import React from 'react'
import {StyleSheet, Text} from 'react-native'
import {colors} from '../../theme'

interface Props {
  text: string
}

export const TitleText: React.FC<Props> = ({text}) => {
  return <Text style={styles.title}>{text}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: colors.GREYISH_BROWN,
  },
})
