import {StyleSheet, View} from 'react-native'

import {useState} from 'react'
import {Button, NameInput} from '../../components'

export const MainScreen = () => {
  const [name, setName] = useState('')

  return (
    <View style={styles.container}>
      <NameInput onChangeText={setName} />
      <Button
        onPress={() => console.log(name + ' was submitted')}
        title="Submit"
        disabled={name.length < 2}
      />
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
