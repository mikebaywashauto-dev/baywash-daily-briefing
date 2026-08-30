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

const BRIEFING_NUMBER = 115;
const BRIEFING_DATE = "August 30, 2026";
const BRIEFING_DAY = "Sunday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/YMyEVJqIMrlftCxd.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/zJxPMdNbehqTSzzL.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/PzGXakcQvqmAuonQ.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/MFAEEryOsyoYBZXS.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/iQVgOOifngDDdPzi.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "GM–UNIFOR / TENTATIVE / OSHAWA SIERRA HD / VOTE CONCLUDES TODAY",
    tagColor: "#b91c1c",
    headline: "Sierra HD Would Return to Oshawa if GM–Unifor Members Approve the Tentative Deal",
    summary: "GM’s tentative agreement with Unifor includes C$144 million to equip Oshawa Assembly for next-generation heavy-duty GMC Sierra pickup production, Reuters reports. Unifor’s bargaining report says the Sierra truck would return to Oshawa. The commitment depends on approval by members voting through today, August 30, so it remains a proposed investment rather than a ratified production launch.",
    whyItMatters: "This is a positive capacity signal, not an immediate service-parts promise. Keep your current supplier and inventory decisions tied to actual availability, landed cost and lead time. Track the final ratification result, then wait for a confirmed launch schedule or OEM distribution notice before factoring an Oshawa program into shop forecasts.",
    source: "Reuters / Unifor — August 29, 2026",
    sourceUrl: "https://www.reuters.com/business/autos-transportation/gm-deal-with-workers-would-add-sierra-pickup-assembly-canadian-plant-despite-us-2026-08-29/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "C$1.1B TENTATIVE PACKAGE / V8 + TRANSMISSION / LONG-TERM CAPACITY",
    tagColor: "#0369a1",
    headline: "GM’s C$1.1B Investment Headline Is Long-Term Capacity — Not a Monday-Morning Parts Signal",
    summary: "Reuters says the tentative GM–Unifor package totals C$1.1 billion, including a C$691-million V8-engine commitment announced in April. It also cites a C$215-million plan for a next-generation transmission at St. Catharines beginning in late 2029; Unifor projects approximately 250 jobs from that work. These are manufacturing commitments tied to the proposed agreement and longer production timelines.",
    whyItMatters: "Avoid translating a large plant-investment headline into a predicted price or lead-time change for a customer repair. The immediate controls remain your distributor’s stock status, part-specific origin, tariff-item assessment, landed cost and quote expiry. Treat long-dated plant capacity as context for supplier conversations, not as a reason to reprice today.",
    source: "Reuters / Unifor — August 29, 2026",
    sourceUrl: "https://www.reuters.com/business/autos-transportation/gm-deal-with-workers-would-add-sierra-pickup-assembly-canadian-plant-despite-us-2026-08-29/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "CAMI / NO-CLOSE-OR-SELL INTENT / NO NEW VEHICLE PROGRAM / VOTE PENDING",
    tagColor: "#15803d",
    headline: "CAMI Gets a No-Close-or-Sell Intent Letter — But Not a New Vehicle Allocation",
    summary: "Unifor’s CAMI bargaining report says GM has committed in writing that it intends not to close or sell the Ingersoll plant while it studies alternative-production opportunities. CAMI would receive first consideration for Canadian Armed Forces defence work only if GM wins such a contract. The report also says GM did not make a product commitment in this round, citing tariff and trade uncertainty.",
    whyItMatters: "The language adds plant-stability context, but it is not a confirmed restart, defence contract or new model allocation. Do not buy inventory or promise turnaround changes based on it. Continue to source the parts actually needed for current work, and watch for a ratification result plus a separate confirmed program or production announcement.",
    source: "Unifor CAMI Bargaining Report — August 2026",
    sourceUrl: "https://assets.nationbuilder.com/unifortheunion/pages/12217/attachments/original/1788011251/GM_CAMI_Master_Brochure-FINAL-web.pdf?1788011251",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📅",
    text: "The C$144M Oshawa Sierra HD investment remains contingent on approval of the tentative GM–Unifor deal as voting concludes today.",
    sourceUrl: "https://www.reuters.com/business/autos-transportation/gm-deal-with-workers-would-add-sierra-pickup-assembly-canadian-plant-despite-us-2026-08-29/",
  },
  {
    icon: "🔩",
    text: "Reuters says the C$1.1B investment total includes the C$691M V8-engine commitment announced in April; keep the timing in view.",
    sourceUrl: "https://www.reuters.com/business/autos-transportation/gm-deal-with-workers-would-add-sierra-pickup-assembly-canadian-plant-despite-us-2026-08-29/",
  },
  {
    icon: "🗂️",
    text: "The proposed St. Catharines next-generation transmission program is slated for late 2029 and is projected by Unifor to create about 250 jobs.",
    sourceUrl: "https://assets.nationbuilder.com/unifortheunion/pages/12217/attachments/original/1788011252/GMCC_Master_Brochure-FINAL-web.pdf?1788011252",
  },
  {
    icon: "🏭",
    text: "CAMI’s letter says GM intends not to close or sell the plant while alternative production is studied; that is not a confirmed allocation or restart.",
    sourceUrl: "https://assets.nationbuilder.com/unifortheunion/pages/12217/attachments/original/1788011251/GM_CAMI_Master_Brochure-FINAL-web.pdf?1788011251",
  },
  {
    icon: "↔️",
    text: "The threatened U.S. 50% duty on Canadian vehicles, trucks, parts and steel is a January 1, 2027 risk — not a new Canadian repair-parts rate today.",
    sourceUrl: "https://www.reuters.com/business/autos-transportation/gm-deal-with-workers-would-add-sierra-pickup-assembly-canadian-plant-despite-us-2026-08-29/",
  },
];

const tipOfTheDay = {
  title: "Separate Plant News From Quote Controls",
  text: "Use manufacturing headlines to frame supplier conversations, not to reset customer pricing. Before a high-value order, record the actual part number, origin, tariff-item assessment, landed price, stock status and quote expiry from your distributor. Change a repair estimate only when an item-specific cost or availability change is confirmed.",
};

const quoteOfTheDay = {
  text: "Yes, the Sierra truck is finally returning to Oshawa.",
  author: "Unifor Master Bargaining Committee",
  title: "On the proposed Oshawa heavy-duty pickup investment — August 2026",
};

const rideOfTheDay = {
  name: "1969 Pontiac GTO Judge — Carousel Red, Ontario-Plated",
  description: "Carousel Red paint, Ram Air attitude and classic Judge stripes make this 1969 GTO the right iron for an Ontario shop on a Sunday evening. Its rule for the bay is equally direct: let confirmed part availability and price — not a headline — set the promise you make to a customer.",
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
                {["GM VOTE: CONCLUDES TODAY", "OSHAWA SIERRA HD: TENTATIVE", "CAMI: NO NEW ALLOCATION", "'69 GTO JUDGE"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Sunday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Ontario Heavy-Duty Pickup Assembly Concept Ahead of the GM–Unifor Vote Result — Baywash Daily Briefing Edition No. 115"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 115 — Sunday, August 30, 2026 — Sierra HD Proposal / Long-Term Investment / CAMI Watch</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Sunday Watch: GM’s Ontario Investment Plan Awaits the Final Ratification Tally
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '69 Pontiac GTO Judge</span>
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
