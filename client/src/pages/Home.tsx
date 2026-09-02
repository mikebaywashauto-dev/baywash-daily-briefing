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

const BRIEFING_NUMBER = 118;
const BRIEFING_DATE = "September 2, 2026";
const BRIEFING_DAY = "Wednesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/hFFMYgHQwraIQQoX.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/OHcNYnDLvewzHeHg.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/VGrAvAepktbIqpku.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/rSCiKNcygJtFjUuN.png";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/RwxCpHDbDMGwhuWX.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "SEPT. 8 / 648 TARIFF ITEMS / C$27.6B / VERIFY THE LINE",
    tagColor: "#b91c1c",
    headline: "Canada’s Official September 8 Table Has 648 Entries — Make the Parts Desk Read the Line",
    summary: "Finance Canada says its new countermeasures on C$27.6 billion of U.S. products begin at 12:01 a.m. on September 8. The authoritative page, updated August 26, shows 648 effective-September-8 tariff entries across targeted sectors including steel and aluminum, dairy, appliances, agricultural equipment, pulp and paper, plastics and electronics. It directs users to read the tariff-item list with Canada’s Customs Tariff.",
    whyItMatters: "The 648 entries are not 648 automotive parts, and a U.S. supplier address alone does not settle a repair part’s treatment. For any meaningful exposure, ask the distributor for the specific part number, origin, tariff item, landed price, stock status and quote expiry. Do not apply a shop-wide tariff add-on.",
    source: "Finance Canada — updated August 26, 2026",
    sourceUrl: "https://www.canada.ca/en/department-finance/programs/international-trade-finance-policy/canadas-response-us-tariffs/complete-list-us-products-subject-to-counter-tariffs.html",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "STELLANTIS–UNIFOR / SEPT. 11 DEADLINE / BRAMPTON UNRESOLVED",
    tagColor: "#0369a1",
    headline: "Stellantis Bargaining Is Open — Brampton’s Future Is Still a Negotiation, Not a Result",
    summary: "Unifor and Stellantis opened the final Detroit Three bargaining round on September 1 with a stated September 11 deadline. The Canadian Press reports Unifor’s central concern is job security after more than 2,000 workers were laid off from the Brampton, Ontario assembly plant, idled since 2023. The union says Stellantis was considering a closure and sale after the paused Jeep retooling plan.",
    whyItMatters: "There is no announced deal, strike, plant sale, closure, vehicle allocation or reopening. Treat the Brampton story as live bargaining context, not a current supply forecast. Keep service, collision and parts promises anchored to your actual supplier lead time and stock position.",
    source: "The Canadian Press / BNN Bloomberg — September 1, 2026",
    sourceUrl: "https://www.bnnbloomberg.ca/business/2026/09/01/stellantis-unifor-begin-contract-negotiations-in-final-round-of-auto-sector-talks/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "U.S. AUTO TARIFFS / 25% CURRENT / 50% JAN. THREAT / TWO CLOCKS",
    tagColor: "#15803d",
    headline: "Separate the Active U.S. Auto Regime from the Threatened January 50% Escalation",
    summary: "Canadian Press reporting says the current U.S. 25% levy on cars and trucks not built in the United States remains in force, while CUSMA-compliant vehicles are excluded. The President’s posted threat to raise tariffs on Canadian vehicles, auto parts and steel to 50% beginning January 1 is future-facing. It is not a new current 50% Canadian-parts rate.",
    whyItMatters: "Your repair order has two checks: what applies to this specific part today, and what your supplier can confirm on price and availability today. Do not turn a January threat into an immediate universal surcharge, and do not assume vehicle rules automatically determine individual service-part treatment.",
    source: "The Canadian Press / BNN Bloomberg — September 1, 2026",
    sourceUrl: "https://www.bnnbloomberg.ca/business/2026/09/01/stellantis-unifor-begin-contract-negotiations-in-final-round-of-auto-sector-talks/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📅",
    text: "The official September 8 table shows 648 targeted tariff items; Finance Canada calls the tariff-item descriptions illustrative.",
    sourceUrl: "https://www.canada.ca/en/department-finance/programs/international-trade-finance-policy/canadas-response-us-tariffs/complete-list-us-products-subject-to-counter-tariffs.html",
  },
  {
    icon: "🔩",
    text: "New C$27.6B countermeasures begin at 12:01 a.m. September 8; existing counter-tariffs against U.S. autos continue separately.",
    sourceUrl: "https://www.canada.ca/en/department-finance/programs/international-trade-finance-policy/canadas-response-us-tariffs/complete-list-us-products-subject-to-counter-tariffs.html",
  },
  {
    icon: "🗂️",
    text: "Stellantis–Unifor talks have a stated September 11 deadline; Brampton remains idled and its outcome is unresolved.",
    sourceUrl: "https://www.bnnbloomberg.ca/business/2026/09/01/stellantis-unifor-begin-contract-negotiations-in-final-round-of-auto-sector-talks/",
  },
  {
    icon: "🏭",
    text: "More than 2,000 Brampton workers were reported laid off after the plant was idled in 2023.",
    sourceUrl: "https://www.bnnbloomberg.ca/business/2026/09/01/stellantis-unifor-begin-contract-negotiations-in-final-round-of-auto-sector-talks/",
  },
  {
    icon: "↔️",
    text: "The reported January 1 50% U.S. auto-parts escalation is a threat, not a new current tariff rate.",
    sourceUrl: "https://www.bnnbloomberg.ca/business/2026/09/01/stellantis-unifor-begin-contract-negotiations-in-final-round-of-auto-sector-talks/",
  },
];

const tipOfTheDay = {
  title: "Run a September 8 Quote Check at the Parts Desk",
  text: "For each meaningful quote that may cross September 8, record the part number, country-of-origin/marking confirmation, tariff-item result, supplier landed price, stock status, quote expiry and time checked. Escalate a genuine importer issue to a customs professional; do not paste one tariff rate onto every repair order.",
};

const quoteOfTheDay = {
  text: "We expect this round of negotiations to be our most difficult and challenging yet, possibly ever.",
  author: "Lana Payne, Unifor National President",
  title: "On the opening of Stellantis bargaining — September 1, 2026",
};

const rideOfTheDay = {
  name: "1971 Dodge Charger R/T 440 — Hemi Orange, Ontario-Plated",
  description: "Hemi Orange paint, a broad Coke-bottle stance and big-block 440 power make this 1971 Charger R/T the right iron for an Ontario shop on a Wednesday evening. Its rule for the bay is equally direct: let the actual part line, verified origin and current supplier quote — not a headline — determine the promise you make to a customer.",
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
                {["SEPT. 8: 6 DAYS", "648 TARIFF ITEMS", "BRAMPTON: TALKS OPEN", "'71 CHARGER R/T"].map((tag) => (
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
              alt="Canadian Automotive Parts Manager Reviewing a Targeted Tariff List — Baywash Daily Briefing Edition No. 118"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 118 — Wednesday, September 2, 2026 — Sept. 8 Checklist / Brampton Talks / Two Tariff Clocks</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Wednesday Watch: Read the Tariff Line, Not the Headline
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
