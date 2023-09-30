/* eslint-disable react/react-in-jsx-scope */
import {color} from '@/store/store';
import {Text, View} from 'react-native';

export const More = () => {
  return (
    <View style={{flex: 1, backgroundColor: color.iosGrey}}>
      <Text>More</Text>
      <Text>버전 정보</Text>
      <Text>제작자 정보</Text>
    </View>
  );
};
