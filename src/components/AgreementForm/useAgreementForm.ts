import {useState} from 'react'

export const useAgreementForm = () => {
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false)

  const agreementAccepted = termsAccepted && privacyPolicyAccepted

  return {
    termsAccepted,
    privacyPolicyAccepted,
    setPrivacyPolicyAccepted,
    setTermsAccepted,
    agreementAccepted,
  }
}
