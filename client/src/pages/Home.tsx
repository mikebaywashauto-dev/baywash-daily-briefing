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

const BRIEFING_NUMBER = 76;
const BRIEFING_DATE = "July 22, 2026";
const BRIEFING_DAY = "Wednesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/SksCiwOerGOXBlbm.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/matDCcrNlRMtnOwR.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/CGCSZbcvHdNInWlL.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/vXGOMyIkschOeHTg.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/QoqtqTWGiDuNBTta.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "CORRECTION / SECTION 338 / AUTOS EXEMPT / CEMENT HOCKEY STICKS DAIRY ALCOHOL / AUG 19",
    tagColor: "#b91c1c",
    headline: "Section 338 Correction: Canadian Cars and Auto Parts Are Exempt — The 50% Tariff Hits Cement, Hockey Sticks, Alcohol, and Dairy — Carney-Trump Call — First Ministers' Meeting July 24",
    summary: "Legal analysis published Tuesday by Husch Blackwell, Dentons, and KPMG confirms that the Section 338 proclamations signed by President Trump on July 20 do not impose new tariffs on Canadian passenger vehicles or auto parts. Both categories are explicitly excluded from the Section 338 annexes because they are already subject to Section 232 duties — the existing 25 per cent auto tariff remains the operative instrument for vehicles and parts. The motor vehicles proclamation, despite its name, applies to an unrelated cross-sector basket of Canadian goods: Portland cement, hockey sticks, furniture, jewelry, diamonds, fine art, leather goods, cotton textiles, electronics, and industrial machinery — over 550 HTS code subheadings in total. The alcoholic beverages proclamation covers Canadian whisky, beer, wine, and spirits. The dairy proclamation covers cheese, milk products, whey, and casein. The Section 338 tariffs apply to all covered goods regardless of CUSMA compliance — unlike Section 301, there is no CUSMA exemption. The tariffs have no predetermined expiration date and remain in force unless reversed by a subsequent presidential action. Prime Minister Carney spoke with President Trump on Tuesday morning. The two leaders agreed to 'intensify negotiations in the coming weeks.' Carney told reporters: 'We have a situation where the American tariffs, the 338 tariffs, will come into effect in 29 days, and we will look at all options in terms of how we would respond if they do come into effect.' Trade Minister Dominic LeBlanc convened the Canada-U.S. Advisory Council Tuesday afternoon. A First Ministers' meeting is scheduled in Charlottetown on Thursday July 24 — the same day Section 122 expires and Section 301 takes effect.",
    whyItMatters: "The headline from yesterday was alarming but the legal analysis tells a different story for your shop. Canadian cars and auto parts are NOT covered by Section 338 — they were already under Section 232 and are explicitly carved out. The 25 per cent auto tariff on vehicles remains unchanged. Your CUSMA-compliant parts remain protected under Section 301 (effective July 24). What IS going up 50 per cent on August 19: cement (affects body shop construction and renovation costs), alcohol (affects your Friday staff party budget), dairy (affects the cheese on your lunch sandwich), and 550+ other HTS codes that are largely irrelevant to your daily operations. The practical action today: stop worrying about a new 50 per cent auto tariff — it does not exist. Focus on the real exposures: (1) Section 301 takes effect July 24 — confirm your parts suppliers' CUSMA compliance status. (2) Build your 30-day GM parts buffer August 1 — Unifor-GM bargaining starts August 10. (3) Watch the Charlottetown First Ministers' meeting Thursday for any retaliation announcements that could affect cross-border parts logistics.",
    source: "Husch Blackwell / Dentons / KPMG / National Post — July 21–22, 2026",
    sourceUrl: "https://www.internationaltradeinsights.com/2026/07/president-trump-imposes-50-tariffs-on-certain-canadian-products-under-section-338-of-the-tariff-act/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "SECTION 301 / SECTION 122 / JULY 24 / 2 DAYS / CUSMA EXEMPT / 4-YEAR FOUNDATION",
    tagColor: "#1d4ed8",
    headline: "Section 301 Forced Labour Tariff Takes Effect July 24 — 2 Days — Section 122 Expires Simultaneously — CUSMA-Compliant Parts Still Exempt — Four-Year Legal Foundation",
    summary: "The transition from Section 122 to Section 301 occurs in two days, on July 24. The Section 122 universal surcharge — the emergency tariff bridge imposed at 10 per cent on February 24, 2026 for 150 days — expires at the end of July 24. The Section 301 forced labour tariff, finalized in the USTR determination published July 20, takes effect simultaneously. The rate for Canada is unchanged at 10 per cent. The transition is seamless by design — the tariff wall does not drop for a single day. KPMG confirmed in its analysis: 'The 10% import duty imposed effective February 24, 2026, for 150 days, under Section 122 of the Trade Act of 1974, expires on July 24, 2026.' The critical protection for Canadian auto parts suppliers remains in force: goods entering the United States that comply with CUSMA rules of origin are explicitly exempt from the Section 301 tariff. Non-CUSMA parts with Chinese content face 10 per cent additional tariff starting July 24. The fundamental difference between Section 122 and Section 301 is durability. Section 122 was an emergency authority with no rate ceiling and no fixed sunset — it could have been raised or extended at any time. Section 301 actions run four years and are renewable, providing a legally durable and predictable tariff baseline. Canada's Bill C-35, the standalone legislation to strengthen its forced labour import prohibition that was Canada's primary defence in the Section 301 proceeding, remains stalled in Parliament until September 21. The USTR cited Canada's 'limited enforcement record' — two shipments barred versus 42,807 by the United States — as the basis for the 10 per cent Tier 1 rate rather than a full exemption.",
    whyItMatters: "Two days to July 24. The tariff rate does not change — 10 per cent in, 10 per cent out. But the legal foundation changes completely. Section 122 was temporary and unpredictable. Section 301 runs four years. This is the new baseline for your parts cost planning. The action you need to have completed by Thursday: call your top three parts suppliers and confirm CUSMA compliance status. CUSMA-compliant parts are exempt from Section 301 — that exemption is your protection. Non-CUSMA parts with Chinese content face 10 per cent additional tariff starting Thursday. If you have not had this conversation with your suppliers yet, you have 48 hours. The Section 338 tariff signed Monday does not affect parts — it is a separate instrument covering different goods. Your parts exposure on July 24 is Section 301, and the CUSMA exemption protects you if your suppliers are compliant.",
    source: "USTR / KPMG / Peacock Tariff Consulting — July 20–22, 2026",
    sourceUrl: "https://kpmg.com/us/en/taxnewsflash/news/2026/07/united-states-50-percent-tariffs-canada-imports.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "GORDIE HOWE BRIDGE / JOINT CEREMONY CANCELLED / CANADA CELEBRATES JULY 24 / OPENS JULY 27",
    tagColor: "#15803d",
    headline: "Canada Cancels Joint Gordie Howe Bridge Ceremony with U.S. After Section 338 Tariffs — Canada-Only Celebration July 24 — Bridge Still Opens July 27 — Windsor-Detroit Corridor Intact",
    summary: "Canada has cancelled the planned joint U.S.-Canada ribbon-cutting ceremony for the Gordie Howe International Bridge in response to the Section 338 tariff proclamations signed Monday. Federal Infrastructure Minister Gregor Robertson's office confirmed Tuesday: 'In light of trade action threatened by the United States earlier this week, it would be inappropriate to proceed with a celebratory event between the two countries.' Canada will instead hold a Canadian-only celebration on July 24 — the same day as the First Ministers' meeting in Charlottetown. The bridge will still open to commercial traffic on July 27 as planned. The Canada-Michigan Crossing Agreement and the recently negotiated Agreement in Principle between Canada and the United States remain unchanged. This is the second disruption to the bridge opening ceremonies: in June, a similar event was delayed at the request of the United States. The Gordie Howe International Bridge is a cable-stayed span across the Detroit River connecting Windsor, Ontario, to Detroit, Michigan. The Windsor-Detroit corridor handles approximately $350 million in daily trade — roughly 30 per cent of all Canada-U.S. goods trade. The bridge will add a second crossing to the Ambassador Bridge, which currently handles the majority of that traffic. The commercial opening on July 27 will allow trucks and commercial vehicles to begin using the new crossing, reducing congestion at the Ambassador Bridge and providing redundancy for the corridor. Local dignitaries including Windsor's mayor and the area's former longtime NDP MP had been invited to the original joint ceremony.",
    whyItMatters: "The bridge opens July 27 regardless of the ceremony cancellation — that is the number that matters for your shop's parts supply chain. The Windsor-Detroit corridor is the artery through which the majority of Canadian auto parts cross into the United States and U.S. parts come into Canada. Adding a second crossing reduces the single-point-of-failure risk that has made the Ambassador Bridge a choke point during disruptions. For your shop: the Gordie Howe Bridge opening is a net positive for parts supply reliability. More crossing capacity means less congestion, faster clearance times, and reduced vulnerability to blockades or incidents at the Ambassador Bridge. The ceremony cancellation is a diplomatic signal, not an operational change. Watch the Charlottetown First Ministers' meeting on Thursday — if Canada announces retaliatory tariffs in response to Section 338, the cross-border parts logistics picture could change quickly. The bridge opening on July 27 is five days away. Unifor-GM bargaining starts August 10 — build your GM buffer starting August 1.",
    source: "CBC News / Global News / Infrastructure Canada — July 21–22, 2026",
    sourceUrl: "https://www.cbc.ca/news/canada/windsor/windsor-gordie-howe-bridge-ribbon-cutting-9.7278519",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "✅",
    text: "CORRECTION: Section 338 does NOT cover Canadian cars or auto parts — both explicitly excluded (already under Section 232). The 50% tariff hits cement, hockey sticks, alcohol, dairy, and 550+ other HTS codes. Your parts costs are not directly affected by Section 338.",
    sourceUrl: "https://www.internationaltradeinsights.com/2026/07/president-trump-imposes-50-tariffs-on-certain-canadian-products-under-section-338-of-the-tariff-act/",
  },
  {
    icon: "⚖️",
    text: "Section 122 expires July 24 — 2 days. Section 301 takes effect simultaneously. Rate unchanged at 10%. CUSMA-compliant parts: exempt. Non-CUSMA parts with Chinese content: 10% additional tariff. Confirm your suppliers' CUSMA compliance status today.",
    sourceUrl: "https://kpmg.com/us/en/taxnewsflash/news/2026/07/united-states-50-percent-tariffs-canada-imports.html",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge: joint ceremony cancelled after Section 338 tariffs. Canada-only celebration July 24. Bridge STILL opens July 27 — 5 days. Windsor-Detroit corridor: $350M/day. Canada-Michigan Crossing Agreement unchanged.",
    sourceUrl: "https://www.cbc.ca/news/canada/windsor/windsor-gordie-howe-bridge-ribbon-cutting-9.7278519",
  },
  {
    icon: "🔧",
    text: "Unifor-GM bargaining starts August 10 in Toronto — NOT this week. Ford deal: 3% annual pay increases over 3 years. CAMI (Equinox EV) currently idle. Build 30-day GM parts buffer August 1 — before bargaining reaches critical phase. September 20 contract expiry.",
    sourceUrl: "https://www.bnnbloomberg.ca/business/company-news/2026/07/21/unifor-names-general-motors-as-next-us-automaker-for-contract-talks/",
  },
  {
    icon: "🍁",
    text: "First Ministers' meeting in Charlottetown Thursday July 24 — same day Section 122 expires and Section 301 takes effect. PM Carney spoke with Trump Tuesday — agreed to 'intensify negotiations.' Bank of Canada held at 2.25% July 15. Next decision: September 10.",
    sourceUrl: "https://nationalpost.com/news/politics/carney-wont-rule-out-retaliation-to-latest-tariff-threat",
  },
];

