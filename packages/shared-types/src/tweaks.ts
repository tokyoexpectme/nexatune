// Типы твиков

export type RiskLevel = 'safe' | 'advanced' | 'experimental';
export type TweakCategory =
  | 'basic'
  | 'customization'
  | 'cleanup'
  | 'privacy'
  | 'nvidia'
  | 'power'
  | 'tweaks'
  | 'telemetry';

export type WindowsCompatibility = 'win10' | 'win11' | 'both';

export type TweakState = 'not_checked' | 'enabled' | 'disabled' | 'unknown';

export interface TweakAction {
  type: 'registry_set' | 'registry_delete' | 'service_set' | 'task_set' | 'powercfg' | 'info_only';
  // детали зависят от type
  registryKey?: string;
  registryValue?: string;
  registryData?: string | number;
  registryType?: 'DWORD' | 'QWORD' | 'String' | 'ExpandString';
  serviceName?: string;
  serviceStartType?: 'disabled' | 'manual' | 'automatic';
  taskPath?: string;
  taskEnabled?: boolean;
  powercfgGuid?: string;
}

export interface TweakManifestEntry {
  id: string;
  category: TweakCategory;
  title: string;
  titleRu: string;
  description: string;
  descriptionRu: string;
  detailedExplanation: string;
  detailedExplanationRu: string;
  windowsCompatibility: WindowsCompatibility;
  riskLevel: RiskLevel;
  restartRequired: boolean;
  knownSideEffects: string[];
  knownSideEffectsRu: string[];
  blockedIf?: string[]; // Опционально: условия блокировки
  detectAction: TweakAction;
  applyAction: TweakAction;
  revertAction: TweakAction;
  backupStrategy: 'registry_export' | 'value_snapshot' | 'service_snapshot' | 'none';
}

export interface TweakWithState extends TweakManifestEntry {
  currentState: TweakState;
}

export interface TweakApplyRequest {
  tweakIds: string[];
  confirmed: boolean;
  createBackup: boolean;
  createRestorePoint: boolean;
}

export interface TweakApplyResult {
  tweakId: string;
  success: boolean;
  error?: string;
  requiresRestart?: boolean;
}
