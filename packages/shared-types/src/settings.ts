// Настройки приложения

export type AppTheme = 'liquid-dark' | 'pure-black' | 'light';
export type AccentColor = 'red' | 'blue' | 'violet' | 'auto';
export type AppLanguage = 'en' | 'ru';

export interface AppSettings {
  language: AppLanguage;
  theme: AppTheme;
  accentColor: AccentColor;
  animationsEnabled: boolean;
  launchAtStartup: boolean;
  backupRetentionCount: number;
  diagnosticLogging: boolean;
  checkUpdates: boolean;
  firstLaunchCompleted: boolean;
  termsAccepted: boolean;
  privacyAccepted: boolean;
}

export const DEFAULT_SETTINGS: AppSettings = {
  language: 'ru',
  theme: 'liquid-dark',
  accentColor: 'blue',
  animationsEnabled: true,
  launchAtStartup: false,
  backupRetentionCount: 30,
  diagnosticLogging: false,
  checkUpdates: true,
  firstLaunchCompleted: false,
  termsAccepted: false,
  privacyAccepted: false,
};