const tipOfTheDay = {
  title: "Confirm CUSMA Compliance With Your Top 3 Suppliers Before Thursday — Section 301 Takes Effect July 24",
  text: "Section 301 takes effect in 2 days. CUSMA-compliant parts are exempt. Non-CUSMA parts with Chinese content face 10% additional tariff starting July 24. If you have not called your top three suppliers to confirm CUSMA compliance status, do it today. Ask two questions: (1) Are your parts CUSMA-compliant? (2) Do any of your parts contain Chinese-sourced components? If yes to question 2 and no to question 1, you have a cost exposure in 48 hours. The Section 338 tariff does not affect your parts — that is the good news. Section 301 is the real transition happening Thursday.",
};

const quoteOfTheDay = {
  text: "We have a situation where the American tariffs, the 338 tariffs, will come into effect in 29 days, and we will look at all options in terms of how we would respond if they do come into effect.",
  author: "Mark Carney",
  title: "Prime Minister of Canada — Ottawa, July 22, 2026",
};

const rideOfTheDay = {
  name: "1969 Dodge Charger R/T 440 Magnum — B5 Blue, Black Stripes, Ontario-Plated",
  description: "B5 Blue. Black racing stripes. Ontario licence plate. 440 cubic inch Magnum V8, 375 horsepower, 480 lb-ft of torque. The 1969 Dodge Charger R/T was the apex of Mopar's muscle car era — the fastback roofline, the hidden headlights, the full-width taillamp, and the Coke-bottle body lines made it the most recognizable muscle car of its generation. The 440 Magnum was the street engine of choice: more tractable than the 426 Hemi, more powerful than anything the competition offered. Parked at a summer car show in Ontario, golden hour light, B5 Blue paint glowing in the setting sun, chrome gleaming. The tariff wall is being rebuilt on a permanent foundation. The Charger doesn't care about Section 301 or Section 338. It just wants to run.",
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
                {["S.338: AUTOS EXEMPT", "S.301: JULY 24", "GORDIE HOWE: JULY 27", "'69 CHARGER R/T"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Wednesday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Section 338 Correction: Autos Exempt — Section 301 July 24 — Gordie Howe Bridge Opens July 27 — Baywash Daily Briefing Edition No. 76"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 76 — Wednesday, July 22, 2026 — S.338 Autos Exempt / S.301: July 24 / Gordie Howe: July 27</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Section 338 Correction: Cars and Auto Parts Exempt — Section 301 Takes Effect Thursday — Gordie Howe Bridge Opens July 27
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '69 Dodge Charger R/T 440</span>
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
