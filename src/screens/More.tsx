/* eslint-disable react/react-in-jsx-scope */
import {color} from '@/store/store';
import {StyleSheet, Text, View} from 'react-native';

export const More = () => {
  return (
    <View style={{flex: 1, backgroundColor: color.iosGrey}}>
      <View style={styles.section}>
        <Text style={styles.sectionText}>버전 정보</Text>
      </View>
      <View style={styles.detailBox}>
        <Text style={styles.detailBoxText}>버전: 1.0.0</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionText}>제작자 정보</Text>
      </View>
      <View style={styles.detailBox}>
        <Text style={styles.detailBoxText}>개발자: stripy</Text>
        <Text style={styles.detailBoxText}>디자이너: 다언</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {margin: 10, marginTop: 20},
  sectionText: {fontWeight: 'bold', fontSize: 16, color: '#454545'},
  detailBox: {
    marginTop: 5,
    padding: 10,
    backgroundColor: 'white',
  },
  detailBoxText: {color: '#777777'},
});
