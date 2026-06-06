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

const BRIEFING_NUMBER = 30;
const BRIEFING_DATE = "June 6, 2026";
const BRIEFING_DAY = "Friday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/cBxdThfoIpivGUBW.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/attJfJRMEspxjDZO.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/LLjJOIvpfHFSclOj.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/tVcxSPFMGgaBJrUh.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/zCDerSzHLGzlffyc.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "RIGHT TO REPAIR",
    tagColor: "#7c3aed",
    headline: "Trump Weighs In On Right-To-Repair: \"They Don't Want People To Fix Their Car. I Said, 'That's Strange!'\"",
    summary: "President Donald Trump revealed on June 5 that he met at the White House with senior executives from Ford, General Motors, the National Automobile Dealers Association (NADA), and the Alliance for Automotive Innovation to discuss the increasingly contentious debate surrounding right-to-repair legislation. The meeting also included Republican Senator Bernie Moreno of Ohio, a former auto dealer. GM CEO Mary Barra and Ford's Andrew Frick (President, Ford Blue and Model e) both attended. Trump appeared surprised by the industry's position: 'We had the auto industry in yesterday. They don't want people to fix their car. I said, That's strange! They have a thing; nobody's allowed to fix their car.' The U.S. automotive service and repair market is worth approximately $200 billion annually. A House committee advanced legislation last week that would codify existing voluntary agreements between automakers and independent shops into federal law, giving the Federal Trade Commission authority to enforce them. The Alliance for Automotive Innovation — which represents nearly all major automakers — supports this approach, noting that 75% of post-warranty repair work already happens at independent shops. However, many independent repair advocates say the existing framework does not go far enough. Proposed legislation would require manufacturers to give vehicle owners and independent repair shops direct access to diagnostic, repair, calibration, and recalibration data. NADA opposes broader legislation, arguing it would enable aftermarket parts manufacturers to reverse-engineer factory parts and give insurance companies more power over repair decisions. The debate has intensified as modern vehicles rely increasingly on software updates, ADAS systems, and connected features that require digital tools and security authorizations to service.",
    whyItMatters: "Trump's intervention in the right-to-repair debate is the most significant development for independent Canadian automotive shops in months — and it has a direct Canadian dimension. Canada's AIA Right to Repair campaign (which estimates independent shops could recover up to $336M in lost annual profit if national legislation passes) now has a White House tailwind. The political dynamics: Trump's instinct is clearly pro-independent shop ('That's strange!' is not the language of someone sympathetic to OEM data lockouts). The House committee bill is a floor, not a ceiling. Watch for whether Trump pushes for the stronger independent shop legislation or accepts the OEM-backed codification bill. For your shop today: First, ensure you are subscribed to AIA Canada's Right to Repair updates — the Canadian legislative push will accelerate if the U.S. passes meaningful legislation. Second, document every instance where you have been denied access to OEM diagnostic data or forced to purchase expensive software subscriptions — this documentation is valuable to advocacy groups. Third, consider joining AIA Canada's Right to Repair coalition if you have not already. The $200B U.S. service market and the $25B+ Canadian market are both at stake.",
    source: "Reuters / Yahoo Autos / AutoGuide / Ford Motor Company",
    sourceUrl: "https://www.reuters.com/legal/legalindustry/trump-meets-with-auto-industry-over-right-to-repair-debate-2026-06-04/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "BORDER SECURITY",
    tagColor: "#dc2626",
    headline: "\"Protecting America from Chinese Cars Act\" — Canadians Driving BYD, Polestar, or Geely Could Be Barred from Entering the U.S.",
    summary: "A new bill introduced by Michigan Democratic Senator Elissa Slotkin and Representative Haley Stevens — the Protecting America from Chinese Cars Act — would prohibit Chinese-connected vehicles from entering the United States from Canada or Mexico. The bill specifically targets Canada's January 2026 trade deal with China that reduced tariffs on Chinese-built EVs from 100% to 6.1%, with an annual import cap of 49,000 vehicles (rising to 70,000 over five years). The legislation defines a 'connected vehicle' broadly: any vehicle manufactured or designed in China, or manufactured by a company in which Chinese entities hold a greater than 15% stake. Under this definition, the following vehicles currently available or arriving in Canada would be affected: BYD (multiple models arriving in 2026), Chery (targeting late 2026 Canadian launch), Geely (Lotus Eletre SUV, already shipping to Canada), Polestar 2 (2027 model, built in China, now back in Canadian showrooms), and potentially the Tesla Model 3 (built at Gigafactory Shanghai — Tesla accounts for 12% of Canada's Chinese EV import quota). The bill would require U.S. Customs and Border Protection to develop rules within 90 days of enactment, including a list of prohibited vehicles. Slotkin's office cited security concerns: 'These connected vehicles are roving data collectors — sweeping up information that would threaten our national security if it were to fall into the hands of our adversaries. They are essentially TikTok on wheels.' The bill is currently at the announcement stage and has not yet been formally introduced in Congress. A related bill — the Connected Vehicle Security Act of 2026, co-introduced by Slotkin and Moreno — was referred to the Senate Commerce Committee in April 2026 and has support from GM, Ford, Stellantis, Honda, the UAW, and the Teamsters.",
    whyItMatters: "This bill has three direct implications for Canadian automotive shops. First, if passed, it would significantly chill Canadian consumer demand for Chinese EVs — the very vehicles that Canada's 6.1% tariff deal was designed to encourage. Consumers who cannot drive their vehicle to the U.S. will think twice before buying it. This reduces the pace at which Chinese EVs enter your service bay mix, giving you more time to prepare. Second, the bill is a direct escalation of the Canada-U.S. tension over the China EV deal — the same deal that USTR Greer cited as a reason for the U.S.'s cooler tone toward Canada in CUSMA negotiations. Watch for whether LeBlanc addresses this bill in his ongoing talks with Greer. Third, the Polestar 2 (2027 model, now back in Canadian showrooms) and the Lotus Eletre are already in Canada. If your shop services either brand, be aware that your customers may face U.S. border issues — and they will ask you about it. The practical action: if you have customers who own or are considering Chinese-built vehicles, make sure they are aware of this proposed legislation before their next U.S. road trip.",
    source: "Driving.ca / Jil McIntosh / Senator Elissa Slotkin's Office / Reuters",
    sourceUrl: "https://driving.ca/auto-news/driver-info/proposed-us-bill-targets-canadian-drivers-chinese-cars",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "SUPPLY CHAIN",
    tagColor: "#1d4ed8",
    headline: "Motor Oil Shortage Confirmed Arriving in Canada — Driving.ca: Prices Rising Now, Supply Tightening, Shortage Until Mid-2027",
    summary: "Driving.ca automotive journalist Jil McIntosh confirmed on June 5 that motor oil prices are rising and supply is tightening in Canada, citing the ongoing Group III base oil disruption caused by the Iran conflict and Strait of Hormuz shipping disruptions. The article confirms that approximately 44% of all Group III base oil demand in the U.S. is typically supplied from the Persian Gulf — and that supply is now largely offline. Iranian rocket strikes damaged Shell's Pearl GTL facility in Qatar, halting production from a key source of roughly 30,000 barrels per day, with repairs expected to take at least a year. South Korea produces about 30% of Group III oils imported into the U.S., but relies heavily on crude oil shipped from the Persian Gulf; lower yields are expected as Korea pivots to alternative crude sources. U.S. domestic producers cannot make up the difference in the short term — increased capacity from Chevron and ExxonMobil won't be operational until 2027. The shortage affects not only passenger car motor oils but also Group II oils (used in conventional oil and synthetic blends) and automatic transmission fluids. About 60% of all Group III base oils go to the automotive industry. JobbersWorld editor Thomas Glenn provided the most detailed consumer-facing analysis to date on June 5, projecting cumulative wholesale cost increases of $7.00 to $8.45 per gallon for full synthetic base stocks — increases that, when passed through to consumers, could add $15 to $25 or more to the cost of a typical synthetic oil change. The timeline: June-July 2026 is when blenders pass increases to distributors and jobbers; July-September 2026 is when price increases reach the DIFM (Do It For Me) channel — meaning your shop. August-October 2026 is when consumer-facing retail prices rise. Q4 2026 to Q1 2027 is the projected peak supply constraint risk period.",
    whyItMatters: "The Driving.ca confirmation that prices are rising now in Canada — not in the future, but now — means the window to act is this week. JobbersWorld's timeline is unambiguous: the DIFM channel (your shop) gets hit in July-September 2026. That is six to twelve weeks away. The five-step action plan: Step 1 — Contact your oil supplier today and place a supplemental order for 0W-20 and 5W-30. These are the two most common grades in Canadian service bays and the two most at-risk grades. Step 2 — Review your current oil pricing and prepare a customer communication explaining the upcoming price increase. Frame it as a supply chain issue, not a margin grab — customers who understand the context are more accepting. Step 3 — Consider stocking Group II synthetic blend as a backup for customers whose vehicles can accept it (check OEM specifications carefully). Step 4 — Review your transmission fluid and differential fluid inventory — Group III shortages also affect ATF and gear oil. Step 5 — If you have a customer whose vehicle requires a European OEM-approved specification (5W-30, 0W-30, 0W-40, 5W-40 with specific approvals), source that product now. These specialty grades will be the hardest to find in Q4 2026.",
    source: "Driving.ca / Jil McIntosh / JobbersWorld / Thomas F. Glenn / ILMA / Petroleum Trends International",
    sourceUrl: "https://driving.ca/auto-news/driver-info/motor-oil-prices-rise-supply-tightens",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🔧",
    text: "UAW Dauch strike Day 6 — no talks scheduled. GM has ~8 days of Silverado/Sierra axle inventory. If you have not called your top 20 GM truck customers yet, do it today. The 2008 American Axle strike lasted 89 days. Oshawa Assembly Complex is in the direct supply chain — watch for a GM Canada production announcement.",
    sourceUrl: "https://www.automotiveworld.com/news/uaw-strike-at-dauch-threatens-gm-truck-supply-lines/",
  },
  {
    icon: "🤝",
    text: "CUSMA — 25 days to the July 1 deadline. LeBlanc declared talks 'unfrozen' on June 3. Next key date: June 16-17 (U.S.-Mexico Round 2 in Washington). Whether Canada participates in or runs parallel to that round will determine whether July 1 is a managed transition or a crisis. The 82%/50% content proposal remains on the table.",
    sourceUrl: "https://www.bnnbloomberg.ca/business/politics/2026/05/31/scrapping-cusma-would-be-phenomenally-disruptive-hillman-on-future-of-the-deal/",
  },
  {
    icon: "🛢️",
    text: "Motor oil shortage: Driving.ca confirmed June 5 that prices are rising now in Canada. JobbersWorld projects $15-25 added to a typical synthetic oil change. DIFM channel (your shop) gets hit July-September 2026. This is the last realistic week to place a supplemental order before your distributor's allocation programs kick in.",
    sourceUrl: "https://driving.ca/auto-news/driver-info/motor-oil-prices-rise-supply-tightens",
  },
  {
    icon: "🇨🇦",
    text: "Canada added 88,000 jobs in May — a surprise surge that beat all economist forecasts. Construction led the gains. The strong jobs number is the best economic signal for Canadian consumer spending in months and suggests the 'feels like' recession may be shallower than feared. Watch for whether June auto sales data shows any improvement.",
    sourceUrl: "https://www.youtube.com/watch?v=rnazlehMJ48",
  },
];

