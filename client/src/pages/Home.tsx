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

const BRIEFING_NUMBER = 110;
const BRIEFING_DATE = "August 25, 2026";
const BRIEFING_DAY = "Tuesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/sifOgVzytbWPoWgP.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/gsjBYFOEBsoCPBmg.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/HWcpXihPphkCPYbI.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/jqzWQdSxBfOJpDkt.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/eDlhstpyrdtmRVqG.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "BREAKING / 50% AUTO, PARTS & STEEL THREAT / JAN. 1, 2027 / NOT A CURRENT PRICE RULE",
    tagColor: "#b91c1c",
    headline: "Trump Says Canadian Cars, Trucks and Auto Parts Will Face 50% Tariffs in 2027",
    summary: "President Donald Trump said Monday that U.S. tariffs on Canadian cars, trucks, automotive parts and steel will rise to 50% on January 1, 2027. CNBC reports the statement would double the current 25% top-line auto tariff. U.S. steel tariffs on Canada are already at 50%. The announcement follows the collapse of last week’s trade talks and is a forward-looking threat — it does not create a new August repair-parts surcharge. The stakes are high for integrated production: CNBC notes auto components can cross the border several times before final installation, exposing the supply chain to repeated tariff risk.",
    whyItMatters: "Treat January 1, 2027 as an exposure-mapping deadline, not an excuse to rewrite today’s estimates. For high-value imported parts, document supplier country, shipment path and alternative source now. Keep using current supplier quotes for customer work until a real supplier notice changes a part number’s price or availability.",
    source: "CNBC — August 24, 2026",
    sourceUrl: "https://www.cnbc.com/2026/08/24/trump-canada-auto-tariffs-trade-war.html",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CANADA RESPONSE / ANNOUNCEMENT EXPECTED TODAY / TARGETED, NOT AUTOMATICALLY DOLLAR-FOR-DOLLAR",
    tagColor: "#0369a1",
    headline: "Carney Signals a More Targeted Counter-Response as Canada Prepares Its Next Move",
    summary: "Canada is expected to announce retaliatory tariffs Tuesday, according to an official briefed to The Associated Press. Prime Minister Mark Carney said Ottawa may move away from a strict dollar-for-dollar formula toward more targeted retaliation designed to protect Canadian workers and businesses. That distinction matters: an announced sector or tariff code may not translate directly to an everyday replacement part. Carney said the U.S. demands would dismantle major Canadian industries, including autos, steel and aluminum. Until Ottawa releases its final measures, the exact Canadian import codes and effective dates remain unconfirmed.",
    whyItMatters: "Do not pre-load a generic Canada tariff into your parts matrix. Monitor the official release and ask key distributors for code-specific exposure on their U.S.-sourced inventory. A targeted response may change the relative risk across product families; a written supplier update should be your trigger for an estimate change.",
    source: "Associated Press via The Hindu — August 25, 2026",
    sourceUrl: "https://www.thehindu.com/news/international/canada-will-announce-retaliatory-tariffs-against-us-on-august-25-official-say/article71386372.ece",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "GM–UNIFOR / RATIFICATION WEEK / 4,600+ MEMBERS / DETAILS RELEASED AUG. 29–30",
    tagColor: "#15803d",
    headline: "GM–Unifor Moves Into Ratification Week With Details Still to Be Released",
    summary: "Unifor’s tentative GM agreements cover more than 4,600 workers at Oshawa Assembly, CAMI Assembly, St. Catharines Propulsion and Woodstock Parts Distribution. The union says its bargaining committee unanimously endorsed the agreements, which secure the Ford pattern and deliver income and benefit gains. The full terms will be presented to members at ratification meetings August 29 and 30. The deal is a stabilizing signal for Ontario’s GM network, but it remains tentative until members vote — and no public plant investment, production allocation or CAMI status detail has been released.",
    whyItMatters: "The immediate strike-risk has eased, which supports normal GM-linked parts and service planning. But avoid over-reading a tentative agreement: it is not proof of a CAMI restart, a new Oshawa program or a near-term change in replacement-parts volume. Watch the ratification materials for confirmed operational commitments.",
    source: "Unifor — August 22, 2026",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-reaches-tentative-agreements-general-motors",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🚨",
    text: "Trump says Canadian cars, trucks, auto parts and steel will face a 50% U.S. tariff on Jan. 1, 2027. This is an announced future threat, not an August price rule.",
    sourceUrl: "https://www.cnbc.com/2026/08/24/trump-canada-auto-tariffs-trade-war.html",
  },
  {
    icon: "🔁",
    text: "Auto components can cross the Canada-U.S. border multiple times before final installation, making documented sourcing paths a 2027 risk-management priority.",
    sourceUrl: "https://www.cnbc.com/2026/08/24/trump-canada-auto-tariffs-trade-war.html",
  },
  {
    icon: "🎯",
    text: "Canada is expected to announce its next retaliatory steps today. Carney has signalled a more targeted approach, so wait for official tariff codes.",
    sourceUrl: "https://www.thehindu.com/news/international/canada-will-announce-retaliatory-tariffs-against-us-on-august-25-official-say/article71386372.ece",
  },
  {
    icon: "🏭",
    text: "GM–Unifor ratification meetings are Aug. 29–30 for 4,600+ members at Oshawa, CAMI, St. Catharines and Woodstock; full terms are pending.",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-reaches-tentative-agreements-general-motors",
  },
  {
    icon: "📌",
    text: "Section 338 remains a separate 50% regime for its targeted goods; products already subject to Section 232 are excluded from that list.",
    sourceUrl: "https://www.strtrade.com/trade-news-resources/str-trade-report/trade-report/august/section-338-tariff-takes-effect;-u-scanada-both-pledge-escalation",
  },
];

const tipOfTheDay = {
  title: "Build Your 2027 Exposure Baseline — Without Stockpiling",
  text: "For your highest-value imported parts, record supplier, country of origin, current price, annual purchase volume, cross-border path and a practical alternate source. That creates a baseline for the announced January 1, 2027 auto-parts threat. Keep buying normal demand; a future policy threat is not a reason to tie up cash in speculative inventory or add a customer surcharge today.",
};

const quoteOfTheDay = {
  text: "This is the most successful automotive partnership in history.",
  author: "Mark Carney, Prime Minister of Canada",
  title: "Remarks on Canada-U.S. trade and the auto sector — August 24, 2026",
};

const rideOfTheDay = {
  name: "1970 Ford Mustang Boss 429 — Grabber Blue, Ontario-Plated",
  description: "Grabber Blue paint, a matte-black hood scoop and a 429 under the hood: this 1970 Ford Mustang Boss 429 sits outside an Ontario repair shop after a rainy Tuesday shift. The Boss says measure the 2027 exposure, source wisely and do not let a headline run today’s invoice.",
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
                {["AUTO/PARTS: 50% THREAT IN 2027", "CANADA RESPONSE: PENDING", "GM RATIFICATION: AUG. 29–30", "'70 BOSS 429"].map((tag) => (
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
              alt="Trump Announces 2027 Canadian Auto Parts Tariff Threat — Baywash Daily Briefing Edition No. 110"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 110 — Tuesday, August 25, 2026 — 2027 Auto/Parts Threat / Canada Response / GM Ratification Week</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                A 2027 Auto-Parts Tariff Threat — Map the Exposure, Don’t Reprice Today
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
