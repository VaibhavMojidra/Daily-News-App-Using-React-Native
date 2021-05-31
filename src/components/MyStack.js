import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import MainScreen from '../screens/MainScreen';
import MyWebView from '../screens/MyWebView';
import SavedScreen from '../screens/SavedScreen';

const Stack = createStackNavigator();


const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MyWebView" component={MyWebView} options={{ headerShown: false }} />
      <Stack.Screen name="SavedScreen" component={SavedScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default MyStack
