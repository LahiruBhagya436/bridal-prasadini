@echo off
title Bridal Prasadini — Dev Server
color 0B
cd /d "%~dp0"

echo.
echo  ============================================
echo   Bridal Prasadini Website - Dev Server
echo  ============================================
echo.

if not exist "node_modules\next\dist\compiled" (
    echo  Installing dependencies (first time - takes 2-3 minutes)...
    rmdir /s /q node_modules 2>nul
    call npm install
    echo.
)

echo  Starting development server at http://localhost:3000
echo  Press Ctrl+C to stop.
echo.
timeout /t 2 /nobreak >nul
start "" "http://localhost:3000"
call npm run dev
pause
