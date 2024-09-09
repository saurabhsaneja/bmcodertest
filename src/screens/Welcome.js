//react components
import React, { useEffect } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native';
//third parties
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { ScreenNames } from '../global/Index';
import { getPoppinsFont } from '../helpers';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {
  const { height, width } = useWindowDimensions();
  const gotoSignIn = () => { navigation.navigate(ScreenNames.SIGN_IN) }
  const gotoSignUp = () => { navigation.navigate(ScreenNames.SIGN_UP) }
  //UI
  return (
    <ScrollView contentContainerStyle={styles.container} >
      <View style={styles.topImagesContainer} >
        <Image source={require('../assets/images/top-left-corner.png')} />
        <Image source={require('../assets/images/top-right-corner.png')} />
      </View>
      <Image source={require('../assets/images/logo.png')} style={{ width: width * 0.9, height: 341 / 428 * (width * 0.9) }} />
      <View style={styles.mainView} >
        <Text style={styles.text}>Sparkle & Shine Transform Your Drive with Every Wash!</Text>
        <Button title="Let's Start" onPress={gotoSignUp} extraStyle={{ marginTop: 40, width: '95%' }} />
        <View style={styles.bottomTextView}>
          <Text style={styles.already} >Already  have an account? </Text>
          <TouchableOpacity onPress={gotoSignIn} >
            <Text style={styles.already2} >Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  topImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  mainView: {
    width: '90%',
    alignSelf: 'center'
  },
  text: {
    fontSize: 24,
    lineHeight: 36,
    fontFamily: getPoppinsFont('SemiBold'),
    color: '#808080',
    textAlign: 'center'
  },
  already: {
    fontSize: 14,
    color: '#808080',
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
  }
})