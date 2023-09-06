import React from 'react';
import {FlexWidget, TextWidget} from 'react-native-android-widget';

export function HelloWidget() {
  return (
    <FlexWidget
      style={{
        height: 'match_parent',
        width: 'match_parent',
        backgroundColor: `rgba(${0}, ${0}, ${0}, ${0.7})`,
        borderRadius: 16,
      }}
      clickAction="OPEN_APP">
      <TextWidget
        text="Hello"
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
