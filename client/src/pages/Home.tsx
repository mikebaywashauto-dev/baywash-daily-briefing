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

const BRIEFING_NUMBER = 77;
const BRIEFING_DATE = "July 23, 2026";
const BRIEFING_DAY = "Thursday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/APXeNgbPhsTPRDsj.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/qLaPOYLqCRxAKNtF.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/EBHSCkvsQVQHGoBa.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/VgWJyCfGOuerkiEm.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/nedzIqWyJkGHchtZ.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "SECTION 122 EXPIRES TOMORROW / SECTION 301 UNCERTAIN / GREER: STAY TUNED / POSSIBLE TARIFF GAP / CUSMA PARTS STILL PROTECTED",
    tagColor: "#b91c1c",
    headline: "Section 122 Expires Tomorrow July 24 — USTR Greer Coy on Section 301 Replacement — 'Stay Tuned, You're Going to Be Busy' — Possible Tariff Gap or New Section 122 Re-Issue — CUSMA Parts Still Protected",
    summary: "USTR Ambassador Jamieson Greer testified before the Senate Finance Committee Wednesday and refused to confirm that Section 301 will be ready to replace Section 122 when it expires tomorrow at 12:01 a.m. ET on July 24. Section 122 of the Trade Act of 1974 is the 150-day emergency authority that has underpinned the 10 per cent universal surcharge on Canadian goods since February 24. It expires by statute on July 24 — it cannot be extended. The Section 301 forced labour investigation, which was expected to serve as the replacement authority, has not yet produced a final published determination from USTR. Greer told reporters after the hearing: 'We're not focused on a particular timeline. We're focused on fulfilling the legal and statutory requirements.' When asked whether the administration would re-issue a new Section 122 proclamation to bridge any gap, Greer was equally evasive: 'You all are just going to have to stay tuned. You're going to be busy the next few days, probably.' Senate Finance Committee Chairman Mike Crapo asked Greer for a realistic timeline to finish CUSMA negotiations, and Greer confirmed the entire CUSMA update is unlikely in 2026 — rules of origin, labour standards, and environmental provisions are pushed to 2027. After the hearing, Greer flew to Mexico City for bilateral CUSMA talks with President Claudia Sheinbaum and Economy Secretary Marcelo Ebrard. The Section 338 tariffs on $20 billion in Canadian goods — which Greer called 'a small handful' relative to the $380 billion total Canada-U.S. trade — remain on track for August 19.",
    whyItMatters: "This is the most important tariff story of the week for your shop and it is not being covered clearly anywhere. Here is what you need to know. Section 122 expires tomorrow. Section 301 may not be ready to replace it. That means there are three possible outcomes on July 24: (1) Section 301 takes effect as expected — the 10% rate continues, CUSMA parts remain exempt, nothing changes for you operationally. (2) A brief tariff gap — the 10% surcharge drops to zero for a day or two while USTR finalizes Section 301. If this happens, do not change your parts ordering strategy — it will be temporary and any gap will be closed quickly. (3) A new Section 122 proclamation is issued to bridge the gap — the 10% rate continues under a new emergency authority. In all three scenarios, your CUSMA-compliant parts remain protected. The key action: do NOT make bulk parts purchases based on a potential one-day tariff gap — the administration will close it. Do NOT change your supplier relationships based on uncertainty. Watch for a USTR announcement Thursday morning. The First Ministers' meeting in Charlottetown today is the political parallel track — Carney meets all premiers face-to-face for the first time since Section 338 was announced.",
    source: "Politico / International Trade Today / USTR Senate Finance Testimony — July 22, 2026",
    sourceUrl: "https://www.politico.com/news/2026/07/22/trump-trade-fallout-canada-tariffs-01008078",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CHARLOTTETOWN / FIRST MINISTERS TODAY / CARNEY MEETS PREMIERS / UNITED FRONT / DIVIDED ON TACTICS / FORD VS SMITH",
    tagColor: "#1d4ed8",
    headline: "Carney Meets All Premiers Face-to-Face in Charlottetown Today — United Against Section 338 — Divided on Tactics — Ford Wants Energy Leverage, Smith and Moe Say No — 27 Days to August 19",
    summary: "Prime Minister Mark Carney arrives in Charlottetown, Prince Edward Island today for a face-to-face First Ministers' meeting with all 13 provincial and territorial premiers — the first since Section 338 was announced Monday. The Council of the Federation meeting, which began Tuesday, was upended by the tariff announcement. The premiers closed their two-day session Wednesday with a united public front against the Section 338 tariffs, but significant tactical disagreements emerged on how to respond. Ontario Premier Doug Ford called for Canada to use its energy exports as leverage: 'We are an energy powerhouse and we could dismantle the U.S. if we wanted to.' British Columbia Premier David Eby floated cutting off access to minerals: 'There's not this middle road where you attack British Columbians on one hand and the other hand you're digging up metals, minerals and bringing them south of the border.' Alberta Premier Danielle Smith flatly rejected energy leverage: 'That's not going to happen.' Saskatchewan Premier Scott Moe was 'positive and bullish' but 'not entirely confident' a deal will be reached before August 19. Manitoba Premier Wab Kinew summarized the mood: 'Nothing unites like a common opponent and there's no more popular opponent in Canada right now than Donald Trump.' Industry Minister Melanie Joly, speaking from the U.K., said Canada could counter tariff impacts by selling more steel and aluminum to Europe. USTR Greer told the Senate Finance Committee Wednesday that CUSMA rules of origin talks are 'unlikely to be finished in 2026' — the full update is pushed to 2027. Greer flew to Mexico City after the hearing for bilateral CUSMA talks with President Sheinbaum.",
    whyItMatters: "The Charlottetown meeting today is the political decision point. Carney has 27 days before Section 338 tariffs take effect on August 19. The premiers are united in opposition but divided on tactics — and the energy leverage debate is the fault line. Ford's position (use oil and potash as a weapon) versus Smith's position (protect Alberta's energy sector from retaliation) reflects the fundamental tension in Canada's response strategy. For your shop: the outcome of today's meeting will signal whether Canada moves toward retaliatory tariffs that could affect cross-border parts logistics, or toward a negotiated framework. Watch for a joint communiqué this afternoon. The critical number remains August 19 — 27 days. CUSMA-compliant parts remain protected regardless of which tariff authority is in effect on July 24. Build your GM parts buffer August 1. Unifor-GM bargaining starts August 10.",
    source: "CBC News / Global News / Politico — July 22–23, 2026",
    sourceUrl: "https://www.cbc.ca/news/politics/charlottetown-premiers-meeting-day-two-9.7279213",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "GORDIE HOWE BRIDGE / CANADIAN CEREMONY TODAY / OPENS JULY 27 / 4 DAYS / WINDSOR-DETROIT $350M/DAY",
    tagColor: "#15803d",
    headline: "Gordie Howe Bridge Canadian Ceremony Today — Opens to Traffic July 27 in 4 Days — Political Tensions Raise Questions But Commercial Opening Confirmed — Windsor-Detroit Corridor: $350M/Day",
    summary: "The Canadian-only ceremony for the Gordie Howe International Bridge takes place today in Windsor, Ontario, with local dignitaries and the Windsor mayor in attendance. The joint U.S.-Canada ribbon-cutting was cancelled last week after the Section 338 tariff proclamations. The bridge remains on schedule to open to commercial and passenger traffic on July 27 — four days from today. WXYZ Detroit reported Thursday morning that 'political tensions between the US and Canada are raising questions' about the opening, but Infrastructure Canada and the Windsor-Detroit Bridge Authority have confirmed the July 27 commercial opening date is unchanged. The Canada-Michigan Crossing Agreement and the revenue-sharing arrangement with the United States remain in force. The Gordie Howe International Bridge is a cable-stayed span across the Detroit River connecting Windsor, Ontario, to Detroit, Michigan. The Windsor-Detroit corridor handles approximately $350 million in daily trade — roughly 30 per cent of all Canada-U.S. goods trade. The bridge adds a second crossing to the Ambassador Bridge, which currently handles the majority of that traffic. The commercial opening on July 27 will allow trucks and commercial vehicles to begin using the new crossing immediately, reducing congestion at the Ambassador Bridge and providing redundancy for the corridor. This is the second-busiest land border crossing in North America.",
    whyItMatters: "Four days to July 27. The Gordie Howe Bridge opening is the single most positive infrastructure development for Canadian auto parts supply chains in a decade. The Windsor-Detroit corridor is the artery through which the majority of Canadian auto parts cross into the United States and U.S. parts come into Canada. The Ambassador Bridge has been the single point of failure — a blockade in February 2022 demonstrated exactly how vulnerable the corridor is. Adding a second crossing means more capacity, faster clearance times, and redundancy. For your shop: this is a net positive regardless of the tariff environment. The political tensions are real but they have not changed the commercial opening date. The Canadian ceremony today is a diplomatic signal — the bridge opens Monday. Watch the Charlottetown First Ministers' meeting outcome this afternoon for any retaliation announcements that could affect cross-border logistics. Unifor-GM bargaining starts August 10 — build your GM buffer August 1.",
    source: "CBC News / Detroit Free Press / WXYZ Detroit / Infrastructure Canada — July 22–23, 2026",
    sourceUrl: "https://www.freep.com/story/news/politics/2026/07/22/gordie-howe-bridge-detroit-canada-opening-ceremony-tariffs/91006114007/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "⚠️",
    text: "Section 122 expires TOMORROW July 24 at 12:01 a.m. ET. Section 301 replacement may not be ready — USTR Greer refused to confirm timeline. Possible brief tariff gap OR new Section 122 re-issue. Do NOT change your parts ordering strategy based on a potential one-day gap. CUSMA parts remain protected in all scenarios.",
    sourceUrl: "https://www.politico.com/news/2026/07/22/trump-trade-fallout-canada-tariffs-01008078",
  },
  {
    icon: "🍁",
    text: "First Ministers' meeting TODAY in Charlottetown — Carney meets all 13 premiers face-to-face. 27 days to Section 338 (August 19). Ford wants energy leverage. Smith/Moe say no. Watch for joint communiqué this afternoon — any retaliation announcement could affect cross-border parts logistics.",
    sourceUrl: "https://www.cbc.ca/news/politics/charlottetown-premiers-meeting-day-two-9.7279213",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge Canadian ceremony TODAY in Windsor. Opens to commercial traffic July 27 — 4 days. Windsor-Detroit corridor: $350M/day. Second crossing adds redundancy to Ambassador Bridge. Commercial opening confirmed despite political tensions.",
    sourceUrl: "https://www.freep.com/story/news/politics/2026/07/22/gordie-howe-bridge-detroit-canada-opening-ceremony-tariffs/91006114007/",
  },
  {
    icon: "🔧",
    text: "Unifor-GM bargaining starts August 10 in Toronto. Ford deal ratified: 3% annual pay increases, 74% approval. CAMI (Ingersoll, Equinox EV) currently idle. Build 30-day GM parts buffer August 1 — before bargaining reaches critical phase. September 20 contract expiry.",
    sourceUrl: "https://www.bnnbloomberg.ca/business/company-news/2026/07/21/unifor-names-general-motors-as-next-us-automaker-for-contract-talks/",
  },
  {
    icon: "📋",
    text: "USTR Greer: CUSMA rules of origin talks 'unlikely to be finished in 2026' — full CUSMA update pushed to 2027. Greer flew to Mexico City after Senate hearing for bilateral CUSMA talks. Section 338: $20B of $380B total Canada-U.S. trade — Greer: 'a small handful of goods.'",
    sourceUrl: "https://internationaltradetoday.com/article/2026/07/22/ustr-usmca-rules-of-origin-talks-cant-be-finished-in-26-2607220008",
  },
];

