import {ImageSourcePropType} from 'react-native';

export type ThemeProps = {
  backgroundImage: ImageSourcePropType;
};

export const themeMap = {
  Wakgood: {backgroundImage: require('@/assets/background2.jpg')},
  Ine: {backgroundImage: require('@/assets/tmpBG.jpg')},
  Jingburger: {backgroundImage: require('@/assets/tmpBG.jpg')},
  Lilpa: {backgroundImage: require('@/assets/tmpBG.jpg')},
  Jururu: {backgroundImage: require('@/assets/tmpBG.jpg')},
  Gosegu: {backgroundImage: require('@/assets/tmpBG.jpg')},
  VIichan: {backgroundImage: require('@/assets/tmpBG2.jpg')},
};
