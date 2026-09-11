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

const BRIEFING_NUMBER = 127;
const BRIEFING_DATE = "September 11, 2026";
const BRIEFING_DAY = "Friday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/EYeVRfcUMnOmblWd.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/xlCSRmxBSIlmBlem.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/XvvtDfnnemPZOBTl.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/zqcZyIqKReFPvabr.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/VKLkHzOowIptoTxp.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "FOUR DAYS / SEPT. 15 / U.S. / 50% SECTION 338",
    tagColor: "#b91c1c",
    headline: "Four Days to the U.S. Scope Change: Keep Export Work on Its Own Track",
    summary: "The White House says its September 8 modification adds and removes specified Canadian products from the 50% U.S. Section 338 duty list effective for goods entered for U.S. consumption, or withdrawn from warehouse, on or after 12:01 a.m. Eastern on September 15. The proclamation says the modified Section 338 duty applies in addition to Section 232 duties.",
    whyItMatters: "This is a future-dated U.S. import measure for specified Canadian goods, not a new Canadian repair-parts rate. For a cross-border wholesale, specialty-vehicle or customer export job that may enter the U.S. next week, ask the exporter or broker for the exact HTS result, origin, U.S. entry date and landed quote. Do not change an ordinary Canadian service quote on the strength of a headline.",
    source: "White House — Section 338 motor-vehicle scope modification",
    sourceUrl: "https://www.whitehouse.gov/presidential-actions/2026/09/modifying-the-scope-of-products-of-canada-subject-to-the-additional-duties-imposed-to-offset-canadian-discrimination-against-the-united-states-with-respect-to-motor-vehicles/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CANADA / 25% SCHEDULE / 8544.49 / 8716.39 / VERIFY",
    tagColor: "#0369a1",
    headline: "The Canadian List Has Shop-Adjacent Lines — But Classification Controls",
    summary: "Canada’s September 8 Order applies 15%, 25% or 50% surtax only to listed U.S.-origin tariff items. Its 25% schedule includes `8544.49.00` and the `8716.39` series among many other lines. The Order treats U.S. origin as eligibility to be marked as U.S. under the CUSMA marking regulations; the exact tariff item and import treatment still control.",
    whyItMatters: "Do not decide that every wiring product, trailer item, tool or repair component is covered from a product name or country of shipment. Ask the distributor, importer of record or broker for the specific part number’s tariff item, origin/marking, entry treatment and landed quote. A written answer is more useful than adding a blanket fee to every estimate.",
    source: "Canada — United States Surtax Order (2026), PC 2026-0785",
    sourceUrl: "https://orders-in-council.canada.ca/attachment.php?attach=48943&lang=en",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "SUPPLY CHAIN / MULTI-CROSSING / QUOTE CONTROL / NOT A SURCHARGE",
    tagColor: "#15803d",
    headline: "Integrated Supply Chains Raise Quote Risk — Not a Universal Surcharge",
    summary: "NPR reports that North American automotive components often move among Canada, the U.S. and Mexico for successive processing. Linamar CEO Jim Jarrell described a casting moving from Mexico to U.S. processing, then Canada for further work and back to a U.S. sub-assembly. The report says major suppliers are monitoring effects as companies weigh how to respond to shifting trade conditions.",
    whyItMatters: "The practical shop response is live verification, not a prediction that every part will rise in price or disappear. For material jobs, confirm stock, realistic ETA, origin, exact landed price and quote expiry with the supplier. Escalate an unresolved cross-border answer before promising a customer a fixed price or completion date.",
    source: "NPR — North American auto-parts supply-chain report",
    sourceUrl: "https://www.wwno.org/npr-news/2026-09-11/the-u-s-canada-trade-war-is-creating-a-headache-for-auto-parts-makers",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📅",
    text: "The U.S. Section 338 additions and removals take effect September 15 for specified Canadian goods entered for U.S. consumption or withdrawn from warehouse.",
    sourceUrl: "https://www.whitehouse.gov/presidential-actions/2026/09/modifying-the-scope-of-products-of-canada-subject-to-the-additional-duties-imposed-to-offset-canadian-discrimination-against-the-united-states-with-respect-to-motor-vehicles/",
  },
  {
    icon: "🇨🇦",
    text: "Canada’s Order covers listed U.S.-origin tariff items at 15%, 25% or 50% of value for duty; the schedules, not a broad product label, determine whether a line is listed.",
    sourceUrl: "https://orders-in-council.canada.ca/attachment.php?attach=48943&lang=en",
  },
  {
    icon: "📋",
    text: "CBSA says commercial proof of origin may be a commercial invoice or other documentation containing the CUSMA Annex 5-A minimum data elements.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
  {
    icon: "🧾",
    text: "The active Canadian surtax has an in-transit exception for qualifying U.S. goods bound for Canada and under carrier control on September 8; importers need evidence in their possession.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
  {
    icon: "🔍",
    text: "CBSA says a binding advance ruling on FTA origin, tariff classification or marking can be requested for predictable treatment before importation.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
];

const tipOfTheDay = {
  title: "Run a Friday-to-Monday Exception Sweep",
  text: "For every material order, record the part number, actual tariff item, origin/marking, import or export direction, broker or distributor reply, entry date, landed price, availability, customer quote expiry and a named owner. Flag any export that could enter the U.S. after September 15. Keep the Canadian import result on its own line and never use a broad trade headline as a universal fee.",
};

const quoteOfTheDay = {
  text: "The more uncertainty there is, obviously the harder it becomes to invest and grow in a confident way.",
  author: "Jim Jarrell, President and CEO, Linamar",
  title: "As quoted by NPR — September 11, 2026",
};

const rideOfTheDay = {
  name: "1970 Chevrolet Nova SS 396 — Cranberry Red, Ontario-Plated",
  description: "Cranberry Red paint, black hood stripes and big-block 396 muscle make this 1970 Chevrolet Nova SS the right iron for an Ontario shop on a Friday evening. Its rule for the bay is equally direct: for any cross-border job, keep the direction of trade, exact tariff line and verified broker or supplier response together before you promise a customer a price or date.",
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
                {["Four Days: Sept. 15", "Schedule: Exact Code", "Quote: Verify Live", "'70 Nova SS"].map((tag) => (
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
              alt="Canadian Automotive Shop Owner Reviewing Cross-Border Parts Documents — Baywash Daily Briefing Edition No. 127"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 127 — Friday, September 11, 2026 — Four Days / Exact Code / Quote Control</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Four Days to the Next U.S. Scope Change
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Chevrolet Nova SS 396</span>
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
