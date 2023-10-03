import {StatusBar} from 'expo-status-bar'
import {StyleSheet, View} from 'react-native'

import {Button, EmailInput, useUncontrolledEmailInput} from '../../components'
import {AntDesign} from '@expo/vector-icons'

export const MainScreen = () => {
  const {emailValidationError, handleInputChange, getEmailIfValid} =
    useUncontrolledEmailInput()

  const onPress = () => {
    const email = getEmailIfValid()
    if (email) {
      console.log('VALID', email)
    } else {
      console.log('INVALID')
    }
  }

  return (
    <View style={styles.container}>
      <EmailInput
        error={emailValidationError}
        onChangeText={handleInputChange}
      />
      <AntDesign name="eye" size={24} color="black" />
      <AntDesign name="eyeo" size={24} color="black" />
      <Button title="Log in" onPress={onPress} />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
