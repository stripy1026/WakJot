/* eslint-disable react/react-in-jsx-scope */
import {
  GestureResponderEvent,
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
  return (
    <Pressable
      style={{
        ...styles.button,
        flex: 1,
        backgroundColor: themeMap[theme as keyof typeof themeMap].color,
      }}
      onPress={saveText}>
      <View style={styles.buttonContent}>
        <Text style={styles.buttonText}>JOT</Text>
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
    fontWeight: '500',
    fontSize: 17,
    color: '#2D2D2D',
  },
});
