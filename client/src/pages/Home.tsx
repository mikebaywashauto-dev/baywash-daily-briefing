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

const BRIEFING_NUMBER = 105;
const BRIEFING_DATE = "August 20, 2026";
const BRIEFING_DAY = "Thursday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/LUBZujcEeJgHxjrK.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ciLtlrMkUaRmlLCm.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/JyoKgpUNKrFPXvgu.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/nqdSIrwdQnyIVPrk.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/BIkdcVZkjZZdTAJa.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "SECTION 338 PAUSE / DEADLINE: SAT AUG 22, 12:01 A.M. ET / DEAL CLOSE, NOT FINAL",
    tagColor: "#b91c1c",
    headline: "The Three-Day Clock Is Running — Canada-U.S. Deal Is Close, But the Section 338 Deadline Is Saturday",
    summary: "Canada and the United States are closing in on a trade deal, but neither government has announced a final agreement. Reuters reports President Donald Trump said the U.S. would ‘probably’ have a deal with Canada, while Prime Minister Mark Carney said the sides were moving toward an agreement. The temporary suspension of the 50% Section 338 tariffs expires at 12:01 a.m. EDT on Saturday, August 22, unless the countries finalize a deal or extend the pause. The tariffs would affect about US$20 billion in Canadian goods. The legal pause was issued because senior U.S. officials said Canada had expressed commitments and the negotiations supported temporary suspension — it is not a permanent cancellation.",
    whyItMatters: "Treat the time window as a verification window, not a buying panic. Get written answers from suppliers on price, origin, CUSMA documentation and expiry for major special orders. A deal that is ‘close’ is still not a new supplier invoice; do not promise customers a tariff outcome or add a blanket surcharge before terms and price lists are final.",
    source: "Reuters — August 20, 2026",
    sourceUrl: "https://www.reuters.com/world/us-canada-trade-negotiators-meet-after-trump-sets-new-tariff-deadline-2026-08-19/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "PROPOSED: AUTOS 25% → 15% / U.S. CONTENT DEDUCTION / METALS 50% → 25% UNDER QUOTA",
    tagColor: "#15803d",
    headline: "Proposed Auto and Metals Relief Has Numbers — But They Are Still Negotiating Terms, Not Final Rules",
    summary: "A source familiar with the negotiations told Reuters that a proposed deal would cut the top-line U.S. tariff on Canadian-built cars and trucks to 15% from 25%, before deductions for U.S.-produced content. Canadian auto executives say even that proposed rate threatens Canadian manufacturing, and sources say Canada is pushing for 10%. The same report says top-line U.S. tariffs on Canadian steel and aluminum could be cut to 25% from 50%, with lower steel tariffs applying only below a quota. One source said a likely quota could be 4 million metric tons annually; steel imports above it would face the original 50% rate. These are reported proposed terms, not a published final regulation.",
    whyItMatters: "Vehicle and metals terms can influence parts costs over time, but they are not a licence to guess at the price of a sensor, brake job or filter. Keep shop estimates grounded in supplier quotes and real part-level sourcing. On an expensive special order, document the quote expiry and get customer approval for any genuine price revision before purchase.",
    source: "Reuters — August 20, 2026",
    sourceUrl: "https://www.reuters.com/world/us-canada-trade-negotiators-meet-after-trump-sets-new-tariff-deadline-2026-08-19/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "PROVINCIAL PACKAGE / U.S. ALCOHOL: PENDING FINAL DEAL / GM–UNIFOR TARGET: AUG 21",
    tagColor: "#0369a1",
    headline: "Provinces Are Part of the Trade Package — and GM–Unifor Enters Its Target-Day Window",
    summary: "Carney briefed the provincial premiers on the negotiations. Reuters reports Nova Scotia Premier Tim Houston said Carney had asked provinces to return U.S. alcohol to store shelves, but that any step remains pending a final agreement. The White House has said Canada expressed commitments involving U.S. alcohol, cheese and motor vehicles; Canada has not confirmed final terms. At the same time, GM–Unifor talks approach their August 21 internal target for a tentative agreement. Unifor’s Canadian-production demand is being driven by the 299,813 GM vehicles sold in Canada in 2025 versus roughly 130,000 built here, alongside major CAMI layoffs. No final trade deal or GM tentative agreement is confirmed.",
    whyItMatters: "Both files are still outcome-dependent. The province’s alcohol decision will not automatically reprice a repair order, and the Aug. 21 GM target is not a strike date or a settlement guarantee. Watch official announcements, keep a normal buffer on fast-moving GM service lines, and avoid expanding stock based on a negotiation headline alone.",
    source: "Reuters and Detroit Free Press — August 20, 2026",
    sourceUrl: "https://www.reuters.com/world/us-canada-trade-negotiators-meet-after-trump-sets-new-tariff-deadline-2026-08-19/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "⏱️",
    text: "The Section 338 pause expires at 12:01 a.m. EDT Saturday, Aug. 22, unless a final deal or new extension is announced. Negotiators are still working.",
    sourceUrl: "https://www.internationaltradeinsights.com/2026/08/president-trump-delays-50-tariff-on-canada-by-3-days/",
  },
  {
    icon: "🛻",
    text: "Reuters: a proposed deal could reduce top-line U.S. tariffs on Canadian-built cars and trucks from 25% to 15%, before U.S.-content deductions. Canada is seeking 10%.",
    sourceUrl: "https://www.reuters.com/world/us-canada-trade-negotiators-meet-after-trump-sets-new-tariff-deadline-2026-08-19/",
  },
  {
    icon: "🏗️",
    text: "Proposed steel and aluminum relief would lower top-line U.S. rates from 50% to 25%; lower steel rates would be quota-based, according to Reuters sources.",
    sourceUrl: "https://www.reuters.com/world/us-canada-trade-negotiators-meet-after-trump-sets-new-tariff-deadline-2026-08-19/",
  },
  {
    icon: "🏭",
    text: "GM–Unifor’s internal target is Aug. 21. No tentative agreement is confirmed; CAMI layoffs and Canadian production remain core issues.",
    sourceUrl: "https://www.freep.com/story/money/cars/general-motors/2026/08/18/unifor-gm-contract-negotiations-may-be-tougher-than-fords/91264859007/",
  },
  {
    icon: "📦",
    text: "Shop rule: use the pause to document supplier price, origin, CUSMA proof and quote expiry. Do not impose a blanket tariff fee before terms and invoices change.",
    sourceUrl: "https://www.reuters.com/world/us-canada-trade-negotiators-meet-after-trump-sets-new-tariff-deadline-2026-08-19/",
  },
];

