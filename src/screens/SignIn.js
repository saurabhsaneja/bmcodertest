//react components
import React, { useEffect, useRef, useState } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, useWindowDimensions, ScrollView, TouchableOpacity, ToastAndroid, KeyboardAvoidingView, Platform } from 'react-native';
//third parties
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { ScreenNames, Service } from '../global/Index';
import { getPoppinsFont } from '../helpers';
import Button from '../components/Button';
import MyTextInput from '../components/MyTextInput';
import Toast from 'react-native-simple-toast';
import userStore from '../userStore'

const SignIn = ({ navigation }) => {
  const { userData } = userStore()
  console.log('sign in userData', userData?.email);
  const { height, width } = useWindowDimensions();
  const [email, setEmail] = useState(String(userData?.email) || '')
  const [password, setPassword] = useState(userData?.password || '')
  const passwordRef = useRef(null)
  const gotoSignUp = () => { navigation.navigate(ScreenNames.SIGN_UP) }
  const validation = () => {
    if (email === '') {
      Toast.show('Please enter Email', Toast.SHORT);
      return false
    } else if (password === '') {
      Toast.show('Please enter Password', Toast.SHORT);
      return false
    }
    return true
  }
  const handleSignIn = async () => {
    if (!validation()) {
      return
    }
    try {
      const myData = new FormData();
      myData.append('phone', email);
      myData.append('password', password);
      const resp = await Service.postApi(
        Service.LOGIN,
        myData
      );
      console.log(`${Service.LOGIN} resp`, JSON.stringify(resp));
      if (!resp?.data?.status) {
        Toast.show(`${resp?.data?.message}`, Toast.SHORT)
      } else {
        navigation.navigate(ScreenNames.HOME)
      }
    } catch (error) {
      Toast.show(`handleSignIn ${error}`, Toast.SHORT)
    }
  }
  //UI
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <Image source={require('../assets/images/logo.png')} style={{ width: width * 0.7, height: 341 / 428 * (width * 0.7), alignSelf: 'center' }} />
          <Text style={styles.signIn} >Sign In</Text>
          <Text style={styles.weclome} >Hi! Welcome back, you {"\n"}have been missed </Text>
          <MyTextInput
            value={email}
            setValue={setEmail}
            heading='Email'
            placeholder='xyz@gmail.com'
            onSubmitEditing={() => passwordRef.current.focus()}
            iconType='email'
          />
          <MyTextInput
            myRef={passwordRef}
            value={password}
            heading='Password'
            setValue={setPassword}
            placeholder='password'
            iconType='password'
          />
          <TouchableOpacity style={{ alignSelf: 'flex-end' }} >
            <Text style={styles.already2}>Forgot Password?</Text>
          </TouchableOpacity>
          {/* <View style={styles.mainView} > */}
          <Button title="Sign In" onPress={handleSignIn} extraStyle={{ marginTop: 30, width: '95%' }} />
          <View style={styles.lineView} >
            <View style={styles.line} />
            <Text style={styles.or} >Or</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.socialIconsRow} >
            <View style={styles.socialIconView} >
              <Image source={require('../assets/images/google-icon.png')} />
            </View>
            <View style={styles.socialIconView} >
              <Image source={require('../assets/images/apple-icon.png')} />
            </View>
          </View>
          <View style={styles.bottomTextView}>
            <Text style={styles.already} >Don't have an account? </Text>
            <TouchableOpacity onPress={gotoSignUp} >
              <Text style={styles.already2} >Sign Up</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.agree}>By login or sign up, you agree to our terms of use and privacy policy</Text>
          {/* </View> */}
        </ScrollView>
      </KeyboardAvoidingView>
      <Image source={require('../assets/images/bottom-left-corner.png')} style={styles.bottomLeftCorner} />
    </View>
  );
};

export default SignIn;

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
  signIn: {
    fontSize: 32,
    lineHeight: 48,
    fontFamily: getPoppinsFont('Bold'),
    color: '#000',
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
    marginTop: 20
  },
  bottomLeftCorner: {
    position: 'absolute',
    bottom: 0,
    left: 0
  }

})