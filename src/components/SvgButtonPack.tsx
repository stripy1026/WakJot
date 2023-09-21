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
        <TmpSvg width={40} height={40} fill={color.IneViolet} />
      )}
      {theme === 'Jingburger' && (
        <ThumbWakDo width={40} height={40} fill={color.JingYellow} />
      )}
      {theme === 'Lilpa' && (
        <TmpSvg width={40} height={40} fill={color.LilNavy} />
      )}
      {theme === 'Jururu' && (
        <ThumbWakDo width={40} height={40} fill={color.RuruPink} />
      )}
      {theme === 'Gosegu' && (
        <TmpSvg width={40} height={40} fill={color.SeguBlue} />
      )}
      {theme === 'VIichan' && (
        <ThumbWakDo width={40} height={40} fill={color.ChanGreen} />
      )}
    </View>
  );
};
