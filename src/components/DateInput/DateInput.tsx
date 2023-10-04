import React, {useState} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

import {colors} from '../../theme'

interface Props {
  selectedDate: Date | undefined
  onSelectDate: (date: Date) => void
}

export const DateInput: React.FC<Props> = ({selectedDate, onSelectDate}) => {
  const [showPicker, setShowPicker] = useState(false)

  const handlePress = () => {
    setShowPicker(true)
  }

  const handleDateChange = (newDate: Date | undefined) => {
    setShowPicker(false)
    if (newDate) {
      onSelectDate(newDate)
    }
  }

  const handleCancel = () => {
    setShowPicker(false)
  }

  const inputText =
    selectedDate?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }) ?? 'Pick a date'

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>{inputText}</Text>
      </View>
      <DateTimePickerModal
        date={selectedDate}
        minimumDate={new Date()}
        isVisible={showPicker}
        mode="date"
        display="spinner"
        onConfirm={handleDateChange}
        onCancel={handleCancel}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.LIGHT_GREY,
    borderRadius: 5,
    padding: 10,
  },
  inputText: {
    fontSize: 18,
    color: colors.BLUE,
  },
})
