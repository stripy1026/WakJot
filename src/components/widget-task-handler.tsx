import React from 'react';
import type {WidgetTaskHandlerProps} from 'react-native-android-widget';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {HelloWidget} from '@/widgets/HelloWidget';
import {STORAGE_KEY, STORAGE_SETTINGS_KEY} from '@/store/store';
import {DEFAULT_SETTINGS} from '@/store/settings';

const nameToWidget = {
  Hello: HelloWidget,
};

export async function widgetTaskHandler(props: WidgetTaskHandlerProps) {
  const widgetInfo = props.widgetInfo;
  const Widget =
    nameToWidget[widgetInfo.widgetName as keyof typeof nameToWidget];

  const data = (await AsyncStorage.getItem(STORAGE_KEY)) ?? '';
  const setting =
    (await AsyncStorage.getItem(STORAGE_SETTINGS_KEY)) ??
    DEFAULT_SETTINGS.widgetAlignText;
  const parsedSetting = JSON.parse(setting);

  switch (props.widgetAction) {
    case 'WIDGET_UPDATE':
    case 'WIDGET_ADDED':
    case 'WIDGET_RESIZED':
      props.renderWidget(<Widget text={data} setting={parsedSetting} />);
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
