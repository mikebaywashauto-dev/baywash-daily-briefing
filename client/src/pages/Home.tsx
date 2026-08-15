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

const BRIEFING_NUMBER = 100;
const BRIEFING_DATE = "August 15, 2026";
const BRIEFING_DAY = "Saturday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/tJBsWcjdHaOHYfLT.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/QWxIsyWunvMLuEsR.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/YchpRkKSiPjLiMtA.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/YCNPMUfSuMXCIoqF.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/uZmoIEQjDclODXpV.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "CANADA + U.S. ‘NOT CLOSE’ / INTERIM DEAL FOCUS / 10–15% AUTO PROPOSAL DISCUSSED / AUG 19: 4 DAYS",
    tagColor: "#b91c1c",
    headline: "Canada and U.S. ‘Not Close’ to a Deal — Ottawa Focuses on an Interim Agreement Before August 19",
    summary: "Canada and the United States are not close to signing a deal to reduce current tariffs and avoid the new August 19 measures, according to sources with direct knowledge of the talks. Negotiators have worked through individual tariff lines in Washington, but major gaps remain. Canada’s immediate objective is now an interim agreement that prevents the new Section 338 tariffs from taking effect, with broader sectoral issues to follow. One proposal discussed would set a 10%–15% tariff on CUSMA-compliant autos and parts, down from the current 25% rate, but auto-industry insiders oppose any tariff on compliant vehicles or parts. LeBlanc and Charette briefed premiers Friday and are staying in Washington through the weekend. No agreement has been announced.",
    whyItMatters: "A discussed rate is not a new rule. Do not re-price routine jobs or buy excess stock based on a negotiating proposal. The operational step is the same: ask major suppliers for written origin confirmation and current lead times on fast-moving service parts, then keep your purchase decisions tied to confirmed invoices and supplier terms.",
    source: "Global News / National Post — August 14–15, 2026",
    sourceUrl: "https://globalnews.ca/news/12022041/canada-us-trade-talks-tariffs-gap-source/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "STELLANTIS CONSIDERING BRAMPTON SALE / NO FINAL DECISION / ~3,000 WORKERS IDLED / FEDERAL GRANT AT ISSUE",
    tagColor: "#15803d",
    headline: "Stellantis Is Considering Closing and Selling Brampton Assembly — Unifor Says No Outcome Is Acceptable",
    summary: "Unifor president Lana Payne says Stellantis informed the union this week that it is seriously considering closing and selling Brampton Assembly. The company says it is preparing to enter collective bargaining, has ‘nothing to announce’ and remains focused on finding a sustainable manufacturing solution for Brampton. The plant was idled in 2023 for EV retooling and Jeep Compass production later moved to Illinois. Roughly 3,000 workers have been without work since February 2025. Stellantis received a C$529 million federal grant in 2022 to retool Brampton and Windsor, contingent on retaining production at both facilities; Ottawa served a default notice in December 2025. This is not a final closure announcement, but it is a major escalation in the plant’s uncertainty.",
    whyItMatters: "Brampton’s status will not change your parts pricing tomorrow, but it matters to the Ontario vehicle ecosystem: skilled jobs, fleet turnover, dealership demand and the long-term local service base. Treat this as a labour and production risk signal — not a reason to speculate on Mopar parts. Watch for the upcoming Stellantis bargaining process and any formal company decision.",
    source: "Global News / The Globe and Mail — August 14–15, 2026",
    sourceUrl: "https://globalnews.ca/news/12021873/stellantis-unifor-brampton-plant-closure/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "DETROIT 3 WARNING / 50% U.S.-CONTENT RULE / US$2B ANNUAL COST EACH / GM TARIFF BILL: US$2.5–$3.5B",
    tagColor: "#0369a1",
    headline: "Detroit Automakers Warn a Proposed CUSMA Rewrite Could Add US$2 Billion a Year — Per Company",
    summary: "Detroit automakers are preparing to oppose proposed North American trade changes that would require at least 50% U.S.-made content to qualify for lower tariffs and raise the total North American-content threshold above the current 75%. Estimates at two automakers indicate the changes could add at least US$2 billion in annual costs for each Detroit automaker. The added expense would come on top of existing tariff burden: GM expects US$2.5 billion to US$3.5 billion in gross tariff expenses this year, while Ford estimates about a US$1 billion net impact. The proposals are not final rules, but they show how content tests can alter sourcing, production and vehicle economics across the integrated Canada-U.S.-Mexico supply chain.",
    whyItMatters: "Parts move through the same North American system as vehicles. More restrictive content tests can complicate sourcing and raise costs before a specific part price visibly changes. Keep a measured buffer only on predictable, fast-moving components, and ask suppliers where their replacement parts are sourced rather than relying on broad tariff headlines.",
    source: "CBC News / Reuters — August 14, 2026",
    sourceUrl: "https://www.cbc.ca/news/canada/windsor/detroit-automakers-fear-cusma-revamp-cost-billions-9.7307030",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🏛️",
    text: "USTR Greer says the U.S. will not tolerate Canadian retaliation, while sources say a proposal could be put to President Trump on Monday. No agreement has been announced.",
    sourceUrl: "https://nationalpost.com/news/u-s-not-going-to-tolerate-retaliation-from-canada-in-trade-talks-greer-says",
  },
  {
    icon: "📦",
    text: "Canadian firms appear to be taking a watchful-waiting approach instead of broadly front-loading Section 338-covered shipments. The targeted U.S. duties are scheduled for August 19.",
    sourceUrl: "https://edmonton.citynews.ca/2026/08/14/anxious-canadian-firms-bet-trump-will-buckle-ahead-of-50-tariff-deadline/",
  },
  {
    icon: "🛻",
    text: "Unifor-GM bargaining covers more than 4,600 Ontario members. About 30% are on layoff, including 1,050 workers at idled CAMI; the target for a tentative agreement is August 21.",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-opens-negotiations-general-motors",
  },
  {
    icon: "🏭",
    text: "Unifor is pressing GM to add GMC Sierra production at Oshawa alongside Silverado production. It remains a union request, not a GM production announcement.",
    sourceUrl: "https://gmauthority.com/blog/2026/08/unifor-pressing-gm-to-build-gmc-sierra-at-oshawa-plant/",
  },
  {
    icon: "⚖️",
    text: "Rule check: the possible 10%–15% rate on CUSMA-compliant autos and parts is a reported proposal, not a signed agreement. Confirm source-country details with suppliers before changing any estimate.",
    sourceUrl: "https://globalnews.ca/news/12022041/canada-us-trade-talks-tariffs-gap-source/",
  },
];

