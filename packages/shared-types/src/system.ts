// Системные типы

export interface SystemInfo {
  os: OsInfo;
  cpu: CpuInfo;
  gpu: GpuInfo[];
  ram: RamInfo;
  disks: DiskInfo[];
  network: NetworkAdapterInfo[];
  uptime: number; // секунды
  powerPlan: PowerPlanInfo;
}

export interface OsInfo {
  edition: string;
  version: string;
  build: string;
  architecture: string;
  isWindows10: boolean;
  isWindows11: boolean;
}

export interface CpuInfo {
  name: string;
  cores: number;
  threads: number;
  baseSpeedMHz: number;
}

export interface GpuInfo {
  name: string;
  driverVersion?: string;
  isNvidia: boolean;
  vramMB?: number;
}

export interface RamInfo {
  totalGB: number;
  usedGB: number;
  freeGB: number;
}

export interface DiskInfo {
  name: string;
  label: string;
  totalGB: number;
  freeGB: number;
  usedPercent: number;
  type: 'SSD' | 'HDD' | 'NVMe' | 'Unknown';
}

export interface NetworkAdapterInfo {
  name: string;
  description: string;
  macAddress: string;
  ipv4?: string;
  linkSpeedMbps?: number;
  isActive: boolean;
}

export interface PowerPlanInfo {
  name: string;
  guid: string;
  isBalanced: boolean;
  isHighPerformance: boolean;
  isPowerSaver: boolean;
}

export interface ScanResult {
  score: number; // 0-100
  factors: ScanFactor[];
  scannedAt: string; // ISO date
  scanDurationMs: number;
}

export interface ScanFactor {
  id: string;
  name: string;
  nameRu: string;
  impact: number; // влияние на счёт 0-20
  current: number; // текущее значение 0-100
  status: 'good' | 'warning' | 'info';
  description: string;
  descriptionRu: string;
}
