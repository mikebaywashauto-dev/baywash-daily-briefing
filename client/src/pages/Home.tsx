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

const BRIEFING_NUMBER = 50;
const BRIEFING_DATE = "June 26, 2026";
const BRIEFING_DAY = "Friday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/kzFzKUhEFYGUwmVE.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/FDEOHyaEKuvOYdLL.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/QMdBfssJkhpvTfTO.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/csQsiwDOUxCPBBjB.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/iojPMcOZBoSFOxmL.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "CUSMA / CARNEY / PARLIAMENT",
    tagColor: "#b91c1c",
    headline: "Carney: \"A Breakthrough Will Happen Between Me and Trump\" — But He Didn't Raise CUSMA in Wednesday's Call — 5 Days to July 1",
    summary: "Prime Minister Mark Carney held a press conference Thursday following the conclusion of the spring sitting of Parliament — 19 bills in 14 weeks, including the Bail and Sentencing Reform Act, the Combatting Hate Act, and the Canada Groceries and Essentials Benefit Act. On CUSMA, Carney said: 'What I have seen with the president is that you're not close to make a deal, and then you make a deal.' He explicitly said the breakthrough will be at the 'leadership level' — meaning a Carney-Trump summit, not a negotiator deal. But Conservative leader Pierre Poilievre landed a devastating hit: Carney spoke with Trump on Wednesday and did not raise CUSMA. Poilievre: 'The aluminum, steel, auto, and lumber workers are desperate for their jobs and their paycheques, and Mr. Carney has a long telephone conversation with the president and doesn't even bring it up.' Canada and Mexico have both formally requested 16-year renewal. The U.S. has not responded. Mexico and the U.S. have had two rounds of formal bilateral talks. Canada and the U.S. have had zero formal bilateral sessions. The first trilateral virtual meeting is July 1 — 5 days away. Carney's spring session accomplishments were substantial: NATO 2% target met for the first time since the fall of the Berlin Wall, 11,000 affordable homes committed, Darlington nuclear construction started, fuel excise tax suspended saving up to 10 cents per litre until Labour Day. But on CUSMA — nothing to show yet. U.S. Ambassador Hoekstra told CTV News on Wednesday: 'We're not anywhere close on a new CUSMA framework.' BNN Bloomberg: Carney responded directly — 'We're not going to sign a bad deal.'",
    whyItMatters: "Carney's 'breakthrough at the top' framing is the most important signal for Canadian shop owners heading into the July 1 CUSMA review. Here is the practical breakdown: (1) Carney is betting that a direct Carney-Trump summit — not a negotiator deal — is the path to CUSMA renewal and tariff relief. This is consistent with how Trump operates: he prefers personal deals with leaders he respects, not bureaucratic negotiations. The G7 hot mic moment ('That's good. I like that.') is the evidence Carney is relying on. (2) The fact that Carney did not raise CUSMA in Wednesday's call with Trump is either a strategic choice (saving it for the summit) or a significant missed opportunity. Poilievre's attack will stick if there is no deal by July 1. (3) The July 1 meeting is virtual and trilateral — it is the beginning of the process, not the end. The 25% auto tariff will not be removed on July 1. Plan accordingly. (4) The 'not going to sign a bad deal' line is important: Carney is signalling that Canada will not capitulate on dairy supply management, digital services tax, or cultural content rules just to get CUSMA renewed. The auto tariff relief will be part of a broader package — not a standalone deal. (5) For shops: the tariff environment will remain uncertain through at least Q3 2026. The best hedge is diversified parts sourcing and strong supplier relationships on both sides of the border.",
    source: "PM.gc.ca / BNN Bloomberg / National Post — June 25, 2026",
    sourceUrl: "https://www.pm.gc.ca/en/news/speeches/2026/06/25/prime-minister-carney-delivers-remarks-following-conclusion-spring-sitting",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "POLESTAR / CONNECTED VEHICLE RULE / GEELY",
    tagColor: "#7c3aed",
    headline: "Polestar Banned from the U.S. Market Starting 2027 — Chinese Technology Rule — Geely Owns Volvo Too, But Volvo Got a Waiver",
    summary: "Electric vehicle maker Polestar is being forced out of the American market due to its ties to China, following a decision by the U.S. Commerce Department's Bureau of Industry and Security, the company announced Thursday. The Commerce Department denied Polestar authorization to sell vehicles starting with the 2027 model year, under a regulation known as the Connected Vehicle Rule — instituted in the final days of the Biden administration and upheld by the Trump administration. The rule cites national security concerns to ban 'connected vehicle manufacturers owned by, controlled by, or subject to the jurisdiction or direction of China or Russia, and vehicles using their covered software.' Polestar is majority-owned by Geely, a Chinese automaker, and its chairman Li Shufu. Geely also owns Volvo — which was granted a waiver in May. Polestar was not. None of Polestar's U.S. vehicles are built in China: the Polestar 3 is built in a Volvo plant in Charleston, South Carolina; the Polestar 4 is built in South Korea. Polestar will continue to sell existing stock of the Polestar 3 and 4 in the U.S. and will continue to support customers. But the company said it will focus future sales growth in Europe, where it already had 80% of its sales. Polestar retailers are 'absolutely devastated.' Dealerships that remain with the brand will largely become service points for existing customers only, with franchise investments handled on a case-by-case basis. Polestar Canada is not directly affected by the U.S. ban — but the brand's global viability is now in question.",
    whyItMatters: "The Polestar ban has three direct implications for Canadian shop owners: (1) The Connected Vehicle Rule is the most important regulatory development in the EV market that most Canadian shop owners have not heard of. It bans connected vehicles from companies owned or controlled by China — regardless of where the vehicle is built. A Polestar built in South Carolina is still banned because Geely owns Polestar. This is the regulatory framework that will determine whether BYD, Chery, Geely, and Shanghai Launch — the four Chinese OEMs that Industry Minister Joly invited to build in Canada — can ever export their Canadian-assembled vehicles to the U.S. The answer, under the current rule, is no. (2) The Volvo waiver vs. Polestar denial is the key distinction to understand. Volvo has a longer history of independence from Geely, a more established U.S. dealer network, and a stronger case for waiver. Polestar was newer, smaller, and more dependent on Geely's supply chain. The lesson: Chinese ownership is disqualifying unless you can demonstrate operational independence. BYD, Chery, and Geely cannot make that case. (3) For shops that currently service Polestar vehicles: the brand will remain in Canada and will need service. Polestar's service network in Canada is thin — there are fewer than 20 Polestar retailers in the country. Independent shops with EV diagnostic capability and a willingness to work with Polestar owners will have a service opportunity as the brand's dealer network contracts.",
    source: "CNN / Automotive News — June 25, 2026",
    sourceUrl: "https://www.cnn.com/2026/06/25/business/polestar-us-ban",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "TARIFF RATE QUOTAS / STEEL / JUNE 28",
    tagColor: "#1d4ed8",
    headline: "Canada's Steel Tariff-Rate Quotas Reset June 28 — What Shop Owners Need to Know Before Monday",
    summary: "Canada's steel and aluminum tariff-rate quota (TRQ) periods reset on June 28, 2026 — this Saturday. The Blakes tariff timeline (updated June 22, 2026) confirms the current state of Canada-U.S. tariffs heading into the July 1 CUSMA review. The 25% Canadian retaliatory tariff on U.S. steel and aluminum remains in place. CUSMA-compliant goods remain exempt from the 10% temporary U.S. surcharge that has been in place since February 24, 2026, following the U.S. Supreme Court's decision striking down the IEEPA tariffs. The June 8 U.S. metal tariff adjustment reduced agricultural machinery and HVAC equipment tariffs from 25% to 15% — but auto-related steel and aluminum tariffs remain at 25%. For steel products from non-FTA countries: the tariff-rate quota is set at 20% of 2024 levels, with over-quota volumes facing a 50% surtax. For non-CUSMA FTA partners: 75% of 2024 levels. The CUSMA carve-out remains in place — Canadian steel and aluminum exports to the U.S. are subject to the 25% Section 232 tariff, but CUSMA-compliant auto parts remain exempt from the 10% temporary surcharge. The Willson International advisory published this week is the most actionable piece of trade compliance news for Canadian auto businesses: any U.S.-sourced steel tools, lifts, or equipment ordered before June 28 may have different tariff treatment than orders placed after the quota reset. Additionally, Canada's provisional 10% safeguard tariff on canned vegetables (effective June 19) is a signal that Canada is continuing to use trade remedies proactively — not just reactively.",
    whyItMatters: "The June 28 TRQ reset has three practical implications for Canadian shop owners: (1) If you are planning to purchase U.S.-sourced steel equipment — lifts, alignment racks, tire changers, or any steel-intensive shop equipment — place your order before Saturday June 28 if possible. The TRQ reset means the quota allocation for the new period starts fresh, and early orders in the new period may face different processing times at the border. (2) The 25% Canadian retaliatory tariff on U.S. steel and aluminum remains in place — and it applies to steel tools and equipment, not just raw steel. A U.S.-made two-post lift that costs $8,000 USD has a $2,000 tariff on top. Factor this into your capital equipment budget for Q3 2026. (3) The CUSMA-compliant auto parts exemption from the 10% temporary surcharge is the most important tariff relief for shops that source OEM parts from U.S. distributors. As long as the parts are CUSMA-compliant (North American content rules met), the 10% surcharge does not apply. Verify CUSMA compliance with your parts distributor — do not assume it. The Blakes tariff timeline is the best free public resource for tracking the current state of Canada-U.S. tariffs. Bookmark it.",
    source: "Blakes Tariff Timeline / Willson International — June 22–25, 2026",
    sourceUrl: "https://www.blakes.com/insights/us-canada-tariffs-timeline-of-key-dates-and-documents/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🤝",
    text: "Carney's spring sitting delivered 19 bills in 14 weeks: NATO 2% met, Darlington nuclear started, fuel excise tax suspended (saves up to 10 cents/L until Labour Day), 11,000 affordable homes committed. On CUSMA: zero formal Canada-U.S. bilateral sessions. The July 1 meeting is virtual and trilateral. The 25% auto tariff is not going away July 1.",
    sourceUrl: "https://www.pm.gc.ca/en/news/speeches/2026/06/25/prime-minister-carney-delivers-remarks-following-conclusion-spring-sitting",
  },
  {
    icon: "🚗",
    text: "Polestar Canada is not directly affected by the U.S. ban — but the brand's global viability is now in question. Fewer than 20 Polestar retailers in Canada. Independent shops with EV diagnostic capability will have a service opportunity as the brand's dealer network contracts. The Connected Vehicle Rule is the regulatory framework that blocks BYD, Chery, and Geely from exporting Canadian-assembled EVs to the U.S.",
    sourceUrl: "https://www.cnn.com/2026/06/25/business/polestar-us-ban",
  },
  {
    icon: "📋",
    text: "Unifor-Ford bargaining is now in Day 5 in downtown Toronto. The July 10 tentative deal target is 14 days away. Ford has not yet publicly responded to Unifor's production commitment demand. A work stoppage at Windsor Assembly would affect Bronco Sport and Lincoln Corsair parts availability within days.",
    sourceUrl: "https://www.thestar.com/business/ford-autoworkers-union-to-meet-today-to-kick-off-contract-talks/article_ee263814-d00b-587f-917a-81cf10a689b7.html",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge: Michigan Democratic Senate candidate Mallory McMorrow's $400,000+ ad campaign is now running in the Detroit market. Republican Mike Rogers is also using the bridge in his messaging. Michigan primary is in August. Trump now has a domestic political reason to open the bridge before then. Watch for an announcement.",
    sourceUrl: "https://www.theglobeandmail.com/world/us-politics/article-trump-gordie-howe-bridge-closed-delay-help-donor-michigan-senate/",
  },
];

