import React, {useMemo} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {CheckboxWithText} from '../CheckboxWithText'
import {LinkText} from '../LinkText'
import {useLocalization} from '../../../localization'

type Props = {
  termsAccepted: boolean
  privacyPolicyAccepted: boolean
  onTermsChange: (termsAccepted: boolean) => void
  onPolicyChange: (privacyPolicyAccepted: boolean) => void
}

const noop = () => {}

const _AgreementForm: React.FC<Props> = ({
  termsAccepted,
  privacyPolicyAccepted,
  onTermsChange,
  onPolicyChange,
}) => {
  const {i18n} = useLocalization()
  const PrivacyPolicyLabel = useMemo(
    () => (
      <View style={styles.checkboxLabel}>
        <Text>
          {i18n.t('iVeRead')}{' '}
          <LinkText onPress={noop}>{i18n.t('privacyPolicy')}</LinkText>
        </Text>
      </View>
    ),
    [i18n],
  )

  const TermsAndConditionsLabel = useMemo(
    () => (
      <View style={[styles.checkboxLabel]}>
        <Text style={styles.text}>
          {i18n.t('iAccept')}
          <LinkText onPress={noop}>{i18n.t('term')} </LinkText>
          {i18n.t('and')} <LinkText onPress={noop}>{i18n.t('advice')}</LinkText>
        </Text>
      </View>
    ),
    [i18n],
  )

  return (
    <View style={styles.container}>
      <CheckboxWithText
        label={PrivacyPolicyLabel}
        checked={privacyPolicyAccepted}
        onChange={onPolicyChange}
      />
      <CheckboxWithText
        label={TermsAndConditionsLabel}
        checked={termsAccepted}
        onChange={onTermsChange}
        customStyle={styles.termsAndConditions}
      />
    </View>
  )
}

export const AgreementForm = React.memo(_AgreementForm)

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '80%',
  },
  text: {
    fontSize: 14,
  },
  checkboxLabel: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  submitButton: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  termsAndConditions: {
    marginTop: 10,
    alignItems: 'flex-start',
  },
})
