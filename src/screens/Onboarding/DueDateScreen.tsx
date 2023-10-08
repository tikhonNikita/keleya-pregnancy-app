import React, {useState} from 'react'
import {StyleSheet, View, Image} from 'react-native'
import {NavigationProp, useNavigation} from '@react-navigation/native'

import {Button, TitleText, DateInput} from '../../components'
import {useOnboarding} from '../../state'
import {RootStackParamList} from '../../navigation/RootNavigator'
import {colors} from '../../theme'
import {useBottomPadding} from '../../utils'

type NameScreenNavigationProp = NavigationProp<RootStackParamList, 'NameScreen'>

const image = require('../../../assets/due-date-background-image.jpg')

export const DueDateScreen: React.FC = () => {
  const navigation = useNavigation<NameScreenNavigationProp>()
  const [date, setDate] = useState<Date | undefined>()

  const paddingBottom = useBottomPadding()

  const {setDueDate, name} = useOnboarding()

  const handleNextPress = () => {
    if (date) {
      setDueDate(date)
      navigation.navigate('DueDateScreen')
    }
  }

  const title = `When is your baby due, ${name}?`

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.form}>
        <TitleText text={title} style={styles.title} />
        <DateInput selectedDate={date} onSelectDate={setDate} />
      </View>
      <Button
        disabled={!date}
        style={{paddingBottom: paddingBottom}}
        title="Continue"
        onPress={handleNextPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
  },
  form: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 40,
    marginTop: '-25%',
  },
  title: {
    marginTop: 30,
    textAlign: 'center',
    opacity: 0.8,
    width: '80%',
  },
  image: {
    width: '100%',
    flex: 2,
  },
})
