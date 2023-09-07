import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import HomeScreen from '@/screens/Home';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fas);

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
