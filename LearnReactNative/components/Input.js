import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

function Login() {
  return(
   
    <View style={styles.loginBox}>
      <View Style={styles.block}>
        <TextInput placeholder="아이디를 입력하세요." style={styles.input} />
        <TextInput placeholder="비밀번호를 입력하세요." style={styles.input} />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  loginBox: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  block: {
    paddingHorizontal: 16,
    borderWidth: 1,
    justifyContent: 'center',
  },
  input: {
    width: 300,
    borderBottomWidth: 1,
    fontSize: 16,
    margin: 10,
    padding: 15,
  },
});

export default Login;