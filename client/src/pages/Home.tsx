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

const BRIEFING_NUMBER = 109;
const BRIEFING_DATE = "August 24, 2026";
const BRIEFING_DAY = "Monday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/fHqomZyLqYVtsAlG.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/CEbQXlVLkqzlyEhl.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/zPAqVKLtRPTyQQbT.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/rEGBvcRvxWrCcVBS.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/EuEsErkNSQTRKDyo.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "FIRST BUSINESS DAY / SECTION 338: IN FORCE / CANADA LIST: NOT YET PUBLISHED",
    tagColor: "#b91c1c",
    headline: "First Business Day After Section 338: Separate Today’s U.S. Disruption From Canada’s September 8 Response",
    summary: "The 50% U.S. Section 338 tariffs are now in force on a targeted group of Canadian exports after the last-minute deal collapsed. PBS/AP estimates the levies affect roughly US$20 billion in goods — about 5% of Canada’s annual exports to the U.S. — and include some goods previously protected by CUSMA. Canada’s matching counter-tariffs are scheduled to begin September 8, but the government has not yet released the Canadian tariff-code list or affected-business supports. For shops, that creates two separate timelines: supplier disruption to monitor today and potential Canadian import costs to map before September 8.",
    whyItMatters: "Do not combine two different tariff questions into one customer fee. The U.S. tariff is paid by U.S. importers and may affect your Canadian shop only through a supplier’s sourcing path. Canada’s future list could affect some U.S.-sourced lines, but exact codes are pending. Use this week to collect facts, not to guess at a percentage.",
    source: "PBS NewsHour / Associated Press — August 22, 2026",
    sourceUrl: "https://www.pbs.org/newshour/economy/what-to-know-about-trumps-50-tariffs-on-canadian-goods-that-just-went-into-effect",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CANADA RESPONSE: SEP. 8 / NAMED SECTORS / DETAILED CODES & SUPPORTS PENDING",
    tagColor: "#0369a1",
    headline: "September 8 Is a Supplier-Preparation Date — Not an Immediate Repricing Date",
    summary: "Prime Minister Mark Carney says Canada’s dollar-for-dollar retaliation starts September 8, with steel, dairy, appliances, agricultural equipment, pulp and paper and electronics named as target sectors. The federal government says detailed measures and support for affected businesses will follow. No further Canada-U.S. talks were scheduled as of the weekend. This leaves independent shops a useful planning window: identify U.S.-sourced inputs in the named sectors, preserve supplier quotes and wait for actual tariff-code guidance before deciding whether any order needs a change.",
    whyItMatters: "A category headline does not identify a taxable part number. Start with your 20 most expensive or fastest-moving U.S.-sourced items, especially modules, shop equipment and consumables. Record supplier, origin, current price, availability and quote expiry. If a supplier changes a price later, get the revised quote in writing before changing a customer estimate.",
    source: "CityNews Ottawa / Canadian Press — August 22, 2026",
    sourceUrl: "https://ottawa.citynews.ca/2026/08/22/carney-to-hold-news-conference-after-failed-trade-talks-with-u-s/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "UNIFOR–GM / TENTATIVE AGREEMENTS / 4,600+ MEMBERS / RATIFICATION AUG. 29–30",
    tagColor: "#15803d",
    headline: "GM–Unifor Tentative Deal Enters Ratification Week — Details Still Under Wraps",
    summary: "Unifor’s tentative agreements with General Motors cover more than 4,600 members at Oshawa Assembly, CAMI Assembly in Ingersoll, St. Catharines Propulsion and Woodstock Parts Distribution. The GM Master Bargaining Committee unanimously endorsed the agreements and says the deal secures the pattern previously set with Ford. Full terms will be released to members at ratification meetings scheduled for August 29 and 30. The union has said the deal delivers strong income and benefit gains, but no public production, investment or plant-status terms have been released.",
    whyItMatters: "The agreement reduces immediate labour-disruption risk across important Ontario GM facilities, but it is not final until members vote. Do not read a tentative contract as proof of a CAMI restart, a new Oshawa product or a specific parts-volume change. The practical shop signal is stability, with the key details arriving at ratification.",
    source: "Unifor — August 22, 2026",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-reaches-tentative-agreements-general-motors",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "⏱️",
    text: "First business day rule: the U.S. Section 338 list is in force now; Canada’s future counter-list is a separate September 8 question.",
    sourceUrl: "https://www.pbs.org/newshour/economy/what-to-know-about-trumps-50-tariffs-on-canadian-goods-that-just-went-into-effect",
  },
  {
    icon: "📅",
    text: "Canada named steel, dairy, appliances, agricultural equipment, pulp/paper and electronics as target sectors. Detailed tariff codes and business supports are pending.",
    sourceUrl: "https://ottawa.citynews.ca/2026/08/22/carney-to-hold-news-conference-after-failed-trade-talks-with-u-s/",
  },
  {
    icon: "📋",
    text: "Shop action: record supplier, origin, current quote, availability and expiry date for high-value U.S.-sourced special orders before Sept. 8.",
    sourceUrl: "https://ottawa.citynews.ca/2026/08/22/carney-to-hold-news-conference-after-failed-trade-talks-with-u-s/",
  },
  {
    icon: "🏭",
    text: "GM–Unifor tentative agreements cover 4,600+ members at Oshawa, CAMI, St. Catharines and Woodstock. Ratification meetings are Aug. 29–30.",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-reaches-tentative-agreements-general-motors",
  },
  {
    icon: "🧾",
    text: "Do not pass through a headline as a fee. Change a repair estimate only when a supplier gives a real, part-specific price update.",
    sourceUrl: "https://www.pbs.org/newshour/economy/what-to-know-about-trumps-50-tariffs-on-canadian-goods-that-just-went-into-effect",
  },
];

const tipOfTheDay = {
  title: "Freeze the Facts Before You Change a Price",
  text: "For every expensive special order, capture the supplier, origin, current price, availability and quote-expiry date. Keep one list for current cross-border disruption and another for potential September 8 Canadian exposure. If a supplier later changes a price, attach the written update to the job and obtain customer approval — never retrofit a blanket tariff surcharge.",
};

const quoteOfTheDay = {
  text: "We entered this round of talks in the midst of tariff uncertainty and relentless U.S. trade aggression.",
  author: "Trevor Longpre, Unifor GM Master Bargaining Chairperson",
  title: "Announcing tentative agreements with General Motors — August 22, 2026",
};

const rideOfTheDay = {
  name: "1971 Plymouth Road Runner 440 Six Pack — In-Violet, Ontario-Plated",
  description: "In-Violet paint, a matte-black performance hood and a 440 Six Pack under the hood: this 1971 Plymouth Road Runner belongs outside an Ontario repair shop after a Monday shift. The Road Runner says leave the guesswork at the counter — get the quote, check the origin and keep the work moving.",
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
                {["SECTION 338: IN FORCE", "CANADA LIST: SEP. 8", "GM RATIFICATION: AUG. 29–30", "'71 ROAD RUNNER 440"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Monday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="First Business Day After Section 338 Takes Effect — Baywash Daily Briefing Edition No. 109"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 109 — Monday, August 24, 2026 — First Business Day / Canada List Sept. 8 / GM Ratification Week</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                First Business Day After Section 338: Freeze the Facts Before You Change a Price
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
