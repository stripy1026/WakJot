/* eslint-disable react/react-in-jsx-scope */
import {color} from '@/store/store';
import {Platform, StyleSheet, Text, View} from 'react-native';

export const More = () => {
  return (
    <View style={{flex: 1, backgroundColor: color.iosGrey}}>
      <View style={styles.section}>
        <Text style={styles.sectionText}>버전 정보</Text>
      </View>
      <View style={styles.detailBox}>
        <Text style={styles.detailBoxText}>버전: 2.0.0</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionText}>제작자 정보</Text>
      </View>
      <View style={styles.detailBox}>
        <Text style={styles.detailBoxText}>개발자: stripy</Text>
        <Text style={styles.detailBoxText}>일러스트레이터: 라면조리기</Text>
        <Text style={styles.detailBoxText}>UI/UX 디자이너: 시부야 린</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {margin: 10, marginTop: 55},
  sectionText: {
    fontSize: 24,
    color: '#454545',
    fontFamily: Platform.OS === 'android' ? 'Pretendard-Bold' : 'default',
    letterSpacing: Platform.OS === 'android' ? -0.5 : 0,
  },
  detailBox: {
    marginTop: 5,
    padding: 10,
    backgroundColor: 'white',
  },
  detailBoxText: {
    color: '#777777',
    fontFamily: Platform.OS === 'android' ? 'Pretendard-Regular' : 'default',
    letterSpacing: Platform.OS === 'android' ? -0.25 : 0,
  },
});
