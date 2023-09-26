import {ImageSourcePropType} from 'react-native';

import {color} from './store';

export type ThemeProps = {
  backgroundImage: ImageSourcePropType;
  color: string;
};

export const themeMap = {
  Wakgood: {
    backgroundImage: require('@/assets/background2.jpg'),
    color: color.darkGreen,
  },
  Ine: {backgroundImage: require('@/assets/tmpBG.jpg'), color: color.IneViolet},
  Jingburger: {
    backgroundImage: require('@/assets/tmpBG.jpg'),
    color: color.JingYellow,
  },
  Lilpa: {
    backgroundImage: require('@/assets/tmpBG.jpg'),
    color: color.LilNavy,
  },
  Jururu: {
    backgroundImage: require('@/assets/tmpBG.jpg'),
    color: color.RuruPink,
  },
  Gosegu: {
    backgroundImage: require('@/assets/tmpBG.jpg'),
    color: color.SeguBlue,
  },
  VIichan: {
    backgroundImage: require('@/assets/tmpBG2.jpg'),
    color: color.ChanGreen,
  },
};