const tipOfTheDay = {
  title: "The Connected Vehicle Rule Is the Regulatory Wall Between Chinese EVs and the U.S. Market",
  text: "The Polestar ban clarifies the regulatory framework: the U.S. Connected Vehicle Rule bans vehicles from Chinese-owned companies — regardless of where the vehicle is built. A BYD assembled in Ontario is still a Chinese-owned vehicle under the rule. This means the four Chinese OEMs Joly invited to build in Canada (BYD, Chery, Geely, Shanghai Launch) cannot export their Canadian-assembled vehicles to the U.S. under the current rule. For shop owners: Chinese EVs will be a Canada-only market for the foreseeable future. Service them if they arrive — but do not expect them to be a North American platform.",
};

const quoteOfTheDay = {
  text: "We're not going to sign a bad deal.",
  author: "Prime Minister Mark Carney",
  title: "Press Conference, Ottawa — June 25, 2026",
};

const rideOfTheDay = {
  name: "1970 Pontiac Firebird Trans Am — Carousel Red, Ram Air, Ontario-Plated",
  description: "The 1970 Pontiac Firebird Trans Am is the car that defined the Firebird nameplate. The first year of the second-generation body — longer, lower, wider than the original — with the shaker hood scoop, rear spoiler, and the blue Firebird decal on the hood. The Ram Air 400 cubic inch engine produced 345 horsepower officially, with the Ram Air III option, or 370 horsepower with the Ram Air IV. The Trans Am was Pontiac's answer to the Mustang Boss 302 and the Camaro Z/28 — a road-racing-oriented pony car with genuine performance credentials. In Carousel Red with a black interior and Ontario plate, this is a car that was built to be driven. The 1970 Trans Am is one of the most photographed muscle cars of the era — the shaker scoop, the rear wing, and the blue bird on the hood are instantly recognizable. Only 3,196 Trans Ams were built in 1970 — making it one of the rarer muscle cars of the era. A documented 1970 Trans Am Ram Air IV in Carousel Red with an Ontario plate is worth between $80,000 and $150,000 depending on condition and matching numbers. It is the car that Burt Reynolds would have driven if he had been born in Ontario.",
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
                {["CUSMA 5 DAYS", "POLESTAR BANNED", "UNIFOR-FORD DAY 5", "TRANS AM"].map((tag) => (
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
              alt="Carney CUSMA 5 Days — The Deal Will Happen at the Top — Baywash Daily Briefing Edition No. 50"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Friday Edition — No. 50</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Carney: "The Deal Will Happen at the Top" — Polestar Banned — 5 Days to July 1
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
