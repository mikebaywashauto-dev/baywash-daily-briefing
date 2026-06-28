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

const BRIEFING_NUMBER = 52;
const BRIEFING_DATE = "June 28, 2026";
const BRIEFING_DAY = "Sunday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/JCfdbbqffKKgDxAA.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/LQHVrJgcsABtbXDS.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/aDaTpCBzAoNmYGRE.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/squqCXbZtpidBfSH.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ahLAipLqOvrmRLBx.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "CUSMA / JULY 1 / JULY 24 TARIFF CLIFF",
    tagColor: "#1d4ed8",
    headline: "The July 1 CUSMA Review: What Actually Happens Tomorrow — And the July 24 Tariff Cliff Nobody Is Talking About",
    summary: "Tomorrow's July 1 meeting is a virtual trilateral Free Trade Commission review — not a signing ceremony. The legal mechanics, per the Blakes tariff timeline and Brookings Institution analysis: three outcomes are possible. (1) All three parties confirm in writing that they wish to extend CUSMA for another 16 years — the outcome Canada and Mexico want, and the one Trump has signalled he does not. (2) No written confirmation is provided — CUSMA enters annual rolling reviews until 2036, the 'zombie CUSMA' scenario that KPMG's Joy Nott warned about last week. (3) Any party gives 6 months written notice of withdrawal — CUSMA terminates July 1, 2036. The most likely outcome is annual rolling reviews. Canada and the U.S. have had zero formal bilateral negotiating sessions. U.S. Ambassador Hoekstra said last week: 'We're not anywhere close on a new CUSMA framework.' But the bigger tariff cliff is July 24: the Section 122 temporary 10% surcharge — imposed February 24 after the U.S. Supreme Court struck down IEEPA tariffs — expires by statute in 150 days. Congress has not extended it. On July 24, the Trump administration must replace it with a new tariff regime. RBC's John Stackhouse at the Brookings roundtable: 'Beyond the July 1 trigger, the current regime of Section 122 tariffs will expire on July 24, when we should expect the Trump administration to create another regime.' The most likely replacement is some form of 'market access' price — perhaps in the 5% range — with exemptions for CUSMA-compliant goods. The 25% auto tariff (Section 232) is not affected by either July 1 or July 24. It remains in place indefinitely under the Trade Expansion Act of 1962. The Section 232 auto tariff is the one that is 'biting' — and it will not be resolved by the July 1 meeting.",
    whyItMatters: "Three things to watch this week: (1) The July 1 trilateral meeting outcome — watch for a joint statement. If all three parties issue a statement confirming 'productive discussions,' that is a signal toward 16-year renewal. If the statement is vague or absent, zombie CUSMA is the default. (2) The July 24 Section 122 expiry — this is the tariff that applies to all global imports, including CUSMA-compliant goods that are not auto parts. If the replacement regime is higher than 10%, costs for Canadian businesses importing U.S. goods will rise. If it is lower, costs fall. Watch for a White House proclamation between July 1 and July 24. (3) The 25% auto tariff (Section 232) — this is the one that matters most for your shop. It will not be resolved by July 1 or July 24. Plan for it to remain through at least Q3 2026. The practical implication: any U.S.-sourced parts, tools, or equipment you order after July 1 will still face the same tariff environment as today. Nothing changes at midnight tonight.",
    source: "Blakes Tariff Timeline / Brookings Institution / RBC — June 22–28, 2026",
    sourceUrl: "https://www.blakes.com/insights/us-canada-tariffs-timeline-of-key-dates-and-documents/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "GORDIE HOWE BRIDGE / MOROUN / TOLL REVENUE",
    tagColor: "#b91c1c",
    headline: "Gordie Howe Bridge: Lutnick Wants a Bigger Cut of the Tolls — \"Sooner or Later, It Will Open\" — Michigan Primary Pressure Grows",
    summary: "The BNN Bloomberg interview with Windsor Essex Chamber of Commerce CEO Ryan Donally (June 26) confirmed what had been suspected: the U.S. is now explicitly demanding a larger share of the Gordie Howe Bridge toll revenue than the existing agreement provides. Canada agreed to give Michigan half ownership and half the toll revenue after construction costs are recovered — a deal negotiated between the Windsor-Detroit Bridge Authority, the State of Michigan, and the Government of Canada. Commerce Secretary Howard Lutnick wants more. The Windsor Star's Randy Essex — who broke the Moroun donor story last week — confirmed that Lutnick 'felt cut out' of the June 12 ribbon-cutting negotiations that Governor Whitmer had arranged with Trump's Chief of Staff Susie Wiles. Lutnick again urged Trump to halt the opening. Former Michigan Governor and U.S. Ambassador to Canada James Blanchard: 'Sooner or later, it will open. If Trump wants money, he should get it from the Morouns.' The bridge is now a factor in the CUSMA review — the Maro Group (Canadian auto parts industry group) says it is 'a factor but not key to the outcome.' The Michigan primary is in August. Democratic candidate Mallory McMorrow's $400,000+ TV and digital ad campaign is running in the Detroit market. Republican Senate hopeful Mike Rogers is also using the bridge in his messaging. Trump now has a domestic political reason to open the bridge before the Michigan primary. The bridge cost Canada $6.4 billion — 100% Canadian-funded including the U.S. port of entry. Every day of delay costs the Windsor-Detroit corridor — the busiest trade corridor in North America — in congestion, delays, and lost economic activity.",
    whyItMatters: "The Gordie Howe Bridge is the most concrete example of how U.S. domestic politics is affecting Canadian automotive infrastructure. For Windsor-area shop owners: when the bridge opens, the Windsor-Detroit corridor will see a surge in cross-border traffic and trade. Parts delivery times from Michigan suppliers will improve. Cross-border customer traffic will increase. The bridge will also reduce congestion on the Ambassador Bridge — which currently handles all Windsor-Detroit commercial traffic. For shop owners outside Windsor: the bridge opening will be a signal that the U.S.-Canada relationship is stabilizing. It will likely coincide with — or follow — a CUSMA framework agreement. Watch the Michigan primary calendar: the primary is in August. Trump has a political incentive to open the bridge before then. If the bridge opens in July, it is a strong signal that a broader CUSMA deal is close.",
    source: "BNN Bloomberg / Windsor Star / Windsor Essex Chamber of Commerce — June 26–28, 2026",
    sourceUrl: "https://www.bnnbloomberg.ca/video/shows/the-close/2026/06/26/us-eyes-larger-share-of-gordie-howe-bridge-tolls/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "USED WHOLESALE / CANADIAN BLACK BOOK / MARKET DATA",
    tagColor: "#7c3aed",
    headline: "Used Wholesale Prices Falling Faster Than Normal — -0.35% Last Week — Customers Will Hold Onto Older Vehicles Longer",
    summary: "Canadian Black Book Market Insights for the week ending June 20, 2026: used wholesale prices fell 0.35% — steeper than the previous week's 0.29% drop and well above the historical average of 0.19% for the same period. Mid-size cars led the decline at -1.45%. Compact cars fell -0.85%. Full-size pickups fell -0.22%. The average asking price on dealer lots: $36,900 (14-day moving average). 169,000 vehicles available. Auction sale rates averaged 43.2% — sellers are maintaining firm floor prices but buyers are not meeting them. The practical context: new vehicle prices remain elevated due to the 25% auto tariff. Used vehicles are softening because consumers are caught between expensive new vehicles and softening used values — and many are choosing to hold onto their current vehicle rather than trade up or down. This is the most important market signal for Canadian shop owners this week. When used values fall and new prices remain high, consumers hold onto their current vehicles longer — and bring them to shops for maintenance and repair rather than trading them in. The repair-versus-replace calculation is shifting in favour of repair. This is a tailwind for independent shops.",
    whyItMatters: "The used wholesale price decline has three direct implications for Canadian shop owners: (1) More customers will hold onto their current vehicles longer. The repair-versus-replace calculation is shifting in favour of repair. Customers who might have traded in a 5-year-old vehicle last year are now keeping it and maintaining it. This is a tailwind for maintenance and repair work — oil changes, brakes, tires, suspension, and fluid services. (2) The average asking price on dealer lots is $36,900. A customer who is looking at a $36,900 used vehicle is also looking at a $500–$1,500 repair bill on their current vehicle. In most cases, the repair is the better financial decision. Your job is to help them see that clearly. (3) Auction sale rates at 43.2% mean that dealers are not moving inventory at their floor prices. This will eventually force price reductions — which will bring used values down further. The softening trend is likely to continue through Q3 2026. Plan your service marketing around the 'repair and keep' message.",
    source: "Canadian Black Book Market Insights — Week Ending June 20, 2026",
    sourceUrl: "https://www.canadianblackbook.com/market-insights",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📅",
    text: "July 1 CUSMA trilateral virtual meeting is TOMORROW. Three outcomes: 16-year renewal (unlikely), zombie CUSMA annual rolling reviews (most likely), or 6-month withdrawal notice (legally possible but politically catastrophic). Canada and the U.S. have had zero formal bilateral sessions. The 25% auto tariff is not affected by the outcome.",
    sourceUrl: "https://www.cp24.com/news/canada/2026/06/20/canada-to-meet-with-us-and-mexico-on-july-1-for-cusma-review/",
  },
  {
    icon: "⚠️",
    text: "July 24 Section 122 tariff cliff: the temporary 10% surcharge on global imports (imposed February 24 after the Supreme Court struck down IEEPA tariffs) expires by statute in 150 days. Congress has not extended it. The Trump administration must replace it with a new regime by July 24. Watch for a White House proclamation between July 1 and July 24.",
    sourceUrl: "https://www.blakes.com/insights/us-canada-tariffs-timeline-of-key-dates-and-documents/",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge: Commerce Secretary Lutnick wants a larger share of toll revenue than the existing agreement provides. Former Michigan Governor Blanchard: 'Sooner or later, it will open.' Michigan primary is in August. Trump has a domestic political incentive to open the bridge before then. McMorrow's $400K+ ad campaign is running in the Detroit market.",
    sourceUrl: "https://www.bnnbloomberg.ca/video/shows/the-close/2026/06/26/us-eyes-larger-share-of-gordie-howe-bridge-tolls/",
  },
  {
    icon: "🤝",
    text: "Unifor-Ford bargaining is now in Day 7 in downtown Toronto. The July 10 tentative deal target is 12 days away. Ford has not yet publicly responded to Unifor's production commitment demand for Windsor Assembly and Oakville. A work stoppage at Windsor Assembly would affect Bronco Sport and Lincoln Corsair parts availability within days.",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-launches-negotiations-ford-motor-company",
  },
];

