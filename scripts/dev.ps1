# Reset + inicia Next.js sempre na porta 3000
$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $projectRoot

& "$PSScriptRoot\dev-reset.ps1"
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

$env:PORT = '3000'
$env:NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS = '1'
$env:BROWSERSLIST_IGNORE_OLD_DATA = 'true'
# Evita conflito se NODE_TLS_REJECT_UNAUTHORIZED=0 estiver no sistema
Remove-Item Env:NODE_TLS_REJECT_UNAUTHORIZED -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "Iniciando em http://localhost:3000" -ForegroundColor Cyan
Write-Host "Aguarde 'Ready' na primeira compilacao (pode levar ~20s)" -ForegroundColor DarkGray
Write-Host ""

npm run dev
