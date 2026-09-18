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

const BRIEFING_NUMBER = 134;
const BRIEFING_DATE = "September 18, 2026";
const BRIEFING_DAY = "Friday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/EDdHJzDIRREGHiIX.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/OAGnUVropKmoSZHm.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/eToTgeAEuYNVfods.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/IWeSPLVHuxfvuVTT.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/WAvEvpAlggKgVpaJ.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "BRAMPTON / STRIKE POSSIBLE / MOU / SEPT. 20",
    tagColor: "#b91c1c",
    headline: "Brampton Pressure Rises—But a Strike Is Not a Result",
    summary: "Unifor says strike action is a “real possibility” after Stellantis talks broke down over the company’s intent to sell Brampton Assembly. Canadian Press reports the union represents more than 9,000 Stellantis workers in Canada; CP24 reports Unifor says the company is serious about exiting Brampton. The current agreement expires at 11:59 p.m. on September 20.",
    whyItMatters: "This is an Ontario manufacturing and supplier-network watch item—not a confirmed strike, sale, closure, restart or service-parts interruption. Keep customer quotes tied to the actual part number, distributor stock, documented ETA and written quote expiry. Do not forecast a shortage or surcharge to every customer.",
    source: "Canadian Press / Yahoo Canada — Stellantis–Unifor Update",
    sourceUrl: "https://ca.news.yahoo.com/strike-action-table-stellantis-sticks-182835512.html",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CANADA / U.S. ORIGIN / 15–50% / CAD",
    tagColor: "#0369a1",
    headline: "A Canadian Surtax File Needs the Receipt Trail",
    summary: "CBSA says certain listed U.S.-origin goods imported into Canada are subject to 15%, 25% or 50% surtax on value for duty. Commercial proof may be an invoice or other document containing CUSMA’s required data elements; the CAD uses code 26186A, 26186B or 26186C as applicable. CBSA also describes correction, adjustment and post-release verification processes.",
    whyItMatters: "On a potentially affected inbound part, retain the invoice and written distributor, importer-of-record or broker response—not a product-family guess. Ask for the exact SKU, origin, tariff item, value-for-duty treatment, CAD result, stock, landed price and quote expiry. Do not self-assess from a headline or add a blanket surcharge.",
    source: "Canada Border Services Agency — Customs Notice 26-23",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "TWO BORDERS / TWO FILES / EXACT ENTRY / VERIFY",
    tagColor: "#15803d",
    headline: "One Part, Two Borders, Two Separate Answers",
    summary: "The current U.S. Section 338 treatment is a U.S.-bound import-entry decision tied to the exact HTS result, origin and timing for listed Canadian goods. Canada’s separate surtax is an inbound Canadian decision for listed U.S.-origin imports. Foley’s September automotive update notes both live regimes in the current trade dispute.",
    whyItMatters: "Do not let a U.S. broker answer substitute for a Canadian inbound answer—or the reverse. Maintain a U.S.-bound broker sheet with HTS, Chapter 99 result, origin, entry time and freight; maintain a Canadian inbound sheet with origin, tariff item, CAD result, value for duty, stock and quote expiry.",
    source: "Foley & Lardner — Automotive Update, September 17",
    sourceUrl: "https://www.jdsupra.com/legalnews/foley-automotive-update-september-2026-2-8119934/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🏭",
    text: "Unifor calls strike action a “real possibility” after Stellantis talks broke down over Brampton, but no strike, completed sale or parts interruption has been confirmed.",
    sourceUrl: "https://ca.news.yahoo.com/strike-action-table-stellantis-sticks-182835512.html",
  },
  {
    icon: "⏰",
    text: "The current Stellantis collective agreement expires at 11:59 p.m. on September 20; treat it as a watch date, not a prediction of a bargaining outcome.",
    sourceUrl: "https://ca.news.yahoo.com/strike-action-table-stellantis-sticks-182835512.html",
  },
  {
    icon: "🇨🇦",
    text: "Canada’s separate surtax is 15%, 25% or 50% only for listed U.S.-origin imports; the commercial CAD uses 26186A, 26186B or 26186C as applicable.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
  {
    icon: "🧾",
    text: "CBSA says a commercial invoice or other document with CUSMA minimum data elements can support origin; post-release verification may examine origin, classification and value for duty.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
  {
    icon: "🛞",
    text: "A Cambridge-made brake program is a supplier-specific sourcing lead, not proof that every brake line is Canadian-origin, tariff-free, in stock or price-stable.",
    sourceUrl: "https://www.aftermarketmatters.com/national-news/how-one-north-american-manufacturer-is-responding-to-u-s-tariffs-threats/",
  },
];

const tipOfTheDay = {
  title: "Friday Proof-Pack Sweep",
  text: "For each open job with a potentially affected inbound part, attach the invoice, part/SKU, actual origin, tariff item, CAD code/result, value-for-duty or landed-price basis, written broker/distributor confirmation, stock, ETA and quote expiry. Keep a separate U.S.-bound broker sheet. Start with modules, wiring, brake assemblies and metal-heavy items. Do not add a blanket surcharge.",
};

const quoteOfTheDay = {
  text: "Imported goods may be subject to examination at the time of importation and to post-release verification for compliance with the Tariff Classification, Valuation, Origin, and any other applicable provisions administered by the CBSA.",
  author: "Canada Border Services Agency",
  title: "Customs Notice 26-23 — United States Surtax Order (2026)",
};

const rideOfTheDay = {
  name: "1970 Plymouth Road Runner 440 Six Barrel — Limelight Green, Ontario-Plated",
  description: "Limelight Green paint, the black performance hood and big-block 440 Six Barrel attitude make this 1970 Plymouth Road Runner the right iron for a Friday Ontario shop. Its reminder fits the parts desk: a brand or ship-from location is a lead, but documented origin, stock, landed price and quote expiry decide the job.",
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
                {["Brampton Watch", "CAD: 15–50%", "Two Border Files", "'70 Road Runner"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Friday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Canadian Automotive Shop Owner Building a Parts-Origin Proof Pack — Baywash Daily Briefing Edition No. 134"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 134 — Friday, September 18, 2026 — Brampton Watch / CAD / Proof Pack</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Friday Proof Pack: Quote From the Documented Part
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Plymouth Road Runner</span>
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
