/* eslint-disable react/react-in-jsx-scope */
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {color} from '@/store/store';

import ThumbWakDo from '@/assets/thumb_wakdo.svg';
import TmpSvg from '@/assets/tmp.svg';

type ButtonPackProps = {
  theme: string;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
};

export const SvgButtonPack = ({theme, onPress: saveText}: ButtonPackProps) => {
  return (
    <Pressable
      style={{
        ...styles.button,
        flex: 2,
        backgroundColor: color.darkGreen,
      }}
      onPress={saveText}>
      <View style={styles.buttonContent}>
        <Text style={styles.buttonText}>JOT</Text>
        {theme === 'Wakgood' && (
          <ThumbWakDo width={40} height={40} fill={color.darkGreen} />
        )}
        {theme === 'Ine' && (
          <TmpSvg width={40} height={40} fill={color.IneViolet} />
        )}
        {theme === 'Jingburger' && (
          <ThumbWakDo width={40} height={40} fill={color.JingYellow} />
        )}
        {theme === 'Lilpa' && (
          <TmpSvg width={40} height={40} fill={color.LilNavy} />
        )}
        {theme === 'Jururu' && (
          <ThumbWakDo width={40} height={40} fill={color.RuruPink} />
        )}
        {theme === 'Gosegu' && (
          <TmpSvg width={40} height={40} fill={color.SeguBlue} />
        )}
        {theme === 'VIichan' && (
          <ThumbWakDo width={40} height={40} fill={color.ChanGreen} />
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
  },
  buttonContent: {height: 50, flexDirection: 'row', alignItems: 'center'},
  buttonText: {
    marginBottom: 5,
    fontWeight: '700',
    fontSize: 25,
  },
});
