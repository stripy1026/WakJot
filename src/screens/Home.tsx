import React, {useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  ImageBackground,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import RNExitApp from 'react-native-exit-app';
import {requestWidgetUpdate} from 'react-native-android-widget';
import {HelloWidget} from '@/widgets/HelloWidget';
import {STORAGE_KEY, STORAGE_SETTINGS_KEY, color} from '@/store/store';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/store/NavigationType';

import {ThemeProps, themeMap} from '@/store/themeMap';
import {JotButtonPack} from '@/components/JotButtonPack';
import {DEFAULT_SETTINGS, settings} from '@/store/settings';
import {useRecoilState} from 'recoil';
import {ThemeSvg} from '@/components/ThemeSvg';

import MoreSvg from '@/assets/more.svg';
import SettingSvg from '@/assets/setting.svg';
import ThemeButtonSvg from '@/assets/theme.svg';
import DeleteSvg from '@/assets/delete.svg';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

export default function HomeScreen({navigation}: Props): JSX.Element {
  const [text, setText] = useState('');
  const [setting, setSetting] = useRecoilState(settings);
  const [isLoading, setIsLoading] = useState(true);

  const {
    backgroundImage,
    backgroundColor,
    buttonColor,
    shadowColor,
  }: ThemeProps = themeMap[setting.theme as keyof typeof themeMap];

  const saveText = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, text);
      if (Platform.OS === 'android') {
        RNExitApp.exitApp();
      }
    } catch (e) {
      Alert.alert('저장 실패', '저장에 실패했습니다');
    }
  };

  const clearText = async () => {
    Alert.alert('메모 비우기', '메모를 전부 삭제하시겠습니까?', [
      {
        text: '잠깐만요',
        style: 'cancel',
      },
      {
        text: '킹아',
        onPress: async () => {
          try {
            await AsyncStorage.setItem(STORAGE_KEY, '');
          } catch (e) {
            Alert.alert('삭제 실패', '저장소가 삭제되지 않았습니다');
          }
          setText('');
        },
      },
    ]);
  };

  useMemo(() => {
    const loadText = async () => {
      try {
        const value = await AsyncStorage.getItem(STORAGE_KEY);
        if (value !== null) {
          setText(value);
        }
      } catch (e) {
        Alert.alert('불러오기 실패', '다시 로드를 시도해주세요');
      }
    };

    const loadSetting = async () => {
      try {
        const value = await AsyncStorage.getItem(STORAGE_SETTINGS_KEY);
        if (value !== null) {
          setSetting(JSON.parse(value));
        } else {
          setSetting(DEFAULT_SETTINGS);
        }
        setIsLoading(false);
      } catch (e) {
        Alert.alert('설정 불러오기 실패', '다시 로드를 시도해주세요');
      }
    };

    loadText();
    loadSetting();
  }, [setSetting]);

  useEffect(() => {
    requestWidgetUpdate({
      widgetName: 'Hello',
      renderWidget: () => <HelloWidget text={text} setting={setting} />,
      widgetNotFound: () => {
        return;
      },
    });
  }, [text, setting]);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: color.darkGreen,
        }}>
        <View style={{margin: 10}}>
          <ThemeSvg theme={'Wakgood'} width={60} height={60} />
        </View>
        <View style={{margin: 10}}>
          <ActivityIndicator size="large" color={color.iosGrey} />
        </View>
        <View style={{margin: 10}}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontFamily:
                Platform.OS === 'android' ? 'Pretendard-Bold' : 'default',
              letterSpacing: Platform.OS === 'android' ? -0.6 : 0,
            }}>
            왁JOT 불러오는 중 ...
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="contain"
        style={{
          flex: 1,
          backgroundColor: backgroundColor,
        }}>
        <View style={styles.textContainer}>
          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 24,
              marginRight: 24,
              marginTop: 50,
            }}>
            <Pressable onPress={() => navigation.navigate('More')}>
              <MoreSvg width={26} height={26} fill={buttonColor} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Settings')}>
              <ThemeButtonSvg width={31} height={31} fill={buttonColor} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Detail')}>
              <SettingSvg width={26} height={26} fill={buttonColor} />
            </Pressable>
          </View>
          <TextInput
            multiline
            autoComplete="off"
            autoCorrect={false}
            style={{
              flex: 1,
              color: 'black',
              marginHorizontal: 24,
              marginBottom: 24,
              textAlignVertical: 'top',
              fontSize: setting.homeFontSize,
              textAlign: setting.homeAlignText,
              fontFamily:
                Platform.OS === 'android' ? 'Pretendard-Medium' : 'default',
              letterSpacing: Platform.OS === 'android' ? -0.5 : 0,
            }}
            onChangeText={payload => setText(payload)}
            value={text}
          />
          <View style={styles.buttonContainer}>
            <Pressable
              style={{
                ...styles.button,
                backgroundColor:
                  themeMap[setting.theme as keyof typeof themeMap].color,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: 'rgba(255, 255, 255, 0.30)',
                shadowColor: shadowColor,
                shadowOffset: {
                  width: 0,
                  height: 11,
                },
                shadowOpacity: 0.39,
                shadowRadius: 18.5,

                elevation: 7,
              }}
              onPress={clearText}>
              <DeleteSvg width={18} height={18} fill={buttonColor} />
            </Pressable>
            <JotButtonPack theme={setting.theme} onPress={saveText} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 48,
    marginHorizontal: 24,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 44,
    height: 44,
  },
  buttonText: {
    marginBottom: 5,
    fontWeight: '700',
    fontSize: 25,
  },
});
