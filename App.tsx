import {NavigationContainer} from '@react-navigation/native'
import {RootNavigator} from './src/navigation/RootNavigator'
import {StatusBar} from 'expo-status-bar'
import {LocalizationProvider} from './localization'

export default function App() {
  return (
    <LocalizationProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <RootNavigator />
      </NavigationContainer>
    </LocalizationProvider>
  )
}
