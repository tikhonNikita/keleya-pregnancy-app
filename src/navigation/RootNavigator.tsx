import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {InitialScreen, SignUpScreen} from '../screens'
import {OnboardingProvider} from '../state'
import {BackButton} from './BackButton'
import {NameScreen} from './Onboarding'

export type RootStackParamList = {
  InitialScreen: undefined
  SignUpScreen: undefined
  NameScreen: undefined
  DueDateScreen: undefined
  WorkoutsScreen: undefined
  NotificationsScreen: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator = () => {
  return (
    <OnboardingProvider>
      <Stack.Navigator initialRouteName="NameScreen">
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
        <Stack.Screen
          name="NameScreen"
          component={NameScreen}
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
