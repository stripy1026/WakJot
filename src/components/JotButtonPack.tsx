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
        flex: 2,
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
  },
  buttonContent: {height: 50, flexDirection: 'row', alignItems: 'center'},
  buttonText: {
    marginBottom: 5,
    fontWeight: '700',
    fontSize: 25,
    color: 'white',
  },
});
