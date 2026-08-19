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

const BRIEFING_NUMBER = 104;
const BRIEFING_DATE = "August 19, 2026";
const BRIEFING_DAY = "Wednesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/bPSEspcayNMDSlDk.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ziBLApIMBKDpHyAt.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/vHFcWBHcxnzNbsWG.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/KXitEcOYcqeWaRSG.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/GDhkawjrcIcntcgE.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "SECTION 338 PAUSED 3 DAYS / SUBSTANTIAL PROGRESS / DOCUMENTS NOT FINAL / NO SIGNED INTERIM DEAL",
    tagColor: "#b91c1c",
    headline: "Three-Day Tariff Reprieve — Section 338 Is Paused, But the Canada-U.S. Deal Is Not Yet Final",
    summary: "President Donald Trump announced a three-day pause on the new 50% Section 338 tariffs that were due to start at midnight on roughly US$20 billion of Canadian imports. Trump said the countries had a deal subject to final documents. Prime Minister Mark Carney confirmed the pause, but said only that ‘substantial progress has been made’ and that important work remains. The White House said a prospective agreement would include market access, economic-security commitments and digital-trade alignment; it also said Canada had committed to address U.S. concerns involving dairy, alcohol and motor vehicles. Canada did not confirm those terms. The pause buys time — it is not a signed interim agreement or a permanent tariff resolution.",
    whyItMatters: "A three-day pause is breathing room, not a reason to erase your price-protection discipline. Keep customer estimates tied to the supplier’s actual quote, origin and expiry date. Call major suppliers for their part-specific position, but do not promise a customer that a tariff outcome is settled until the documents and supplier pricing are final.",
    source: "Reuters — August 19, 2026",
    sourceUrl: "https://www.reuters.com/world/americas/carney-trump-speak-ahead-50-us-tariff-deadline-2026-08-18/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "AUTO PATH: POSSIBLE 25% → 15% / CONTENT DEDUCTION DISPUTE / U.S.-ONLY VS NORTH AMERICAN",
    tagColor: "#15803d",
    headline: "Auto Relief Is Still About Content Math — A Possible 15% Rate Is Not a Final Rule",
    summary: "Reuters reports the two sides have discussed reducing existing U.S. Section 232 tariffs on Canadian vehicles to 15% from 25%, with further reductions tied to U.S. content in each vehicle. The key unresolved issue is how content deductions are calculated: Washington has demanded that only U.S.-produced content count, while Canada has pushed for all North American content, including Canadian and Mexican parts. Separately, the U.S. Commerce Department issued annual procedures for eligible automakers exporting from Canada and Mexico to certify U.S. content for tariff deductions. Vehicles must be re-certified by September 30 for the annual cycle beginning December 1. These are automaker compliance procedures, not a new retail-parts tariff schedule.",
    whyItMatters: "Do not turn a proposed vehicle tariff into a generic parts-price assumption. The auto discussion is still conditional and detailed; ordinary shop parts are priced through your supplier’s real sourcing and distribution chain. Ask for written confirmation before revising an estimate, especially on special orders and long-lead components.",
    source: "Reuters — August 19, 2026",
    sourceUrl: "https://www.reuters.com/world/americas/carney-trump-speak-ahead-50-us-tariff-deadline-2026-08-18/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "GM–UNIFOR / AUG 21 TARGET / 299,813 SOLD VS ~130,000 BUILT / CAMI LAYOFFS CENTRAL",
    tagColor: "#0369a1",
    headline: "GM’s Canadian Sales–Production Gap Drives Unifor’s Bargaining Push as the Aug. 21 Target Nears",
    summary: "Unifor says GM sold 299,813 vehicles in Canada in 2025 while building roughly 130,000 here. The union is pressing GM to restore laid-off workers and increase Canadian production as bargaining approaches its August 21 target for a tentative agreement. Detroit Free Press reports about one-third of GM’s Canadian workforce is on layoff, primarily after the BrightDrop production halt at CAMI in Ingersoll; around 1,200 CAMI employees were laid off. GM’s Canadian tariff-remission quota was reduced 24.2% after those layoffs. Labour economist Jim Stanford estimates GM could save more than US$500 million annually by making enough Canadian investment to regain full remission eligibility — an external estimate, not a company commitment.",
    whyItMatters: "This is a vehicle-production and jobs story, not a cue to overbuy GM parts. It matters because production commitments affect local fleets, dealer activity and future service demand. For your shop, maintain normal buffers on known fast movers, track formal bargaining announcements, and avoid treating the August 21 target as a confirmed settlement date.",
    source: "Detroit Free Press — August 18, 2026",
    sourceUrl: "https://www.freep.com/story/money/cars/general-motors/2026/08/18/unifor-gm-contract-negotiations-may-be-tougher-than-fords/91264859007/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "⏸️",
    text: "Trump paused the planned Section 338 tariffs for three days shortly before they were due to begin. Canada says substantial progress has been made, but important work remains.",
    sourceUrl: "https://www.reuters.com/world/americas/carney-trump-speak-ahead-50-us-tariff-deadline-2026-08-18/",
  },
  {
    icon: "📄",
    text: "The White House described a prospective agreement; Canada did not confirm its contents. Treat it as a negotiation framework until documents are finalized and announced by both sides.",
    sourceUrl: "https://www.npr.org/2026/08/19/g-s1-139156/trump-canada-tariffs",
  },
  {
    icon: "🛻",
    text: "A possible 15% auto-tariff route, down from 25%, remains tied to unresolved content-deduction rules. U.S.-only and North American-content calculations are not the same thing.",
    sourceUrl: "https://www.reuters.com/world/americas/carney-trump-speak-ahead-50-us-tariff-deadline-2026-08-18/",
  },
  {
    icon: "🏭",
    text: "GM–Unifor bargaining approaches its August 21 internal target. GM’s 2025 Canadian sales were 299,813 vehicles versus roughly 130,000 Canadian builds, according to Unifor figures reported by the Free Press.",
    sourceUrl: "https://www.freep.com/story/money/cars/general-motors/2026/08/18/unifor-gm-contract-negotiations-may-be-tougher-than-fords/91264859007/",
  },
  {
    icon: "📦",
    text: "Shop rule: the three-day pause does not change an invoice by itself. Confirm part origin, CUSMA status, lead time and quote expiry before changing an estimate or stocking up.",
    sourceUrl: "https://www.reuters.com/world/americas/carney-trump-speak-ahead-50-us-tariff-deadline-2026-08-18/",
  },
];

