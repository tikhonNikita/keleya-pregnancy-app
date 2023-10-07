import {NavigationContainer} from '@react-navigation/native'
import {RootNavigator} from './src/navigation/RootNavigator'
import {StatusBar} from 'expo-status-bar'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootNavigator />
    </NavigationContainer>
  )
}
