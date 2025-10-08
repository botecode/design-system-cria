# Deployment Guide for Render

## Prerequisites
- Node.js 18+ installed
- Render account
- Git repository with your code

## Render Deployment Steps

### 1. Create a New Web Service on Render
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Web Service"
3. Connect your Git repository
4. Configure the service

### 2. Render Configuration
Use these settings in Render:

**Build & Deploy:**
- **Build Command:** `npm install && npm run build:web`
- **Start Command:** `npm run start:web`
- **Environment:** `Node`
- **Node Version:** `18`

**Environment Variables:**
- `NODE_ENV` = `production`

### 3. Alternative: Using render.yaml
If you prefer configuration as code, the `render.yaml` file is already configured for this project.

### 4. Deploy
1. Push your changes to your Git repository
2. Render will automatically build and deploy your application
3. Your app will be available at the provided Render URL

## Local Testing
Before deploying, test the web build locally:

```bash
# Install dependencies
npm install

# Build for web deployment
npm run build:web

# Preview the built application
npm run start:web
```

## Accessing Your Application
- **Design System:** Available at the root URL
- **Blueprints:** Available at `/#blueprints`
- **Companies Dashboard:** Available at `/#blueprints` → "Companies Dashboard"

## Troubleshooting

### Common Issues:
1. **Build fails:** Check that all dependencies are in `package.json`
2. **Port issues:** Ensure the app binds to `0.0.0.0:10000`
3. **Static files:** Make sure `index.html` exists in the root

### Debug Commands:
```bash
# Check if build works locally
npm run build:web

# Test the preview server
npm run start:web
```

## File Structure
```
/
├── index.html          # Entry point for web app
├── src/
│   ├── App.tsx         # Main app component
│   ├── Router.tsx      # Routing logic
│   ├── BlueprintsApp.tsx
│   └── components/     # Design system components
├── vite.config.web.ts  # Web deployment config
├── render.yaml         # Render configuration
└── package.json        # Dependencies and scripts
```
