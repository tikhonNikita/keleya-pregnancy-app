import React, {useState} from 'react'
import {StyleSheet, View, ImageBackground} from 'react-native'
import {NavigationProp, useNavigation} from '@react-navigation/native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

import {Button, TitleText, WorkoutAmountPicker} from '../../components'
import {useOnboarding} from '../../state'
import {RootStackParamList} from '../../navigation/RootNavigator'
import {colors} from '../../theme'
import {useBottomPadding} from '../../utils'

type WorkoutsScreenNavigationProp = NavigationProp<
  RootStackParamList,
  'WorkoutsScreen'
>

const image = require('../../../assets/workout-goal-background-image.jpg')

const TOP_OFFSET = 50

const title = 'How many times a week do\n you want to be active?'
const continueText = 'Continue'

const DEFAULT_NUMBER_OF_WORKOUTS = 3

export const WorkoutsScreen: React.FC = () => {
  const navigation = useNavigation<WorkoutsScreenNavigationProp>()
  const [numberOfWorkouts, setNumberOfWorkouts] = useState(
    DEFAULT_NUMBER_OF_WORKOUTS,
  )

  const paddingBottom = useBottomPadding()
  const {top} = useSafeAreaInsets()

  const {setWorkoutsPerWeek} = useOnboarding()

  const onNextPress = () => {
    setWorkoutsPerWeek(numberOfWorkouts)
    navigation.navigate('NotificationsScreen')
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} resizeMode="cover">
        <TitleText
          text={title}
          style={[styles.title, {marginTop: top + TOP_OFFSET}]}
        />
      </ImageBackground>
      <View style={styles.form}>
        <WorkoutAmountPicker
          initialValue={DEFAULT_NUMBER_OF_WORKOUTS}
          onValueChange={setNumberOfWorkouts}
        />
      </View>
      <Button
        style={{paddingBottom: paddingBottom}}
        title={continueText}
        onPress={onNextPress}
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
    justifyContent: 'center',

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
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})
