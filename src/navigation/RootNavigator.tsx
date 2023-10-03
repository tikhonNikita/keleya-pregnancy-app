// React Native stack navigator with one screen

import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {MainScreen} from '../screens'

const Stack = createNativeStackNavigator()

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={MainScreen} />
    </Stack.Navigator>
  )
}
