#!/bin/bash

# CRIA Design System Development Server
# This script ensures the dev server always runs on port 3003

echo "🚀 Starting CRIA Design System on port 3003..."

# Kill any existing process on port 3003
echo "🔍 Checking for existing processes on port 3003..."
if lsof -ti:3003 > /dev/null 2>&1; then
    echo "⚠️  Found existing process on port 3003, killing it..."
    lsof -ti:3003 | xargs kill -9 2>/dev/null || true
    sleep 1
    echo "✅ Process killed"
else
    echo "✅ Port 3003 is available"
fi

# Start the development server
echo "🎯 Starting Vite dev server on port 3003..."
npm run dev
