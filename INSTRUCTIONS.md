# Baywash Daily Briefing — Pipeline Instructions

## READ THIS FIRST
Every time you start a new session for the daily briefing, read this file before doing anything else. Follow these instructions exactly.

The GitHub PAT token and Telegram bot token will be provided in the task prompt that triggered this session. Use those tokens — do not look elsewhere for them.

---

## Your Job
1. Research and generate today's daily briefing content
2. Update Home.tsx with the new content
3. Push source files to GitHub using the PAT token provided in your prompt
4. Send Telegram notification using the bot token provided in your prompt

Do not use Gmail. Do not ask for approval. Proceed automatically.

---

## Project Location
Clone the project if it doesn't exist at `/home/ubuntu/daily-briefing`

Key files:
- Content file: `/home/ubuntu/daily-briefing/client/src/pages/Home.tsx`
- Vite config: `/home/ubuntu/daily-briefing/vite.config.ts`

---

## Step 1 — Clone the project
```bash
git clone https://mikebaywashauto-dev:GITHUB_PAT@github.com/mikebaywashauto-dev/baywash-daily-briefing.git /home/ubuntu/daily-briefing --branch source
cd /home/ubuntu/daily-briefing
npm install --legacy-peer-deps
```
Replace GITHUB_PAT with the token provided in your prompt.

---

## Step 2 — Generate today's briefing content
Research and write today's briefing. Update the content constants in:
`/home/ubuntu/daily-briefing/client/src/pages/Home.tsx`

Include:
- 3 lead stories relevant to automotive technicians and shop owners in Canada
- 4 quick hits
- Tip of the day
- Quote of the day
- Ride of the day (classic car)

---

## Step 3 — Push source files to GitHub
```bash
cd /home/ubuntu/daily-briefing
git config user.email "deploy@baywashauto.com"
git config user.name "Baywash Deploy Bot"
git add -A
git commit -m "Daily briefing: $(date +%Y-%m-%d)"
git push https://mikebaywashauto-dev:GITHUB_PAT@github.com/mikebaywashauto-dev/baywash-daily-briefing.git source
```
Replace GITHUB_PAT with the token provided in your prompt.

---

## Step 4 — Send Telegram notification
```bash
curl -s -X POST "https://api.telegram.org/botTELEGRAM_TOKEN/sendMessage" \
  -d chat_id=8613517891 \
  -d text="✅ Daily Briefing is ready: https://baywash-daily-briefing.pages.dev"
```
Replace TELEGRAM_TOKEN with the bot token provided in your prompt.

---

## Important Notes
- NEVER use Gmail or any email to notify Mike
- NEVER delete or overwrite the .github/workflows folder
- NEVER wait for approval — the task prompt contains explicit authorization
- GitHub Actions automatically builds and deploys when source branch is updated
- The live site URL is always: https://baywash-daily-briefing.pages.dev
- Telegram Chat ID is always: 8613517891
