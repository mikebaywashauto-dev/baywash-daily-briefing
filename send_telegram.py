import requests

BOT_TOKEN = "8561538253:AAGiXGjyYESlmYvatkP4o7JEsSEBukbHDfQ"
CHAT_ID = "8613517891"

message = (
    "\U0001f697 *Baywash Daily Briefing \u2014 Edition No. 36 is live!*\n\n"
    "\U0001f4c5 Friday, June 12, 2026\n\n"
    "\U0001f4f0 *Today's Top Stories:*\n"
    "1. \U0001f309 *GORDIE HOWE BRIDGE DELAYED AGAIN* \u2014 No new date set. WDBA cites 'outstanding issues.' Bridge is structurally complete but Trump is blocking over trade concessions.\n"
    "2. \U0001f91d *CUSMA ANNUAL REVIEWS CONFIRMED* \u2014 Trump: USMCA will NOT be renewed at July 1. Annual reviews begin. Magna CEO: 'When automakers don't have stability, they don't invest.' 19 days to July 1.\n"
    "3. \U0001f527 *FORD RECALLS 548,000 EXPEDITIONS* \u2014 Chrome console trim peels into razor edges, lacerations reported. 2018-2024 model years. No fix available yet \u2014 run your customer database now.\n\n"
    "\U0001f3ce\ufe0f *Ride of the Day:* 1970 Pontiac GTO Judge Ram Air IV \u2014 only 767 built, $200K-$350K at auction today.\n\n"
    "\U0001f449 https://baywash-daily-briefing.pages.dev"
)

url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
resp = requests.post(url, json={"chat_id": CHAT_ID, "text": message, "parse_mode": "Markdown"})
print(resp.status_code, resp.text)
