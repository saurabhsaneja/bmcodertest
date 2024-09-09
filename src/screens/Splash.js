//react components
import React, { useEffect } from 'react';
import { View, Image, ImageBackground } from 'react-native';
//third parties
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { ScreenNames } from '../global/Index';
import userStore from '../userStore'

const Splash = ({ navigation }) => {
  const { updateUserData } = userStore()
  //function : navigation function
  const resetIndexGoToHome = CommonActions.reset({
    index: 1,
    routes: [{ name: ScreenNames.HOME }],
  });
  const resetIndexGoToWelcome = CommonActions.reset({
    index: 1,
    routes: [{ name: ScreenNames.WELCOME }],
  });
  //useEffect
  useEffect(() => {
    setTimeout(async () => {
      const userData = await AsyncStorage.getItem('userData');
      console.log('splash userData', userData);
      if (userData) {
        updateUserData(JSON.parse(userData))
        navigation.dispatch(resetIndexGoToHome)
      } else {
        navigation.dispatch(resetIndexGoToWelcome);
      }
    }, 2000);
    return () => { };
  }, []);

  //UI
  return (
    <Image source={require('../assets/images/logo-page.png')} style={{ flex: 1 }} />
  );
};

export default Splash;