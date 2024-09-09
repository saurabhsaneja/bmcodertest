//react components
import React from 'react';
//stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//global
import { ScreenNames } from 'global/Index';
//screens
import Splash from 'screens/Splash';
import Welcome from '../screens/Welcome';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import SignUp from '../screens/SignUp';

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
      <Stack.Screen name={ScreenNames.SIGN_IN} component={SignIn} />
      <Stack.Screen name={ScreenNames.SIGN_UP} component={SignUp} />
      <Stack.Screen name={ScreenNames.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default MainStack;