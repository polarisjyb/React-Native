/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import WelcomeDTG from './src/components/WelcomeDTG/WelcomeDTG';
import SigninScreen from './src/screens/SignInScreen/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      {/* <SigninScreen /> */}
      {/* <SignUpScreen /> */}
      {/* <ConfirmEmailScreen /> */}
      {/* <ForgotPasswordScreen /> */}
      <NewPasswordScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
