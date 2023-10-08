import React, {useState, useMemo, useCallback} from 'react'
import {StyleSheet, View} from 'react-native'
import {Picker} from '@react-native-picker/picker'

type Props = {
  onValueChange: (value: number) => void
  locale?: 'en' | 'de'
  initialValue?: number
}

const TRANSLATIONS = {
  en: {
    label: 'Number of workouts per week:',
    onceAWeek: 'Once a week',
    timesAWeek: 'times a week',
  },
  de: {
    label: 'Anzahl der Workouts pro Woche:',
    onceAWeek: 'Einmal pro Woche',
    timesAWeek: 'Mal pro Woche',
  },
}

const MAX = 7

export const WorkoutAmountPicker: React.FC<Props> = ({
  initialValue,
  onValueChange,
  locale = 'en',
}) => {
  const [value, setValue] = useState(initialValue)

  const {onceAWeek, timesAWeek} = TRANSLATIONS[locale]

  const getValueLabel = useCallback(
    (val: number) => {
      if (val === 1) {
        return onceAWeek
      }
      return `${val} ${timesAWeek}`
    },
    [onceAWeek, timesAWeek],
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
