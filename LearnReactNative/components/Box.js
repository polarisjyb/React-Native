import React from 'react';
import {View, StyleSheet} from 'react-native';

function Box() {
  return <View style={styles.box} />;
}

const styles = StyleSheet.create({
  box: {
    width: 120,
    height: 120,
    backgroundColor: 'cadetblue',
  }
});

export default Box;