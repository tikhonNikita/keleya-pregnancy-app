import React, {useState} from 'react'
import {StyleSheet, View, Image} from 'react-native'
import {NavigationProp, useNavigation} from '@react-navigation/native'

import {colors} from '../../theme'
import {
  Button,
  EmailInput,
  PasswordInput,
  PressableText,
  TitleText,
  useEmailInput,
  usePasswordInput,
} from '../../components'
import {RootStackParamList} from '../../navigation/RootNavigator'
import {useBottomPadding} from '../../utils'
import {signIn} from '../../api'
import {useLocalization} from '../../../localization'

const backgroundImage = require('../../../assets/authentication-background-image.jpg')

type SignInScreenNavigationProp = NavigationProp<
  RootStackParamList,
  'SignInScreen'
>
const noop = () => {}

export const SignInScreen: React.FC = () => {
  const {i18n} = useLocalization()
  const navigation = useNavigation<SignInScreenNavigationProp>()
  const paddingBottom = useBottomPadding()
  const [loading, setLoading] = useState(false)

  const {
    emailInputValue,
    emailValidationError,
    handleEmailInputChange,
    getEmailIfValid,
  } = useEmailInput()

  const {
    passwordInputValue,
    passwordValidationError,
    handlePasswordChange,
    getPasswordIfValid,
  } = usePasswordInput()

  const onSignIn = async () => {
    const email = getEmailIfValid()
    const password = getPasswordIfValid()

    if (email && password) {
      setLoading(true)
      try {
        await signIn(email, password)
        navigation.reset({
          index: 0,
          routes: [{name: 'NotificationsScreen'}],
        })
      } catch (e) {
        console.log('error', e)
      } finally {
        setLoading(false)
      }
    }
  }

  const inputsAreEmpty = emailInputValue === '' || passwordInputValue === ''
  const inputsAreValid =
    emailValidationError === '' && passwordValidationError === ''

  const buttonIsDisabled = inputsAreEmpty || !inputsAreValid

  return (
    <View style={[styles.container, {paddingBottom}]}>
      <Image source={backgroundImage} style={styles.image} />
      <View style={styles.inputForm}>
        <TitleText text={i18n.t('welcomeBack')} style={styles.title} />
        <EmailInput
          onChangeText={handleEmailInputChange}
          error={emailValidationError}
        />
        <PasswordInput
          onChangeText={handlePasswordChange}
          error={passwordValidationError}
        />
      </View>
      <View style={styles.buttons}>
        <PressableText text={i18n.t('forgotPassword')} onPress={noop} />
        <Button
          title={i18n.t('logIn')}
          onPress={onSignIn}
          disabled={buttonIsDisabled}
          loading={loading}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.WHITE,
  },
  inputForm: {
    flex: 1,
    gap: 15,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '-5%',
  },
  title: {
    textAlign: 'center',
    opacity: 0.7,
    marginBottom: 5,
  },
  buttons: {
    width: '100%',
    alignItems: 'center',
    gap: 20,
  },
  image: {
    flex: 1,
  },
})
