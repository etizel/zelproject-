/**
 * Antes de `npm run dev`: remove lock órfão se nenhum next dev estiver ativo.
 * Evita erro "Unable to acquire lock" sem exigir PowerShell manual.
 */
import { existsSync, unlinkSync } from 'node:fs';
import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const lockPath = path.join(root, '.next', 'dev', 'lock');

function isPortInUse(port) {
  try {
    if (process.platform === 'win32') {
      const out = execSync(
        `netstat -ano | findstr ":${port} " | findstr LISTENING`,
        { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] },
      );
      return out.trim().length > 0;
    }
    execSync(`lsof -i :${port} -sTCP:LISTEN`, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

const port3000Busy = isPortInUse(3000);
const lockExists = existsSync(lockPath);

if (lockExists && !port3000Busy) {
  try {
    unlinkSync(lockPath);
    console.log('[etizel] Lock órfão removido (.next/dev/lock)');
  } catch {
    console.warn('[etizel] Não foi possível remover o lock. Execute: npm run dev:reset');
  }
}

if (port3000Busy) {
  console.warn(
    '[etizel] Porta 3000 ocupada — Next pode subir na 3001. Execute: npm run dev:reset',
  );
}
