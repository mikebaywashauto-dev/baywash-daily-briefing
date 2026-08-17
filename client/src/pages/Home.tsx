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

const BRIEFING_NUMBER = 102;
const BRIEFING_DATE = "August 17, 2026";
const BRIEFING_DAY = "Monday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/mgDegMOgSWSeJhyZ.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/RdNzNgSzpdqweBHu.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/YeGhznAFxoqNrqnl.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/tOMfBTQuzpCskhst.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/lFKVeCrSxsQQQqes.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "CBC: U.S. 12.5% AUTO OFFER / CANADA SAYS NOT GOOD ENOUGH / SECTION 338: 2 DAYS / NO DEAL SIGNED",
    tagColor: "#b91c1c",
    headline: "U.S. 12.5% Auto Offer Falls Short — Canada and U.S. Still at an Impasse With Two Days to August 19",
    summary: "CBC reports Canada and the United States remain at an impasse with two days to the August 19 Section 338 deadline. Sources say the U.S. is proposing to reduce its existing 25% auto tariff to 12.5%, but the Canadian side considers that offer insufficient. Negotiators fear the new 50% tariffs on hundreds of Canadian goods may still take effect as Washington maintains its demands and Ottawa works with provinces on restrictions affecting American alcohol. Unifor president Lana Payne says the auto levies also hurt U.S. companies and warns that agreeing to tariffs in writing could give Washington a path to pursue permanent auto tariffs in a future CUSMA renegotiation. The 12.5% figure is a reported proposal — not a signed agreement or a new rule.",
    whyItMatters: "Do not price a repair around a 12.5% headline. Until a signed measure changes your supplier’s actual price, use confirmed invoices, origin information and quote-expiry dates. This is the time to document your top service-part suppliers, not to turn normal inventory into a tariff bet.",
    source: "CBC News — August 17, 2026",
    sourceUrl: "https://www.cbc.ca/news/politics/canada-united-states-trade-negotiations-tariffs-9.7309218",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "BRAMPTON ASSEMBLY / POSSIBLE CLOSURE + SALE / NO FINAL DECISION / ~3,000 WORKERS IDLED",
    tagColor: "#15803d",
    headline: "Brampton Is the Test of What ‘Auto Relief’ Means Beyond a Tariff Percentage",
    summary: "Stellantis told Unifor it is seriously considering closing and selling Brampton Assembly. The company says it has ‘nothing to announce’ and remains focused on finding a sustainable manufacturing solution, so there is no final closure announcement. The plant was idled in 2023 for EV retooling, and its planned Jeep Compass production later moved to Illinois. Roughly 3,000 workers have been without work since February 2025. Stellantis received a C$529 million federal grant in 2022 to retool Brampton and Windsor, conditional on maintaining production; Ottawa issued a default notice in December 2025. The plant’s future makes clear why automotive relief is about production commitments and investment, not simply a tariff rate.",
    whyItMatters: "Brampton will not change a brake-job invoice today, but it affects Ontario’s long-term vehicle ecosystem: jobs, fleet turnover, dealership activity and the local service base. Treat it as a production-risk signal — not a reason to speculate on Mopar parts — and watch for formal company steps and the Stellantis bargaining process.",
    source: "The Globe and Mail / CBC — August 14–17, 2026",
    sourceUrl: "https://www.cbc.ca/news/canada/toronto/stellantis-brampton-assembly-plant-unifor-9.7307672",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "METALS: 10–50% TARIFFS / DOMESTIC STEEL FREIGHT: C$100M / LUMBER AT 45% / SEPARATE TALKS",
    tagColor: "#0369a1",
    headline: "Steel, Aluminum and Lumber Remain the Hard Sectoral Problems — Ottawa Adds C$100M for Domestic Steel Freight",
    summary: "Canada is seeking relief from existing U.S. tariffs of 10% to 50% on steel, aluminum and copper. Ottawa last week added C$100 million to a program that reimburses half the cost of moving Canadian-made steel within Canada by ship or rail; the program runs for one year or until its funding is exhausted, with a C$50 million maximum rebate per producer. On lumber, Washington is not interested in adding Canada’s existing 45% total tariff rate to the current package of talks. The U.S. position is that lumber should be negotiated separately, even as the looming Section 338 measures target various wood products such as plywood, doors, fixtures and charcoal.",
    whyItMatters: "Metals and wood are embedded in shop equipment, facility maintenance, tool supply and the wider parts network. The domestic steel freight support is not a direct shop rebate, but it signals that supplier input costs remain under pressure. Keep quotes time-limited and ask whether a supplier’s price has a specific origin, metal or freight exposure.",
    source: "CBC News — August 17, 2026",
    sourceUrl: "https://www.cbc.ca/news/politics/canada-united-states-trade-negotiations-tariffs-9.7309218",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🏛️",
    text: "Negotiators remain at an impasse with two days to August 19. Sources say Ottawa fears the new 50% Section 338 tariffs on hundreds of goods may still take effect.",
    sourceUrl: "https://www.cbc.ca/news/politics/canada-united-states-trade-negotiations-tariffs-9.7309218",
  },
  {
    icon: "🛻",
    text: "The reported 12.5% U.S. auto offer is not considered sufficient by the Canadian side and is not a signed agreement. Current supplier pricing remains the only shop rule that counts.",
    sourceUrl: "https://www.cbc.ca/news/politics/canada-united-states-trade-negotiations-tariffs-9.7309218",
  },
  {
    icon: "🏭",
    text: "Unifor-GM bargaining covers more than 4,600 Ontario members. About 30% are on layoff, including 1,050 at idled CAMI; the tentative-agreement target is August 21.",
    sourceUrl: "https://autotalks.uniforautohub.ca/unifor_opens_negotiations_with_general_motors",
  },
  {
    icon: "📦",
    text: "Ontario and other provinces are being asked to be ready to return U.S. alcohol to shelves if a deal emerges. Ontario says it needs a fair deal that addresses auto, steel, forestry, agriculture and manufacturing tariffs.",
    sourceUrl: "https://www.cbc.ca/news/politics/canada-united-states-trade-negotiations-tariffs-9.7309218",
  },
  {
    icon: "⚖️",
    text: "Rule check: Section 338’s August 19 deadline, the existing Section 232 tariffs, and any future CUSMA rewrite are separate issues. Do not combine them when quoting a customer.",
    sourceUrl: "https://www.cbc.ca/news/politics/canada-united-states-trade-negotiations-tariffs-9.7309218",
  },
];

