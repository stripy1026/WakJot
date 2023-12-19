/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';

import WakgoodSvg from '@/assets/icon-wakgood.svg';
import ThumbWakDo from '@/assets/thumb_wakdo.svg';
import LilpaSvg from '@/assets/icon-lilpa.svg';
import VIichanSvg from '@/assets/icon-viichan.svg';
import JingburgerSvg from '@/assets/icon-jingburger.svg';
import IneSvg from '@/assets/icon-ine.svg';
import JururuSvg from '@/assets/icon-jururu.svg';
import GoseguSvg from '@/assets/icon-gosegu.svg';

import {themeMap} from '@/store/themeMap';

type ThemeSvgProps = {
  theme: string;
  width?: number;
  height?: number;
};

export const ThemeSvg = ({theme, width, height}: ThemeSvgProps) => {
  const WIDTH = width ?? 22;
  const HEIGHT = height ?? 22;
  const FILL = themeMap[theme as keyof typeof themeMap].color;

  return (
    <View>
      {theme === 'Wakgood' && (
        <WakgoodSvg width={WIDTH} height={HEIGHT} fill={FILL} />
      )}
      {theme === 'Wakdoo' && (
        <ThumbWakDo width={WIDTH} height={HEIGHT} fill={FILL} />
      )}
      {theme === 'Ine' && <IneSvg width={WIDTH} height={HEIGHT} fill={FILL} />}
      {theme === 'Jingburger' && (
        <JingburgerSvg width={WIDTH} height={HEIGHT} fill={FILL} />
      )}
      {theme === 'Lilpa' && (
        <LilpaSvg width={WIDTH} height={HEIGHT} fill={FILL} />
      )}
      {theme === 'Jururu' && (
        <JururuSvg width={WIDTH} height={HEIGHT} fill={FILL} />
      )}
      {theme === 'Gosegu' && (
        <GoseguSvg width={WIDTH} height={HEIGHT} fill={FILL} />
      )}
      {theme === 'VIichan' && (
        <VIichanSvg width={WIDTH} height={HEIGHT} fill={FILL} />
      )}
    </View>
  );
};
