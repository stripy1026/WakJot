import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import HomeScreen from '@/screens/Home';
import {HelloWidgetPreviewScreen} from '@/screens/HelloWidgetPreviewScreen';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <HomeScreen />
      <HelloWidgetPreviewScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
