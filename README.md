# NexaTune

> Премиум-оптимизатор Windows 10/11 с интерфейсом в стиле Apple Liquid Glass

## Стек технологий

| Слой | Технологии |
|------|------------|
| UI | React 18 + TypeScript + Vite |
| Desktop | Electron 31 |
| State | Zustand |
| i18n | i18next |
| Charts | Recharts |
| Validation | Zod |
| Worker | C# .NET 8 |
| Packaging | electron-builder |

## Структура проекта

```
/nexatune
  /apps
    /desktop-electron        — Electron main/preload
    /ui-react                — React + TypeScript UI
    /windows-worker-dotnet   — C# .NET 8 elevated worker
  /packages
    /shared-types            — Общие DTOs/интерфейсы
    /tweak-manifests         — JSON-манифесты твиков
  /docs
  README.md
```

## Быстрый старт (Phase 1)

### Требования

- Node.js 20+ (https://nodejs.org)
- pnpm 9+ (`npm install -g pnpm`)
- .NET 8 SDK (https://dotnet.microsoft.com/download/dotnet/8.0)
- Visual Studio Code (https://code.visualstudio.com)
- Windows 10/11

### Установка

```bash
# 1. Клонируй репозиторий
git clone https://github.com/tokyoexpectme/nexatune.git
cd nexatune

# 2. Установи зависимости Node
pnpm install

# 3. Собери C# worker
cd apps/windows-worker-dotnet
dotnet restore
dotnet build
cd ../..

# 4. Запусти в режиме разработки
pnpm dev
```

### Production сборка

```bash
# Собрать всё
pnpm build

# Упаковать в .exe установщик
pnpm package
```

## Фазы разработки

### Phase 1 (текущая) — UI + сканирование + read-only диагностика
- [x] Полная структура проекта
- [x] Electron main/preload с безопасным IPC
- [x] React UI с Liquid Glass дизайном
- [x] Главная страница (Bento Grid дашборд)
- [x] Страница Оптимизации (каталог твиков)
- [x] Страница Настроек
- [x] macOS Dock навигация
- [x] Русский и английский язык
- [x] C# Worker — SystemInfo, Scan, Registry detection
- [x] Светлая, тёмная и Pure Black темы

### Phase 2 — Бэкапы + первые обратимые твики
- [ ] BackupService полная реализация
- [ ] RestorePointService
- [ ] Первые 10 безопасных твиков с apply/revert
- [ ] Страница Backups
- [ ] Review screen перед применением

### Phase 3 — Fixes + Tools
- [ ] Страница Fixes (история + совместимость)
- [ ] Advanced Internet Test
- [ ] PC Responsiveness Test
- [ ] Known issues карточки

### Phase 4 — Packaging + Signing + Updates
- [ ] Code signing сертификат
- [ ] Auto-updater (electron-updater)
- [ ] NSIS installer
- [ ] CI/CD (GitHub Actions)

## Безопасность

- `contextIsolation: true`, `nodeIntegration: false`
- Только типизированные IPC-методы через preload
- Allowlist команд через JSON-манифесты
- Никаких произвольных PowerShell из UI
- Обязательное подтверждение пользователя перед каждым изменением
- Бэкап перед каждым пакетным применением

## Лицензия

MIT
