import {Image, ImageBackground, StyleSheet, View} from 'react-native'

import {useSafeAreaInsets} from 'react-native-safe-area-context'

import {colors} from '../../theme'
import {Button, PressableText, StepIndicator, TitleText} from '../../components'

const backgroundSource = require('../../../assets/first-intro-image.png')

const logoSource = require('../../../assets/keleya-logo.png')

const TOP_OFFSET = 50

const TITLE = 'For fit and relaxed pregnancy'
const LOGIN_TEXT = 'Or login'
const GET_STARTED_TEXT = 'Get Started'

export const InitialScreen = () => {
  const {top, bottom} = useSafeAreaInsets()

  const marginBottom = bottom > 0 ? bottom : 20

  return (
    <ImageBackground source={backgroundSource} style={styles.imageContainer}>
      <View style={[styles.logoContainer, {top: top + TOP_OFFSET}]}>
        <Image source={logoSource} style={styles.logo} />
        <TitleText text={TITLE} style={styles.logoText} />
      </View>

      <View style={[styles.actionsSection, {marginBottom}]}>
        <Button
          title={GET_STARTED_TEXT}
          onPress={() => {
            console.log('Get Started')
          }}
        />
        <PressableText
          text={LOGIN_TEXT}
          onPress={() => {
            console.log('Log in')
          }}
          color={colors.GREYISH_BROWN}
        />
        <StepIndicator numberOfSteps={3} currentStep={1} />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 3,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logoContainer: {
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 200,
    gap: 20,
  },
  logo: {
    width: 85,
    height: 110,
  },
  logoText: {
    textAlign: 'center',
    opacity: 0.9,
  },
  actionsSection: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 20,
  },
})
