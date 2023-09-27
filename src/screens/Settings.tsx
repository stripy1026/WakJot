/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/store/NavigationType';
import {ThemeButton} from '@/components/ThemeButton';
import {color} from '@/store/store';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export const Settings = ({navigation}: Props): JSX.Element => {
  return (
    <View style={{flex: 1, backgroundColor: color.lightGrey}}>
      <ThemeButton navigation={navigation} theme={'Wakgood'} />
      <ThemeButton navigation={navigation} theme={'Ine'} />
      <ThemeButton navigation={navigation} theme={'Jingburger'} />
      <ThemeButton navigation={navigation} theme={'Lilpa'} />
      <ThemeButton navigation={navigation} theme={'Jururu'} />
      <ThemeButton navigation={navigation} theme={'Gosegu'} />
      <ThemeButton navigation={navigation} theme={'VIichan'} />
    </View>
  );
};
