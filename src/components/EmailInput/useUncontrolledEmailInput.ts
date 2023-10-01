import { useRef, useState } from 'react';

const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const useUncontrolledEmailInput = () => {
  const emailRef = useRef('');
  const [emailValidationError, setEmailValidationError] = useState('');

  const handleInputChange = (text: string) => {
    if (emailValidationError !== '') {
      setEmailValidationError('');
    }
    emailRef.current = text;
  };

  const getEmailIfValid = () => {
    if (emailRef.current === '') {
      setEmailValidationError('Email is required');
      return null;
    } else if (!isEmailValid(emailRef.current)) {
      setEmailValidationError('Invalid email format');
      return null;
    } else {
      return emailRef.current;
    }
  };

  return {
    emailValidationError,
    handleInputChange,
    getEmailIfValid,
  };
};