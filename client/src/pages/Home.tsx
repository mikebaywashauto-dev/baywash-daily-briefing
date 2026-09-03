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

const BRIEFING_NUMBER = 119;
const BRIEFING_DATE = "September 3, 2026";
const BRIEFING_DAY = "Thursday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/dBaNqCeVkocBpWfq.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/xEBUfXNrbhJnUTMw.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/KycshJrPpTdTPyMi.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ALwUEMNHPFpfYJZC.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/vzYAMVXbRNETTLEH.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "SEPT. 8 / 5 DAYS / C$27.6B / TARGETED, NOT BLANKET",
    tagColor: "#b91c1c",
    headline: "Five Days to September 8: Treat Finance Canada’s 648 Lines as a Parts-Desk Check, Not a Surcharge Button",
    summary: "Finance Canada says its new countermeasures on C$27.6 billion of U.S. products take effect at 12:01 a.m. on September 8. Its authoritative list shows 648 effective-September-8 tariff entries concentrated in sectors including steel and aluminum, dairy, appliances, agricultural equipment, pulp and paper, plastics and electronics. The page says to read the tariff-item list with Canada’s Customs Tariff.",
    whyItMatters: "The table is tariff-item specific, not a blanket automotive-parts list, and a U.S. supplier address alone does not settle treatment. For material exposure, ask for the part number, origin/marking, tariff-item result, landed price, stock status and quote expiry. Do not add one shop-wide tariff charge to every repair order.",
    source: "Finance Canada — updated August 26, 2026",
    sourceUrl: "https://www.canada.ca/en/department-finance/programs/international-trade-finance-policy/canadas-response-us-tariffs/complete-list-us-products-subject-to-counter-tariffs.html",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "STELLANTIS–UNIFOR / 9,000+ WORKERS / BRAMPTON STILL OPEN",
    tagColor: "#0369a1",
    headline: "Stellantis Signals Confidence in Canada — But the Bargaining Table Still Decides Brampton",
    summary: "On the second day of talks, Stellantis Canada said investments made since 2022 reflect its confidence in Canada, its workforce and the long-term future of Canadian manufacturing. The Windsor Star reports the company says it has invested more than C$8 billion in Canadian operations since 2022. Yet the negotiations remain unresolved: the Brampton Guardian says talks cover more than 9,000 Canadian workers, with about 2,200 Brampton members on indefinite layoff.",
    whyItMatters: "A confidence statement is not a ratified contract, Brampton reopening, vehicle allocation or near-term parts-supply commitment. Treat it as bargaining context. Keep service, collision and parts promises tied to your distributor’s confirmed availability and lead time, rather than a plant headline.",
    source: "Windsor Star / Brampton Guardian — September 2, 2026",
    sourceUrl: "https://windsorstar.com/news/local-news/stellantis-has-confidence-in-canada-going-into-bargaining",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "SECTION 338 / USMCA GOODS / JAN. 50% THREAT / SEPARATE CLOCKS",
    tagColor: "#15803d",
    headline: "Section 338 Has Changed the Trade Backdrop — Keep a January Threat Separate from Today’s Part Quote",
    summary: "The Conference Board says the U.S. Section 338 tariffs took effect August 22 on motor vehicles, alcoholic beverages and dairy, affecting about US$20 billion of bilateral trade. Its September 2 backgrounder says the measures do not exempt USMCA-covered goods. It also describes the administration’s threatened increase to 50% on Canadian autos, auto parts and steel from January 1 as a subsequent escalation, not a current new parts rate.",
    whyItMatters: "This is a cross-border supply-chain risk signal, not a price list for your repair order. Distinguish the specific part’s current treatment from the future January threat, and confirm current cost and availability with the supplier. Never convert a forward-looking threat into a universal customer surcharge.",
    source: "The Conference Board — September 2, 2026",
    sourceUrl: "https://www.conference-board.org/research/policy-backgrounders/us-canada-trade-war",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📅",
    text: "September 8 is five days away; the official table has 648 tariff entries and calls its descriptions illustrative.",
    sourceUrl: "https://www.canada.ca/en/department-finance/programs/international-trade-finance-policy/canadas-response-us-tariffs/complete-list-us-products-subject-to-counter-tariffs.html",
  },
  {
    icon: "🔩",
    text: "New C$27.6B countermeasures begin at 12:01 a.m. September 8; existing counter-tariffs against U.S. autos continue separately.",
    sourceUrl: "https://www.canada.ca/en/department-finance/programs/international-trade-finance-policy/canadas-response-us-tariffs/complete-list-us-products-subject-to-counter-tariffs.html",
  },
  {
    icon: "🗂️",
    text: "Stellantis says it has invested more than C$8B in Canada since 2022; bargaining remains unresolved.",
    sourceUrl: "https://windsorstar.com/news/local-news/stellantis-has-confidence-in-canada-going-into-bargaining",
  },
  {
    icon: "🏭",
    text: "The Brampton Guardian reports talks cover 9,000+ Canadian workers and about 2,200 Brampton members remain on indefinite layoff.",
    sourceUrl: "https://www.bramptonguardian.com/business/stellantis-unifor-labour-talks-brampton/article_4ba9e52c-5b8e-50da-9645-22f64517c449.html",
  },
  {
    icon: "↔️",
    text: "The reported January 1 50% U.S. auto-parts escalation remains a threat, not a new current tariff rate.",
    sourceUrl: "https://www.conference-board.org/research/policy-backgrounders/us-canada-trade-war",
  },
];

const tipOfTheDay = {
  title: "Assign One Owner to Each September 8 Exposure Check",
  text: "For every meaningful quote that may cross September 8, assign one person to capture the part number, origin/marking confirmation, tariff-item result, supplier landed price, stock status, quote expiry and time checked. Escalate unresolved importer exposure; do not turn a general trade headline into a blanket customer charge.",
};

const quoteOfTheDay = {
  text: "The investments we have made in Canada in recent years reflect our confidence in Canada, our workforce and the long-term future of Canadian manufacturing.",
  author: "Trevor Longley, President, Stellantis Canada",
  title: "Written statement on the opening of bargaining — September 2, 2026",
};

const rideOfTheDay = {
  name: "1970 Ford Torino Cobra 429 — Calypso Coral, Ontario-Plated",
  description: "Calypso Coral paint, a black hood scoop and 429 big-block muscle make this 1970 Ford Torino Cobra the right iron for an Ontario shop on a Thursday evening. Its rule for the bay is equally direct: let the actual part line, verified origin and current supplier quote — not a broad trade headline — determine the promise you make to a customer.",
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
                {["SEPT. 8: 5 DAYS", "C$27.6B TARGETED", "BRAMPTON: TALKS ON", "'70 TORINO COBRA"].map((tag) => (
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
              alt="Canadian Automotive Parts Manager Reviewing a Tariff-Item Schedule — Baywash Daily Briefing Edition No. 119"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 119 — Thursday, September 3, 2026 — Five-Day Check / Stellantis Talks / Section 338 Context</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Thursday Check: Assign the Quote Check Before September 8
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Ford Torino Cobra 429</span>
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
