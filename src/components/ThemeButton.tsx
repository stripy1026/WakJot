/* eslint-disable react/react-in-jsx-scope */
import {RootStackParamList} from '@/store/NavigationType';
import {settings} from '@/store/settings';
import {STORAGE_SETTINGS_KEY} from '@/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button, Alert} from 'react-native';
import {useSetRecoilState} from 'recoil';

type ThemeButtonProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'Settings',
    undefined
  >;
  theme: string;
};

export const ThemeButton = ({navigation, theme}: ThemeButtonProps) => {
  const setSettings = useSetRecoilState(settings);

  const editTheme = async () => {
    const newSettings = {...settings, theme};
    setSettings(newSettings);
    try {
      await AsyncStorage.setItem(
        STORAGE_SETTINGS_KEY,
        JSON.stringify(newSettings),
      );
    } catch (e) {
      Alert.alert('저장 실패', '저장에 실패했습니다');
    }
    navigateToHome();
  };

  const navigateToHome = () => {
    navigation.navigate({
      name: 'HomeScreen',
      params: {theme},
      merge: true,
    });
  };

  return <Button title={theme} onPress={editTheme} />;
};
