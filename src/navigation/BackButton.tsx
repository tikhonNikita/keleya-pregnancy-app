import {HeaderBackButtonProps} from '@react-navigation/native-stack/lib/typescript/src/types'
import {PressableIcon} from '../components/PressableIcon'
import {useNavigation} from '@react-navigation/native'

export const BackButton = (props: HeaderBackButtonProps) => {
  const navigation = useNavigation()
  if (!props.canGoBack) {
    return null
  }

  const onGoBack = () => {
    if (props.canGoBack) {
      navigation.goBack()
    }
  }

  return <PressableIcon name={'arrowleft'} onPress={onGoBack} />
}
