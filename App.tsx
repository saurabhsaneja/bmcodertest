//import : react components
import { NavigationContainer } from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Alert,
  Platform,
  Text,
  LogBox
} from 'react-native';
import MainStack from './src/navigation/MainStack';

const App = () => {

  //UI
  return (
        <NavigationContainer>
          <SafeAreaView style={{flex: 1}}>
            <StatusBar backgroundColor={'green'} />
            <MainStack/>
          </SafeAreaView>
        </NavigationContainer>
  );
};

export default App;