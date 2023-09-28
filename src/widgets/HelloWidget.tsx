import {SettingsProps} from '@/store/settings';
import React from 'react';
import {FlexWidget, TextWidget} from 'react-native-android-widget';

type HelloWidgetProps = {
  text: string;
  setting: SettingsProps;
};

export function HelloWidget({text, setting}: HelloWidgetProps) {
  return (
    <FlexWidget
      style={{
        height: 'match_parent',
        width: 'match_parent',
        backgroundColor: `rgba(${0}, ${0}, ${0}, ${setting.widgetOpacity})`,
        borderRadius: 16,
        alignItems: setting.widgetAlignText,
      }}
      clickAction="OPEN_APP">
      <TextWidget
        text={text}
        style={{
          fontSize: 16,
          margin: 10,
          fontFamily: 'Inter',
          color: '#ffffff',
        }}
      />
    </FlexWidget>
  );
}
