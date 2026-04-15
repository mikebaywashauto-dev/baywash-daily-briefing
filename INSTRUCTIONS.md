# Baywash Daily Briefing — Pipeline Instructions

## READ THIS FIRST
Every time you start a new session for the daily briefing, read this file before doing anything else. Follow these instructions exactly.

---

## Your Job
1. Research and generate today's daily briefing content
2. Update Home.tsx with the new content
3. Push source files to GitHub
4. Send Telegram notification

That's it. Do not use Gmail. Do not ask for approval. Do not wait for confirmation.

---

## Project Location
The project lives at: `/home/ubuntu/daily-briefing`

Key files:
- Content file: `/home/ubuntu/daily-briefing/client/src/pages/Home.tsx`
- Deploy script: `/home/ubuntu/daily-briefing/deploy.sh`
- Vite config: `/home/ubuntu/daily-briefing/vite.config.ts`

---

## Step 1 — Clone the project if it doesn't exist
If `/home/ubuntu/daily-briefing` does not exist, run:
```bash
git clone https://GITHUB_USERNAME: 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
@github.com/mikebaywashauto-dev/baywash-daily-briefing.git /home/ubuntu/daily-briefing --branch source
cd /home/ubuntu/daily-briefing
npm install --legacy-peer-deps
```

---

## Step 2 — Generate today's briefing content
Research and write today's briefing. Update the content constants in:
`/home/ubuntu/daily-briefing/client/src/pages/Home.tsx`

---

## Step 3 — Push source files to GitHub
Run the following commands:
```bash
cd /home/ubuntu/daily-briefing
git config user.email "deploy@baywashauto.com"
git config user.name "Baywash Deploy Bot"
git add -A
git commit -m "Daily briefing: $(date +%Y-%m-%d)"
git push https://mikebaywashauto-dev: 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
@github.com/mikebaywashauto-dev/baywash-daily-briefing.git source
```

---

## Step 4 — Send Telegram notification
After the push succeeds, run:
```bash
curl -s -X POST "https://api.telegram.org/bot 8561538253:AAGiXGjyYESlmYvatkP4o7JEsSEBukbHDfQ/sendMessage" \
  -d chat_id=8613517891 \
  -d text="✅ Daily Briefing is ready: https://baywash-daily-briefing.pages.dev"
```

---

## Important Notes
- NEVER use Gmail or any email to notify Mike
- NEVER wait for approval before sending the Telegram message
- NEVER skip the GitHub push — this is what triggers the build and deploy
- GitHub Actions automatically builds and deploys when source branch is updated
- The live site URL is always: https://baywash-daily-briefing.pages.dev

---

## Tokens (replace placeholders before saving to GitHub)
- GitHub PAT: stored in deploy.sh as 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

- Telegram Bot Token: stored in deploy.sh
- Telegram Chat ID: 8613517891

