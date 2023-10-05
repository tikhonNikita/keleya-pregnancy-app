import {StyleSheet, View} from 'react-native'

import {Button, NameInput, useNameInput} from '../../components'

export const MainScreen = () => {
  const {
    nameInputValue,
    nameValidationError,
    handleNameChange,
    getNameIfValid,
  } = useNameInput()

  const onPress = () => {
    const inputValue = getNameIfValid()
    if (inputValue) {
      console.log(inputValue + ' was submitted')
    }
  }

  return (
    <View style={styles.container}>
      <NameInput onChangeText={handleNameChange} />
      <Button
        errorMessage={nameValidationError}
        onPress={onPress}
        title="Submit"
        disabled={nameInputValue.length < 2}
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
