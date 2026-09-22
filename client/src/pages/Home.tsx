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

const BRIEFING_NUMBER = 138;
const BRIEFING_DATE = "September 22, 2026";
const BRIEFING_DAY = "Tuesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/AYfdDBkyyVzEjpeb.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/KVzKVvnjJTTWyeFd.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/rHDlEEAwUXnSfwJx.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/WMddtdwwSlvbLgIy.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/RCBxUowfNXtePqzG.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "STELLANTIS / POST-EXPIRY / CONCILIATION / NO LEGAL STRIKE",
    tagColor: "#b91c1c",
    headline: "Conciliation Still Sets the Labour Clock",
    summary: "The Stellantis agreement has expired, but the latest primary Unifor update says the union was not in a legal strike position as of September 20 because conciliation must finish first. Bargaining remains at impasse and a strike remains possible, but a future legal deadline and local strike-vote notice would be separate steps. No reliable September 22 source located confirms a settlement, strike or lockout.",
    whyItMatters: "Treat this as a verification watch—not a confirmed work stoppage, plant restart or service-parts outage. Keep each open repair tied to its actual part number, written distributor stock, ETA and quote expiry. Update a customer estimate only when a verified union, company or regulator change affects that actual supply file.",
    source: "Unifor — Stellantis Membership Update",
    sourceUrl: "https://autotalks.uniforautohub.ca/stellantis_membership_update_2026_09_16",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "BRAMPTON / COLLISION FILES / FUNDING / PART-NUMBER TEST",
    tagColor: "#0369a1",
    headline: "Brampton Is a Collision-File Watch, Not a Parts Forecast",
    summary: "Collision Repair Magazine reports that federal officials warned public funding could be recovered from Stellantis if vehicle production does not return to Brampton. It describes a September 11 memorandum of understanding with Roshel as a potential sale, and notes Brampton’s former Chrysler 300, Dodge Charger and Dodge Challenger production—vehicles still common in Canadian collision repair. None of that confirms a sale closing, a production restart or a named-part interruption.",
    whyItMatters: "For a 300, Charger or Challenger repair, quote the actual OE, aftermarket and recycled alternatives by part number. Record written stock, ETA, quote validity and insurer approval where relevant. Do not turn a plant-policy story into a blanket forecast for every legacy component or add a blanket surcharge.",
    source: "Collision Repair Magazine — Tuesday Ticker",
    sourceUrl: "https://www.collisionrepairmag.com/news/article/15835394/stellantis-tuesday-ticker-sept-22-2026",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "CANADA / CAD / CORRECTION / ORIGIN / VALUE FOR DUTY",
    tagColor: "#15803d",
    headline: "Correct the CAD File on the Right Clock",
    summary: "CBSA’s active notice applies Canada’s U.S. surtax at 15%, 25% or 50% only to listed U.S.-origin goods, calculated on value for duty. It says commercial proof of origin can be an invoice or other document with CUSMA minimum data elements. Where a commercial surtax amount was self-assessed incorrectly, a change before the payment due date can be a correction; an adjustment may be made after the due date within the legislative timeframe.",
    whyItMatters: "The importer of record or broker—not a parts counter headline—must decide the customs treatment. Preserve the SKU, origin evidence, tariff item, value-for-duty basis, invoice, broker/CAD result, stock, ETA and expiry. Ask in writing whether the file needs a correction now or a later adjustment before changing the customer quote.",
    source: "Canada Border Services Agency — Customs Notice 26-23",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "⏰",
    text: "The Stellantis agreement is expired, but Unifor’s latest primary update says conciliation remains and did not confirm a legal strike position as of September 20.",
    sourceUrl: "https://autotalks.uniforautohub.ca/stellantis_membership_update_2026_09_16",
  },
  {
    icon: "🗳️",
    text: "A strike remains possible, but a future legal deadline and local notice of strike-vote meetings would be separate steps if Unifor moves there.",
    sourceUrl: "https://autotalks.uniforautohub.ca/stellantis_membership_update_2026_09_16",
  },
  {
    icon: "🏭",
    text: "Brampton production, a potential Roshel sale and public-funding recovery remain policy and bargaining watch points—not completed outcomes or a general parts forecast.",
    sourceUrl: "https://www.collisionrepairmag.com/news/article/15835394/stellantis-tuesday-ticker-sept-22-2026",
  },
  {
    icon: "🇨🇦",
    text: "Canada’s U.S. surtax is item-, U.S.-origin- and value-for-duty-specific at 15%, 25% or 50%; commercial CAD codes are 26186A, 26186B and 26186C as applicable.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
  {
    icon: "🧾",
    text: "For commercial entries, CBSA distinguishes a correction before the payment due date from an adjustment after the due date; confirm the route with the importer of record or broker.",
    sourceUrl: "https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html",
  },
  {
    icon: "🏍️",
    text: "September 29 is a separate, narrow U.S. date for specified Canadian motorcycles under HTSUS 8711.50.00—not a general auto-parts or vehicle ban.",
    sourceUrl: "https://www.challenger.com/resources/news/u-s-modifies-section-338-tariffs-and-imposes-import-bans-on-certain-canadian-products/",
  },
];

const tipOfTheDay = {
  title: "Open-File Correction Sweep",
  text: "For every potentially affected inbound part, compare the supplier invoice and origin evidence against the broker or CAD result before the payment deadline. Log the SKU, tariff item, value-for-duty basis, stock, ETA and expiry, then ask whether the importer calls the next step a correction or a later adjustment. Keep labour status in a separate dated source row.",
};

const quoteOfTheDay = {
  text: "Unifor will not be in a legal strike position as of September 20, 2026.",
  author: "Unifor",
  title: "Stellantis Membership Update — September 16, 2026",
};

const rideOfTheDay = {
  name: "1970 AMC AMX 390 — Bittersweet Orange, Ontario-Plated",
  description: "Bittersweet Orange paint, black stripe accents and compact 390 V8 muscle make this 1970 AMC AMX a proper Tuesday Ontario shop feature. Its reminder fits every open ticket: a strong story is not a parts quote—confirm the actual SKU, origin evidence, broker result and expiry before promising the repair.",
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
                {["Conciliation Still", "Brampton Watch", "CAD Correction", "'70 AMX"].map((tag) => (
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
              alt="Canadian Automotive Shop Owner Reviewing a Tuesday Customs Correction File — Baywash Daily Briefing Edition No. 138"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 138 — Tuesday, September 22, 2026 — Conciliation / Brampton Watch / CAD Correction</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Tuesday Check: Price the File, Not the Forecast
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 AMC AMX</span>
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
