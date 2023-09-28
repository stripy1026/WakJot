import {atom} from 'recoil';

export type SettingsProps = {
  theme: string;
  widgetAlignText: 'flex-start' | 'flex-end' | 'center';
  widgetOpacity: number;
  widgetFontSize: number;
  homeAlignText: 'left' | 'center' | 'right';
  homeFontSize: number;
};

export const DEFAULT_SETTINGS: SettingsProps = {
  theme: 'Wakgood',
  widgetAlignText: 'flex-start',
  widgetOpacity: 0.6,
  widgetFontSize: 16,
  homeAlignText: 'left',
  homeFontSize: 20,
};

export const settings = atom<SettingsProps>({
  key: 'settings',
  default: DEFAULT_SETTINGS,
});
