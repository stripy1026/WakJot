import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WidgetPreview} from 'react-native-android-widget';

import {HelloWidget} from '@/widgets/HelloWidget';
import {useRecoilValue} from 'recoil';
import {settings} from '@/store/settings';

export function HelloWidgetPreviewScreen() {
  const setting = useRecoilValue(settings);
  return (
    <View style={styles.container}>
      <WidgetPreview
        renderWidget={() => <HelloWidget text="Hello" setting={setting} />}
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
