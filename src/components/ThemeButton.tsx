/* eslint-disable react/react-in-jsx-scope */
import {RootStackParamList} from '@/store/NavigationType';
import {STORAGE_SETTINGS_KEY} from '@/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button, Alert} from 'react-native';

type ThemeButtonProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'Settings',
    undefined
  >;
  theme: string;
};

export const ThemeButton = ({navigation, theme}: ThemeButtonProps) => {
  const saveSettings = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_SETTINGS_KEY, theme);
    } catch (e) {
      Alert.alert('저장 실패', '저장에 실패했습니다');
    }
  };

  const navigateToHome = () => {
    navigation.navigate({
      name: 'HomeScreen',
      params: {theme},
      merge: true,
    });
  };

  return (
    <Button
      title={theme}
      onPress={() => {
        saveSettings();
        navigateToHome();
      }}
    />
  );
};
