/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" />
      <Text style={styles.text}>Hello, My First React Native Project!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 16,
  },
});

export default App;
