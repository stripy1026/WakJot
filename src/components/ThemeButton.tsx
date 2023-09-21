/* eslint-disable react/react-in-jsx-scope */
import {RootStackParamList} from '@/store/NavigationType';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button} from 'react-native';

type ThemeButtonProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'Settings',
    undefined
  >;
  theme: string;
};

export const ThemeButton = ({navigation, theme}: ThemeButtonProps) => {
  return (
    <Button
      title={theme}
      onPress={() =>
        navigation.navigate({
          name: 'HomeScreen',
          params: {theme},
          merge: true,
        })
      }
    />
  );
};
