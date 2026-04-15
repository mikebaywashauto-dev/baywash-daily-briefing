#!/bin/bash

# =============================================================
# Baywash Daily Briefing — Auto Deploy Script
# Builds the React app, then force-pushes dist/public to GitHub
# =============================================================

set -e

GITHUB_USERNAME="mikebaywashauto-dev"
GITHUB_TOKEN="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"
REPO_NAME="baywash-daily-briefing"
DATE_LABEL=$(date +%Y-%m-%d)

echo "=== Baywash Daily Briefing Deploy: $DATE_LABEL ==="

# 1) Build the React app from the project root
echo "[1/6] Building React app…"
cd /home/ubuntu/daily-briefing
npx vite build
echo "      Build complete."

# 2) cd into dist/public
echo "[2/6] Entering dist/public/…"
cd /home/ubuntu/daily-briefing/dist/public

# 3) Remove any existing .git folder
echo "[3/6] Cleaning previous .git…"
rm -rf .git

# 4) git init
echo "[4/6] Initializing fresh git repo…"
git init
git checkout -b main 2>/dev/null || git checkout main
git config user.email "deploy@baywashauto.com"
git config user.name "Baywash Deploy Bot"

# 5) Commit all files
echo "[5/6] Committing all files…"
git add -A
git commit -m "Daily briefing: $DATE_LABEL"

# 6) Force push to GitHub main branch
echo "[6/6] Force pushing to GitHub…"
git remote add origin "https://${GITHUB_USERNAME}:${GITHUB_TOKEN}@github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"
git push --force origin HEAD:main

echo ""
echo "=== Deploy complete ==="
echo "    Date: $DATE_LABEL"
