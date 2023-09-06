import React from 'react';
import type {WidgetTaskHandlerProps} from 'react-native-android-widget';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {HelloWidget} from '@/widgets/HelloWidget';
import {STORAGE_KEY} from '@/store/store';

const nameToWidget = {
  Hello: HelloWidget,
};

export async function widgetTaskHandler(props: WidgetTaskHandlerProps) {
  const widgetInfo = props.widgetInfo;
  const Widget =
    nameToWidget[widgetInfo.widgetName as keyof typeof nameToWidget];

  const data =
    (await AsyncStorage.getItem(STORAGE_KEY)) ??
    '데이터를 불러오지 못했습니다.';

  switch (props.widgetAction) {
    case 'WIDGET_UPDATE':
    case 'WIDGET_ADDED':
      props.renderWidget(<Widget text={data} />);
      break;

    case 'WIDGET_RESIZED':
      // Not needed for now
      break;

    case 'WIDGET_DELETED':
      // Not needed for now
      break;

    case 'WIDGET_CLICK':
      // Not needed for now
      break;

    default:
      break;
  }
}
