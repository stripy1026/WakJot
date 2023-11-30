/* eslint-disable react/react-in-jsx-scope */
import {SettingsProps, settings} from '@/store/settings';
import {STORAGE_SETTINGS_KEY, color} from '@/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, Text, View, Alert, Platform} from 'react-native';
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

  const alignHomeText = async ({homeAlignText}: SettingsProps) => {
    const newSetting = {...setting, homeAlignText};
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

  const handleWidgetFontSize = async (val: number) => {
    const newSetting = {...setting, widgetFontSize: val};
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

  const handleHomeFontSize = async (val: number) => {
    const newSetting = {...setting, homeFontSize: val};
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
    <View style={{backgroundColor: color.iosGrey, flex: 1}}>
      {Platform.OS === 'android' && (
        <View>
          <View style={{marginTop: 55, margin: 12}}>
            <Text
              style={{
                fontSize: 24,
                color: '#000000',
                fontFamily:
                  Platform.OS === 'android' ? 'Pretendard-Bold' : 'default',
                letterSpacing: Platform.OS === 'android' ? -0.6 : 0,
              }}>
              위젯 설정
            </Text>
          </View>
          <View style={{height: 100, marginVertical: 10, marginBottom: 20}}>
            <HelloWidgetPreviewScreen />
          </View>
          <Text style={styles.settingTitle}>위젯 텍스트 위치 정렬</Text>
          <View style={styles.settingBox}>
            <Slider
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
          <Text style={styles.settingTitle}>
            위젯 투명도 설정 (기본: 0.6 현재: {setting.widgetOpacity})
          </Text>
          <View style={styles.settingBox}>
            <Slider
              step={0.1}
              minimumValue={0}
              maximumValue={1}
              value={setting.widgetOpacity}
              onSlidingComplete={val => handleWidgetOpacity(val)}
            />
          </View>
          <Text style={styles.settingTitle}>
            위젯 글씨 크기 설정 (기본: 16 현재: {setting.widgetFontSize})
          </Text>
          <View style={styles.settingBox}>
            <Slider
              step={1}
              minimumValue={1}
              maximumValue={48}
              value={setting.widgetFontSize}
              onSlidingComplete={val => handleWidgetFontSize(val)}
            />
          </View>
        </View>
      )}
      <View
        style={{marginTop: Platform.OS === 'android' ? 20 : 55, margin: 12}}>
        <Text
          style={{
            fontSize: 24,
            color: '#000000',
            fontFamily:
              Platform.OS === 'android' ? 'Pretendard-Bold' : 'default',
            letterSpacing: Platform.OS === 'android' ? -0.6 : 0,
          }}>
          메인 화면 설정
        </Text>
      </View>
      <Text style={styles.settingTitle}>메인 화면 텍스트 위치 정렬</Text>
      <View style={styles.settingBox}>
        <Slider
          step={1}
          minimumValue={0}
          maximumValue={2}
          value={
            setting.homeAlignText === 'left'
              ? 0
              : setting.homeAlignText === 'center'
              ? 1
              : 2
          }
          onSlidingComplete={e => {
            if (e === 0) {
              alignHomeText({...setting, homeAlignText: 'left'});
            } else if (e === 1) {
              alignHomeText({...setting, homeAlignText: 'center'});
            } else if (e === 2) {
              alignHomeText({...setting, homeAlignText: 'right'});
            }
          }}
        />
      </View>
      <Text style={styles.settingTitle}>
        메인 화면 글씨 크기 설정 (기본: 20 현재: {setting.homeFontSize})
      </Text>
      <View style={styles.settingBox}>
        <Slider
          step={1}
          minimumValue={1}
          maximumValue={48}
          value={setting.homeFontSize}
          onSlidingComplete={val => handleHomeFontSize(val)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingBox: {
    height: 42,
    marginHorizontal: 12,
    marginTop: 4,
    marginBottom: 8,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    borderRadius: 10,
  },
  settingTitle: {
    marginLeft: 24,
    fontSize: 10,
    color: '#848488',
    fontFamily: Platform.OS === 'android' ? 'Pretendard-Regular' : 'default',
    letterSpacing: Platform.OS === 'android' ? -0.25 : 0,
  },
});
