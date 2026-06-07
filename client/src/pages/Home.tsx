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

const BRIEFING_NUMBER = 31;
const BRIEFING_DATE = "June 7, 2026";
const BRIEFING_DAY = "Saturday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/RHPcEluGPmGifGsM.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/iPKrxxAXWnfYpyic.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/NSoLKNZzaUKrFSDv.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/BtzNGujBYMKeeKwN.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/VWoAlJtmYlvGJUvQ.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "ENERGY CRISIS",
    tagColor: "#dc2626",
    headline: "Oil Prices Heading to $150+ — Strait of Hormuz Still Closed, Strategic Reserves Near Bottom",
    summary: "ExxonMobil Senior Vice-President Neil Chapman told a New York conference last week: 'We're approaching unheard-of inventory levels. You can debate whether it's going to hit those really low levels in two weeks or three weeks. But once you get to that point, then you'll see price shoot up.' Chevron CEO Mike Wirth echoed the warning: 'We are steadily drawing inventories down on products, on crude, in locations around the world. I think June and July are going to be critical months.' Brent crude futures were at $98.20 US per barrel on June 4, but analysts at Calgary energy analytics firm Enverus, the Macdonald-Laurier Institute, and multiple investment banks say $150-160 US per barrel is realistic within weeks. The U.S. Strategic Petroleum Reserve stood at 357.1 million barrels as of May 29 — more than 50 million barrels lower than before the February 2026 conflict began, and approaching levels last seen in the early 1980s when the reserve was still filling up. The 32-member International Energy Agency released 400 million barrels of emergency reserves in March, but those buffers are nearly exhausted. The Strait of Hormuz — through which approximately 20% of the world's oil is shipped — remains closed to the vast majority of commercial shipping. Iran fired missiles at U.S. military bases in the Gulf region on June 4, which the U.S. said were intercepted. Trump has repeatedly claimed a deal with Iran is imminent; Iran has disputed those claims. Heather Exner-Pirot of the Macdonald-Laurier Institute: 'We are about to hit the bottom of those inventories, and there'll be nothing left to buffer this. Certainly it looks like $150 US is very realistic in the coming weeks.' Al Salazar of Enverus: 'We concur with what the Exxon and Chevron executives are saying — we think the price should be higher; we think it's artificially low. If you twist my arm, I think we're probably $20 US below where we should be on Brent.' If oil reaches $120-140 US per barrel, Canadian gas prices could exceed $2 per litre this summer — just as Canadians are hitting the road for the peak summer travel season. Demand for fuel in Canada has not abated despite rising prices; Statistics Canada data shows fuel consumption is actually up year-over-year.",
    whyItMatters: "The oil price trajectory has three direct implications for your shop. First, every fluid in your shop is about to get more expensive — not just motor oil. Coolant, brake fluid, transmission fluid, gear oil, and power steering fluid all have petroleum-based components. The Group III base oil shortage (which is driving the motor oil crisis) is a direct consequence of the same Strait of Hormuz disruption that is pushing crude oil toward $150. Second, higher gas prices are the single most powerful driver of vehicle maintenance demand. When gas hits $2/litre, consumers stop buying new vehicles and start maintaining their existing ones. The Canadian auto sales data (eight consecutive months of declines) is already reflecting this. Your service bay is the beneficiary. Third, the energy price shock is inflationary — Statistics Canada already confirmed Canada's annual inflation rate rose to 2.8% in April due to soaring energy prices. If inflation accelerates further, the Bank of Canada faces a difficult choice between cutting rates (to support the economy) and raising them (to fight inflation). Either outcome affects consumer credit availability and vehicle financing — watch this space.",
    source: "CBC News / Richard Raycraft / ExxonMobil / Chevron / Enverus / Macdonald-Laurier Institute",
    sourceUrl: "https://www.cbc.ca/news/business/higher-oil-gas-prices-industry-analysts-9.7222066",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "SUPPLY CHAIN",
    tagColor: "#1d4ed8",
    headline: "Motor Oil Shortage: $7-$8.45/Gal Wholesale Increase Already In the Pipeline — DIFM Channel Hit July-September 2026",
    summary: "JobbersWorld editor and publisher Thomas F. Glenn published the most comprehensive consumer-facing analysis of the Group III base oil shortage to date on June 5, 2026. The key findings: cumulative wholesale cost increases of $7.00 to $8.45 per gallon for full synthetic base stocks have already moved through the supply chain. When passed through to consumers, these increases could add $15 to $25 or more to the cost of a typical synthetic oil change. The shortage is not universal — motor oil will not 'run out' — but selective shortages of specific grades are increasingly likely. The most at-risk grade: 0W-20, which accounts for approximately one-third of all passenger car motor oil used in North America. The timeline is now confirmed: June-July 2026 is when blenders pass increases to distributors and jobbers. July-September 2026 is when price increases reach the DIFM (Do It For Me) channel — meaning your shop. August-October 2026 is when consumer-facing retail prices rise. Q4 2026 to Q1 2027 is the projected peak supply constraint risk period. The shortage extends beyond passenger car motor oils: Group III base oils are also used in automatic transmission fluids, certain heavy-duty engine oils, and specialty lubricant applications. Some European OEM-approved passenger car motor oils (5W-30, 0W-30, 0W-40, 5W-40 with specific approvals) face unique pressures because of their reliance on synthetic formulations. The root cause: Shell's Pearl GTL facility in Qatar (world's largest Group III producer, ~30,000 barrels/day) was damaged by Iranian rocket strikes and is offline for at least 12 months. ADNOC (UAE) and BAPCO (Bahrain) are also affected. South Korea (30% of U.S. Group III imports) is pivoting to alternative crude sources, reducing Group III yields. U.S. domestic capacity expansion (Chevron, ExxonMobil EHC) will not be operational until 2027. Allocation programs are already active at major producers. Spot market availability has tightened dramatically. Driving.ca's Jil McIntosh confirmed on June 5 that prices are rising now in Canada and supply is tightening.",
    whyItMatters: "The JobbersWorld timeline is the most actionable intelligence available for Canadian shop owners this week. The DIFM channel (your shop) gets hit in July-September 2026 — that is four to twelve weeks away. The window to act is now. Six-step action plan: Step 1 — Contact your oil supplier today (Saturday calls are possible with most major distributors) or first thing Monday morning. Place a supplemental order for 0W-20 and 5W-30. These are the two most common grades in Canadian service bays and the two most at-risk. Step 2 — Review your current oil pricing and prepare a customer communication explaining the upcoming price increase. Frame it as a supply chain issue, not a margin grab — customers who understand the context are more accepting. Step 3 — Consider stocking Group II synthetic blend as a backup for customers whose vehicles can accept it (check OEM specifications carefully — do not substitute without confirming compatibility). Step 4 — Review your transmission fluid and differential fluid inventory — Group III shortages also affect ATF and gear oil. Step 5 — If you have customers whose vehicles require European OEM-approved specifications (5W-30, 0W-30, 0W-40, 5W-40 with specific approvals such as BMW Longlife, Mercedes-Benz 229.5, or VW 504.00), source those products now. These specialty grades will be the hardest to find in Q4 2026. Step 6 — Check your oil filter inventory. A separate oil filter shortage has been confirmed in Canada (GM has dropped the 0W-40 Supercar requirement; Wix filters are substituting for some OEM specifications). Filters and oil should be ordered together.",
    source: "JobbersWorld / Thomas F. Glenn / Petroleum Trends International / Driving.ca / Jil McIntosh / ILMA",
    sourceUrl: "https://jobbersworld.com/2026/06/05/will-there-be-enough-motor-oil/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "LABOUR",
    tagColor: "#7c3aed",
    headline: "UAW Dauch Strike Day 7 — Strikebreaking Alleged, Nexteer Workers Demand to Join, GM Has ~7 Days of Silverado/Sierra Axle Inventory",
    summary: "The UAW strike at American Axle & Manufacturing (Dauch) in Three Rivers, Michigan entered its seventh day on June 7 with no negotiations scheduled and new escalations on both sides. The plant produces drive axles for the Chevrolet Silverado, GMC Sierra, and heavy-duty truck variants — approximately 1,000+ axles per day. General Motors has approximately seven days of axle inventory remaining before truck production halts. Workers are alleging strikebreaking: management has deployed non-union white-collar workers on production lines, and security guards have allegedly told truck drivers to run over pickets. The UAW filed an unfair labor practice charge with the National Labor Relations Board on June 6. A second front is developing: workers at Nexteer Automotive in Saginaw, Michigan (1,700 UAW members who make steering gear for GM, Ford, and Stellantis) are demanding to join the strike in solidarity. The UAW International is blocking them — a tentative agreement was reached at Nexteer on June 1 but must be ratified by the membership. If the Nexteer ratification fails, GM faces simultaneous axle and steering gear supply disruptions that would halt virtually all GM truck and full-size SUV production in North America. The core dispute at Dauch: workers' wages have been cut in half in inflation-adjusted terms since 2008 ($29/hr in 2008 = $14.19 in today's dollars; current wage is $22/hr). The UAW is asking for 36% raises over four years. Dauch has not called to resume negotiations. The 2008 American Axle strike lasted 89 days and cost GM nearly $3 billion. The Oshawa Assembly Complex (which builds the Silverado and Sierra for the Canadian market) is in the direct supply chain and would be among the first Canadian plants to halt production if GM's axle inventory runs out.",
    whyItMatters: "The Dauch strike has three direct implications for Canadian automotive shops. First, if GM halts Silverado and Sierra production at Oshawa within the next seven to ten days, the supply of new GM trucks to Canadian dealers will dry up rapidly. Consumers who cannot buy a new truck will keep their existing truck longer — and service it more. Call your top 20 GM truck customers this weekend and book their next maintenance appointment. Second, the strike is a leading indicator of the broader labour cost pressure that will flow through the North American automotive supply chain over the next 18 months. Unifor opens formal contract talks with Ford on June 22 — the pattern-setter for all Detroit Three bargaining in Canada. If the UAW wins 36% raises at Dauch, Unifor will use that as a floor in their negotiations. Higher labour costs at OEMs and Tier 1 suppliers eventually translate to higher parts prices for your shop. Third, the strikebreaking allegations and NLRB filing are worth watching: if the NLRB finds an unfair labor practice, it could order Dauch back to the table immediately, potentially ending the strike faster than the 2008 precedent. Monitor this daily.",
    source: "Reuters / Crain's Detroit / Reddit / UAW Local 2093 / NLRB",
    sourceUrl: "https://www.crainsdetroit.com/manufacturing-logistics/automotive/cdb-uaw-strike-dauch-20260601/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🤝",
    text: "CUSMA — 24 days to the July 1 deadline. LeBlanc declared talks 'unfrozen' on June 3. Next key date: June 16-17 (U.S.-Mexico Round 2 in Washington). Whether Canada participates in or runs parallel to that round will determine whether July 1 is a managed transition or a crisis. The 82%/50% U.S. content demand remains on the table and would exclude Canadian parts from vehicle content calculations entirely.",
    sourceUrl: "https://www.bnnbloomberg.ca/business/politics/2026/05/31/scrapping-cusma-would-be-phenomenally-disruptive-hillman-on-future-of-the-deal/",
  },
  {
    icon: "⛽",
    text: "Gas prices could hit $2/litre this summer as Brent crude approaches $150 US/barrel. Higher fuel prices are the single most powerful driver of vehicle maintenance demand — consumers stop buying new vehicles and start maintaining existing ones. Your service bay is the direct beneficiary. Eight consecutive months of declining Canadian new vehicle sales confirms the trend is already underway.",
    sourceUrl: "https://www.cbc.ca/news/business/higher-oil-gas-prices-industry-analysts-9.7222066",
  },
  {
    icon: "🔧",
    text: "Right-to-repair update: Trump's 'That's strange!' comment from June 5 continues to reverberate. The House committee bill (which codifies existing voluntary agreements) has support from the Alliance for Automotive Innovation. Independent shop advocates say it does not go far enough. AIA Canada's push for national right-to-repair legislation will accelerate if the U.S. passes meaningful legislation. Subscribe to AIA Canada updates at aiacanada.com.",
    sourceUrl: "https://www.reuters.com/legal/legalindustry/trump-meets-with-auto-industry-over-right-to-repair-debate-2026-06-04/",
  },
  {
    icon: "🚗",
    text: "Gordie Howe Bridge update: DHS Secretary Mullin confirmed to the Senate that customs staff are staffed and ready. The bridge is structurally complete. Trump is still blocking the opening over trade concessions. The Windsor-Detroit corridor handles $50B+ in annual trade — the majority automotive parts. A bridge opening could become part of a broader Canada-U.S. trade package in the LeBlanc-Greer talks.",
    sourceUrl: "https://www.detroitnews.com/story/news/politics/2026/06/03/gordie-howe-bridge-update-customs-border-protection-markwayne-mullin/90388648007/",
  },
];

