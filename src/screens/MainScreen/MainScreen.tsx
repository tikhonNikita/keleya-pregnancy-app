import {StyleSheet, View} from 'react-native'

export const MainScreen = () => {
  return <View style={styles.container} />
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
