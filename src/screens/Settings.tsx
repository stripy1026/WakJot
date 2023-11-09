/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, Text, View} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/store/NavigationType';
import {ThemeButton} from '@/components/ThemeButton';
import {color} from '@/store/store';
import screenTrace from '@/utils/screenTrace';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export const Settings = ({navigation}: Props): JSX.Element => {
  screenTrace('SettingsScreen');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.iosGrey,
        margin: 12,
        marginTop: 55,
      }}>
      <View
        style={{
          marginBottom: 12,
        }}>
        <Text
          style={{
            color: '#000000',
            fontSize: 24,
            fontStyle: 'normal',
            fontWeight: '700',
          }}>
          테마
        </Text>
      </View>
      <View>
        <Text style={styles.sectionText}>왁JOT</Text>
      </View>
      <ThemeButton navigation={navigation} theme={'Wakgood'} />
      <View style={{marginTop: 20}}>
        <Text style={styles.sectionText}>돌JOT</Text>
      </View>
      <ThemeButton navigation={navigation} theme={'Ine'} />
      <ThemeButton navigation={navigation} theme={'Jingburger'} />
      <ThemeButton navigation={navigation} theme={'Lilpa'} />
      <ThemeButton navigation={navigation} theme={'Jururu'} />
      <ThemeButton navigation={navigation} theme={'Gosegu'} />
      <ThemeButton navigation={navigation} theme={'VIichan'} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionText: {
    fontWeight: '400',
    fontSize: 10,
    color: '#848488',
    fontStyle: 'normal',
  },
});
