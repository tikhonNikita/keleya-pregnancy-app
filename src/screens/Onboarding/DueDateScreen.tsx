import React, {useState} from 'react'
import {StyleSheet, View, Image} from 'react-native'
import {NavigationProp, useNavigation} from '@react-navigation/native'

import {Button, TitleText, DateInput} from '../../components'
import {useOnboarding} from '../../state'
import {RootStackParamList} from '../../navigation/RootNavigator'
import {colors} from '../../theme'
import {useBottomPadding} from '../../utils'
import {useLocalization} from '../../../localization'

type DueDateScreenNavigationProp = NavigationProp<
  RootStackParamList,
  'DueDateScreen'
>

const image = require('../../../assets/due-date-background-image.jpg')

export const DueDateScreen: React.FC = () => {
  const {i18n} = useLocalization()
  const navigation = useNavigation<DueDateScreenNavigationProp>()
  const [date, setDate] = useState<Date | undefined>()

  const paddingBottom = useBottomPadding()

  const {setDueDate, name} = useOnboarding()

  const handleNextPress = () => {
    if (date) {
      setDueDate(date)
      navigation.navigate('WorkoutsScreen')
    }
  }

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.form}>
        <TitleText text={i18n.t('datePrompt', {name})} style={styles.title} />
        <DateInput selectedDate={date} onSelectDate={setDate} />
      </View>
      <Button
        disabled={!date}
        style={{paddingBottom: paddingBottom}}
        title={i18n.t('continue')}
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
