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

const BRIEFING_NUMBER = 125;
const BRIEFING_DATE = "September 9, 2026";
const BRIEFING_DAY = "Wednesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/mHCwilxtZkGDFoMT.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/gPVIuOZqfeQjAlLT.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/RHmkXUAafFldAclD.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/SvzUGcdTYezylPMe.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/GCbbkJmqGnwBRHXt.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "DAY TWO / CBSA / 15–25–50% / ITEM SPECIFIC",
    tagColor: "#b91c1c",
    headline: "Day Two: Make the Importer’s Answer Part of Every Material Quote",
    summary: "CBSA says certain goods imported into Canada and originating in the U.S. are subject to a surtax of 15%, 25% or 50% of value for duty, as applicable under the United States Surtax Order (2026). The schedules hold the item-level list and rate. The order applies to U.S.-origin goods even when they are exported to Canada from another country.",
    whyItMatters: "This is not a blanket automotive-parts rate or a service-advisor billing code. For a material job, get the part number, U.S.-origin/marking confirmation, tariff-item result, importer-of-record or broker response, landed quote, stock and delivery status. Ask the distributor how the exact item was treated; do not create a generalized customer surcharge.",
    source: "CBSA — Customs Notice 26-23",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "IN TRANSIT / DOCUMENTS / CARRIER CONTROL / VERIFY",
    tagColor: "#0369a1",
    headline: "Transit Relief Is Evidence-Based — Keep the Carrier Record",
    summary: "CBSA says the transit exception applies to U.S. goods bound for Canada, not yet arrived in Canada and under a carrier’s control when the surtax came into force. Importers must have proof; CBSA lists a bill of lading, report-of-entry documents and cargo-control documents as examples. For commercial goods, CBSA says proof of origin may be an invoice or other document containing the CUSMA minimum data elements.",
    whyItMatters: "For a delivery arriving today, record the part number, carrier/tracking reference, transit evidence, actual entry timing, origin/marking, tariff-item result and distributor or broker answer. A pre-September-8 PO, a U.S. supplier address or a pickup point is not a substitute for the stated proof. Mark the customer quote pending where a material fact is still unverified.",
    source: "CBSA — Customs Notice 26-23",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "SEPT. 29 / U.S. / 8711.50.00 / MOTORCYCLES ONLY",
    tagColor: "#15803d",
    headline: "The New U.S. Import-Exclusion Notice Is Narrow: Large Motorcycles, Not Auto Parts",
    summary: "A September 8 White House proclamation says certain Canadian products will be excluded from importation into the U.S. effective September 29. Its Annex I identifies HTSUS 8711.50.00: motorcycles and cycles with a reciprocating piston engine over 800 cc. The proclamation says qualifying products imported before September 29 remain subject to the prior 50% duty rate, rather than the new exclusion.",
    whyItMatters: "This is a future-dated, narrow motorcycle measure — not a current ban on Canadian cars, trucks or all automotive parts. For mixed auto/motorcycle shops, do not revise ordinary automotive service quotes because of it. For an affected commercial motorcycle shipment, have the exporter or importer confirm the HTS scope and effective date with its customs broker.",
    source: "White House — September 8, 2026 proclamation and Annex I",
    sourceUrl: "https://www.whitehouse.gov/presidential-actions/2026/09/excluding-certain-canadian-products-from-importation-into-the-united-states-in-response-to-continued-discrimination-against-the-commerce-of-the-united-states-with-respect-to-motor-vehicles/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📅",
    text: "CBSA says the U.S. Surtax Order is now operating at 15%, 25% or 50% of value for duty on the listed U.S.-origin goods, as applicable.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
  {
    icon: "📋",
    text: "Commercial proof of origin may be an invoice or other document with the CUSMA Annex 5-A minimum data elements, subject to the stated exceptions.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
  {
    icon: "🔩",
    text: "Where both the 2026 U.S. Surtax Order and the Steel Derivative Goods Surtax Order could apply, CBSA says only the 2026 Order’s surtax applies.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
  {
    icon: "🛠️",
    text: "CBSA describes specific Chapter 99 cases in which U.S.-made goods repaired or altered across the border may be non-subject; verify the exact customs treatment rather than assuming a general repair exemption.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
  {
    icon: "🏍️",
    text: "The official annex to the future September 29 U.S. import exclusion names HTSUS 8711.50.00 large motorcycles — not all Canadian auto parts or motor vehicles.",
    sourceUrl: "https://www.whitehouse.gov/wp-content/uploads/2026/09/ANNEX-I-MOTOR-VEHICLES.pdf",
  },
];

const tipOfTheDay = {
  title: "Run a 24-Hour Landed-Quote Proof Check",
  text: "For each material high-value job, log the part number, origin/marking, tariff-item check, distributor or importer answer, carrier proof, actual entry status, landed price, stock, ETA, quote expiry and a named owner. Mark gaps as “pending verification.” This protects the customer promise without creating a shop-wide tariff fee.",
};

const quoteOfTheDay = {
  text: "The surtax will only apply to goods that originate in the U.S.",
  author: "Canada Border Services Agency",
  title: "Customs Notice 26-23 — United States Surtax Order (2026)",
};

const rideOfTheDay = {
  name: "1970 Ford Mustang Boss 302 — Grabber Blue, Ontario-Plated",
  description: "Grabber Blue paint, a black hood treatment and Boss 302 V8 muscle make this 1970 Ford Mustang the right iron for an Ontario shop on a Wednesday evening. Its rule for the bay is equally direct: let the exact part line, verified origin and current supplier quote — not a broad trade headline — determine the promise you make to a customer.",
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
                {["Surtax: Day Two", "15/25/50% By Line", "Transit: Show Proof", "'70 Boss 302"].map((tag) => (
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
              alt="Canadian Automotive Parts Manager Reviewing a Material Parts Quote — Baywash Daily Briefing Edition No. 125"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 125 — Wednesday, September 9, 2026 — Day Two / Transit Proof / Narrow U.S. Scope</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Day Two: Keep the Proof With the Quote
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Ford Mustang Boss 302</span>
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
