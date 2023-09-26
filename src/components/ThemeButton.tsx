/* eslint-disable react/react-in-jsx-scope */
import {RootStackParamList} from '@/store/NavigationType';
import {settings} from '@/store/settings';
import {STORAGE_SETTINGS_KEY} from '@/store/store';
import {themeMap} from '@/store/themeMap';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Alert, Pressable, Text} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {ThemeSvg} from './ThemeSvg';

type ThemeButtonProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'Settings',
    undefined
  >;
  theme: string;
};

export const ThemeButton = ({navigation, theme}: ThemeButtonProps) => {
  const {name} = themeMap[theme as keyof typeof themeMap];

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
      Alert.alert(
        '저장소에 저장 실패',
        '다음 번에 앱 실행 시 설정이 제대로 적용되지 않습니다.',
      );
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

  return (
    <Pressable onPress={editTheme}>
      <Text>{name} 테마로 변경</Text>
      <ThemeSvg theme={theme} />
    </Pressable>
  );
};
