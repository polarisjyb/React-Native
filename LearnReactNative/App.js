import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Greeting from './components/Greeting';
import Box from './components/Box';
import Input from './components/Input';

const App = () => {
  return (
    <SafeAreaView>
      <Input />
      {/* <Greeting /> */}
    </SafeAreaView>
  );
};

export default App;