const tipOfTheDay = {
  title: "Right-To-Repair Is Coming — Here Is How to Position Your Shop to Win When It Does",
  text: "Trump's 'That's strange!' comment is the most significant political signal for independent automotive shops in years. Here is how to position your shop to capture the maximum benefit when right-to-repair legislation passes — whether in the U.S. or Canada. Step 1: Document every instance where you have been denied OEM diagnostic data or forced to purchase expensive software subscriptions. This documentation is valuable to AIA Canada's advocacy campaign and could be used in regulatory proceedings. Step 2: Subscribe to AIA Canada's Right to Repair updates at aiacanada.com. The Canadian legislative push will accelerate if the U.S. passes meaningful legislation. Step 3: Invest in your diagnostic equipment now. When right-to-repair passes, the shops with the best diagnostic capabilities will capture the most work. The shops that waited will be playing catch-up. Step 4: Build relationships with your local NAPA, UAP, or Worldpac rep — they are tracking right-to-repair developments closely and can alert you to new data access tools as they become available. Step 5: Consider joining AIA Canada's Right to Repair coalition. The $25B+ Canadian automotive service market is at stake.",
};

const quoteOfTheDay = {
  text: "They don't want people to fix their car. I said, 'That's strange!'",
  author: "President Donald Trump",
  title: "White House, June 5, 2026 — on the auto industry's position in right-to-repair discussions",
};

