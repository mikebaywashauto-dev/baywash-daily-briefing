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

const BRIEFING_NUMBER = 29;
const BRIEFING_DATE = "June 5, 2026";
const BRIEFING_DAY = "Thursday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/cOuuVrehyVPyHLHk.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/xRqwZMVrILgiYtvF.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/vNvccEhNAFTHbaDJ.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/OSDImHzzaJMfapVU.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/gFeNAMIQvgSqZDOb.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "MARKET DATA",
    tagColor: "#dc2626",
    headline: "Canadian Auto Sales Fall for 8th Consecutive Month — SAAR Hits Weakest Level of 2026",
    summary: "DesRosiers Automotive Consultants reported on June 3 that Canadian vehicle sales fell 1.7% year-over-year in May, marking the eighth consecutive month of year-on-year decline. Approximately 184,000 vehicles were sold in the month — below the 190,000 barrier that would have represented a strong spring performance, a level last reached in May 2019. The seasonally adjusted annual rate (SAAR) of sales for May came in at 1.78 million units, the weakest reading of 2026 so far. DesRosiers managing partner Andrew King noted that while Statistics Canada's latest GDP data indicated a technical recession, the auto industry has already been in a 'feels like' recession in recent months. The average price of a new vehicle in Canada sat just shy of $63,000 in the first quarter, according to AutoTrader's price index — still significantly elevated from four years ago despite some recent moderation. Scotiabank economist John Fanjoy told the London Free Press that the bank's latest outlook still expects vehicle sales to 'roughly trend sideways for the better part of this year' before edging up to close out the year. He noted that some of the year-over-year weakness reflects demand that was pulled forward into spring 2025 as consumers tried to get ahead of anticipated tariff-driven price increases. The picture for vehicle sales south of the border was more positive: more than 1.4 million vehicles were sold in the U.S. in May, a 0.4% increase from a year earlier, according to CIBC Capital Markets. The U.S. SAAR rose 3.1% year-over-year to 16.1 million units. Given that roughly 90% of vehicles built in Canada are sold in the U.S., the resilience of the American market is the primary support for Ontario assembly plant production volumes.",
    whyItMatters: "Eight consecutive months of declining Canadian new vehicle sales is the most direct and positive signal for independent service shops in this entire briefing. Every month that a Canadian consumer does not buy a new vehicle is a month that their existing vehicle ages — and an older vehicle requires more maintenance and repair. The average new vehicle price of $63,000 means that a significant portion of Canadian households simply cannot afford a new vehicle at current prices and interest rates. These households are your core service customers. The specific action items: First, pull your customer database and identify all vehicles in the 8-14 year age range — these are the vehicles most likely to need significant work in the next 12-24 months. Second, review your deferred maintenance list from the last six months and proactively reach out to customers who declined recommended work. Third, consider a 'Vehicle Health Check' promotion specifically targeting customers who have not been in for service in 6-12 months. The market is sending you customers — make sure you are ready to receive them.",
    source: "DesRosiers Automotive Consultants / The Canadian Press / London Free Press / Scotiabank / AutoTrader",
    sourceUrl: "https://ca.finance.yahoo.com/news/auto-sales-down-eighth-consecutive-142642210.html",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "SUPPLY CHAIN",
    tagColor: "#1d4ed8",
    headline: "UAW Dauch Strike Day 5 — No Talks, GM Trucks Could Disappear From Dealer Lots Within 9 Days",
    summary: "The UAW strike at Dauch Corporation's Three Rivers, Michigan plant — which produces more than 1,000 truck axles per day for the Chevrolet Silverado, GMC Sierra, and heavy-duty truck lines — entered its fifth day on June 5 with no negotiations scheduled. UAW bargaining chairman Josh Jager confirmed that Dauch has not called to resume talks since the strike began at midnight on June 1. The plant is capable of producing approximately 1,400 axles per day; it ships to assembly plants in Flint, Fort Wayne, Silao (Mexico), and Oshawa (Canada). GM confirmed it has approximately two weeks of axle inventory on hand — as of today, that window has narrowed to approximately nine days. University of Michigan-Flint economics professor Chris Douglas told WWMT that rather than raising prices, GM may simply halt production of the Silverado and Sierra entirely, causing the trucks to disappear from dealer lots. 'Maybe a company that's trying to get a Chevy Silverado makes the switch to a Ford F-150 if that remains available,' Douglas said. Southwestern Michigan College automotive professor Kyle Schrock compared the potential supply disruption to the COVID-19 microprocessor shortage: 'In that short amount of time that we couldn't import processors, it backed up production for months and months.' The 2008 American Axle strike lasted 89 days and cost GM nearly $3 billion. Workers are receiving only $250 per week in strike pay. The UAW is asking for 36% raises over four years; Dauch's last offer was significantly lower. A second potential front at Nexteer Automotive in Saginaw (GM steering gear supplier) saw a tentative agreement reached June 1, but ratification by UAW Local 699 is still pending.",
    whyItMatters: "The Dauch strike has two direct implications for Canadian automotive shops. First, if GM halts Silverado and Sierra production within the next nine days, the trucks will disappear from Canadian dealer lots within weeks. This is your window to contact every GM truck customer in your database and book upcoming maintenance now — before any parts allocation pressure develops and before customers start shopping for alternative vehicles. The Silverado and Sierra are the most-serviced vehicles in most Canadian shop bays. Second, the Oshawa Assembly Complex — which builds the Silverado — is directly in the supply chain for Dauch axles. If Oshawa halts production, the ripple effects on Oshawa-area suppliers and the broader Ontario automotive economy will be significant. Watch for any announcement from GM Canada about Oshawa production schedules. The specific action: call your top 20 GM truck customers today and book their next oil change, tire rotation, or inspection. Do not wait.",
    source: "Reuters / WWMT News Channel 3 / Detroit News / WSJ / UAW Local 2093",
    sourceUrl: "https://wwmt.com/news/local/american-axle-strike-three-rivers-truck-availability-parts-gmc-sierra-chevy-silverado-general-motors-st-joseph-county-west-michigan",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "MARKET SHARE",
    tagColor: "#059669",
    headline: "Hyundai Canada Posts Record May Sales — Hybrid Demand and Genesis Growth Drive Gains While Domestic Brands Slip",
    summary: "Hyundai Auto Canada CEO Steve Flamand confirmed on the Automotive News Canada podcast on June 5 that the brand posted record May sales in Canada, bucking the broader market trend of eight consecutive months of decline. Hyundai's U.S. deliveries also rose 3.5% in May, with retail sales up 2%, driven by core models including the Santa Fe (up 2%), Tucson, and the rapidly growing Genesis luxury brand. The brand's hybrid lineup — the Santa Fe Hybrid, Tucson Hybrid, and Sonata Hybrid — is proving particularly resilient as Canadian consumers respond to higher gas prices caused by the ongoing conflict in the Middle East. Flamand discussed the brand's electrification strategy, tariff headwinds, and promotional approach on the podcast. Hyundai's global results have been more mixed: the brand's South Korean operations reported that U.S. import tariffs cost approximately ₩1.8 trillion (approximately C$1.9 billion) in Q3 2026 alone, wiping out nearly half of their quarterly operating profit. The brand is responding by accelerating its U.S. manufacturing expansion at the Metaplant America facility in Georgia, which opened in 2024. Kia — Hyundai's sister brand — is also moving quickly: the 2026 Kia Sportage Hybrid is now being built in the U.S., reducing tariff exposure and helping Kia meet surging demand. The broader May U.S. auto sales picture showed Honda and Kia also posting strong results, while Toyota slipped again despite higher electrified sales. The common thread among the winners: strong hybrid lineups and competitive pricing in the $35,000-$55,000 range where Canadian consumers are most active.",
    whyItMatters: "Hyundai and Kia's record Canadian sales performance has a direct implication for your service bay mix. These brands are gaining market share rapidly — which means the proportion of Hyundai and Kia vehicles in your service bay will increase over the next three to five years. The specific preparation items: First, ensure your technicians are trained on Hyundai/Kia hybrid systems (GDI engines, dual-clutch transmissions, and the Hyundai Motor Group's proprietary hybrid architecture). Second, stock the most common Hyundai/Kia maintenance items: Hyundai recommends 0W-20 full synthetic for most current models — a grade that is now under shortage pressure. Third, review your Hyundai/Kia customer retention rate. These brands have historically had lower independent shop retention than domestic brands, but the growing fleet size makes them worth pursuing aggressively. The brands' strong hybrid sales also mean more complex drivetrains arriving in your bays — ensure your diagnostic equipment is current for Hyundai/Kia hybrid and EV systems.",
    source: "Automotive News Canada / Automotive News / CIBC Capital Markets / MotorTrend",
    sourceUrl: "https://www.autonews.com/podcasts/canada-conversations/auto-news-canada-podcast-hyundai-steve-flamand-0605/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📊",
    text: "DesRosiers: Canadian auto sales down 1.7% in May — 184,000 units, SAAR of 1.78M (weakest of 2026). Eight consecutive months of year-on-year decline. Average new vehicle price: $63,000. DesRosiers says Canada is in a 'feels like' recession. U.S. May sales up 0.4% to 1.4M units — the market that buys 90% of Canadian-built vehicles remains resilient.",
    sourceUrl: "https://ca.finance.yahoo.com/news/auto-sales-down-eighth-consecutive-142642210.html",
  },
  {
    icon: "🔧",
    text: "UAW Dauch strike Day 5 — no talks scheduled. GM has ~9 days of Silverado/Sierra axle inventory. Oshawa Assembly Complex is in the direct supply chain. Call your top 20 GM truck customers today and book their next service appointment before production halts and parts allocation pressure develops. The 2008 American Axle strike lasted 89 days.",
    sourceUrl: "https://wwmt.com/news/local/american-axle-strike-three-rivers-truck-availability-parts-gmc-sierra-chevy-silverado-general-motors-st-joseph-county-west-michigan",
  },
  {
    icon: "🤝",
    text: "CUSMA update: 26 days to the July 1 deadline. LeBlanc declared talks 'unfrozen' on June 3. Next key date: June 16-17 (U.S.-Mexico Round 2 in Washington). Whether Canada is included in or runs parallel to that round will determine whether the July 1 deadline is a managed transition or a crisis. The 82%/50% content proposal remains on the table.",
    sourceUrl: "https://www.canada.ca/en/global-affairs/news/2026/06/minister-leblanc-and-chief-trade-negotiator-charette-meet-with-north-american-auto-industry-representatives-ahead-of-upcoming-cusma-joint-review.html",
  },
  {
    icon: "🛢️",
    text: "Synthetic motor oil shortage: last realistic week to place a supplemental order before retail-level shortages begin in early July. Shell Pearl GTL (world's largest Group III producer) remains offline for 12+ months. ILMA projects consumer-visible shortages by early July. 0W-20 and 5W-30 most affected — the two most common weights in Canadian service bays. Act today.",
    sourceUrl: "https://www.lubesngreases.com/bor-americas/weekly-americas-base-oil-price-report-74/",
  },
];

