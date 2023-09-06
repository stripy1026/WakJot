import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {WidgetPreview} from 'react-native-android-widget';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {HelloWidget} from '@/widgets/HelloWidget';
import {STORAGE_KEY} from '@/store/store';

export async function HelloWidgetPreviewScreen() {
  const data =
    (await AsyncStorage.getItem(STORAGE_KEY)) ??
    '데이터를 불러오지 못했습니다.';

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/temp_background.jpeg')}
        resizeMode="cover">
        <WidgetPreview
          renderWidget={() => <HelloWidget text={data} />}
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
