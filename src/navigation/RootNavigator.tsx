import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {
  InitialScreen,
  SignUpScreen,
  NameScreen,
  DueDateScreen,
  WorkoutsScreen,
} from '../screens'
import {OnboardingProvider} from '../state'
import {BackButton} from './BackButton'

export type RootStackParamList = {
  InitialScreen: undefined
  SignUpScreen: undefined
  NameScreen: undefined
  DueDateScreen: undefined
  WorkoutsScreen: undefined
  NotificationsScreen: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const OnboardingOptions = {
  headerTransparent: true,
  headerLeft: BackButton,
  title: '',
}

export const RootNavigator = () => {
  return (
    <OnboardingProvider>
      <Stack.Navigator initialRouteName="WorkoutsScreen">
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
          options={OnboardingOptions}
        />
        <Stack.Screen
          name="NameScreen"
          component={NameScreen}
          options={OnboardingOptions}
        />
        <Stack.Screen
          name="DueDateScreen"
          component={DueDateScreen}
          options={OnboardingOptions}
        />
        <Stack.Screen
          name="WorkoutsScreen"
          component={WorkoutsScreen}
          options={OnboardingOptions}
        />
      </Stack.Navigator>
    </OnboardingProvider>
  )
}
