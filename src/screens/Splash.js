//react components
import React, { useEffect } from 'react';
import { View, Image, ImageBackground } from 'react-native';
//third parties
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { ScreenNames } from '../global/Index';

const Splash = ({ navigation }) => {
  //function : navigation function
  const resetIndexGoToUserBottomTab = CommonActions.reset({
    index: 1,
    routes: [{ name: ScreenNames.USER_BOTTOM_TAB }],
  });
  const resetIndexGoToWelcome = CommonActions.reset({
    index: 1,
    routes: [{ name: ScreenNames.WELCOME }],
  });
  //useEffect
  useEffect(() => {
    setTimeout(async () => {
      navigation.dispatch(resetIndexGoToWelcome);
    }, 2000);
    return () => { };
  }, []);

  //UI
  return (
    <Image source={require('../assets/images/logo-page.png')} style={{ flex: 1 }} />
  );
};

export default Splash;