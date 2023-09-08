import React from 'react';
import {FlexWidget, TextWidget} from 'react-native-android-widget';

type HelloWidgetProps = {
  text: string;
};

export function HelloWidget({text}: HelloWidgetProps) {
  return (
    <FlexWidget
      style={{
        height: 'match_parent',
        width: 'match_parent',
        backgroundColor: `rgba(${0}, ${0}, ${0}, ${0.6})`,
        borderRadius: 16,
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