const tipOfTheDay = {
  title: "Section 122 Expires Tomorrow — Don't Panic, Don't Bulk-Buy — Watch for USTR Announcement Thursday Morning",
  text: "Section 122 expires tomorrow and the replacement may not be ready. Here is what NOT to do: do not bulk-buy parts today based on a potential one-day tariff gap. The administration will close any gap quickly — either Section 301 takes effect as expected, or a new Section 122 proclamation bridges the gap. CUSMA-compliant parts are protected in all three scenarios. Here is what TO do: (1) Watch for a USTR announcement Thursday morning — it will clarify which authority is in effect on July 24. (2) Watch the Charlottetown First Ministers' meeting communiqué this afternoon — any Canadian retaliation announcement is more consequential for your parts supply chain than the Section 122/301 transition. (3) Start building your GM parts buffer August 1 — Unifor-GM bargaining starts August 10. The tariff transition tomorrow is a legal mechanism change, not a cost change. Your CUSMA-compliant parts remain protected.",
};

const quoteOfTheDay = {
  text: "You all are just going to have to stay tuned. You're going to be busy the next few days, probably.",
  author: "Jamieson Greer",
  title: "U.S. Trade Representative — after Senate Finance Committee hearing, July 22, 2026",
};

const rideOfTheDay = {
  name: "1970 Plymouth 'Cuda 440 Six Pack — Vitamin C Orange, Black Shaker Hood Scoop, Ontario-Plated",
  description: "Vitamin C Orange. Black shaker hood scoop. Black racing stripes. Ontario licence plate. 440 cubic inch Six Pack — three two-barrel Holley carburetors, 390 horsepower, 490 lb-ft of torque. The 1970 Plymouth Barracuda was the most aggressive expression of the E-body platform — lower, wider, and meaner than anything Chrysler had built before. The 440 Six Pack was the street weapon of choice: the 426 Hemi got the headlines, but the Six Pack got the wins on the street. The shaker hood scoop — mounted directly to the air cleaner, poking through a hole in the hood — shook with every blip of the throttle, a mechanical taunt to everything beside it at a stoplight. Parked at a summer car show in Ontario, golden hour light, Vitamin C paint glowing like a traffic cone on fire, the massive shaker scoop dominating the hood. USTR Greer says stay tuned. The 'Cuda doesn't wait.",
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
                {["S.122 EXPIRES TOMORROW", "S.301: UNCERTAIN", "GORDIE HOWE: JULY 27", "'70 'CUDA 440 SIX PACK"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Thursday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Section 122 Expires Tomorrow — USTR Greer Stay Tuned — Charlottetown First Ministers Today — Gordie Howe Bridge Opens July 27 — Baywash Daily Briefing Edition No. 77"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 77 — Thursday, July 23, 2026 — S.122 Expires Tomorrow / Greer: Stay Tuned / Charlottetown Today / Gordie Howe: July 27</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Section 122 Expires Tomorrow — USTR Greer Coy on Section 301 Replacement — Charlottetown First Ministers Today — Gordie Howe Bridge Opens July 27
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Plymouth 'Cuda 440 Six Pack</span>
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
