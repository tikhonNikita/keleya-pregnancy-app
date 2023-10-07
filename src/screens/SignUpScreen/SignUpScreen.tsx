import React from 'react'
import {StyleSheet, View, Image} from 'react-native'
import {colors} from '../../theme'
import {
  AgreementForm,
  Button,
  EmailInput,
  PasswordInput,
  TitleText,
  useAgreementForm,
  useEmailInput,
  usePasswordInput,
} from '../../components'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {useOnboarding} from '../../state'
import {NavigationProp, useNavigation} from '@react-navigation/native'
import {RootStackParamList} from '../../navigation/RootNavigator'

const backgroundImage = require('../../../assets/authentication-background-image.jpg')

const title = 'Add your details to set up\n an account'

type SignUpScreenNavigationProp = NavigationProp<
  RootStackParamList,
  'SignUpScreen'
>

export const SignUpScreen: React.FC = () => {
  const {bottom} = useSafeAreaInsets()
  const navigation = useNavigation<SignUpScreenNavigationProp>()
  const paddingBottom = bottom > 0 ? bottom : 20

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
  } = usePasswordInput({withStrengthValidation: true})

  const {
    termsAccepted,
    privacyPolicyAccepted,
    agreementAccepted,
    setTermsAccepted,
    setPrivacyPolicyAccepted,
  } = useAgreementForm()

  const {setEmail, setPassword} = useOnboarding()

  const onSignUp = async () => {
    const email = getEmailIfValid()
    const password = getPasswordIfValid()

    if (email && password) {
      setEmail(email)
      setPassword(password)
      navigation.navigate('NameScreen')
    }
  }

  const inputsAreEmpty = emailInputValue === '' || passwordInputValue === ''
  const inputsAreValid =
    emailValidationError === '' && passwordValidationError === ''

  const buttonIsDisabled =
    inputsAreEmpty || !inputsAreValid || !agreementAccepted

  return (
    <View style={[styles.container, {paddingBottom}]}>
      <Image source={backgroundImage} style={styles.backgroundImage} />
      <View style={styles.inputForm}>
        <TitleText text={title} style={styles.title} />
        <EmailInput
          onChangeText={handleEmailInputChange}
          error={emailValidationError}
        />
        <PasswordInput
          onChangeText={handlePasswordChange}
          error={passwordValidationError}
        />

        <AgreementForm
          termsAccepted={termsAccepted}
          privacyPolicyAccepted={privacyPolicyAccepted}
          onTermsChange={setTermsAccepted}
          onPolicyChange={setPrivacyPolicyAccepted}
        />
      </View>
      <Button title="Sign Up" onPress={onSignUp} disabled={buttonIsDisabled} />
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
    flex: 1.2,
    gap: 10,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    opacity: 0.7,
    marginBottom: 5,
  },
  backgroundImage: {
    flex: 1,
  },
})
