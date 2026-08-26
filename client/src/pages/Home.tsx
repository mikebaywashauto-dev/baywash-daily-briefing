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

const BRIEFING_NUMBER = 111;
const BRIEFING_DATE = "August 26, 2026";
const BRIEFING_DAY = "Wednesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/acYkjVmcCKnlRjlr.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/CJDKFvHSxxnYsvbC.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/fVJJPxEdnZCVvoLd.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/xdIVASqpcklxPnwE.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/kmIMplEiUggdDavx.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "CANADA RETALIATION ANNOUNCED / SEP. 8 / C$27.6B / 15%, 25% & 50%",
    tagColor: "#b91c1c",
    headline: "Canada’s C$27.6B Counter-Tariffs Are Set for September 8 — Code by Code, Not Blanket by Blanket",
    summary: "Canada has announced retaliatory tariffs on C$27.6 billion of U.S. goods, taking effect September 8 at 15%, 25% and 50% rates across more than 700 product lines. France 24/AP reports the measures include targeted steel and aluminum goods, furniture, clothing, appliances, dairy, fish and seafood, pulp/paper and electronics. Existing Canadian counter-tariffs on U.S. autos remain in place. The new list is specific by tariff code: it is not a single rate on all U.S. imports or every U.S.-sourced repair part.",
    whyItMatters: "September 8 is now a real operating date, but the correct question is still part number, origin and tariff code. Start with high-value U.S.-origin modules, shop equipment, specialty tools and metal-heavy consumables. Request a written exposure confirmation from your distributors rather than adding a flat percentage to all estimates.",
    source: "France 24 / Associated Press — August 25, 2026",
    sourceUrl: "https://www.france24.com/en/americas/20260825-canada-strikes-back-trump-with-retaliatory-tariffs-us-trade-war-escalates",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "TWO TARIFF CLOCKS / SECTION 338: NOW / CANADA IMPORTS: SEP. 8",
    tagColor: "#0369a1",
    headline: "Two Tariff Clocks, One Shop Workflow: Today’s U.S. Disruption vs. Canada’s September 8 Imports",
    summary: "The U.S. Section 338 tariffs are already in force on targeted Canadian goods, while Canada’s new counter-tariffs begin September 8 on specified U.S. imports. AP reports the Canadian rates vary from 15% to 50% and include highly specific product categories, such as selected steel/aluminum wire, rods, pipes and foil, appliances and electronics. The U.S. tariff is paid by U.S. importers and may affect Canadian shops through supplier sourcing. Canada’s new measure can directly affect a U.S.-origin item entering Canada if its tariff code is on the list.",
    whyItMatters: "Keep two lists. On the first, track supplier disruption, availability and price changes connected to the U.S. measure. On the second, map possible direct Canadian import exposure for September 8. Do not collapse the two into one customer surcharge — supplier origin, country of export and tariff classification decide whether a part is affected.",
    source: "Associated Press — August 25, 2026",
    sourceUrl: "https://apnews.com/live/trump-economy-news-updates-08-25-2026",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "GM–UNIFOR / RATIFICATION IN 3 DAYS / CAMI STILL IDLED / TERMS PENDING",
    tagColor: "#15803d",
    headline: "GM–Unifor Ratification Is Three Days Away — CAMI Remains the Major Unknown",
    summary: "The tentative GM–Unifor agreements cover more than 4,600 workers across Oshawa, CAMI, St. Catharines and Woodstock, with ratification meetings set for August 29–30. The union says the deal secures the Ford bargaining pattern and delivers income and benefit gains, but it has not released the full terms. Independent reporting notes roughly 1,050 Unifor members remain laid off at the idled CAMI Assembly Plant after BrightDrop production ended. The agreement is meaningful for labour stability, but it is not final until members vote.",
    whyItMatters: "A ratified agreement would reduce labour-disruption risk across important Ontario GM operations. It does not by itself confirm a CAMI restart, future model allocation or a near-term surge in service-parts volume. Keep normal GM supplier relationships moving and wait for ratification materials before drawing operational conclusions.",
    source: "Unifor / Yahoo Finance — August 22–25, 2026",
    sourceUrl: "https://finance.yahoo.com/economy/policy/articles/gm-promises-pay-raises-better-230004075.html",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📅",
    text: "Canada’s C$27.6B counter-tariffs begin Sept. 8 at 15%, 25% and 50% on specific tariff codes — not every U.S. import.",
    sourceUrl: "https://www.france24.com/en/americas/20260825-canada-strikes-back-trump-with-retaliatory-tariffs-us-trade-war-escalates",
  },
  {
    icon: "🔩",
    text: "The new Canadian list includes selected steel/aluminum products, appliances, electronics, pulp/paper, dairy and seafood. Existing U.S.-auto counter-tariffs remain in place.",
    sourceUrl: "https://www.france24.com/en/americas/20260825-canada-strikes-back-trump-with-retaliatory-tariffs-us-trade-war-escalates",
  },
  {
    icon: "🗂️",
    text: "Shop action: ask key distributors for written Sept. 8 exposure by part number, origin and tariff code — especially modules, tools, shop equipment and metal-heavy consumables.",
    sourceUrl: "https://apnews.com/live/trump-economy-news-updates-08-25-2026",
  },
  {
    icon: "🏭",
    text: "GM–Unifor ratification meetings are Aug. 29–30; 1,050 CAMI members remain laid off and full terms are not public yet.",
    sourceUrl: "https://finance.yahoo.com/economy/policy/articles/gm-promises-pay-raises-better-230004075.html",
  },
  {
    icon: "↔️",
    text: "Separate the U.S. Section 338 supply-chain effect already underway from direct Canadian import exposure beginning Sept. 8.",
    sourceUrl: "https://apnews.com/live/trump-economy-news-updates-08-25-2026",
  },
];

const tipOfTheDay = {
  title: "Ask for a September 8 Answer in Writing",
  text: "Today, ask your five largest distributors whether your high-value U.S.-origin modules, specialty tools, shop equipment and metal-heavy consumables appear on Canada’s September 8 list. Request the part number, origin, tariff-code assessment, current price and quote expiry. Keep the response in the job file and change a customer estimate only when a supplier identifies a real, item-specific change.",
};

const quoteOfTheDay = {
  text: "We did not choose this conflict, but when our economic integration is used as a weapon rather than the foundation for a win-win partnership, we need to stand up.",
  author: "François-Philippe Champagne, Finance Minister",
  title: "Announcing Canada’s retaliatory tariffs — August 25, 2026",
};

const rideOfTheDay = {
  name: "1969 Pontiac GTO Judge Ram Air III — Carousel Red, Ontario-Plated",
  description: "Carousel Red paint, bold Judge stripes and a Ram Air III 400: this 1969 Pontiac GTO Judge belongs outside an Ontario repair shop on a Wednesday night. The Judge says do not guess at the rate — get the tariff code, the supplier confirmation and the real part price first.",
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
                {["CANADA TARIFFS: SEP. 8", "15%, 25% & 50% BY CODE", "GM RATIFICATION: AUG. 29–30", "'69 GTO JUDGE"].map((tag) => (
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
              alt="Canada Announces September 8 Counter-Tariffs — Baywash Daily Briefing Edition No. 111"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 111 — Wednesday, August 26, 2026 — Canada Tariffs Sept. 8 / Code-by-Code / GM Ratification</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Canada’s September 8 Counter-Tariffs: Get the Code Before You Change the Price
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