const tipOfTheDay = {
  title: "Use the Three-Day Pause to Get Written Supplier Answers",
  text: "Call your three largest parts suppliers today and ask four questions on your key special-order lines: current price, country of origin, CUSMA documentation and quote expiry. Record the answer in the job file. The pause creates time to verify real exposure; it does not justify a blanket tariff surcharge or a blind inventory purchase.",
};

const quoteOfTheDay = {
  text: "Substantial progress has been made, although there is important work still to be done.",
  author: "Mark Carney, Prime Minister of Canada",
  title: "On the three-day Section 338 tariff pause — August 19, 2026",
};

const rideOfTheDay = {
  name: "1970 Chevrolet Monte Carlo SS 454 — Classic Copper, Ontario-Plated",
  description: "Classic Copper paint, black vinyl roof and big-block SS presence: the 1970 Monte Carlo SS 454 combined muscle with a long-legged grand-touring stance. It belongs outside an Ontario repair shop under warm bay lights. The tariff is paused for three days; the Monte Carlo says enjoy the breathing room, but wait for the paperwork.",
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
                {["SECTION 338: PAUSED 3 DAYS", "DOCUMENTS NOT FINAL", "GM TARGET: AUG 21", "'70 MONTE CARLO SS 454"].map((tag) => (
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
              alt="Section 338 Tariff Pause Gives Canada and U.S. Three More Days — Baywash Daily Briefing Edition No. 104"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 104 — Wednesday, August 19, 2026 — Section 338 Paused 3 Days / Progress, Not a Final Deal / GM Target Week</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Three-Day Tariff Reprieve — Progress, but No Final Canada-U.S. Deal Yet
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