const tipOfTheDay = {
  title: "Separate the Three Trade Questions Before You Quote",
  text: "On every significant estimate this week, keep three questions separate: what your supplier charges today; whether the part has CUSMA-origin documentation; and when the supplier’s quote expires. The reported 12.5% auto figure is only a proposal, and the August 19 Section 338 deadline concerns a different tariff measure. Clear notes in the job file protect your margin better than a speculative inventory purchase.",
};

const quoteOfTheDay = {
  text: "We can’t afford to give any more concessions here, and we need a good deal. And that means we’ve got to grind it out until the very end.",
  author: "Lana Payne, Unifor National President",
  title: "On Canada-U.S. auto negotiations — August 14, 2026",
};

const rideOfTheDay = {
  name: "1971 Dodge Charger R/T 440 Magnum — Hemi Orange, Ontario-Plated",
  description: "Hemi Orange, a black vinyl roof and a 440 Magnum V8: the 1971 Charger R/T carried the muscle-car era into a sharper, more dramatic body. It belongs outside an Ontario repair shop under warm bay lights. Two days to August 19; the Charger reminds us that clear engine notes beat unclear negotiating signals.",
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
                {["AUTO OFFER: 12.5%", "SECTION 338: 2 DAYS", "BRAMPTON AT RISK", "'71 DODGE CHARGER R/T"].map((tag) => (
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
              alt="U.S. 12.5 Percent Auto Offer Falls Short — Canada-U.S. Impasse — Baywash Daily Briefing Edition No. 102"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 102 — Monday, August 17, 2026 — 12.5% Auto Offer Falls Short / Brampton at Risk / 2 Days to August 19</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                U.S. 12.5% Auto Offer Falls Short — Impasse With 2 Days to August 19
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
