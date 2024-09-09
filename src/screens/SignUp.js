//react components
import React, { useEffect, useRef, useState } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, useWindowDimensions, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native';
//third parties
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { ScreenNames, Service } from '../global/Index';
import { getPoppinsFont } from '../helpers';
import Button from '../components/Button';
import MyTextInput from '../components/MyTextInput';
import Toast from 'react-native-simple-toast';
import userStore from '../userStore'

const SignUp = ({ navigation }) => {
  const { userData, updateUserData } = userStore()
  const { height, width } = useWindowDimensions();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const gotoSignUp = () => { }
  const validation = () => {
    if (name === '') {
      Toast.show('Please enter Name', Toast.SHORT);
    } else if (email === '') {
      Toast.show('Please enter Email', Toast.SHORT);
    } else if (password === '') {
      Toast.show('Please enter Password', Toast.SHORT);
    }
    return true
  }
  const handleSignUp = async () => {
    if (!validation()) {
      return
    }
    try {
      const myData = new FormData();
      myData.append('name', name);
      myData.append('phone', email);
      myData.append('password', password);
      const resp = await Service.postApi(
        Service.REGISTER,
        myData
      );
      console.log(`${Service.REGISTER} resp`, JSON.stringify(resp));
      if (!resp?.data?.status) {
        Toast.show(`${resp?.data?.message}`, Toast.SHORT)
      } else {
        const uData = { name, email, password }
        updateUserData(uData)
        await AsyncStorage.setItem('userData', JSON.stringify(uData));
        navigation.navigate(ScreenNames.SIGN_IN)
      }
    } catch (error) {
      const error2 = error?.response?.data?.error
      const key = Object.keys(error2)
      const erroMessage = error2[key]
      if (erroMessage) {
        // {"error": {"phone": ["The phone has already been taken."]}, "status": false}
        Toast.show(`handleSignUp ${erroMessage}`, Toast.SHORT)

      }
    }
  }
  //UI
  return (
    <ScrollView contentContainerStyle={styles.container} >
      <Image source={require('../assets/images/logo.png')} style={{ width: width * 0.7, height: 341 / 428 * (width * 0.7), alignSelf: 'center' }} />
      <Text style={styles.signIn} >Sign Up</Text>
      <Text style={styles.weclome} >
        Fill in the below form and add life {'\n'}to your car!</Text>
      <MyTextInput
        value={name}
        setValue={setName}
        heading='Name'
        placeholder='Enter your name'
        onSubmitEditing={() => emailRef.current.focus()}
        iconType='user'
      />
      <MyTextInput
        myRef={emailRef}
        value={email}
        setValue={setEmail}
        heading='Email'
        placeholder='xyz@gmail.com'
        onSubmitEditing={() => passwordRef.current.focus()}
        iconType='email'
        maxLength={10}
        keyboardType='numeric'
      />
      <MyTextInput
        myRef={passwordRef}
        value={password}
        heading='Password'
        setValue={setPassword}
        placeholder='password'
        iconType='password'
        secureTextEntry
      />
      {/* <View style={styles.mainView} > */}
      <Button title="Sign Up" onPress={handleSignUp} extraStyle={{ marginTop: 30, width: '95%' }} />
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
  );
};

export default SignUp;

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
  }
})