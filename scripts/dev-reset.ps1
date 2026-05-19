# Encerra instâncias do Next.js e libera portas 3000–3002 (evita redirect para 3001)
$ErrorActionPreference = 'SilentlyContinue'
$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $projectRoot

Write-Host "== Etizel: reset do ambiente de desenvolvimento ==" -ForegroundColor Cyan

foreach ($port in 3000, 3001, 3002) {
    $pids = @()

    $conns = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
    foreach ($conn in $conns) {
        if ($conn.OwningProcess -and $conn.OwningProcess -ne 0) {
            $pids += $conn.OwningProcess
        }
    }

    $netstat = netstat -ano | Select-String ":$port\s+.*LISTENING"
    foreach ($line in $netstat) {
        $parts = ($line -replace '\s+', ' ').ToString().Trim().Split(' ')
        $last = $parts[-1]
        if ($last -match '^\d+$') { $pids += [int]$last }
    }

    foreach ($procId in ($pids | Select-Object -Unique)) {
        Stop-Process -Id $procId -Force -ErrorAction SilentlyContinue
        Write-Host "  Porta $port liberada (PID $procId)" -ForegroundColor Yellow
    }
}

Get-CimInstance Win32_Process -Filter "Name='node.exe'" |
  Where-Object { $_.CommandLine -match 'next(\.cmd)?\s+dev|next\\dist\\bin\\next' } |
  ForEach-Object {
    Stop-Process -Id $_.ProcessId -Force
    Write-Host "  Processo next dev encerrado (PID $($_.ProcessId))" -ForegroundColor Yellow
  }

$lockPath = Join-Path $projectRoot '.next\dev\lock'
if (Test-Path $lockPath) {
  Remove-Item $lockPath -Force
  Write-Host "  Lock removido: .next\dev\lock" -ForegroundColor Green
}

Start-Sleep -Seconds 1

$stillLocked = Test-Path $lockPath
$port3000 = Get-NetTCPConnection -LocalPort 3000 -State Listen -ErrorAction SilentlyContinue

if ($stillLocked) {
  Write-Host "ERRO: lock ainda presente. Feche todos os terminais com npm run dev." -ForegroundColor Red
  exit 1
}

if ($port3000) {
  Write-Host "AVISO: porta 3000 ainda em uso. Reinicie o PC ou encerre o processo manualmente." -ForegroundColor Red
  exit 1
}

Write-Host "Ambiente limpo. Use: npm run dev" -ForegroundColor Green
exit 0
