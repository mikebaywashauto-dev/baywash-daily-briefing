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

const BRIEFING_NUMBER = 106;
const BRIEFING_DATE = "August 21, 2026";
const BRIEFING_DAY = "Friday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/FuEjzqPzMAhyFcpB.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/pyDeEnrLGviWviNg.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/JsLkPCqdzexxLyue.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/cOeaUPymEKEJxaAd.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/xVvvLtJRPXltoDNz.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "SECTION 338 / SAT AUG 22, 12:01 A.M. ET / LEBLANC: ‘VERY CLOSE’ / NO FINAL AGREEMENT",
    tagColor: "#b91c1c",
    headline: "LeBlanc Stays in Washington — ‘Very Close’ Is Not a Signed Deal as the Saturday Tariff Deadline Nears",
    summary: "Canada-U.S. Trade Minister Dominic LeBlanc said negotiators are ‘very close’ to an agreement after a more-than-three-hour meeting with USTR Jamieson Greer, and his office confirmed he stayed overnight in Washington for Friday negotiations. The temporary suspension of the 50% Section 338 tariffs expires at 12:01 a.m. EDT on Saturday, August 22, unless a final agreement or another extension is announced. CTV reports that multiple sources expect reductions in sectoral tariffs such as steel and aluminum, but neither government has published final terms or the size of those reductions. The real status remains: intensive talks, a near deadline, and no signed agreement announced.",
    whyItMatters: "Use today to verify exposure, not to predict it. For expensive special orders, obtain written supplier confirmation of current price, country of origin, CUSMA status and quote expiry. A negotiating update is not an invoice change — do not promise customers a tariff result, add a blanket fee or overbuy inventory before final terms and supplier pricing are clear.",
    source: "CTV News / CP24 — August 21, 2026",
    sourceUrl: "https://www.cp24.com/news/canada/2026/08/20/canada-us-very-close-to-finalizing-trade-deal-leblanc-says-live-updates-here/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "SECTORAL RELIEF: REPORTED / AUTOS & PARTS: TERMS NOT PUBLISHED / SHOP PRICES: SUPPLIER-LED",
    tagColor: "#15803d",
    headline: "Sectoral Tariff Relief Is Reported, but the Auto-and-Parts Rulebook Is Still Not Published",
    summary: "CTV reports multiple sources say the tentative Canada-U.S. agreement includes reductions in sectoral tariffs such as steel and aluminum, while the scope remains unknown. Reuters previously reported source-based proposals to cut the top-line U.S. tariff on Canadian-built cars and trucks to 15% from 25%, with U.S.-content deductions, and to cut top-line steel and aluminum tariffs to 25% from 50% under a quota structure. None of these proposed figures has been released as a final regulation. For shop owners, the key distinction is simple: automaker certification and a headline tariff proposal are not a retail parts-price schedule.",
    whyItMatters: "Do not convert a reported tariff proposal into a generic price increase for brakes, sensors or maintenance parts. Shop pricing follows your supplier’s real sourcing and distribution chain. Keep estimates tied to an actual quote, especially on special orders and long-lead components, and document any real price revision before ordering.",
    source: "CTV News / CP24 and Reuters — August 21, 2026",
    sourceUrl: "https://www.cp24.com/news/canada/2026/08/20/canada-us-very-close-to-finalizing-trade-deal-leblanc-says-live-updates-here/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "PREMIERS: U.S. ALCOHOL RETURN / CONDITIONAL IMPLEMENTATION / GM–UNIFOR TARGET DAY",
    tagColor: "#0369a1",
    headline: "All Premiers Back a Conditional U.S.-Alcohol Return — While GM–Unifor Reaches Its Target Day",
    summary: "Newfoundland and Labrador Premier Tony Wakeham said all premiers agreed to return U.S. alcohol to store shelves as part of the tentative trade agreement and as a good-faith step. The decision remains conditional on a final deal; CTV says U.S. products are currently off shelves everywhere except Alberta and Saskatchewan. Manitoba Premier Wab Kinew said a return could be relatively quick for some products but could take weeks for complete catalogues because of labelling standards, and urged consumers to keep buying Canadian. Meanwhile, today is Unifor-GM’s internal target for a tentative agreement. No GM settlement is confirmed in reliable current reporting; CAMI layoffs and Canadian-production commitments remain central.",
    whyItMatters: "The liquor decision is a provincial retail implementation step, not a parts-tariff rule. And an internal GM target is neither a strike date nor proof of a settlement. Watch official announcements, hold normal buffers on confirmed fast-moving lines, and keep your operations based on supplier availability rather than a political headline.",
    source: "CTV News / CP24 and Detroit Free Press — August 21, 2026",
    sourceUrl: "https://www.cp24.com/news/canada/2026/08/20/canada-us-very-close-to-finalizing-trade-deal-leblanc-says-live-updates-here/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "⏱️",
    text: "LeBlanc stayed overnight in Washington after a more-than-three-hour meeting. The Section 338 pause expires at 12:01 a.m. EDT Saturday, Aug. 22, unless a final deal or extension is announced.",
    sourceUrl: "https://www.cp24.com/news/canada/2026/08/20/canada-us-very-close-to-finalizing-trade-deal-leblanc-says-live-updates-here/",
  },
  {
    icon: "📉",
    text: "Multiple CTV sources say a tentative deal contains reductions in sectoral tariffs such as steel and aluminum, but the scope is not confirmed publicly.",
    sourceUrl: "https://www.cp24.com/news/canada/2026/08/20/canada-us-very-close-to-finalizing-trade-deal-leblanc-says-live-updates-here/",
  },
  {
    icon: "🥃",
    text: "Premiers agreed to restock U.S. alcohol as a contingent good-faith step. Product returns could vary by province and take time because of labelling and catalogue logistics.",
    sourceUrl: "https://www.cp24.com/news/canada/2026/08/20/canada-us-very-close-to-finalizing-trade-deal-leblanc-says-live-updates-here/",
  },
  {
    icon: "🏭",
    text: "Today is Unifor-GM’s internal target day. No tentative agreement is confirmed; CAMI layoffs and Canadian production are still the core issues.",
    sourceUrl: "https://www.freep.com/story/money/cars/general-motors/2026/08/18/unifor-gm-contract-negotiations-may-be-tougher-than-fords/91264859007/",
  },
  {
    icon: "📦",
    text: "Shop rule: document the current supplier price, origin, CUSMA status and quote expiry on special orders. A reported deal term is not an invoice change.",
    sourceUrl: "https://www.cp24.com/news/canada/2026/08/20/canada-us-very-close-to-finalizing-trade-deal-leblanc-says-live-updates-here/",
  },
];

