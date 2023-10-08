import {useSafeAreaInsets} from 'react-native-safe-area-context'

export const useBottomPadding = () => {
  const {bottom} = useSafeAreaInsets()
  return bottom > 0 ? bottom : 20
}
