import {StyleSheet, View} from 'react-native'

import {WorkoutAmountPicker} from '../../components'

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <WorkoutAmountPicker onValueChange={(val) => console.log('value', val)} />
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
