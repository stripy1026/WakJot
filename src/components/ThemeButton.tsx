/* eslint-disable react/react-in-jsx-scope */
import {RootStackParamList} from '@/store/NavigationType';
import {settings} from '@/store/settings';
import {STORAGE_SETTINGS_KEY} from '@/store/store';
import {themeMap} from '@/store/themeMap';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Alert, Pressable, Text, View} from 'react-native';
import {useRecoilState} from 'recoil';
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
  const {name, color} = themeMap[theme as keyof typeof themeMap];

  const [setting, setSetting] = useRecoilState(settings);

  const editTheme = async () => {
    const newSettings = {...setting, theme};
    setSetting(newSettings);
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
    <Pressable
      onPress={editTheme}
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        gap: 13,
      }}>
      <View
        style={{
          width: 26,
          height: 26,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: color,
          borderRadius: 6,
        }}>
        <ThemeSvg theme={theme} />
      </View>
      <View
        style={{
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: '#000000',
          }}>
          {name} 테마
        </Text>
      </View>
    </Pressable>
  );
};
