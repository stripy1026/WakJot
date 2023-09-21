import React, {useEffect, useState} from 'react';
import {
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
import {STORAGE_KEY, color} from '@/store/store';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/store/NavigationType';

import {ThemeProps, themeMap} from '@/store/themeMap';
import {JotButtonPack} from '@/components/JotButtonPack';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

export default function HomeScreen({route, navigation}: Props): JSX.Element {
  const [text, setText] = useState('');

  const {backgroundImage}: ThemeProps =
    themeMap[route.params.theme as keyof typeof themeMap];

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

  useEffect(() => {
    loadText();
  }, []);

  useEffect(() => {
    requestWidgetUpdate({
      widgetName: 'Hello',
      renderWidget: () => <HelloWidget text={text} />,
      widgetNotFound: () => {
        return;
      },
    });
  }, [text]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <View style={styles.textContainer}>
          <TextInput
            multiline
            autoComplete="off"
            autoCorrect={false}
            style={styles.input}
            onChangeText={payload => setText(payload)}
            value={text}
          />
          <View>
            <Pressable
              style={{alignItems: 'center', marginRight: 20}}
              onPress={() => navigation.navigate('Settings')}>
              <FontAwesomeIcon
                style={{marginTop: 50, color: 'white'}}
                size={30}
                icon="palette"
              />
              <Text style={{color: 'white', marginTop: 5, fontSize: 13}}>
                theme
              </Text>
            </Pressable>
            <Pressable
              style={{alignItems: 'center', marginRight: 20}}
              onPress={() => navigation.navigate('Detail')}>
              <FontAwesomeIcon
                style={{marginTop: 50, color: 'white'}}
                size={30}
                icon="gear"
              />
              <Text style={{color: 'white', marginTop: 5, fontSize: 12}}>
                setting
              </Text>
            </Pressable>
            <Pressable
              style={{alignItems: 'center', marginRight: 20}}
              onPress={() => navigation.navigate('More')}>
              <FontAwesomeIcon
                style={{marginTop: 50, color: 'white'}}
                size={30}
                icon="person"
              />
              <Text style={{color: 'white', marginTop: 5, fontSize: 13}}>
                more
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={{
              ...styles.button,
              flex: 1,
              backgroundColor: color.lightGrey,
            }}
            onPress={clearText}>
            <View style={styles.buttonContent}>
              <FontAwesomeIcon
                style={{marginBottom: 5}}
                size={20}
                icon="trash"
              />
            </View>
          </Pressable>
          <JotButtonPack theme={route.params.theme} onPress={saveText} />
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
    justifyContent: 'flex-end',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
    opacity: 0.7,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 20,
    margin: 10,
    marginTop: 30,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  button: {
    alignItems: 'center',
  },
  buttonContent: {height: 50, flexDirection: 'row', alignItems: 'center'},
  buttonText: {
    marginBottom: 5,
    fontWeight: '700',
    fontSize: 25,
  },
});
