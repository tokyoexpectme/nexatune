// Типы бэкапа

export interface BackupRecord {
  id: string;
  name: string;
  createdAt: string; // ISO
  windowsVersion: string;
  windowsBuild: string;
  appVersion: string;
  manifestVersion: string;
  tweaks: BackupTweakEntry[];
  restorePointCreated: boolean;
  restorePointId?: string;
  status: 'complete' | 'partial' | 'failed';
}

export interface BackupTweakEntry {
  tweakId: string;
  beforeValue: unknown;
  appliedValue: unknown;
  success: boolean;
  error?: string;
}

export interface BackupProfile {
  id: string;
  name: string;
  nameRu: string;
  tweakIds: string[];
  builtIn: boolean;
  createdAt: string;
}
