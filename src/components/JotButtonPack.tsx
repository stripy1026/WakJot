/* eslint-disable react/react-in-jsx-scope */
import {
  GestureResponderEvent,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {themeMap} from '@/store/themeMap';
import {ThemeSvg} from '@/components/ThemeSvg';

type ButtonPackProps = {
  theme: string;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
};

export const JotButtonPack = ({theme, onPress: saveText}: ButtonPackProps) => {
  const {color, buttonColor, shadowColor} =
    themeMap[theme as keyof typeof themeMap];
  return (
    <Pressable
      style={{
        ...styles.button,
        flex: 1,
        backgroundColor: color,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(255, 255, 255, 0.30)',
        shadowColor: shadowColor,
        shadowOffset: {
          width: 0,
          height: 11,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8,

        elevation: 7,
      }}
      onPress={saveText}>
      <View style={styles.buttonContent}>
        <Text style={{...styles.buttonText, color: buttonColor}}>JOT</Text>
        <ThemeSvg theme={theme} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontFamily: Platform.OS === 'android' ? 'Pretendard-Medium' : 'default',
    letterSpacing: Platform.OS === 'android' ? -0.425 : 0,
  },
});
