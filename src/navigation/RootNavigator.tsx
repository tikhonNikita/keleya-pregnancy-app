import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {InitialScreen, SignUpScreen} from '../screens'
import {OnboardingProvider} from '../state'
import {BackButton} from './BackButton'

export type RootStackParamList = {
  InitialScreen: undefined
  SignUpScreen: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator = () => {
  return (
    <OnboardingProvider>
      <Stack.Navigator initialRouteName="InitialScreen">
        <Stack.Screen
          name="InitialScreen"
          component={InitialScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            headerTransparent: true,
            headerLeft: BackButton,
            title: '',
          }}
        />
      </Stack.Navigator>
    </OnboardingProvider>
  )
}
