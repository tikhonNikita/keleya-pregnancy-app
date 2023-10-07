// React Native stack navigator with one screen

import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {InitialScreen} from '../screens'

const Stack = createNativeStackNavigator()

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
    </Stack.Navigator>
  )
}