const tipOfTheDay = {
  title: "July 1 Changes Nothing for Your Shop — Here's What Actually Matters",
  text: "The July 1 CUSMA review will not remove the 25% auto tariff. The Section 232 auto tariff is a separate legal instrument (Trade Expansion Act of 1962) and is not part of CUSMA. Whatever happens tomorrow — 16-year renewal, zombie CUSMA, or withdrawal notice — the 25% tariff on vehicles and the tariff on non-CUSMA-compliant auto parts remain in place. The tariff that matters most to your shop will not be resolved by the July 1 meeting. Plan accordingly.",
};

const quoteOfTheDay = {
  text: "Beyond the July 1 trigger, the current regime of Section 122 tariffs will expire on July 24, when we should expect the Trump administration to create another regime.",
  author: "John Stackhouse",
  title: "RBC Senior Vice-President — Brookings Institution Roundtable, June 2026",
};

const rideOfTheDay = {
  name: "1969 Dodge Charger Daytona — Bright White, 440 Magnum, Ontario-Plated",
  description: "The 1969 Dodge Charger Daytona is the most aerodynamically extreme production car of the muscle car era — built for one reason: to win at Daytona and Talladega. Dodge needed a car that could exceed 200 mph on the superspeedways to beat Ford's Torino Talladega. The result was a car with a pointed fibreglass nose cone extending 18 inches beyond the standard Charger front bumper, flush-mounted headlights, and a massive rear wing standing 23 inches above the trunk lid on two vertical stabilizers. The wing was not decorative — at speed, it generated significant downforce and allowed the rear spoiler to be adjusted for different track configurations. The 440 Magnum produced 375 horsepower officially. The 426 Hemi option produced 425 horsepower. Dodge built 503 Daytonas for the 1969 model year — enough to satisfy NASCAR's homologation requirement. Many dealers could not sell them. Some were converted back to standard Charger spec. Richard Petty drove a Daytona to victory at Talladega in 1969 at 188.901 mph — a record that stood for years. The ones that survived in original condition are among the most valuable muscle cars in existence. A documented 1969 Daytona with the 440 Magnum in Bright White with an Ontario plate is worth between $200,000 and $400,000 depending on condition and matching numbers. The Hemi version has sold for over $1.5 million at auction. It is the car that proved aerodynamics mattered — and that Chrysler engineers could out-think Ford when they had to.",
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
                {["CUSMA EVE", "JULY 24 CLIFF", "BRIDGE TOLL FIGHT", "DAYTONA"].map((tag) => (
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
              alt="CUSMA Eve: July 1 Countdown and Gordie Howe Bridge Still Closed — Baywash Daily Briefing Edition No. 52"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#1d4ed8] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Sunday Edition — No. 52 — CUSMA Eve</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                July 1 Is Tomorrow — What Actually Happens — And the July 24 Tariff Cliff Nobody Is Talking About
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
