import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Favorite from './favorite.svg';
import {Box} from './src/assets/images/index';
const App = () => {
  return (
    <View style={styles.mainView}>
      <Favorite />
      <Box />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgrounColor: 'white',
  },
});
