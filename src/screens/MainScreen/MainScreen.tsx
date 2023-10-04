import {StatusBar} from 'expo-status-bar'
import {StyleSheet, View} from 'react-native'

import {
  Button,
  EmailInput,
  PasswordInput,
  usePasswordInput,
  useEmailInput,
  AgreementForm,
  useAgreementForm,
} from '../../components'

export const MainScreen = () => {
  const {
    emailValidationError,
    handleInputChange,
    getEmailIfValid,
    emailInputValue,
  } = useEmailInput()

  const {
    passwordInputValue,
    passwordValidationError,
    handlePasswordChange,
    getPasswordIfValid,
  } = usePasswordInput()

  const {
    termsAccepted,
    privacyPolicyAccepted,
    setPrivacyPolicyAccepted,
    setTermsAccepted,
    agreementAccepted,
  } = useAgreementForm()

  const onPress = () => {
    const email = getEmailIfValid()
    const password = getPasswordIfValid()
    if (email && password) {
      console.log('VALID', email)
      console.log('VALID_Password', password)
    } else {
      console.log('INVALID')
    }
  }

  const buttonIsDisabled =
    emailInputValue.length < 3 || !passwordInputValue || !agreementAccepted

  return (
    <View style={styles.container}>
      <EmailInput
        error={emailValidationError}
        onChangeText={handleInputChange}
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

      <Button title="Log in" onPress={onPress} disabled={buttonIsDisabled} />
      <StatusBar style="auto" />
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
