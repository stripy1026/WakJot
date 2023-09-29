import {ImageSourcePropType} from 'react-native';

import {color} from './store';

export type ThemeProps = {
  backgroundImage: ImageSourcePropType;
  color: string;
  name: string;
};

export const themeMap = {
  Wakgood: {
    backgroundImage: require('@/assets/background2.jpg'),
    color: color.darkGreen,
    name: '우왁굳',
  },
  Ine: {
    backgroundImage: require('@/assets/tmpBG2.jpg'),
    color: color.IneViolet,
    name: '아이네',
  },
  Jingburger: {
    backgroundImage: require('@/assets/tmpBG2.jpg'),
    color: color.JingYellow,
    name: '징버거',
  },
  Lilpa: {
    backgroundImage: require('@/assets/tmpBG2.jpg'),
    color: color.LilNavy,
    name: '릴파',
  },
  Jururu: {
    backgroundImage: require('@/assets/tmpBG2.jpg'),
    color: color.RuruPink,
    name: '주르르',
  },
  Gosegu: {
    backgroundImage: require('@/assets/tmpBG2.jpg'),
    color: color.SeguBlue,
    name: '고세구',
  },
  VIichan: {
    backgroundImage: require('@/assets/tmpBG2.jpg'),
    color: color.ChanGreen,
    name: '비챤',
  },
};
