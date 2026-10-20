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

const BRIEFING_NUMBER = 145;
const BRIEFING_DATE = "October 20, 2026";
const BRIEFING_DAY = "Tuesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/PKirXaTnihmDUkUj.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/PWgdxowbUnjzfBnZ.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/xxtvwTdXHzmdgKcv.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/wQtBnuqjwUOHWbny.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/EgUhdXuWtfZKJJVc.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "STELLANTIS / 97.3% MANDATE / NO BOARD / NOT LEGAL NOW",
    tagColor: "#b91c1c",
    headline: "Stellantis Strike Mandate: Confirmed Vote, No Legal Job Action Yet",
    summary: "Unifor says 97.3% of participating Stellantis members voted October 17–18 in favour of authorizing strike action if needed after September bargaining reached an impasse. CBC reports the affected workforce is in Windsor, Toronto and the idled Brampton plant. Unifor also says neither side has requested a No Board report, so the union is not in a legal strike position at this time; Stellantis told CBC it remains prepared to bargain in good faith.",
    whyItMatters: "A mandate is confirmed, but it is not a confirmed strike, lockout, work stoppage, settlement, legal strike date, plant restart or parts outage. Do not add a blanket customer surcharge or make a sweeping parts prediction. Quote the exact vehicle and SKU, confirm actual distributor stock plus written ETA, and update customers only if their specific order changes.",
    source: "Unifor / CBC — Stellantis Strike Mandate",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-members-stellantis-deliver-overwhelming-strike-mandate",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "AXANZO / PROPOSED MERGER / CURRENT BRANDS / NO SWITCH YET",
    tagColor: "#0369a1",
    headline: "Axanzo Name, Future Deal: Keep Today’s Refinish System Exactly Current",
    summary: "AkzoNobel and Axalta announced that their intended combined company will be called Axanzo after the proposed merger closes. Their October 15 release says both companies will continue to operate independently until closing, expected in early 2027 only after regulatory approvals and customary closing conditions. It also says the name announcement does not change how customers and partners currently work with either company: existing teams, brands and relationships remain in place.",
    whyItMatters: "Do not pre-emptively change mixing systems, product approvals, repair procedures, supplier orders or refinish estimates based on a future corporate name. Use the paint system, technical data, supplier availability and customer authorization that apply today. Treat any eventual vendor notice as a controlled change: confirm it locally before scheduling a process or product switch.",
    source: "AkzoNobel / Axalta — Axanzo Naming Announcement",
    sourceUrl: "https://www.akzonobel.com/en/media/media-releases/akzonobel-and-axalta-to-be-called-axanzo-following-merger",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "CCC / US$6.1B PROPOSAL / Q1 2027 TARGET / NO REWRITE",
    tagColor: "#15803d",
    headline: "CCC Take-Private: A 2027 Transaction Watch, Not a Collision-File Rewrite",
    summary: "Reuters reports CCC Intelligent Solutions agreed to a US$6.1-billion take-private transaction led by GTCR and including Elliott Investment Management. CCC supplies property-and-casualty claims-management and damage-estimating tools. Reuters says the proposed deal is expected to close in the first quarter of 2027 and is not subject to financing conditions, but it remains a future transaction rather than a completed change to current repair operations.",
    whyItMatters: "Do not tell insurers, customers or staff that current system access, estimate rules, data permissions, integrations or pricing have changed because of a proposed deal. Preserve today’s approved workflow, document insurer and customer authorization, and act only on an actual platform or insurer notice. A clean file record is more useful than reacting to a transaction headline.",
    source: "Reuters — CCC Intelligent Solutions Proposed Take-Private",
    sourceUrl: "https://www.reuters.com/legal/transactional/gtcr-elliott-buy-ccc-intelligent-solutions-61-billion-deal-2026-10-15/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "⚙️",
    text: "Unifor says 97.3% of participating Stellantis members authorized strike action if needed; the vote is confirmed, not an automatic work stoppage.",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-members-stellantis-deliver-overwhelming-strike-mandate",
  },
  {
    icon: "⚖️",
    text: "Unifor says it is not in a legal strike position because neither side has requested the No Board report required as a labour-law step toward job action.",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-members-stellantis-deliver-overwhelming-strike-mandate",
  },
  {
    icon: "🎨",
    text: "AkzoNobel and Axalta say the future combined company will be called Axanzo only after their intended merger closes, expected early 2027 subject to approvals and conditions.",
    sourceUrl: "https://www.akzonobel.com/en/media/media-releases/akzonobel-and-axalta-to-be-called-axanzo-following-merger",
  },
  {
    icon: "🧪",
    text: "The Axanzo name announcement does not change current customer support: the companies say existing teams, brands and relationships remain in place before closing.",
    sourceUrl: "https://www.akzonobel.com/en/media/media-releases/akzonobel-and-axalta-to-be-called-axanzo-following-merger",
  },
  {
    icon: "💻",
    text: "Reuters reports CCC’s proposed US$6.1-billion deal targets a first-quarter 2027 close; it is not an instruction to alter a live collision estimate or insurer workflow today.",
    sourceUrl: "https://www.reuters.com/legal/transactional/gtcr-elliott-buy-ccc-intelligent-solutions-61-billion-deal-2026-10-15/",
  },
  {
    icon: "🏢",
    text: "Collision Repair magazine reports AutoCanada operates 40 ACX collision centres and is reviewing the division—an industry watch, not a reported operating change for independent shops.",
    sourceUrl: "https://www.collisionrepairmag.com/news/collision-repair/market-trends/article/15837849/ppg-tuesday-ticker-canadian-auto-sector-consolidation-growth-news",
  },
];

const tipOfTheDay = {
  title: "Turn External News into a Controlled Change Log",
  text: "When a labour, vendor or platform headline arrives, log five things: source and date, service or product affected, an actual provider notice, customer or insurer impact and the owner of the next decision. Keep current workflow in place until that record supports a specific change. This separates a transaction or mandate from the repair file you actually own.",
};

const quoteOfTheDay = {
  text: "The union is not in a legal strike position at this time as neither Stellantis nor Unifor has requested a ‘No Board’ report.",
  author: "Unifor",
  title: "Stellantis Strike-Mandate Update — October 19, 2026",
};

const rideOfTheDay = {
  name: "1969 Mercury Cougar Eliminator 428 Cobra Jet — Competition Orange, Ontario-Plated",
  description: "Competition Orange paint, black Eliminator-style hood striping and 428 Cobra Jet presence make this 1969 Mercury Cougar Eliminator a Tuesday shop feature. Its reminder fits today’s files: keep the equipment and process in front of you current until a documented change—not a future headline—requires action.",
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
              <div className="flex gap-2 flex-wrap justify-end">
                {["97.3% Mandate", "No Board", "Current Systems", "'69 Cougar"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Tuesday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Canadian Collision Shop Estimator Reviewing Current Refinish Process — Baywash Daily Briefing Edition No. 145"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 145 — Tuesday, October 20, 2026 — 97.3% Mandate / Current Systems / No Board</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Tuesday Check: Keep Today’s System Current Until the Notice Changes
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '69 Mercury Cougar Eliminator</span>
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