const tipOfTheDay = {
  title: "Protect Special-Order Margin With a Four-Point Supplier Check",
  text: "Before ordering a major special-order part, record the supplier’s current price, country of origin, CUSMA documentation and quote-expiry time in the job file. If a real price change arrives before the order is placed, obtain customer authorization first. This protects margin without inventing a tariff surcharge or turning a proposed deal into a parts-price assumption.",
};

const quoteOfTheDay = {
  text: "We have more work to do.",
  author: "Dominic LeBlanc, Canada-U.S. Trade Minister",
  title: "After Carney briefed provincial premiers on the ongoing negotiations — August 19, 2026",
};

const rideOfTheDay = {
  name: "1970 Ford Torino Cobra 429 — Grabber Blue, Ontario-Plated",
  description: "Grabber Blue paint, a white Cobra side stripe and the 429 under the hood: the 1970 Torino Cobra made an unmistakably direct case. It belongs outside an Ontario repair shop under warm bay lights. The deal may be close, but the Torino says wait for the final documents before calling the race.",
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
                {["SECTION 338: SAT 12:01 A.M.", "DEAL: CLOSE, NOT FINAL", "GM TARGET: AUG 21", "'70 TORINO COBRA 429"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Thursday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Canada-U.S. Trade Deal Nears as Section 338 Pause Approaches Saturday Deadline — Baywash Daily Briefing Edition No. 105"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 105 — Thursday, August 20, 2026 — Section 338 Clock / Proposed Auto Relief / GM Target Window</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                The Three-Day Clock Is Running — Deal Close, but the Saturday Deadline Still Matters
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '71 Dodge Charger R/T 440</span>
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
