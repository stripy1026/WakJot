/* eslint-disable react/react-in-jsx-scope */
import {Button, Text, View} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/store/NavigationType';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export const Settings = ({navigation}: Props): JSX.Element => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings</Text>
      <Button
        title="Wakgood"
        onPress={() =>
          navigation.navigate({
            name: 'HomeScreen',
            params: {theme: 'Wakgood'},
            merge: true,
          })
        }
      />
      <Button
        title="Lilpa"
        onPress={() =>
          navigation.navigate({
            name: 'HomeScreen',
            params: {theme: 'Lilpa'},
            merge: true,
          })
        }
      />
      <Button
        title="VIichan"
        onPress={() =>
          navigation.navigate({
            name: 'HomeScreen',
            params: {theme: 'VIichan'},
            merge: true,
          })
        }
      />
    </View>
  );
};
