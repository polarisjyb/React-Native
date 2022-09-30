import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import WelcomeDTG from '../../components/WelcomeDTG/WelcomeDTG';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn('Sign in');
  };

  const onForgotPasswordPressed = () => {
    console.warn('onForgotPasswordPressed');
  };

  const onSignInNaver = () => {
    console.warn('Naver');
  };

  const onSignInGoogle = () => {
    console.warn('Google');
  };

  const onSignInKakao = () => {
    console.warn('Kakao');
  };

  const onSignUpPress = () => {
    console.warn('onSignUpPress');
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