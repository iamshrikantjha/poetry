import React from 'react';
import {StyleSheet} from 'react-native';

import Nav from './src/navigation/Nav';
console.disableYellowBox = true; 
const App = () => {
  return (
    <>
      <Nav />
    </>
  );
};

const styles = StyleSheet.create({
  // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },
});

export default App;
