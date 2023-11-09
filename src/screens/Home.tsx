import React, {useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  ImageBackground,
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

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/store/NavigationType';

import {ThemeProps, themeMap} from '@/store/themeMap';
import {JotButtonPack} from '@/components/JotButtonPack';
import {DEFAULT_SETTINGS, settings} from '@/store/settings';
import {useRecoilState} from 'recoil';
import {ThemeSvg} from '@/components/ThemeSvg';
import screenTrace from '@/utils/screenTrace';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

export default function HomeScreen({navigation}: Props): JSX.Element {
  const [text, setText] = useState('');
  const [setting, setSetting] = useRecoilState(settings);
  const [isLoading, setIsLoading] = useState(true);

  screenTrace('HomeScreen');

  const {backgroundImage}: ThemeProps =
    themeMap[setting.theme as keyof typeof themeMap];

  const saveText = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, text);
      RNExitApp.exitApp();
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
          <Text style={{fontWeight: 'bold', color: 'white'}}>
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
        resizeMode="cover"
        style={styles.backgroundImage}>
        <View style={styles.textContainer}>
          <View
            style={{
              justifyContent: 'flex-end',
              flexDirection: 'row',
              gap: 24,
              marginRight: 24,
            }}>
            <Pressable onPress={() => navigation.navigate('More')}>
              <FontAwesomeIcon
                style={{marginTop: 50, color: 'white'}}
                size={30}
                icon="person"
              />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Settings')}>
              <FontAwesomeIcon
                style={{marginTop: 50, color: 'white'}}
                size={30}
                icon="palette"
              />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Detail')}>
              <FontAwesomeIcon
                style={{marginTop: 50, color: 'white'}}
                size={30}
                icon="gear"
              />
            </Pressable>
          </View>
          <TextInput
            multiline
            autoComplete="off"
            autoCorrect={false}
            style={{
              ...styles.input,
              fontSize: setting.homeFontSize,
              textAlign: setting.homeAlignText,
            }}
            onChangeText={payload => setText(payload)}
            value={text}
          />
          <View style={styles.buttonContainer}>
            <Pressable
              style={{
                ...styles.button,
                backgroundColor: '#FFFFFF',
              }}
              onPress={clearText}>
              <FontAwesomeIcon
                style={{marginBottom: 5}}
                size={20}
                icon="trash"
              />
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
  backgroundImage: {
    flex: 1,
    opacity: 0.7,
  },
  textContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 20,
    marginHorizontal: 24,
    marginBottom: 24,
    textAlignVertical: 'top',
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
