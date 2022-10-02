import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import WelcomeDTG from '../../components/WelcomeDTG/WelcomeDTG';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

import {useNavigation} from '@react-navigation/native'

/* 로그인 화면 */

// 비밀번호 찾기
// 아이디 찾기
// 필수 입력 항목 구현 ( 미입력시 경고창 띄우기 )

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    // validate user
    navigation.navigate('HomeScreen');
    // console.warn('Sign in');
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
    // console.warn('onForgotPasswordPressed');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
    // console.warn('onSignUpPress');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain"/>

        <CustomInput placeholder="아이디" value={username} setValue={setUsername} />
        <CustomInput
        placeholder="비밀번호"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
        />

        <CustomButton text="로그인" onPress={onSignInPressed} />

        <CustomButton text="비밀번호 기억 안나지? 나도 기억안나.." onPress={onForgotPasswordPressed} type="TERTIARY" />

        <SocialSignInButtons />

        <CustomButton
        text="회원가입"
        // "Don't have an account? Create one"
        onPress={onSignUpPress}
        type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 170,
    height: 100,
    marginBottom: 10,
  },
});

export default SignInScreen;
