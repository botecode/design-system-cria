#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read package.json
const packagePath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

// Parse current version
const [major, minor, patch] = packageJson.version.split('.').map(Number);

// Increment patch version with 3-digit format
const newPatch = patch + 1;
const newVersion = `${major}.${minor}.${newPatch.toString().padStart(3, '0')}`;

// Update package.json
packageJson.version = newVersion;
fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n');

// Update App.tsx version display
const appPath = path.join(__dirname, '..', 'src', 'App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');

// Replace version in sidebar
const versionRegex = /v\d+\.\d+\.\d+/g;
appContent = appContent.replace(versionRegex, `v${newVersion}`);

fs.writeFileSync(appPath, appContent);

console.log(`Version updated to ${newVersion}`);
console.log(`Updated package.json and App.tsx`);
