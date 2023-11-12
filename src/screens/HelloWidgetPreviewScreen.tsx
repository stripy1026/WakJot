import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {WidgetPreview} from 'react-native-android-widget';

import {HelloWidget} from '@/widgets/HelloWidget';
import {useRecoilValue} from 'recoil';
import {settings} from '@/store/settings';

export function HelloWidgetPreviewScreen() {
  const setting = useRecoilValue(settings);
  return (
    <View style={styles.container}>
      <WidgetPreview
        renderWidget={() => (
          <HelloWidget text="위젯 미리보기" setting={setting} />
        )}
        width={Dimensions.get('window').width - 24}
        height={100}
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