const tipOfTheDay = {
  title: "The Motor Oil Shortage Action Plan — Six Steps to Take This Weekend",
  text: "The JobbersWorld analysis published June 5 is the clearest roadmap available. The DIFM channel (your shop) gets hit July-September 2026 — four to twelve weeks away. Here is what to do this weekend: Step 1 — Call your oil distributor today or first thing Monday. Place a supplemental order for 0W-20 and 5W-30. These are the two most common grades in Canadian service bays and the two most at-risk. Step 2 — Draft a customer communication explaining the upcoming price increase. Frame it as a supply chain issue caused by the Strait of Hormuz conflict — not a margin decision. Customers who understand the context are far more accepting. Step 3 — Check your ATF and gear oil inventory. Group III shortages affect transmission fluid and differential fluid too. Step 4 — If you service European vehicles requiring OEM-approved specs (BMW Longlife, Mercedes-Benz 229.5, VW 504.00), source those products now — they will be the hardest to find in Q4 2026. Step 5 — Check your oil filter inventory. A separate filter shortage has been confirmed in Canada. Order filters and oil together. Step 6 — Review your oil change pricing. A $15-25 increase per service is coming. Build it into your pricing now rather than absorbing the cost.",
};

const quoteOfTheDay = {
  text: "We are about to hit the bottom of those inventories, and there'll be nothing left to buffer this. Certainly it looks like $150 US is very realistic in the coming weeks.",
  author: "Heather Exner-Pirot",
  title: "Energy Director, Macdonald-Laurier Institute — CBC News, June 4, 2026",
};

