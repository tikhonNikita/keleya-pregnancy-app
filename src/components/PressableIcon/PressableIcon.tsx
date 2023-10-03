import React from 'react'
import {Pressable, StyleSheet} from 'react-native'
import {AntDesign} from '@expo/vector-icons'

type Props = {
  // type of name prop is AntDesign
  name: React.ComponentProps<typeof AntDesign>['name']
  size?: number
  color?: string
  onPress: () => void
}

export const PressableIcon: React.FC<Props> = ({
  name,
  size = 24,
  color = 'black',
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <AntDesign name={name} size={size} color={color} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
