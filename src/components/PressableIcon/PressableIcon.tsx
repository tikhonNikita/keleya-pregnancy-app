import React from 'react'
import {TouchableOpacity, ViewStyle} from 'react-native'
import {AntDesign} from '@expo/vector-icons'

type Props = {
  name: React.ComponentProps<typeof AntDesign>['name']
  size?: number
  color?: string
  onPress: () => void
  style?: ViewStyle
}

export const PressableIcon: React.FC<Props> = ({
  name,
  size = 24,
  color = 'black',
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style} activeOpacity={0.5}>
      <AntDesign name={name} size={size} color={color} />
    </TouchableOpacity>
  )
}
