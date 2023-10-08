import React from 'react'
import {
  StyleSheet,
  View,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native'
import {NavigationProp, useNavigation} from '@react-navigation/native'
import {LinearGradient} from 'expo-linear-gradient'

import {Button, NameInput, TitleText, useNameInput} from '../../components'
import {useOnboarding} from '../../state'
import {RootStackParamList} from '../../navigation/RootNavigator'
import {colors} from '../../theme'
import {useBottomPadding} from '../../utils'

type NameScreenNavigationProp = NavigationProp<RootStackParamList, 'NameScreen'>

const title =
  "It's great that you're here! First things first, what should we\n call you?"

const continueText = 'Continue'

const image = require('../../../assets/couch_smile.jpg')

const gradient = ['rgba(233,228,229,1)', colors.WHITE]

export const NameScreen: React.FC = () => {
  const navigation = useNavigation<NameScreenNavigationProp>()

  const paddingBottom = useBottomPadding()

  const {setName} = useOnboarding()

  const {
    nameInputValue,
    nameValidationError,
    handleNameChange,
    getNameIfValid,
  } = useNameInput()

  const onContinuePress = () => {
    const name = getNameIfValid()
    if (name) {
      setName(name)
      navigation.navigate('DueDateScreen')
    }
  }

  const isDisabled = nameInputValue.length < 2

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.imageBackground}>
        <LinearGradient colors={gradient} style={styles.gradientStyle} />
      </ImageBackground>

      <KeyboardAvoidingView style={styles.inputForm} behavior="padding">
        <TitleText text={title} style={styles.title} />
        <NameInput onChangeText={handleNameChange} />
      </KeyboardAvoidingView>

      <Button
        style={{paddingBottom: paddingBottom}}
        disabled={isDisabled}
        title={continueText}
        onPress={onContinuePress}
        errorMessage={nameValidationError}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
  },
  inputForm: {
    flex: 1.9,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 20,
  },
  title: {
    marginTop: 30,
    textAlign: 'center',
    opacity: 0.8,
    width: '80%',
  },
  imageBackground: {
    flex: 3,
    width: '100%',
  },
  gradientStyle: {
    zIndex: 1,
    position: 'absolute',
    bottom: -8,
    width: '100%',
    height: 10,
  },
})
