/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';

import ThumbWakDo from '@/assets/thumb_wakdo.svg';
import TmpSvg from '@/assets/tmp.svg';

import {themeMap} from '@/store/themeMap';

type ThemeSvgProps = {
  theme: string;
};

export const ThemeSvg = ({theme}: ThemeSvgProps) => {
  const WIDTH = 40;
  const HEIGHT = 40;
  const FILL = themeMap[theme as keyof typeof themeMap].color;

  return (
    <View>
      {theme === 'Wakgood' && (
        <ThumbWakDo width={WIDTH} height={HEIGHT} fill={FILL} />
      )}
      {theme === 'Ine' && <TmpSvg width={WIDTH} height={HEIGHT} fill={FILL} />}
      {theme === 'Jingburger' && (
        <ThumbWakDo width={WIDTH} height={HEIGHT} fill={FILL} />
      )}
      {theme === 'Lilpa' && (
        <TmpSvg width={WIDTH} height={HEIGHT} fill={FILL} />
      )}
      {theme === 'Jururu' && (
        <ThumbWakDo width={WIDTH} height={HEIGHT} fill={FILL} />
      )}
      {theme === 'Gosegu' && (
        <TmpSvg width={WIDTH} height={HEIGHT} fill={FILL} />
      )}
      {theme === 'VIichan' && (
        <ThumbWakDo width={WIDTH} height={HEIGHT} fill={FILL} />
      )}
    </View>
  );
};
