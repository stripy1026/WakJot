/* eslint-disable react/react-in-jsx-scope */
import {SettingsProps, settings} from '@/store/settings';
import {STORAGE_SETTINGS_KEY, color} from '@/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, Text, View, Pressable, Alert} from 'react-native';
import {useRecoilState} from 'recoil';
import {HelloWidgetPreviewScreen} from './HelloWidgetPreviewScreen';

export const Detail = () => {
  const [setting, setSetting] = useRecoilState(settings);

  const alignText = async ({widgetAlignText}: SettingsProps) => {
    const newSetting = {...setting, widgetAlignText};
    setSetting(newSetting);
    try {
      await AsyncStorage.setItem(
        STORAGE_SETTINGS_KEY,
        JSON.stringify(newSetting),
      );
    } catch (e) {
      Alert.alert(
        '저장소에 저장 실패',
        '다음 번에 앱 실행 시 설정이 제대로 적용되지 않습니다.',
      );
    }
  };

  return (
    <View style={{backgroundColor: color.lightGrey}}>
      <View style={{}}>
        <View style={styles.section}>
          <Text style={styles.sectionText}>위젯 설정</Text>
        </View>
        <Pressable
          onPress={() =>
            alignText({...setting, widgetAlignText: 'flex-start'})
          }>
          <Text>align text left</Text>
        </Pressable>
        <Pressable
          onPress={() => alignText({...setting, widgetAlignText: 'center'})}>
          <Text>align text center</Text>
        </Pressable>
        <Pressable
          onPress={() => alignText({...setting, widgetAlignText: 'flex-end'})}>
          <Text>align text right</Text>
        </Pressable>
      </View>
      <View style={{alignSelf: 'flex-end'}}>
        <HelloWidgetPreviewScreen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {margin: 10, marginTop: 20},
  sectionText: {fontWeight: 'bold', fontSize: 16},
});
