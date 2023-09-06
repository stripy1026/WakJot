import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {WidgetPreview} from 'react-native-android-widget';

import {HelloWidget} from '@/widgets/HelloWidget';

export function HelloWidgetPreviewScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/temp_background.jpeg')}
        resizeMode="cover">
        <WidgetPreview
          renderWidget={() => <HelloWidget />}
          width={320}
          height={200}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
