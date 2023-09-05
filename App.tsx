/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Alert,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import RNExitApp from 'react-native-exit-app';

const STORAGE_KEY = '@jot';

function App(): JSX.Element {
  const [text, setText] = useState('');

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
        text: '아니요',
        style: 'cancel',
      },
      {
        text: '네',
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

  return (
    <View style={styles.background}>
      <ImageBackground
        source={require('./assets/temp_background.jpeg')}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <StatusBar backgroundColor={'transparent'} translucent={true} />
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <TextInput
              multiline
              style={styles.input}
              onChangeText={payload => setText(payload)}
              value={text}
              placeholder="뭐든지 써보세요"
              placeholderTextColor="white"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              style={{...styles.button, flex: 1, backgroundColor: 'grey'}}
              onPress={clearText}>
              <Text>삭제</Text>
            </Pressable>
            <Pressable
              style={{...styles.button, flex: 2, backgroundColor: 'white'}}
              onPress={saveText}>
              <Text>저장</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    flex: 0.6,
  },
  textContainer: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.8,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    margin: 10,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    padding: 10,
  },
});

export default App;
