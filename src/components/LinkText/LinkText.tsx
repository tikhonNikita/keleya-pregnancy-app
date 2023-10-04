import React, {useState} from 'react'
import {Text, StyleSheet} from 'react-native'
import {colors} from '../../theme'

type Props = {
  onPress: () => void
  children: React.ReactNode
}

export const LinkText: React.FC<Props> = ({onPress, children}) => {
  const [isPressed, setIsPressed] = useState(false)

  const handlePressIn = () => {
    setIsPressed(true)
  }

  const handlePressOut = () => {
    setIsPressed(false)
  }

  const textStyles = [styles.text, isPressed ? styles.highlightedText : null]

  return (
    <Text
      suppressHighlighting
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={textStyles}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    color: colors.GREYISH_BROWN,
    fontWeight: 'bold',
  },
  highlightedText: {
    backgroundColor: colors.LIGHT_TEAL,
  },
})