const tipOfTheDay = {
  title: "Take a Friday Supplier-Price Snapshot",
  text: "For each expensive special order, capture the supplier’s quoted price, country of origin, CUSMA status and expiry time in the job file today. If a real price changes before you place the order, get customer approval first. This preserves margin while you wait for official final terms instead of using a blanket tariff surcharge or a speculative price adjustment.",
};

const quoteOfTheDay = {
  text: "We’re very close, we continue to make progress.",
  author: "Dominic LeBlanc, Canada-U.S. Trade Minister",
  title: "After a more-than-three-hour meeting with USTR Jamieson Greer — August 20, 2026",
};

const rideOfTheDay = {
  name: "1970 Mercury Cyclone Spoiler 429 — Competition Blue, Ontario-Plated",
  description: "Competition Blue paint, a white side stripe and the 429 under the hood: the 1970 Mercury Cyclone Spoiler made a direct, full-throttle case. It belongs outside an Ontario repair shop under warm bay lights. Negotiators say they are close; the Cyclone says finish the work before declaring victory.",
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
                {["SECTION 338: SAT 12:01 A.M.", "LEBLANC: ‘VERY CLOSE’", "GM TARGET: TODAY", "'70 CYCLONE SPOILER 429"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Friday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Canada-U.S. Negotiators Work Overnight as Section 338 Deadline Nears — Baywash Daily Briefing Edition No. 106"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 106 — Friday, August 21, 2026 — LeBlanc Stays in Washington / Saturday Deadline / GM Target Day</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                ‘Very Close’ — but Still No Signed Deal Before Saturday’s Section 338 Deadline
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '71 Dodge Charger R/T 440</span>
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
