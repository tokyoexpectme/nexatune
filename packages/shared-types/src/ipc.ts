// IPC-контракт между Electron и React UI

export type IpcChannel =
  | 'system:getInfo'
  | 'system:scan'
  | 'system:cancelScan'
  | 'tweaks:getAll'
  | 'tweaks:detect'
  | 'tweaks:apply'
  | 'tweaks:revert'
  | 'backup:create'
  | 'backup:list'
  | 'backup:restore'
  | 'backup:delete'
  | 'settings:get'
  | 'settings:set'
  | 'worker:ping'
  | 'window:minimize'
  | 'window:maximize'
  | 'window:close'
  | 'shell:openDataFolder'
  | 'shell:openExternal';

export interface IpcRequest<T = unknown> {
  channel: IpcChannel;
  payload?: T;
}

export interface IpcResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  warning?: string;
  requiresRestart?: boolean;
}
