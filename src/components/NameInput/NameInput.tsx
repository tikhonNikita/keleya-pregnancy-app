import React, {useCallback, useRef} from 'react'
import {StyleSheet, TextInput, TextInputProps} from 'react-native'
import {BaseTextInput} from '../BaseTextInput'
import {useLocalization} from '../../../localization'

type Props = TextInputProps & {
  onChangeText: (text: string) => void
}

const _NameInput: React.FC<Props> = ({onChangeText}) => {
  const {i18n} = useLocalization()
  const inputRef = React.useRef<TextInput>(null)
  const inputValue = useRef('')

  const handleInput = useCallback(
    (text: string) => {
      const inputText = text.trim()
      if (inputText.length > 0) {
        onChangeText(inputText)
      }
      inputValue.current = text
    },
    [onChangeText],
  )

  const onBlur = useCallback(() => {
    const trimmedInput = inputValue.current.trim()
    if (trimmedInput === '') {
      inputRef.current?.clear()
      inputValue.current = trimmedInput
    } else {
      inputValue.current = trimmedInput
      inputRef.current?.setNativeProps({
        text: trimmedInput,
      })
    }
  }, [])

  return (
    <BaseTextInput
      ref={inputRef}
      onBlur={onBlur}
      onChangeText={handleInput}
      placeholder={i18n.t('yourName')}
      textAlign="center"
      inputMode="text"
      extraInputStyle={styles.input}
    />
  )
}

export const NameInput = React.memo(_NameInput)

const styles = StyleSheet.create({
  input: {
    paddingLeft: 0,
  },
})
