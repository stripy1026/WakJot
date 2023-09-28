import {atom} from 'recoil';

export type SettingsProps = {
  theme: string;
  widgetAlignText: 'flex-start' | 'flex-end' | 'center';
  widgetOpacity: number;
};

export const DEFAULT_SETTINGS: SettingsProps = {
  theme: 'Wakgood',
  widgetAlignText: 'flex-start',
  widgetOpacity: 0.6,
};

export const settings = atom<SettingsProps>({
  key: 'settings',
  default: DEFAULT_SETTINGS,
});
