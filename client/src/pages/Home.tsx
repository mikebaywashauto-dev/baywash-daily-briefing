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

const BRIEFING_NUMBER = 135;
const BRIEFING_DATE = "September 19, 2026";
const BRIEFING_DAY = "Saturday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/reurrFXFNzXvbDeK.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/CPRTvDfyFmbRLdXS.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/QoMdndPOndUJadto.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/JbXGYSInKGtDfuiQ.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/sShRJRoUDEXLOvEw.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "BRAMPTON / EXPIRY / NOT A STRIKE DEADLINE",
    tagColor: "#b91c1c",
    headline: "Sunday’s Expiry Is Not a Strike Clock",
    summary: "Unifor and Stellantis remain at an impasse over the idled Brampton Assembly Plant, while the current agreement expires at 11:59 p.m. Sunday. Unifor says that date is not a strike deadline and none has been set. Stellantis’ Roshel arrangement remains a potential sale under due diligence—not a completed sale, new vehicle program or confirmed restart.",
    whyItMatters: "Treat Brampton as an Ontario manufacturing and supplier-network watch item, not a reason to predict a strike, sale, closure, restart or service-parts interruption. On Monday’s open jobs, quote the actual part number from documented distributor stock, ETA and written quote expiry—never a blanket contingency surcharge.",
    source: "BNN Bloomberg / Canadian Press — Brampton Update",
    sourceUrl: "https://www.bnnbloomberg.ca/business/company-news/2026/09/17/we-need-time-unifor-says-stellantis-brampton-plant-could-be-lost-for-good-as-it-urges-feds-to-step-in/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "REPAIR RETURN / ORIGIN / PROOF / CBSA",
    tagColor: "#0369a1",
    headline: "Cross-Border Repair Return? The File Is the First Part",
    summary: "CBSA’s active U.S. surtax notice sets out limited, fact-specific cases in which certain U.S.-made goods previously duty-paid in Canada, or goods repaired or altered across the border, may not be subject to surtax. The notice also requires origin proof for commercial imports and permits post-release verification of origin, tariff classification and value for duty.",
    whyItMatters: "Do not promise a repair-return exemption at the service counter. Before sending or receiving a cross-border component, have the importer of record or broker confirm the exact tariff treatment and preserve the repair order, prior entry proof, invoice, shipping record, SKU, origin and broker response.",
    source: "Canada Border Services Agency — Customs Notice 26-23",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "CUSMA / SECTION 232 / SECTION 338 / VERIFY",
    tagColor: "#15803d",
    headline: "CUSMA Is a Checkpoint, Not a Blanket Border Result",
    summary: "Canada’s Trade Commissioner Service says CUSMA-compliant auto and truck parts are not currently subject to the U.S. 25% Section 232 auto-parts tariff. It separately says specified Canadian goods under U.S. Section 338 have no CUSMA-compliance exemption. The result depends on the exact product, classification, origin, entry timing and applicable U.S. regime.",
    whyItMatters: "For a genuine U.S.-bound special order, reconditioned component or wholesale shipment, obtain a broker-controlled written entry result: HTS, origin, Chapter 99 treatment, entry date/time, freight, landed cost and quote expiry. Do not call every part ‘CUSMA exempt’ or apply a broad U.S. rate.",
    source: "Trade Commissioner Service — U.S. Tariff Resources",
    sourceUrl: "https://www.tradecommissioner.gc.ca/en/market-industry-info/search-country-region/country/canada-united-states-export/us-tariffs/supporting-exporters-through-tariff-challenges.html",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "⏰",
    text: "The Stellantis agreement expires at 11:59 p.m. Sunday, September 20, but Unifor says that is not a strike deadline and no strike deadline has been set.",
    sourceUrl: "https://www.bnnbloomberg.ca/business/company-news/2026/09/17/we-need-time-unifor-says-stellantis-brampton-plant-could-be-lost-for-good-as-it-urges-feds-to-step-in/",
  },
  {
    icon: "🏭",
    text: "The Roshel arrangement is a potential Brampton sale with due diligence ongoing—not a completed transaction, confirmed restart or announced vehicle allocation.",
    sourceUrl: "https://www.bnnbloomberg.ca/business/company-news/2026/09/17/we-need-time-unifor-says-stellantis-brampton-plant-could-be-lost-for-good-as-it-urges-feds-to-step-in/",
  },
  {
    icon: "🇨🇦",
    text: "Canada’s 15%, 25% and 50% surtax treatment is item-, U.S.-origin- and value-for-duty-specific; commercial accounting uses 26186A, 26186B or 26186C as applicable.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
  {
    icon: "🔧",
    text: "CBSA lists limited repair-and-alteration scenarios that may be non-subject to surtax. Confirm the exact facts and documentation with the broker or importer of record; it is not a generic shop exemption.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
  {
    icon: "🧾",
    text: "For U.S.-bound auto/truck parts, CUSMA may matter under Section 232, while specified Canadian goods under Section 338 do not receive a CUSMA-compliance exemption.",
    sourceUrl: "https://www.tradecommissioner.gc.ca/en/market-industry-info/search-country-region/country/canada-united-states-export/us-tariffs/supporting-exporters-through-tariff-challenges.html",
  },
];

const tipOfTheDay = {
  title: "Sunday Deadline Quote Check",
  text: "Before Monday, list every open order tied to Brampton, U.S. origin or a U.S.-bound delivery. Record the part/SKU, actual origin, direction, broker or distributor result, stock, ETA, price or landed-price basis and quote expiry. Keep Canadian inbound and U.S. outbound files separate. Do not add a blanket surcharge.",
};

const quoteOfTheDay = {
  text: "The date is not a strike deadline and no strike deadline has been set.",
  author: "Lana Payne, Unifor National President",
  title: "Brampton bargaining update, via BNN Bloomberg",
};

const rideOfTheDay = {
  name: "1970 AMC Rebel Machine — Machine Blue, Ontario-Plated",
  description: "Machine Blue paint, a white performance hood and bold red-white-blue accent striping make this 1970 AMC Rebel Machine a proper Saturday Ontario shop feature. Its reminder suits the parts desk: provenance matters, but the documented SKU, origin, border direction, stock and quote expiry decide the repair plan.",
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
                {["Brampton Watch", "Repair Returns", "CUSMA ≠ Blanket", "'70 Rebel Machine"].map((tag) => (
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
              alt="Canadian Automotive Shop Owner Reviewing a Saturday Parts Quote — Baywash Daily Briefing Edition No. 135"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 135 — Saturday, September 19, 2026 — Brampton Watch / Repair Returns / CUSMA</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Sunday Watch: Quote From the Verified File
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 AMC Rebel Machine</span>
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
