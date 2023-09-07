import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WidgetPreview} from 'react-native-android-widget';

import {HelloWidget} from '@/widgets/HelloWidget';

export function HelloWidgetPreviewScreen() {
  return (
    <View style={styles.container}>
      <WidgetPreview
        renderWidget={() => <HelloWidget text="Hello" />}
        width={320}
        height={200}
      />
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
