import React, {useState, useMemo, useCallback} from 'react'
import {StyleSheet, View} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import {useLocalization} from '../../../localization'

type Props = {
  onValueChange: (value: number) => void
  initialValue?: number
}

const MAX = 7

export const WorkoutAmountPicker: React.FC<Props> = ({
  initialValue,
  onValueChange,
}) => {
  const {i18n} = useLocalization()
  const [value, setValue] = useState(initialValue)

  const getValueLabel = useCallback(
    (val: number) => {
      if (val === 1) {
        return i18n.t('once')
      }
      return i18n.t('nTimes', {count: val})
    },
    [i18n],
  )

  const items = useMemo(
    () =>
      Array.from({length: MAX}, (_, i) => (
        <Picker.Item key={i} label={getValueLabel(i + 1)} value={i + 1} />
      )),
    [getValueLabel],
  )

  const handleChange = (newValue: number) => {
    setValue(newValue)
    onValueChange(newValue)
  }

  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        selectedValue={value}
        onValueChange={handleChange}>
        {items}
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '80%',
  },
  picker: {
    width: '100%',
  },
})
