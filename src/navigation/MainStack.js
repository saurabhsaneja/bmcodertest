//react components
import React from 'react';
//stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//global
import { ScreenNames } from 'global/Index';
//screens
import Splash from 'screens/Splash';
import Welcome from '../screens/Welcome';

const MainStack = () => {
  //variables
  const Stack = createNativeStackNavigator();
  const initialRouteName = ScreenNames.SPLASH;
  const screenOptions = {
    headerShown: false,
  };
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={initialRouteName}>
      <Stack.Screen name={ScreenNames.SPLASH} component={Splash} />
      <Stack.Screen name={ScreenNames.WELCOME} component={Welcome} />
    </Stack.Navigator>
  );
};

export default MainStack;