const rideOfTheDay = {
  name: "1969 Dodge Charger 500 — The NASCAR Homologation Special That Dodge Built to Beat Itself",
  description: "The 1969 Dodge Charger 500 is one of the most misunderstood muscle cars of the era — and one of the most historically significant. Dodge built it for a single purpose: to win at Daytona. The standard 1968 Charger's recessed rear window and tunnelled grille created aerodynamic drag that cost it races against the Ford Talladega and Mercury Spoiler at superspeedway speeds above 180 mph. The solution was brutally simple: flush the rear window with the roofline and replace the tunnelled grille with a flush unit borrowed from the Coronet. NASCAR rules required 500 production units for homologation — Dodge built exactly 500 for the street. Under the hood: the 426 Hemi (425 hp factory-rated, actually closer to 500) or the 440 Magnum (375 hp). The Charger 500 won at Daytona in February 1969 — and then Ford showed up with the Torino Talladega and immediately took the superspeedway advantage back. Dodge's response was the Charger Daytona (the winged car), which debuted at Talladega in September 1969. The Charger 500 was obsolete almost the moment it was homologated — but it remains one of the rarest and most collectible B-body Mopars ever built. Today, a genuine Hemi-powered Charger 500 commands $200,000-$350,000 at auction. On a Saturday morning when oil prices are heading toward $150 and the Strait of Hormuz is still closed, the Charger 500 is a reminder that sometimes the most important engineering decisions are made not in the design studio but on the race track — and that the best solution to a problem is often the simplest one.",
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
                {["OIL CRISIS", "LABOUR", "CUSMA", "ENERGY"].map((tag) => (
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
              alt="Canadian automotive service technician checking motor oil with partially empty shelves in background — motor oil shortage arrives in Canada"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#dc2626] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Energy Crisis</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Oil Heading to $150+ — Reserves Near Bottom, Motor Oil Shortage Arriving in Canadian Shops July-September 2026
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
