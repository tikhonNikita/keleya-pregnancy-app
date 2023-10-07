import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {InitialScreen, SignUpScreen} from '../screens'

export type RootStackParamList = {
  InitialScreen: undefined
  SignUpScreen: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator = () => {
  return (
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
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}