const tipOfTheDay = {
  title: "Build a Confirmed-Rules Sheet Before You Buy Ahead",
  text: "The proposed 10%–15% tariff on CUSMA-compliant autos and parts is not a signed deal. Before you change any estimate or stock position, call your top suppliers for four facts: country of origin, CUSMA status, current lead time and the date their price quote expires. Keep a modest 30-day buffer only on predictable, fast-moving parts; do not let a Saturday headline become a costly shelf full of speculative inventory.",
};

const quoteOfTheDay = {
  text: "We shouldn’t be offering any concessions to the United States right now. The reality is the U.S. has imposed tariffs on Canada.",
  author: "Lana Payne, Unifor National President",
  title: "Brampton, Ontario — August 14, 2026",
};

const rideOfTheDay = {
  name: "1970 Dodge Challenger R/T 440 Magnum — Go Mango, Ontario-Plated",
  description: "Go Mango orange, black hood accents and a 440 Magnum V8: the Challenger R/T was Mopar’s long-hood answer to the muscle-car moment. Big, direct and impossible to miss, it belongs outside an Ontario service garage. Brampton’s future is uncertain; this Challenger is not waiting for anyone to make a decision.",
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
                {["INTERIM DEAL: 4 DAYS", "BRAMPTON AT RISK", "DETROIT 3: US$2B WARNING", "'70 DODGE CHALLENGER R/T"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Saturday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Canada and U.S. Still Far Apart on an Interim Deal — Brampton Assembly at Risk — Baywash Daily Briefing Edition No. 100"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 100 — Saturday, August 15, 2026 — Interim Deal Push / Brampton at Risk / 4 Days to August 19</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Canada + U.S. ‘Not Close’ to a Deal — Brampton Faces New Uncertainty — 4 Days to August 19
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Dodge Challenger R/T 440</span>
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