const tipOfTheDay = {
  title: "Eight Months of Declining Sales = Your Best Service Opportunity in Years — Here Is How to Capture It",
  text: "Eight consecutive months of declining Canadian new vehicle sales is not a problem for independent service shops — it is an opportunity. Every month a Canadian consumer does not buy a new vehicle is a month their existing vehicle ages. Here is the three-step action plan: Step 1: Pull your customer database and filter for vehicles 8-14 years old. These are your highest-probability service customers for the next 24 months — they cannot afford a new vehicle at $63,000 average price, and their vehicles are entering the high-maintenance phase of their lifecycle. Step 2: Review your deferred maintenance list from the last six months. Call every customer who declined recommended work and offer a 'Vehicle Health Check' at no charge — the inspection will generate work orders. Step 3: Contact your top 20 GM truck customers today specifically about the Dauch strike. Tell them: 'New Silverados and Sierras may disappear from dealer lots within two weeks — if you are thinking about a new truck, now is the time. If you are keeping yours, let's make sure it is in top shape.' The market is sending you customers. Make sure you are ready.",
};

const quoteOfTheDay = {
  text: "The auto industry has already been in a 'feels like' recession in recent months.",
  author: "Andrew King",
  title: "Managing Partner, DesRosiers Automotive Consultants — June 3, 2026",
};

