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

const BRIEFING_NUMBER = 124;
const BRIEFING_DATE = "September 8, 2026";
const BRIEFING_DAY = "Tuesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/uELPLudAlRMIhkIn.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/apAgPkWYaCIursMe.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/NElbXqpUNfQhKjbq.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/BTkwHSdCvtZktptr.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ZFCcTMUNTeIqpNdX.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "ACTIVE TODAY / CBSA / 15–25–50% / VALUE FOR DUTY",
    tagColor: "#b91c1c",
    headline: "The New U.S. Surtax Is Live: Treat It as an Importer-and-Item Check",
    summary: "CBSA says certain goods imported into Canada and originating in the U.S. are now subject to a surtax of 15%, 25% or 50% of value for duty, as applicable under the United States Surtax Order (2026). The applicable rate sits in the Order’s schedules at the tariff-item level. The order applies to U.S.-origin goods even when they are exported to Canada from another country.",
    whyItMatters: "This is not a blanket automotive-parts rate or a service-advisor billing code. For a material job, get the part number, U.S.-origin/marking confirmation, tariff-item result, importer-of-record or broker response, landed quote, stock and delivery status. Ask the distributor how the exact item was treated; do not create a generalized customer surcharge.",
    source: "CBSA — Customs Notice 26-23",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "IN TRANSIT / CARRIER CONTROL / PROVE IT / CBSA",
    tagColor: "#0369a1",
    headline: "The In-Transit Exception Has a Documentation Test, Not an Order-Date Test",
    summary: "CBSA says its surtax does not apply to U.S. goods that were in transit to Canada on September 8. For this notice, that means goods bound for Canada, not yet arrived in Canada and under the control of a carrier. Importers must have proof; CBSA lists shipping documents such as a bill of lading, report-of-entry documents and cargo-control documents as examples.",
    whyItMatters: "Flag any high-value part, shop-equipment order or fleet component arriving today for supplier or broker confirmation. Record the carrier reference, transit evidence, actual entry date, origin/marking, tariff-item result, importer response and landed quote. A pre-September-8 PO alone is not the stated test, so do not promise either an exemption or a surcharge until it is verified.",
    source: "CBSA — Customs Notice 26-23",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "TRAILER EQUIPMENT / 25% REPORTED / FLEET WORK / VERIFY",
    tagColor: "#15803d",
    headline: "Trailer Equipment Is the Fleet-Work Watchpoint — Check the Exact Line",
    summary: "CBC reports U.S.-built semi-trailers are among the products expected to face a 25% Canadian counter-tariff today. Ocean Trailer said it had tried to bring U.S.-manufactured units into Canada before the effective date, while the Manitoba Trucking Association said most semi-trailers in Canada come from the U.S. The report is about named trailer equipment and fleet context, not a universal rate on trailer parts or auto repairs.",
    whyItMatters: "For trailer, fleet and fabrication work, confirm the specific equipment or component’s tariff item, U.S. origin/marking, in-transit position and supplier’s landed quote before promising a completion date. Do not extend the reported 25% trailer context to routine passenger-vehicle repairs, all trailer parts or every commercial invoice.",
    source: "CBC News — September 6, 2026",
    sourceUrl: "https://www.cbc.ca/news/canada/manitoba/trucking-semi-trailer-costs-us-tariffs-9.7330014",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📅",
    text: "CBSA confirms the U.S. Surtax Order is active today; listed U.S.-origin goods face a 15%, 25% or 50% rate on value for duty, as applicable.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
  {
    icon: "🚚",
    text: "The in-transit exception requires goods to be bound for Canada, not yet arrived and under carrier control; CBSA may request documentary proof.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
  {
    icon: "📋",
    text: "For commercial imports, CBSA says proof of origin may be a commercial invoice or other documentation with the CUSMA minimum data elements.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
  {
    icon: "🔩",
    text: "If both the 2026 U.S. Surtax Order and the Steel Derivative Goods Surtax Order could apply, CBSA says only the 2026 Order’s surtax applies.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
  {
    icon: "↔️",
    text: "The reported January 1, 2027 50% U.S. auto-parts escalation remains a future threat, not a new current Canadian service-parts rate.",
    sourceUrl: "https://www.reuters.com/business/autos-transportation/canadas-retaliatory-tariffs-take-effect-us-trade-talks-stall-2026-09-08/",
  },
];

const tipOfTheDay = {
  title: "Open an Active-Order Exception Board",
  text: "For material orders entered today, log the part number, U.S. origin/marking, tariff-item check, importer or broker reply, carrier/tracking proof, actual entry status, landed quote, availability, quote expiry and a named owner. Use “pending verification” where facts are incomplete. Do not convert a general trade headline into one universal surcharge.",
};

const quoteOfTheDay = {
  text: "The surtax will only apply to goods that originate in the U.S.",
  author: "Canada Border Services Agency",
  title: "Customs Notice 26-23 — United States Surtax Order (2026)",
};

const rideOfTheDay = {
  name: "1970 Dodge Challenger R/T 440 Six Pack — Plum Crazy, Ontario-Plated",
  description: "Plum Crazy paint, black side stripes and 440 Six Pack V8 muscle make this 1970 Dodge Challenger R/T the right iron for an Ontario shop on a Tuesday evening. Its rule for the bay is equally direct: let the exact part line, verified origin and current supplier quote — not a broad trade headline — determine the promise you make to a customer.",
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
                {["SEPT. 8: ACTIVE", "15/25/50% BY LINE", "TRANSIT: PROVE IT", "'70 CHALLENGER R/T"].map((tag) => (
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
              alt="Canadian Automotive Parts Manager Verifying a Commercial Parts Shipment — Baywash Daily Briefing Edition No. 124"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 124 — Tuesday, September 8, 2026 — Active Today / Transit Proof / Fleet Lines</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                September 8 Is Live: Verify the Exact Import Before You Quote
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Dodge Challenger R/T 440 Six Pack</span>
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
