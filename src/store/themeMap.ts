import {ImageSourcePropType} from 'react-native';

export type ThemeProps = {
  backgroundImage: ImageSourcePropType;
};

export const themeMap = {
  Wakgood: {backgroundImage: require('@/assets/background2.jpg')},
  Lilpa: {backgroundImage: require('@/assets/tmpBG.jpg')},
  VIichan: {backgroundImage: require('@/assets/tmpBG2.jpg')},
};