const rideOfTheDay = {
  name: "1970 Mercury Cyclone Spoiler 429 CJ — Ford's Secret Weapon, the Muscle Car Mercury Almost Got Right",
  description: "The 1970 Mercury Cyclone Spoiler 429 Cobra Jet is one of the most underappreciated muscle cars of the classic era — a mid-size fastback from Ford's Mercury division, powered by the 429 Cobra Jet V8 rated at 370 horsepower and producing closer to 410 in real-world testing. The Cyclone Spoiler was Mercury's answer to the Plymouth Road Runner and the Chevelle SS — a purpose-built street fighter with a functional rear spoiler, a hood scoop, and a suspension tuned for drag strip performance. In Grabber Blue with the black Cyclone Spoiler stripe, it is one of the most visually striking muscle cars of the era. The 429 CJ was the same engine that powered the Torino Cobra and the Boss 429 Mustang — a big-block that Ford engineers specifically designed to dominate NASCAR superspeedways, homologated for the street in just enough numbers to satisfy the sanctioning body. Only 3,765 Cyclone Spoilers were built in 1970 with the 429 CJ, making it significantly rarer than the Chevelle SS 454 or the Road Runner 440 Six Pack. On a Thursday morning when Canadian auto sales have just posted their eighth consecutive monthly decline and UAW workers are on the picket line in Michigan, the Cyclone Spoiler is a reminder that sometimes the most interesting cars — and the most interesting opportunities — are the ones that most people overlook.",
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
      className={`transition-all duration-700 ${
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
              <div className="flex gap-2">
                {["SALES", "STRIKE", "HYUNDAI", "CUSMA"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Canadian auto dealership lot with declining sales board — eighth consecutive month of year-on-year decline"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#dc2626] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">8th Consecutive Monthly Decline</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Canadian Auto Sales Fall Again — 184,000 Units in May, SAAR Hits Weakest Level of 2026
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron</span>
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
