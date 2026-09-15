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

const BRIEFING_NUMBER = 131;
const BRIEFING_DATE = "September 15, 2026";
const BRIEFING_DAY = "Tuesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/KHbygAQiHYdImceF.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/UGbSVVdPuRSnYlGb.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ELQyArAWhoSSuqMc.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/XGBOobTsjXnyYdlv.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/brLQBRRiRtfTDGfa.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "LIVE / SEPT. 15 / U.S. ENTRY / 50% SCOPE",
    tagColor: "#b91c1c",
    headline: "U.S. Scope Change Is Live for Specified Canadian Entries",
    summary: "At 12:01 a.m. Eastern today, Proclamation 11065’s revised Section 338 scope took effect for specified Canadian goods entered for U.S. consumption or withdrawn from warehouse. Annex I Part A items face the additional 50% duty, while Part B items leave that list. The proclamation says any applicable Section 232 duties can still apply in addition.",
    whyItMatters: "This is a U.S. export-side, product-specific customs rule—not a new rate for every Canadian repair part or a reason to change ordinary domestic estimates. Put any genuine U.S.-bound wholesale, specialty-vehicle or customer-export job on a broker-controlled list. Before you quote, obtain the exact HTS result, origin, entry time, duty treatment, freight and quote expiry in writing.",
    source: "Federal Register — Proclamation 11065 (91 FR 58339)",
    sourceUrl: "https://www.federalregister.gov/documents/2026/09/14/2026-18839/modifying-the-scope-of-products-of-canada-subject-to-the-additional-duties-imposed-to-offset",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CBP / 122 LINES / .13 ONLY / VERIFY",
    tagColor: "#0369a1",
    headline: "Today’s Entry File Decides Whether the 0% Provision Exists",
    summary: "CBP says 122 additional HTSUS classifications are now subject to Section 338 under 9903.03.12 or 9903.03.14, while .13 classifications do not change. CBP lists .12, .13 and .14 at 50% additional duty. Its .15 0% provision covers enumerated groups that include certain vehicles and parts, but after today only goods subject to .13 may claim it.",
    whyItMatters: "A generic “vehicle part” label, CUSMA paperwork or an old quote does not establish a 0% or 50% U.S. result. Have the customs broker confirm the actual HTS classification, Chapter 99 heading, entry time and any legitimate Chapter 98 treatment for the particular export. Do not promise a cross-border price or completion date until that answer is documented.",
    source: "U.S. Customs and Border Protection — CSMS #69851916",
    sourceUrl: "https://content.govdelivery.com/bulletins/gd/USDHSCBP-429db0c?wgt_ref=USDHSCBP_WIDGET_2",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "BRAMPTON / POSSIBLE MOU / SEPT. 20 / WATCH",
    tagColor: "#15803d",
    headline: "Brampton’s Roshel MOU Is a Watch Item—Not a Parts Call",
    summary: "Collision Repair Magazine reports that Stellantis and Roshel signed an MOU covering a possible sale of the idled Brampton Assembly Plant, with Roshel proposing more than 2,000 defence-manufacturing jobs. The proposed transaction is part of the current Stellantis–Unifor bargaining impasse; the existing agreement expires September 20.",
    whyItMatters: "This is an Ontario industrial and supply-network watch item—not a completed sale, confirmed closure, automotive restart, job result or near-term service-parts disruption. Keep fleet, body and service work quoted from actual distributor stock, ETA and documented quote expiry. Track the bargaining update rather than forecasting a shortage to customers.",
    source: "Collision Repair Magazine — Tuesday Ticker",
    sourceUrl: "https://www.collisionrepairmag.com/news/collision-repair/article/15834813/market-update-stellantis-plant-sale-insurance-costs-rise",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "⏰",
    text: "The revised U.S. Section 338 scope applies today to specified Canadian goods entered for U.S. consumption or withdrawn from warehouse at or after 12:01 a.m. Eastern.",
    sourceUrl: "https://www.federalregister.gov/documents/2026/09/14/2026-18839/modifying-the-scope-of-products-of-canada-subject-to-the-additional-duties-imposed-to-offset",
  },
  {
    icon: "🔢",
    text: "CBP says 122 HTSUS classifications now join 9903.03.12 or .14; classifications under .13 do not change.",
    sourceUrl: "https://content.govdelivery.com/bulletins/gd/USDHSCBP-429db0c?wgt_ref=USDHSCBP_WIDGET_2",
  },
  {
    icon: "🧭",
    text: "CBP says only .13 goods may claim the .15 0% additional-rate provision after today’s scope change; .12, .13 and .14 are 50% additional-duty headings.",
    sourceUrl: "https://content.govdelivery.com/bulletins/gd/USDHSCBP-429db0c?wgt_ref=USDHSCBP_WIDGET_2",
  },
  {
    icon: "🇨🇦",
    text: "Canada’s separate active surtax is 15%, 25% or 50% only for listed U.S.-origin imports; commercial proof of origin and the CAD record matter.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
  {
    icon: "🏭",
    text: "The reported Brampton MOU is a possible transaction, while the Stellantis–Unifor agreement expires September 20; no service-parts interruption is confirmed.",
    sourceUrl: "https://www.collisionrepairmag.com/news/collision-repair/article/15834813/market-update-stellantis-plant-sale-insurance-costs-rise",
  },
];

const tipOfTheDay = {
  title: "Launch a Live-Entry Exception Board",
  text: "For every U.S.-bound job that may enter today, log the part/SKU, exact HTS, origin, broker’s .12/.13/.14 result, any asserted Chapter 98 treatment, entry timestamp, broker confirmation, freight, landed cost and quote expiry. Maintain a separate Canadian inbound record. Do not turn a pending classification result into a blanket customer surcharge.",
};

const quoteOfTheDay = {
  text: "As of September 15, 2026, only goods subject to HTSUS 9903.03.13 are eligible to claim HTSUS 9903.03.15.",
  author: "U.S. Customs and Border Protection",
  title: "CSMS #69851916 — September 11, 2026",
};

const rideOfTheDay = {
  name: "1970 Pontiac GTO Judge Ram Air III — Orbit Orange, Ontario-Plated",
  description: "Orbit Orange paint, Judge stripes and Ram Air III muscle make this 1970 Pontiac GTO Judge the right iron for a Tuesday Ontario shop. Its rule for the bay is equally useful: an exact entry result beats a broad product label, and a documented supplier or broker response beats a tariff guess.",
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
                {["Live: Sept. 15", "CBP: 122 Lines", "Canada: Separate", "'70 GTO Judge"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Tuesday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Canadian Automotive Shop Owner Verifying U.S.-Bound Automotive Parts Entry Records — Baywash Daily Briefing Edition No. 131"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 131 — Tuesday, September 15, 2026 — Live / U.S. Entry / Exact HTS</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Today: U.S. Scope Change Is Live for Exact Entries
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Pontiac GTO Judge</span>
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
