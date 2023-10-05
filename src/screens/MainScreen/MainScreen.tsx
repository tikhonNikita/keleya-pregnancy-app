import {StyleSheet, View} from 'react-native'

import {StepIndicator} from '../../components'

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <StepIndicator numberOfSteps={3} currentStep={1} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
