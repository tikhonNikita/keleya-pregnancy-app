import React from 'react'
import {StyleSheet, View} from 'react-native'
import {colors} from '../../theme'

type StepIndicatorProps = {
  numberOfSteps: number
  currentStep: number
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  numberOfSteps,
  currentStep,
}) => {
  const circles = Array.from({length: numberOfSteps}, (_, i) => {
    const circleStyle =
      i + 1 === currentStep ? styles.activeCircle : styles.inactiveCircle
    return <View key={i} style={[styles.circle, circleStyle]} />
  })

  return <View style={styles.container}>{circles}</View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeCircle: {
    backgroundColor: colors.PALE_TEAL,
  },
  inactiveCircle: {
    backgroundColor: colors.LIGHT_TEAL,
    opacity: 0.7,
  },
})
