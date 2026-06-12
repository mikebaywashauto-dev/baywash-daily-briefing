/*
 * BAYWASH DAILY BRIEFING — Home.tsx
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 36;
const BRIEFING_DATE = "June 12, 2026";
const BRIEFING_DAY = "Friday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/AkietiEmnUbYBywU.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/YraSjxpOqcrYqobB.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/YSAPIjQnWrDGXaOb.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/JKOHFiCjjcRhrKDM.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/XIXeaQtHaWTOkciR.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "BRIDGE",
    tagColor: "#7c3aed",
    headline: "Gordie Howe Bridge Opening DELAYED AGAIN — No New Date Set, 'Outstanding Issues' Unresolved",
    summary: "The Windsor-Detroit Bridge Authority (WDBA) announced Thursday that Canada and the United States have agreed to postpone both the June 13 ribbon-cutting ceremony and the June 15 traffic opening. 'Canada and the United States have agreed to delay the opening of the bridge, taking the necessary time to resolve any outstanding issues,' said WDBA Interim CEO Chuck Andary. No new opening date has been announced. The bridge is structurally complete after eight years of construction. Former Michigan Governor Jim Blanchard, who has worked on the project for decades, called it 'the most important infrastructure project in North America.' Michigan Chamber of Commerce President Jim Holcomb noted that roughly one-third of all U.S.-Canada trade traffic moves through the Detroit-Windsor crossing. Former Governor John Engler: 'It's been delayed too long. If it's ready to go, let's get it open. Let's get the traffic moving.' The bridge is jointly owned by Michigan and Canada — Canada covered construction costs and will be repaid through future toll revenue. Trump has been demanding trade concessions or a share of toll revenue before authorizing the U.S. side to open. The WDBA has not specified what 'outstanding issues' remain.",
    whyItMatters: "The Gordie Howe Bridge delay is now directly tied to CUSMA negotiations. The bridge is a bargaining chip — Trump is using it as leverage, and Canada is not willing to give up toll revenue or trade concessions to open it on Trump's terms. For Canadian shop owners, the delay means the anticipated improvement in parts delivery times from U.S. distributors via the Windsor-Detroit corridor is on hold. The Ambassador Bridge (owned by the Moroun family, which is under House investigation for allegedly lobbying Trump to block the Gordie Howe opening) remains the only crossing. The delay also signals that the 'outstanding issues' in CUSMA talks are not resolved — the bridge and the trade deal are now linked. Watch for whether a new opening date is announced alongside any CUSMA framework agreement.",
    source: "WILX News 10 / WDBA — June 11, 2026",
    sourceUrl: "https://www.wilx.com/2026/06/11/opening-gordie-howe-international-bridge-delayed/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CUSMA",
    tagColor: "#1d4ed8",
    headline: "Trump Confirms USMCA Will NOT Be Renewed — Annual Reviews Begin July 1, Magna CEO Warns of Investment Freeze",
    summary: "Autoline Daily confirmed Thursday that Trump has stated the U.S. will not renew USMCA at the July 1 milestone. Annual reviews begin. USTR Greer: 'I don't think we're going to renew it outright.' The deal remains in force until 2036 unless a withdrawal notice is filed — but the annual review process creates indefinite uncertainty. Magna International CEO Swami Kotagiri: 'We want stability and visibility. When automakers and suppliers don't have stability, they don't invest.' Dana Incorporated and Eaton Corporation announced a mobility merger this week — a direct response to supply chain consolidation pressure driven by tariff uncertainty. The merger creates a $15B powertrain and drivetrain supplier that is better positioned to absorb tariff shocks. U.S.-Mexico Round 2 talks are June 16-17 in Washington — Canada's inclusion or exclusion is the most important signal of the coming week. 19 days to July 1.",
    whyItMatters: "Annual reviews beginning July 1 means the CUSMA uncertainty that has been driving elevated parts prices and suppressed new vehicle sales does not resolve on July 1 — it becomes permanent until a full renegotiation is completed. For Canadian shop owners, this is actually a medium-term positive: consumers who were waiting to see if tariffs would ease before buying a new vehicle will continue to hold their existing vehicles longer, driving more service work. The Dana-Eaton merger is a signal that the supply chain is consolidating around scale — smaller distributors will face margin pressure, which may eventually flow through to parts availability and pricing at the shop level. Watch June 16-17 for whether Canada is included in U.S.-Mexico Round 2 talks.",
    source: "Autoline Daily / Mac's Motor City Garage — June 12, 2026",
    sourceUrl: "https://www.autoline.tv/daily/ad-4316-trump-kills-canada-ev-sales-recovering-faster-than-expected-china-has-a-capacity-problem/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "RECALL",
    tagColor: "#dc2626",
    headline: "Ford Recalls 548,000 Expedition SUVs — Chrome Console Trim Peels Into Razor Edges, Lacerations Reported",
    summary: "Ford Motor Company filed a safety recall covering 548,000 Ford Expedition SUVs from model years 2018 through 2024. The defect: chrome trim on the center console bubbles, peels, and separates from the substrate, creating sharp metallic edges. Ford has received reports of lacerations requiring stitches. The affected trim is supplied by Xin Point and Forvia. No fix is currently available — Ford will notify owners when replacement parts are ready, and dealers will replace the center console trim at no charge. In a separate but positive development, Novelis confirmed on June 10 that it has restarted production at its Oswego, New York aluminum plant — the facility that supplies aluminum body panels for the Ford F-150. The plant was offline for months following two fires. The restart removes a key supply constraint on F-150 production and is expected to improve F-150 availability at Canadian dealers over the coming months.",
    whyItMatters: "The Ford Expedition recall is a direct service opportunity for every Canadian shop that services Ford SUVs. The 2018-2024 Expedition is one of the most common full-size SUVs in Canadian service bays, particularly in Ontario and Alberta. Run your customer database now for 2018-2024 Ford Expeditions and reach out before Ford's owner notification letters arrive. When the vehicle comes in for the recall inspection, perform a full inspection — brake service, fluid changes, tire rotation, and any deferred maintenance are all billable alongside the recall work. The Novelis Oswego restart is good news for F-150 availability — if you have customers on a waitlist for a new F-150, the supply picture is improving. The F-150 is the best-selling vehicle in Canada and the most common vehicle in Canadian service bays.",
    source: "Ford Motor Company / Reuters — June 10-12, 2026",
    sourceUrl: "https://www.reuters.com/business/autos-transportation/novelis-restarts-production-new-york-plant-key-ford-trucks-2026-06-10/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🌉",
    text: "Gordie Howe Bridge opening delayed indefinitely — no new date set. WDBA cites 'outstanding issues' between Canada and the U.S. The bridge is structurally complete. Trump is demanding trade concessions or toll revenue. The Ambassador Bridge remains the only Windsor-Detroit crossing.",
    sourceUrl: "https://www.wilx.com/2026/06/11/opening-gordie-howe-international-bridge-delayed/",
  },
  {
    icon: "🤝",
    text: "CUSMA — 19 days to July 1. Annual reviews confirmed to begin. U.S.-Mexico Round 2: June 16-17 in Washington. Canada's inclusion or exclusion from those talks is the most important signal of the coming week. No withdrawal notice has been filed — CUSMA remains in force until 2036.",
    sourceUrl: "https://www.autoline.tv/daily/ad-4316-trump-kills-canada-ev-sales-recovering-faster-than-expected-china-has-a-capacity-problem/",
  },
  {
    icon: "🛢️",
    text: "Motor oil shortage update: Novelis Oswego aluminum plant restarted June 10 — unrelated to motor oil but signals supply chain recovery is possible. Motor oil shortage remains on track for peak constraint July-September 2026. 0W-20 and 5W-30 most at risk. Place supplemental orders this week.",
    sourceUrl: "https://jobbersworld.com/2026/06/05/will-there-be-enough-motor-oil/",
  },
  {
    icon: "🔧",
    text: "UAW Dauch tentative agreement ratification vote expected this weekend. Upon ratification, Three Rivers plant resumes full axle production for Silverado and Sierra. GM's supply crisis is over. Unifor-Ford contract talks open June 22 — the $30/hr by 2030 UAW benchmark will be cited.",
    sourceUrl: "https://www.reuters.com/business/autos-transportation/uaw-president-deal-reached-with-axle-supplier-dauch-corp-after-10-day-strike-2026-06-11/",
  },
];

const tipOfTheDay = {
  title: "Ford Expedition Recall: Run Your Database Now — No Fix Available Yet, But the Customer Call Is Worth Making",
  text: "Ford's 548,000-unit Expedition recall has no fix available yet — Ford will notify owners when replacement parts are ready. That means there is a window to get ahead of the dealer letters. Here is what to do this week. First, pull every 2018-2024 Ford Expedition from your customer database. Second, run each VIN through Transport Canada's recall database (tc.canada.ca/en/road-transportation/motor-vehicle-safety/defect-investigations-recalls) to confirm which are affected. Third, call or text those customers: 'We noticed your [year] Ford Expedition is part of a Ford safety recall for the center console trim. We can inspect it for you and take care of any other service while it's in — and we'll let you know as soon as the replacement parts are available.' Fourth, when the vehicle comes in, perform a full inspection — brake service, fluid changes, tire rotation, and any deferred maintenance are all billable. Fifth, note the vehicle in your system for follow-up when Ford releases the replacement parts — you want to be the first call when parts arrive.",
};

const quoteOfTheDay = {
  text: "We want stability and visibility. When automakers and suppliers don't have stability, they don't invest.",
  author: "Swami Kotagiri",
  title: "CEO, Magna International — June 2026",
};

const rideOfTheDay = {
  name: "1970 Pontiac GTO Judge Ram Air IV — Here Comes the Judge",
  description: "The 1970 Pontiac GTO Judge with the Ram Air IV engine is one of the rarest and most coveted muscle cars ever built. While the standard Judge came with the Ram Air III (366 hp), the Ram Air IV option added a high-revving, solid-lifter 400 cubic inch V8 producing 370 hp factory-rated — with a real-world output closer to 400 hp. The Ram Air IV was a hand-assembled engine, each one individually blueprinted at the Pontiac factory. Only 767 Ram Air IV Judges were built in 1970 across all body styles. The Judge package added the iconic rear spoiler, side stripes, and 'The Judge' decals — available in Orbit Orange, Carousel Red, Bermuda Blue, and other vivid colours. A documented Ram Air IV Judge in top condition trades for $200,000-$350,000 at major auctions today. On a Friday when the Gordie Howe Bridge opening is delayed again, CUSMA annual reviews are confirmed, and Ford is recalling half a million Expeditions, the Judge is a reminder that the most powerful option is not always the most obvious one — and that in uncertain times, the cars (and shops) with the most substance under the hood are the ones that endure.",
  image: HOTROD_IMG,
};

// --- Animated Section Component ---
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#1a1a1a] font-['Source_Sans_3'] selection:bg-[#e05a1a] selection:text-white">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#1a1a1a] text-white py-3 px-6 shadow-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="bg-[#e05a1a] text-white px-2 py-0.5 text-xs font-bold tracking-tighter uppercase">Live</span>
            <h1 className="font-['Oswald'] text-xl font-bold tracking-tight uppercase">Baywash Daily Briefing</h1>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-gray-400">
            <Link href="/" className="text-[#e05a1a] hover:text-white transition-colors">Today's Edition</Link>
            <Link href="/archive" className="hover:text-white transition-colors">Archive</Link>
            <span className="text-gray-600">|</span>
            <span>Shop Portal</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="border-b-4 border-[#1a1a1a] pb-8 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-['Source_Code_Pro'] text-sm font-bold text-[#e05a1a]">EDITION NO. {BRIEFING_NUMBER}</span>
                <span className="h-px w-12 bg-gray-300"></span>
                <span className="font-['Source_Code_Pro'] text-sm text-gray-500 uppercase tracking-widest">{BRIEFING_DAY}, {BRIEFING_DATE}</span>
              </div>
              <h2 className="font-['Oswald'] text-5xl md:text-6xl font-bold leading-none uppercase tracking-tight mb-4">
                The Daily<br />
                <span className="text-[#e05a1a]">Briefing</span>
              </h2>
              <p className="text-gray-600 text-base max-w-xl leading-relaxed">
                Intelligence for Canadian automotive shop owners and technicians. Curated daily from industry sources, trade publications, and government filings.
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="flex gap-2">
                {["BRIDGE DELAY", "CUSMA", "FORD RECALL", "NOVELIS"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Gordie Howe International Bridge at sunset — opening delayed June 2026"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#e05a1a] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Today's Edition</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Gordie Howe Bridge Delayed Again — CUSMA Annual Reviews Confirmed — Ford Recalls 548,000 Expeditions
              </h3>
            </div>
          </div>
        </AnimatedSection>

        {/* Lead Stories */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-['Oswald'] text-2xl font-bold uppercase tracking-tight">Lead Stories</h2>
            <div className="flex-1 h-px bg-[#1a1a1a]"></div>
            <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">3 Stories</span>
          </div>

          <div className="space-y-12">
            {stories.map((story, index) => (
              <AnimatedSection key={story.id} delay={index * 100}>
                <article className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12 border-b border-gray-300">
                  {/* Image */}
                  <div className="md:col-span-2">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={story.image}
                        alt={story.headline}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span
                          className="text-white px-2 py-1 text-xs font-bold tracking-widest uppercase"
                          style={{ backgroundColor: story.tagColor }}
                        >
                          {story.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 flex flex-col gap-4">
                    <h3 className="font-['Oswald'] text-2xl md:text-3xl font-bold leading-tight uppercase">
                      {story.headline}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base">{story.summary}</p>

                    {/* Why It Matters */}
                    <div className="bg-[#1a1a1a] text-white p-5 mt-2">
                      <p className="font-['Source_Code_Pro'] text-xs font-bold text-[#e05a1a] uppercase tracking-widest mb-2">Why It Matters to Your Shop</p>
                      <p className="text-sm leading-relaxed text-gray-200">{story.whyItMatters}</p>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-2">
                      <span className="font-['Source_Code_Pro'] text-xs text-gray-500">{story.source}</span>
                      <a
                        href={story.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#e05a1a] hover:underline uppercase tracking-wider"
                      >
                        Read Source →
                      </a>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Quick Hits + Tip + Quote Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Quick Hits */}
          <AnimatedSection className="lg:col-span-2">
            <div className="border-t-4 border-[#1a1a1a] pt-6">
              <h2 className="font-['Oswald'] text-xl font-bold uppercase tracking-tight mb-6">Quick Hits</h2>
              <div className="space-y-5">
                {quickHits.map((hit, i) => (
                  <div key={i} className="flex gap-4 pb-5 border-b border-gray-200 last:border-0">
                    <span className="text-2xl flex-shrink-0 mt-0.5">{hit.icon}</span>
                    <div>
                      <p className="text-sm leading-relaxed text-gray-700">{hit.text}</p>
                      <a
                        href={hit.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-[#e05a1a] hover:underline mt-1 inline-block uppercase tracking-wider"
                      >
                        Source →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Tip + Quote */}
          <AnimatedSection className="flex flex-col gap-6">
            {/* Tip of the Day */}
            <div className="bg-[#e05a1a] text-white p-6 flex-1">
              <p className="font-['Source_Code_Pro'] text-xs font-bold uppercase tracking-widest mb-3 opacity-80">Tip of the Day</p>
              <h3 className="font-['Oswald'] text-lg font-bold uppercase leading-tight mb-3">{tipOfTheDay.title}</h3>
              <p className="text-sm leading-relaxed opacity-90">{tipOfTheDay.text}</p>
            </div>

            {/* Quote of the Day */}
            <div className="border-l-4 border-[#1a1a1a] pl-5 py-2">
              <p className="font-['Source_Code_Pro'] text-xs font-bold text-[#e05a1a] uppercase tracking-widest mb-3">Quote of the Day</p>
              <blockquote className="font-['Oswald'] text-xl font-bold leading-tight mb-3 uppercase">
                "{quoteOfTheDay.text}"
              </blockquote>
              <p className="text-sm font-bold">{quoteOfTheDay.author}</p>
              <p className="text-xs text-gray-500 mt-1">{quoteOfTheDay.title}</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Ride of the Day */}
        <AnimatedSection>
          <div className="border-t-4 border-[#e05a1a] pt-8">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-['Oswald'] text-2xl font-bold uppercase tracking-tight">Ride of the Day</h2>
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={rideOfTheDay.image}
                  alt={rideOfTheDay.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <h3 className="font-['Oswald'] text-2xl md:text-3xl font-bold uppercase leading-tight">{rideOfTheDay.name}</h3>
                <p className="text-gray-700 leading-relaxed text-base">{rideOfTheDay.description}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t-2 border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="font-['Oswald'] text-lg font-bold uppercase">Baywash Daily Briefing</p>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest mt-1">Edition No. {BRIEFING_NUMBER} — {BRIEFING_DATE}</p>
            </div>
            <p className="text-xs text-gray-400 max-w-md text-center md:text-right leading-relaxed">
              Curated intelligence for Canadian automotive shop owners. Content is sourced from public industry publications and news sources. Not financial or legal advice.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
