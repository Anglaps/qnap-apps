#!/bin/bash

# ==============================================================================
# QNAP NAS DEPLOYMENT HOOK
# ==============================================================================
# This script automates the deployment of the ANGLAPS INC website to the 
# QNAP NAS as per the required workflow:
# 1. Local Commit & Push
# 2. NAS Code Sync (via Docker)
# 3. NAS Site Build (via Docker)
# ==============================================================================

# --- CONFIGURATION ---
# Please ensure you have SSH access to your NAS set up.
# Update the NAS_HOST with your actual NAS IP address.
NAS_USER="admin"
NAS_HOST="192.168.1.195"
NAS_PORT="2222"

echo "🚀 [1/3] Starting Local Deployment... "

# Check for uncommitted changes
if [[ -n $(git status -s) ]]; then
    echo "📦 Detected uncommitted changes. Committing now..."
    git add .
    read -p "Enter commit message (default: 'Site update'): " msg
    msg=${msg:-"Site update $(date +'%Y-%m-%d %H:%M:%S')"}
    git commit -m "$msg"
else
    echo "✅ Workspace is clean."
fi

# Push to GitHub
echo "📤 Pushing to GitHub (origin main)..."
export SKIP_NAS_HOOK=1
git push origin main
unset SKIP_NAS_HOOK

if [ $? -ne 0 ]; then
    echo "❌ Error: Failed to push to GitHub. Aborting NAS sync."
    exit 1
fi

echo "✅ Local push complete."

# Trigger NAS Sync and Build
echo "📡 [2/3] Connecting to QNAP NAS to Sync Code..."

ssh -p ${NAS_PORT} ${NAS_USER}@${NAS_HOST} << 'EOF'
  echo "📥 [NAS] Pulling latest files from GitHub..."
  docker run --rm \
    -v /share/Container:/data \
    -v /share/Container/github_keys:/keys \
    alpine/git -C /data/qnap-apps -c core.sshCommand="ssh -i /keys/Keygen -o StrictHostKeyChecking=no" pull origin main

  echo "🏗️ [3/3] [NAS] Building the site (Vite/Node) directly on NAS..."
  /share/CACHEDEV2_DATA/.qpkg/container-station/usr/bin/docker run --rm \
    -v /share/Container/qnap-apps/anglapinfotech-website:/app \
    -w /app \
    node:20-alpine \
    sh -c "npm install && npm run build"

  echo "✨ [NAS] Website build complete! Nginx will serve the new /dist folder automatically."
EOF

if [ $? -eq 0 ]; then
    echo "🎊 SUCCESS: Deployment to QNAP NAS finished successfully!"
else
    echo "❌ ERROR: NAS deployment failed. Check NAS connection or Docker logs."
fi
