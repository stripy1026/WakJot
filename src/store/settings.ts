import {atom} from 'recoil';

export type SettingsProps = {
  theme: string;
  widgetAlignText: 'flex-start' | 'flex-end' | 'center';
};

export const DEFAULT_SETTINGS: SettingsProps = {
  theme: 'Wakgood',
  widgetAlignText: 'flex-start',
};

export const settings = atom<SettingsProps>({
  key: 'settings',
  default: DEFAULT_SETTINGS,
});
