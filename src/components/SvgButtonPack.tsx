/* eslint-disable react/react-in-jsx-scope */
import {View} from 'react-native';

import ThumbWakDo from '@/assets/thumb_wakdo.svg';
import TmpSvg from '@/assets/tmp.svg';
import {color} from '@/store/store';

type ButtonPackProps = {
  theme: string;
};

export const SvgButtonPack = ({theme}: ButtonPackProps) => {
  return (
    <View>
      {theme === 'Wakgood' && (
        <ThumbWakDo width={40} height={40} fill={color.darkGreen} />
      )}
      {theme === 'Ine' && (
        <TmpSvg width={40} height={40} fill={color.darkGreen} />
      )}
      {theme === 'Jingburger' && (
        <ThumbWakDo width={40} height={40} fill={color.darkGreen} />
      )}
      {theme === 'Lilpa' && (
        <TmpSvg width={40} height={40} fill={color.darkGreen} />
      )}
      {theme === 'Jururu' && (
        <ThumbWakDo width={40} height={40} fill={color.darkGreen} />
      )}
      {theme === 'Gosegu' && (
        <TmpSvg width={40} height={40} fill={color.darkGreen} />
      )}
      {theme === 'VIichan' && (
        <ThumbWakDo width={40} height={40} fill={color.darkGreen} />
      )}
    </View>
  );
};
