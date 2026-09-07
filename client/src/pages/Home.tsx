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

const BRIEFING_NUMBER = 123;
const BRIEFING_DATE = "September 7, 2026";
const BRIEFING_DAY = "Monday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/RIMAvDPBUTXelbbv.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/whqihKYkdOSPpTdg.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/dzuOaDcYcJIxMAMO.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/CvpeGIjTeaRxLvYw.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/XAiwXXWNaMrBkhTr.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "SEPT. 8 / TOMORROW / C$27.6B / 15–25–50%",
    tagColor: "#b91c1c",
    headline: "Tomorrow at 12:01: Use the Tariff Item, Origin and Transit Facts — Not a Blanket Surcharge",
    summary: "Finance Canada says its C$27.6 billion countermeasures on U.S. imports take effect at 12:01 a.m. September 8, at individual rates of 15%, 25% and 50%. The department says the measures apply only to goods originating in the U.S. under the CUSMA marking rules, and not to U.S. goods in transit to Canada on the effective date. The tariff-item list must be read with Canada’s Customs Tariff.",
    whyItMatters: "For a material job due this week, record the exact part number, tariff-item result, origin/marking, importer of record, landed quote and actual shipment or transit status. A U.S. supplier address—and an order date before September 8—does not settle treatment. Do not apply one generalized tariff charge to every repair order.",
    source: "Finance Canada — September 8 counter-tariff backgrounder",
    sourceUrl: "https://www.canada.ca/en/department-finance/news/2026/08/list-of-products-from-the-united-states-subject-to-counter-tariffs-effective-september-8-2026.html",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "TRAILERS / 25% REPORTED / 12:01 TUESDAY / VERIFY",
    tagColor: "#0369a1",
    headline: "Trailer Equipment Is a Specific Exposure — Keep Routine Parts on Their Own Check",
    summary: "CBC reports that U.S.-built semi-trailers are among the products scheduled for a 25% Canadian counter-tariff on September 8. Ocean Trailer says it is trying to bring U.S.-manufactured units over the border before the effective date, while the Manitoba Trucking Association says most semi-trailers in Canada come from the U.S. The report is about trailer equipment and fleet context, not a universal repair-parts rate.",
    whyItMatters: "For trailer, fleet and fabrication work, make today a supplier-verification trigger. Ask whether the exact equipment or component is listed, what its origin and tariff item are, and whether its entry or transit position changes the quote. Do not carry the reported 25% trailer rate into routine passenger-vehicle repairs or add it to every line on a commercial job.",
    source: "CBC News — September 6, 2026",
    sourceUrl: "https://www.cbc.ca/news/canada/manitoba/trucking-semi-trailer-costs-us-tariffs-9.7330014",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "CROSS-BORDER PICKUP / DECLARE / DOCUMENT / NO SHORTCUT",
    tagColor: "#15803d",
    headline: "A U.S. Pickup Address Doesn’t Answer the Customs Question",
    summary: "CNN’s profile of a freight-forwarding shop on the New York–Quebec border notes customers receive old car parts, tractor pieces and engine transmissions through its location, but every shipment still has to be declared at a nearby customs office. The example shows that a cross-border pickup or forwarding arrangement remains a customs transaction; it does not set the origin, tariff item or rate for a particular part.",
    whyItMatters: "Do not use a U.S. pickup address as a duty workaround or a substitute for documentation. For a material order, preserve the supplier invoice, origin/marking information, tariff-item result where applicable, import declaration or entry record, transit evidence and landed quote before you promise a completion date or customer price.",
    source: "CNN Business — September 6, 2026",
    sourceUrl: "https://www.cnn.com/2026/09/06/business/canada-us-tariffs-business",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📅",
    text: "Canada’s C$27.6B countermeasures take effect tomorrow at 12:01 a.m., at individual 15%, 25% and 50% rates.",
    sourceUrl: "https://www.canada.ca/en/department-finance/news/2026/08/list-of-products-from-the-united-states-subject-to-counter-tariffs-effective-september-8-2026.html",
  },
  {
    icon: "🚚",
    text: "Finance Canada says U.S. goods in transit to Canada on September 8 are not subject to the new countermeasures; an earlier order date alone is not the stated test.",
    sourceUrl: "https://www.canada.ca/en/department-finance/news/2026/08/list-of-products-from-the-united-states-subject-to-counter-tariffs-effective-september-8-2026.html",
  },
  {
    icon: "🛞",
    text: "CBC reports a 25% counter-tariff is expected on named U.S.-built semi-trailers; verify the exact part or equipment line before pricing fleet work.",
    sourceUrl: "https://www.cbc.ca/news/canada/manitoba/trucking-semi-trailer-costs-us-tariffs-9.7330014",
  },
  {
    icon: "📋",
    text: "The new measures apply only to goods originating in the U.S. under the CUSMA marking rules; a supplier address alone does not answer the question.",
    sourceUrl: "https://www.canada.ca/en/department-finance/news/2026/08/list-of-products-from-the-united-states-subject-to-counter-tariffs-effective-september-8-2026.html",
  },
  {
    icon: "↔️",
    text: "The reported January 1, 2027 50% U.S. auto-parts escalation remains a future threat, not a new current Canadian service-parts rate.",
    sourceUrl: "https://www.taxathand.com/article/41713/United-States/2026/Trade-corner-4-September-2026",
  },
];

const tipOfTheDay = {
  title: "Open a Transit-Versus-Entry Log Today",
  text: "Track only material open POs: part number, supplier, origin/marking, tariff-item check, importer of record, shipment or in-transit evidence, expected entry or delivery time, landed quote and named owner. The stated exclusion concerns goods in transit to Canada on September 8—not simply when you placed the order. Escalate actual gaps; do not create a shop-wide tariff fee.",
};

const quoteOfTheDay = {
  text: "These tariffs only apply to goods originating from the U.S.",
  author: "Finance Canada",
  title: "September 8, 2026 counter-tariff backgrounder",
};

const rideOfTheDay = {
  name: "1970 Chevrolet Camaro Z28 LT-1 — Fathom Green, Ontario-Plated",
  description: "Fathom Green paint, black hood stripes and LT-1 small-block V8 muscle make this 1970 Chevrolet Camaro Z28 the right iron for an Ontario shop on a Labour Day Monday evening. Its rule for the bay is equally direct: let the exact part line, verified origin and current supplier quote — not a broad trade headline — determine the promise you make to a customer.",
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
                {["SEPT. 8: TOMORROW", "15/25/50% BY LINE", "TRAILER: VERIFY", "'70 CAMARO Z28"].map((tag) => (
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
              alt="Canadian Automotive Parts Manager Reviewing Transit and Entry Documentation — Baywash Daily Briefing Edition No. 123"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 123 — Monday, September 7, 2026 — Tomorrow’s Check / Trailer Lines / Customs Proof</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Labour Day Prep: Open a Transit-Versus-Entry Log
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Chevrolet Camaro Z28 LT-1</span>
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
