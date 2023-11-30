import {ImageSourcePropType} from 'react-native';

import {color} from './store';

export type ThemeProps = {
  backgroundImage: ImageSourcePropType;
  color: string;
  name: string;
  backgroundColor: string;
  buttonColor: string;
  shadowColor: string;
};

export const themeMap = {
  Wakgood: {
    backgroundImage: require('@/assets/tmp-tr.png'),
    color: color.WakGoodGreen,
    name: '우왁굳',
    backgroundColor: '#F4FFF9',
    buttonColor: '#00FF85',
    shadowColor: '#3EFF3A',
  },
  Ine: {
    backgroundImage: require('@/assets/tmp-tr.png'),
    color: color.IneViolet,
    name: '아이네',
    backgroundColor: '#F7F4FF',
    buttonColor: '#A585FF',
    shadowColor: '#C58BFF',
  },
  Jingburger: {
    backgroundImage: require('@/assets/tmp-tr.png'),
    color: color.JingYellow,
    name: '징버거',
    backgroundColor: '#FFFEF2',
    buttonColor: '#FFB800',
    shadowColor: '#FFC530',
  },
  Lilpa: {
    backgroundImage: require('@/assets/bg-lilpa-preview.png'),
    color: color.LilNavy,
    name: '릴파',
    backgroundColor: '#F0F1FF',
    buttonColor: '#86A1FF',
    shadowColor: '#98AFFF',
  },
  Jururu: {
    backgroundImage: require('@/assets/tmp-tr.png'),
    color: color.RuruPink,
    name: '주르르',
    backgroundColor: '#FFF3F5',
    buttonColor: '#FF87B2',
    shadowColor: '#FF8DA3',
  },
  Gosegu: {
    backgroundImage: require('@/assets/bg-segu.png'),
    color: color.SeguBlue,
    name: '고세구',
    backgroundColor: '#F5FDFF',
    buttonColor: '#48D3FF',
    shadowColor: '#68E4FF',
  },
  VIichan: {
    backgroundImage: require('@/assets/tmp-tr.png'),
    color: color.ChanGreen,
    name: '비챤',
    backgroundColor: '#F6FFF5',
    buttonColor: '#93D900',
    shadowColor: '#5EFF12',
  },
};
