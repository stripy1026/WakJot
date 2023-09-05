/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Alert,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [text, setText] = useState('');

  const saveText = () => {
    if (text === '') {
      return;
    }
    console.log('SAVE');
    console.log(text);
  };

  const clearText = () => {
    Alert.alert('메모 비우기', '메모를 전부 삭제하시겠습니까?', [
      {
        text: '아니요',
        style: 'cancel',
      },
      {text: '네', onPress: () => setText('')},
    ]);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" />
      <TextInput
        multiline
        style={styles.input}
        onChangeText={payload => setText(payload)}
        value={text}
        placeholder="뭐든지 써보세요"
        placeholderTextColor="white"
      />
      <View style={styles.buttonContainer}>
        <Pressable
          style={{...styles.button, flex: 1, backgroundColor: 'blue'}}
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
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  input: {
    flex: 1,
    backgroundColor: 'grey',
    color: 'white',
    fontSize: 16,
    margin: 10,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    backgroundColor: 'grey',
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    padding: 10,
  },
});

export default App;
