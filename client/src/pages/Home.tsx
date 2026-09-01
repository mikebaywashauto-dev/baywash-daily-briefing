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

const BRIEFING_NUMBER = 117;
const BRIEFING_DATE = "September 1, 2026";
const BRIEFING_DAY = "Tuesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/IqgPxpJQlbgzBYdf.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/RBeAMWfonSQZQdUw.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/lMbtpTteaDiHztAo.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/GRNUNSzUUhdJUrim.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/bCWYwNRmdcIOlbue.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "SEPT. 8 TARIFFS / REMISSION PROCESS / EXCEPTIONAL RELIEF ONLY",
    tagColor: "#b91c1c",
    headline: "Finance Canada Opens a Remission Path — But It Is a Narrow, Evidence-Heavy Exception",
    summary: "Finance Canada says its tariff-remission framework remains available for exceptional relief from the 15%, 25% and 50% counter-tariffs taking effect September 8. It may consider cases where an input cannot reasonably be sourced in Canada or from non-U.S. suppliers, or other exceptional circumstances that could severely hurt the Canadian economy. The department stresses that remission is an exception, not the rule.",
    whyItMatters: "Do not treat the process as a blanket repair-shop exemption or immediate price relief. A Canadian-registered importer needs detailed support, including the 8-digit tariff item, import information and evidence that alternatives were canvassed. If a material exposure is real, assemble records and consult a customs or trade professional; keep normal repair estimates tied to the actual part and supplier quote.",
    source: "Finance Canada — August 31, 2026",
    sourceUrl: "https://www.canada.ca/en/department-finance/programs/international-trade-finance-policy/process-requesting-remission-tariffs-that-apply-on-certain-goods-us.html",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "GM ONTARIO / ~C$1.4B OVER 3 YEARS / NEW + PRIOR INVESTMENT BUCKETS",
    tagColor: "#0369a1",
    headline: "GM’s Ontario Capacity Plan Is Ratified — Keep the C$1.4B Headline in Its Proper Bucket",
    summary: "GM Canada says its planned Oshawa and St. Catharines investments total approximately C$1.4 billion over the next three years. Driving reports that includes an additional C$144 million for next-generation GMC Sierra HD production at Oshawa, building on a previously announced C$343 million in next-generation truck work and manufacturing enhancements. Unifor separately describes more than C$1 billion in Canadian-facility investment.",
    whyItMatters: "The reported totals use different investment groupings, so do not add them together or call every dollar new on Tuesday. Ratification confirms the capacity direction; it does not promise a current repair-part price or stock change. Keep parts orders, customer quotes and turnaround promises tied to current distributor availability and landed cost.",
    source: "Driving — August 31, 2026",
    sourceUrl: "https://driving.ca/auto-news/industry/general-motors-unifor-ratify-new-contract-wages-benefits-security",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "COLLISION OPERATIONS / MARGIN UP / REVENUE DOWN / JOB-MIX DISCIPLINE",
    tagColor: "#15803d",
    headline: "AutoCanada’s Collision Margin Rose While Revenue Fell — A Reminder to Measure the Job Mix",
    summary: "Collision Repair magazine reports AutoCanada’s Q2 collision revenue declined 5.3% year over year to C$36.4 million, while collision gross profit rose 7.1% to C$17.7 million. Its reported collision gross margin increased to 48.7% from 43.1%, helped by acquired conventional collision businesses and a shift away from lower-margin paintless-dent repair after prior-year hail activity.",
    whyItMatters: "These are public-company segment results, not a margin benchmark or forecast for every independent shop. The useful operating cue is to track gross profit by job type, document repair-plan changes and review parts and sublet costs before a file closes. Revenue growth alone can hide a weaker mix.",
    source: "Collision Repair magazine — August 31, 2026",
    sourceUrl: "https://www.collisionrepairmag.com/people/article/15833744/boyd-group-services-inc-boyd-group-hits-1b-quarterly-sales-milestone",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📅",
    text: "Finance Canada calls remission an exception and will consider it only in exceptional and compelling circumstances.",
    sourceUrl: "https://www.canada.ca/en/department-finance/programs/international-trade-finance-policy/process-requesting-remission-tariffs-that-apply-on-certain-goods-us.html",
  },
  {
    icon: "🔩",
    text: "Only companies registered in Canada may request remission; the template calls for an 8-digit tariff item and substantive evidence.",
    sourceUrl: "https://www.canada.ca/en/department-finance/programs/international-trade-finance-policy/process-requesting-remission-tariffs-that-apply-on-certain-goods-us.html",
  },
  {
    icon: "🗂️",
    text: "GM’s roughly C$1.4B three-year framing includes the C$144M incremental Sierra HD commitment and prior investment work.",
    sourceUrl: "https://driving.ca/auto-news/industry/general-motors-unifor-ratify-new-contract-wages-benefits-security",
  },
  {
    icon: "🏭",
    text: "AutoCanada reported Q2 collision revenue of C$36.4M, gross profit of C$17.7M and a 48.7% segment gross margin.",
    sourceUrl: "https://www.collisionrepairmag.com/people/article/15833744/boyd-group-services-inc-boyd-group-hits-1b-quarterly-sales-milestone",
  },
  {
    icon: "↔️",
    text: "September 8 countermeasures remain tariff-item and origin specific; a U.S. supplier address alone does not determine a part’s treatment.",
    sourceUrl: "https://www.canada.ca/en/department-finance/programs/international-trade-finance-policy/process-requesting-remission-tariffs-that-apply-on-certain-goods-us.html",
  },
];

const tipOfTheDay = {
  title: "Build an Evidence Pack Only for Material, Qualified Exposure",
  text: "If your Canadian business imports a materially affected input and believes it cannot reasonably be sourced in Canada or from a non-U.S. supplier, preserve the 8-digit tariff item, invoices and customs documents, usage, alternatives canvassed and supplier responses. Ask a customs or trade professional about a remission request; do not use it as a blanket customer surcharge rationale.",
};

const quoteOfTheDay = {
  text: "Remission represents an exception to the rules by providing for relief of otherwise applicable duties.",
  author: "Finance Canada",
  title: "On the September 8 counter-tariff remission framework — August 31, 2026",
};

const rideOfTheDay = {
  name: "1970 Buick GSX Stage 1 — Saturn Yellow, Ontario-Plated",
  description: "Saturn Yellow paint, a black GSX hood and Stage 1 muscle make this 1970 Buick the right iron for an Ontario shop on a Tuesday evening. Its rule for the bay is equally direct: let documented part treatment and actual supplier pricing — not a broad headline — set the promise you make to a customer.",
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
                {["REMISSION: EXCEPTION ONLY", "SEPT. 8: 7 DAYS", "GM: ~C$1.4B PLAN", "'70 BUICK GSX"].map((tag) => (
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
              alt="Canadian Automotive Shop Owner Reviewing Parts Documentation for Tariff Remission — Baywash Daily Briefing Edition No. 117"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 117 — Tuesday, September 1, 2026 — Tariff Evidence / GM Investment / Collision Margin</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Tuesday Check: Build Proof Before the September 8 Tariff Clock Starts
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Buick GSX Stage 1</span>
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
