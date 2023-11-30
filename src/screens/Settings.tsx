/* eslint-disable react/react-in-jsx-scope */
import {Platform, StyleSheet, Text, View} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/store/NavigationType';
import {ThemeButton} from '@/components/ThemeButton';
import {color} from '@/store/store';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export const Settings = ({navigation}: Props): JSX.Element => {
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
            fontFamily:
              Platform.OS === 'android' ? 'Pretendard-Bold' : 'default',
            letterSpacing: Platform.OS === 'android' ? -0.6 : 0,
          }}>
          테마
        </Text>
      </View>
      <View>
        <Text style={styles.sectionText}>왁JOT</Text>
      </View>
      <View
        style={{
          marginTop: 4,
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderRadius: 10,
          backgroundColor: 'white',
          justifyContent: 'center',
        }}>
        <ThemeButton navigation={navigation} theme={'Wakgood'} />
      </View>
      <View style={{marginTop: 20, marginBottom: 4}}>
        <Text style={styles.sectionText}>돌JOT</Text>
      </View>
      <View
        style={{
          borderRadius: 10,
          paddingVertical: 8,
          paddingLeft: 12,
          backgroundColor: 'white',
          gap: 6,
        }}>
        <ThemeButton navigation={navigation} theme={'Ine'} />
        <View style={styles.buttonBorder} />
        <ThemeButton navigation={navigation} theme={'Jingburger'} />
        <View style={styles.buttonBorder} />
        <ThemeButton navigation={navigation} theme={'Lilpa'} />
        <View style={styles.buttonBorder} />
        <ThemeButton navigation={navigation} theme={'Jururu'} />
        <View style={styles.buttonBorder} />
        <ThemeButton navigation={navigation} theme={'Gosegu'} />
        <View style={styles.buttonBorder} />
        <ThemeButton navigation={navigation} theme={'VIichan'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionText: {
    fontWeight: '400',
    fontSize: 10,
    color: '#848488',
    fontFamily: Platform.OS === 'android' ? 'Pretendard-Regular' : 'default',
    letterSpacing: Platform.OS === 'android' ? -0.25 : 0,
  },
  buttonBorder: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    marginLeft: 43,
  },
});
