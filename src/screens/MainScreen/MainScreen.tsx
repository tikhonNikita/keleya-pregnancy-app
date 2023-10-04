import {StyleSheet, View} from 'react-native'

import {DateInput} from '../../components'
import {useState} from 'react'

export const MainScreen = () => {
  const [selectedDate, handleSelectDate] = useState<Date | undefined>()

  console.log('DATE was selected', selectedDate)

  return (
    <View style={styles.container}>
      <DateInput selectedDate={selectedDate} onSelectDate={handleSelectDate} />
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
