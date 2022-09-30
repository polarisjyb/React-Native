/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import WelcomeDTG from './src/components/WelcomeDTG/WelcomeDTG';
import SigninScreen from './src/screens/SignInScreen/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';

// import Greeting from './components/Greeting';
// import Box from './components/Box';
// import Input from './components/Input';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SigninScreen />
      {/* <SignUpScreen /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  },
});

export default App;
