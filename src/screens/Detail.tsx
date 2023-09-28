/* eslint-disable react/react-in-jsx-scope */
import {SettingsProps, settings} from '@/store/settings';
import {STORAGE_SETTINGS_KEY, color} from '@/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {useRecoilState} from 'recoil';
import {HelloWidgetPreviewScreen} from './HelloWidgetPreviewScreen';
import Slider from '@react-native-community/slider';

export const Detail = () => {
  const [setting, setSetting] = useRecoilState(settings);

  const alignText = async ({widgetAlignText}: SettingsProps) => {
    const newSetting = {...setting, widgetAlignText};
    setSetting(newSetting);
    try {
      await AsyncStorage.setItem(
        STORAGE_SETTINGS_KEY,
        JSON.stringify(newSetting),
      );
    } catch (e) {
      Alert.alert(
        '저장소에 저장 실패',
        '다음 번에 앱 실행 시 설정이 제대로 적용되지 않습니다.',
      );
    }
  };

  const handleWidgetOpacity = async (val: number) => {
    const fixedValue = Number(val.toFixed(1));
    const newSetting = {...setting, widgetOpacity: fixedValue};
    setSetting(newSetting);
    try {
      await AsyncStorage.setItem(
        STORAGE_SETTINGS_KEY,
        JSON.stringify(newSetting),
      );
    } catch (e) {
      Alert.alert(
        '저장소에 저장 실패',
        '다음 번에 앱 실행 시 설정이 제대로 적용되지 않습니다.',
      );
    }
  };

  return (
    <View style={{backgroundColor: color.lightGrey}}>
      <View style={styles.section}>
        <Text style={styles.sectionText}>위젯 설정</Text>
      </View>
      <View style={styles.settingBox}>
        <Text style={styles.settingTitle}>위젯 텍스트 위치 정렬</Text>
        <Slider
          style={styles.settingSlider}
          step={1}
          minimumValue={0}
          maximumValue={2}
          value={
            setting.widgetAlignText === 'flex-start'
              ? 0
              : setting.widgetAlignText === 'center'
              ? 1
              : 2
          }
          minimumTrackTintColor={color.darkGreen}
          maximumTrackTintColor="#000000"
          onSlidingComplete={e => {
            if (e === 0) {
              alignText({...setting, widgetAlignText: 'flex-start'});
            } else if (e === 1) {
              alignText({...setting, widgetAlignText: 'center'});
            } else if (e === 2) {
              alignText({...setting, widgetAlignText: 'flex-end'});
            }
          }}
        />
      </View>
      <View style={styles.settingBox}>
        <Text style={styles.settingTitle}>
          위젯 투명도 설정 (기본: 0.6 현재: {setting.widgetOpacity})
        </Text>
        <Slider
          style={styles.settingSlider}
          step={0.1}
          minimumValue={0}
          maximumValue={1}
          value={setting.widgetOpacity}
          minimumTrackTintColor={color.darkGreen}
          maximumTrackTintColor="#000000"
          onSlidingComplete={val => handleWidgetOpacity(val)}
        />
      </View>
      <View style={{alignSelf: 'flex-end'}}>
        <HelloWidgetPreviewScreen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {margin: 10, marginTop: 20},
  sectionText: {fontWeight: 'bold', fontSize: 16},
  settingBox: {
    marginTop: 5,
    backgroundColor: 'white',
  },
  settingTitle: {
    marginLeft: 10,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 14,
  },
  settingSlider: {height: 40},
});
