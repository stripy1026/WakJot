import {ImageSourcePropType} from 'react-native';

import {color} from './store';

export type ThemeProps = {
  backgroundImage: ImageSourcePropType;
  color: string;
  name: string;
};

export const themeMap = {
  Wakgood: {
    backgroundImage: require('@/assets/tmp-tr.png'),
    color: color.WakGoodGreen,
    name: '우왁굳',
    backgroundColor: '#F4FFF9',
  },
  Ine: {
    backgroundImage: require('@/assets/tmp-tr.png'),
    color: color.IneViolet,
    name: '아이네',
    backgroundColor: '#F7F4FF',
  },
  Jingburger: {
    backgroundImage: require('@/assets/tmp-tr.png'),
    color: color.JingYellow,
    name: '징버거',
    backgroundColor: '#FFFEF2',
  },
  Lilpa: {
    backgroundImage: require('@/assets/bg-lilpa-preview.png'),
    color: color.LilNavy,
    name: '릴파',
    backgroundColor: '#F0F1FF',
  },
  Jururu: {
    backgroundImage: require('@/assets/tmp-tr.png'),
    color: color.RuruPink,
    name: '주르르',
    backgroundColor: '#FFF3F5',
  },
  Gosegu: {
    backgroundImage: require('@/assets/bg-segu.png'),
    color: color.SeguBlue,
    name: '고세구',
    backgroundColor: '#F5FDFF',
  },
  VIichan: {
    backgroundImage: require('@/assets/tmp-tr.png'),
    color: color.ChanGreen,
    name: '비챤',
    backgroundColor: '#F6FFF5',
  },
};
