import React from 'react'
import {StyleSheet, View, ImageBackground} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import {Button, PressableText, TitleText} from '../../components'
import {useOnboarding} from '../../state'
import {colors} from '../../theme'
import {useBottomPadding} from '../../utils'
import {useLocalization} from '../../../localization'

const image = require('../../../assets/notifications-background-image.jpg')

const TOP_OFFSET = 25

export const NotificationsScreen: React.FC = () => {
  const {i18n} = useLocalization()
  const paddingBottom = useBottomPadding()
  const {top} = useSafeAreaInsets()

  const {submitOnboardingData} = useOnboarding()

  const onAllowPress = () => {
    submitOnboardingData(true)
  }

  const onSkipPress = () => {
    submitOnboardingData(false)
  }

  return (
    <ImageBackground source={image} style={styles.container} resizeMode="cover">
      <View style={[styles.notification, {marginTop: top + TOP_OFFSET}]}>
        <MaterialCommunityIcons
          name={'bell-outline'}
          size={60}
          color={colors.GREYISH_BROWN}
          style={styles.icon}
        />
        <TitleText text={i18n.t('notificationsPrompt')} style={styles.title} />
      </View>
      <View style={styles.buttons}>
        <PressableText
          text={i18n.t('skip')}
          onPress={onSkipPress}
          color={colors.GREYISH_BROWN}
        />
        <Button
          style={{paddingBottom: paddingBottom}}
          title={i18n.t('allowNotifications')}
          onPress={onAllowPress}
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    opacity: 0.8,
  },
  notification: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  buttons: {
    gap: 30,
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    marginTop: 30,
    fontWeight: '400',
    textAlign: 'center',
    opacity: 0.8,
    width: '80%',
  },
})
