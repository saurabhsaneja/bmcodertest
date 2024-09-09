//react components
import React, { useEffect, useRef, useState } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, useWindowDimensions, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native';
//third parties
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { ScreenNames } from '../global/Index';
import { getPoppinsFont } from '../helpers';
import Button from '../components/Button';
import MyTextInput from '../components/MyTextInput';
import Toast from 'react-native-simple-toast';
import userStore from '../userStore'

const Home = ({ navigation }) => {
  const { userData, clearUserData } = userStore()
  console.log({ userData });
  const { height, width } = useWindowDimensions();

  const gotoWelcome = () =>
    CommonActions.reset({
      index: 1,
      routes: [{ name: ScreenNames.WELCOME }],
    });

  const logout = async () => {
    await AsyncStorage.clear();
    clearUserData()
    navigation.dispatch(gotoWelcome)
  }
  //UI
  return (
    <ScrollView contentContainerStyle={styles.container} >
      <Image source={require('../assets/images/logo.png')} style={{ width: width * 0.7, height: 341 / 428 * (width * 0.7), alignSelf: 'center' }} />
      <Text style={styles.username}>Welcome {userData?.name}</Text>
      <Button title='Logout' onPress={logout} extraStyle={{ marginTop: 150, width: '90%' }} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // alignItems: 'center'
  },
  mainView: {
    width: '90%',
    alignSelf: 'center'
  },
  username: {
    alignSelf: 'center',
    fontSize: 32,
    lineHeight: 48,
    fontFamily: getPoppinsFont('Bold'),
    color: '#000',
    marginTop: 20,
  },
  weclome: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: getPoppinsFont('Medium'),
    color: '#808080',
    marginBottom: 30
  },
  already: {
    fontSize: 14,
    color: 'rgba(0,0,0,.7)',
    fontFamily: getPoppinsFont('Medium'),
  },
  already2: {
    fontSize: 14,
    color: 'black',
    textDecorationLine: 'underline',
    fontFamily: getPoppinsFont('SemiBold'),
  },
  bottomTextView: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    alignSelf: 'center'
  },
  socialIconView: {
    height: 43,
    width: 43,
    borderRadius: 43 / 2,
    borderWidth: 1,
    borderColor: '#A3CFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15
  },
  socialIconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },
  lineView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 20
  },
  line: {
    borderWidth: 1,
    borderColor: '#A3CFFF',
    width: '40%'
  },
  or: {
    color: '#666161',
    fontSize: 15,
    fontFamily: getPoppinsFont('Medium'),
    marginHorizontal: 10
  },
  agree: {
    color: '#808080',
    fontSize: 14,
    lineHeight: 21,
    fontFamily: getPoppinsFont('Medium'),
  }
})