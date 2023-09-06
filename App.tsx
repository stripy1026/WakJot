import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import HomeScreen from '@/screens/Home';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
