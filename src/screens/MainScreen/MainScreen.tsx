import {StyleSheet, View} from 'react-native'

import {TitleText} from '../../components'

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <TitleText text="Welcome to the Keleya Challenge!" />
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
