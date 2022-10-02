import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import {useNavigation} from '@react-navigation/native'


/* 비밀번호 재설정 -- 이메일 인증코드 입력 및 새로운 비밀번호 입력 */

// 이메일 인증 성공시 새로운 비밀번호로 비밀번호 변경
const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate('HomeScreen');
    // console.warn('onSubmitPressed');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
    // console.warn('onSignInPress')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        
        <Text style={styles.confirmaion_code}>Confirmation Code</Text>
        <CustomInput
        placeholder="Enter your new confirmation code"
        value={code}
        setValue={setCode}
        />

        <Text style={styles.password}>Password</Text>
        <CustomInput
        placeholder="Enter your new password"
        value={newPassword}
        setValue={setNewPassword}
        />

        <CustomButton text="Submit" onPress={onSubmitPressed} type="SUBMIT"/>

        <CustomButton
        text="Back to Sign in"
        onPress={onSignInPress}
        type="BACKTOSIGNIN"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0e1824',
    marginVertical: 10,
  },
  confirmaion_code: {
    color: '#0e1824',
    marginTop: 20,
  },
  password: {
    color: '#0e1824',
    marginTop: 20,
  },  

});

export default NewPasswordScreen;