const rideOfTheDay = {
  name: "1966 Shelby GT350H — The Hertz Rent-a-Racer, the Most Famous Rental Car in History",
  description: "The 1966 Shelby GT350H is one of the most storied automobiles in American automotive history — a purpose-built performance Mustang that Shelby American built specifically for the Hertz Rent-a-Car 'Rent a Racer' program. Finished in iconic black with gold racing stripes (with a small number built in red, white, blue, and green), the GT350H was powered by a 306-horsepower Hi-Po 289 V8 — the same engine as the standard GT350, but with a slightly softer tune to survive rental car abuse. Hertz ordered 1,001 of them for the 1966 model year, making it the largest single fleet order in Shelby American history. The legend: renters would pick up the car on Friday, race it at a local SCCA event over the weekend, and return it on Monday. Hertz eventually had to stop offering them at airports near race tracks. Many were returned with roll bars, racing harnesses, and different engines installed by weekend warriors who swapped in their own race-prepared units and returned the stock engines in the trunk. Today, a genuine GT350H in original condition commands $150,000-$250,000 at auction. On a Friday morning when Trump is weighing in on who gets to fix your car and motor oil prices are rising across Canada, the GT350H is a reminder that sometimes the best business model is the one that gives the customer exactly what they want — and trusts them to bring it back.",
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
                {["RIGHT TO REPAIR", "CHINA EVs", "OIL", "CUSMA"].map((tag) => (
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
              alt="Canadian automotive service technician using diagnostic laptop — right-to-repair debate reaches the White House"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#7c3aed] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">White House Meeting</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Trump On Right-To-Repair: "They Don't Want People To Fix Their Car. That's Strange!"
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
