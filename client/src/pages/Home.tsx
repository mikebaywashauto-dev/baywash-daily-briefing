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

const BRIEFING_NUMBER = 35;
const BRIEFING_DATE = "June 11, 2026";
const BRIEFING_DAY = "Wednesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/dVgmNqxAtYWxBHKO.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/TSTuzgPJiZlwYjiy.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/TNlNksYTAtfipkXC.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/TLkfaWKuJaNNOolp.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/PmkeNvfNcENNzIyR.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "CUSMA",
    tagColor: "#1d4ed8",
    headline: "Trump: 'I'm Not Looking to Renew' CUSMA — Trade Lawyers Say Don't Panic, 20 Days to July 1",
    summary: "President Trump told reporters in the Oval Office on June 10: 'I don't know if I'm going to renew it.' The statement rattled markets briefly before trade lawyers and former ambassadors urged calm. William Pellerin (McMillan LLP): 'Trump likes to up the ante as a negotiating tactic.' Former Ambassador Mark Warner: 'The deal remains in force until 2036 unless a withdrawal notice is filed — and no one has filed one.' The critical distinction: Trump's statement is a negotiating position, not a legal act. CUSMA requires six months' notice to withdraw, meaning a July 1 withdrawal notice would end the deal on January 1, 2027. No such notice has been filed. Trade Minister LeBlanc declared talks 'unfrozen' after his June 3 Washington meeting with USTR Greer. U.S.-Mexico Round 2 is June 16-17 in Washington — Canada's inclusion or exclusion from those talks is the most important signal of the week. Bank of Canada held rates at 2.25% today as expected. The rate hold is positive for the auto service sector: consumers holding vehicles longer means more service work.",
    whyItMatters: "Trump's 'I'm not looking to renew' statement is consistent with his negotiating style — he said the same thing about NATO, NAFTA, and the WTO before ultimately keeping or modifying them. The legal reality is that CUSMA remains in force until 2036 unless a withdrawal notice is filed. The practical reality is that uncertainty itself is a cost: parts prices remain elevated, OEMs are reluctant to commit to new Canadian investments, and shops face unpredictable fluid and parts cost trajectories. The Bank of Canada's hold at 2.25% is the right call given the uncertainty — it keeps borrowing costs stable for shop owners carrying inventory or equipment financing. Watch June 16-17 for whether Canada is included in U.S.-Mexico Round 2 talks.",
    source: "CBC / Global News / Reuters — June 10-11, 2026",
    sourceUrl: "https://www.cbc.ca/news/politics/trump-cusma-usmca-trade-renew-9.7230164",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "LABOUR",
    tagColor: "#16a34a",
    headline: "UAW Dauch Strike SETTLED — GM Silverado/Sierra Axle Supply Crisis Over, $30/hr by 2030",
    summary: "UAW President Shawn Fain announced a tentative deal with Dauch Corp (formerly American Axle) on June 10, ending the 10-day strike at the Three Rivers, Michigan plant. The deal: top wage rises from $22/hr to $30/hr by 2030 — a 36% increase over four years — plus improved healthcare and additional vacation time. Workers at UAW Local 2093 will vote to ratify the contract. The strike will continue until ratification is complete. GM's Silverado and Sierra axle supply crisis is resolved: the Three Rivers plant will resume full production upon ratification. GM had approximately 4-5 days of axle inventory remaining when the deal was announced. The Oshawa Assembly Complex, which is in the direct supply chain, will not face a production halt. The settlement is significant beyond GM: it sets a wage benchmark of $30/hr by 2030 that will be cited in Unifor-Ford contract talks opening June 22. Dauch spokesperson: 'We appreciate the efforts of both the UAW and Dauch labor negotiations teams to find common ground.'",
    whyItMatters: "The Dauch settlement has two direct implications for Canadian shop owners. First, the immediate supply chain risk to Silverado and Sierra production is resolved — if you were planning to call your GM truck customers about booking service before a production halt, the urgency has passed, but the call is still worth making. Second, the $30/hr by 2030 wage benchmark will be cited in Unifor-Ford talks starting June 22. Unifor has been asking for comparable wage recovery for Canadian auto workers. If Unifor achieves a similar deal, it will increase OEM production costs in Canada — which eventually flows through to parts pricing. The settlement also demonstrates that UAW President Shawn Fain's aggressive bargaining strategy continues to deliver results, which will embolden Unifor's negotiating position.",
    source: "Reuters / Automotive World — June 11, 2026",
    sourceUrl: "https://www.reuters.com/business/autos-transportation/uaw-president-deal-reached-with-axle-supplier-dauch-corp-after-10-day-strike-2026-06-11/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "RECALL",
    tagColor: "#dc2626",
    headline: "Honda Canada Recalls 130,000 Vehicles — Rear Subframe Corrosion, Salt-Belt Provinces Most at Risk",
    summary: "Honda Canada Inc. announced a safety recall on June 10 affecting more than 130,000 Honda and Acura vehicles from 2014 to 2023. The affected models are the Acura MDX (2014-2020), Honda Passport (2019-2023), Honda Pilot (2016-2022), and Honda Ridgeline (2017-2023). The defect: rear subframes were manufactured with improper coating specifications, causing paint to peel. In areas where de-icing salt is heavily used — Ontario, Quebec, Atlantic Canada — the exposed metal corrodes prematurely. As corrosion progresses, material thinning and driving vibrations can cause the mounting area to fracture and fail, negatively affecting vehicle handling, stability, and braking performance. Honda is simultaneously recalling more than 880,000 vehicles in the United States for the same defect. No injuries or deaths have been reported. Honda will contact registered owners by mail starting in July. Dealers will inspect the rear subframe and install a reinforcement kit or replace affected components. The new components feature improved pre-paint treatment and increased coating thickness. To check if a vehicle is affected: 1-888-946-6329 or Honda.ca/recalls or Acura.ca/recalls.",
    whyItMatters: "This recall is a direct service opportunity for every Canadian shop that services Honda and Acura vehicles. The affected models — Pilot, Passport, Ridgeline, and MDX — are among the most common vehicles in Canadian service bays, particularly in Ontario and Quebec where salt use is heaviest. Honda will contact owners by mail in July, but proactive shops can get ahead of the recall by identifying affected vehicles in their customer database now. Run a VIN check on every 2014-2023 Honda Pilot, Passport, Ridgeline, and Acura MDX in your customer list and reach out before the dealer letters arrive. Recall work is paid at OEM labour rates — but independent shops can capture the inspection and any non-recall-related work (brake service, fluid changes, tire rotation) that comes with bringing the vehicle in. The 880,000-unit U.S. recall means parts and reinforcement kits will be in high demand — contact your Honda parts distributor this week to understand availability timelines.",
    source: "CTV News / AM800 / Honda Canada — June 10, 2026",
    sourceUrl: "https://www.am800cklw.com/news/honda-canada-recall-affects-more-than-130000-vehicles/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📈",
    text: "U.S. CPI hit 4.2% annually in May — the highest in three years. Energy prices up 23.5% year-over-year driven by the Iran war and Strait of Hormuz closure. Trump: 'I love the inflation. The numbers were great.' Fed expected to hold rates at June 17 meeting. Higher U.S. inflation means higher parts prices for Canadian shops sourcing from U.S. distributors.",
    sourceUrl: "https://www.cnbc.com/2026/06/10/cpi-inflation-report-may-2026.html",
  },
  {
    icon: "🏦",
    text: "Bank of Canada held rates at 2.25% today as expected. May jobs report (+87,800 jobs, unemployment to 6.6%) gave the Bank room to hold. Bond markets pricing 30+ basis points of tightening by December. Rate stability is positive for shop owners carrying equipment financing or inventory lines of credit.",
    sourceUrl: "https://www.bankofcanada.ca/core-functions/monetary-policy/key-interest-rate/",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge opens to traffic THIS SUNDAY, June 15. Ribbon-cutting ceremony Friday, June 13. Six lanes, direct Highway 401 (Canada) and I-75 (U.S.) connections. The $50B/year Windsor-Detroit automotive trade corridor finally gets its second crossing. Parts delivery times from U.S. distributors will improve significantly.",
    sourceUrl: "https://globalnews.ca/news/11895621/gordie-howe-bridge-ribbon-cutting-date/",
  },
  {
    icon: "🤝",
    text: "CUSMA — 20 days to July 1. U.S.-Mexico Round 2 is June 16-17 in Washington. Canada's inclusion or exclusion from those talks is the most important signal of the week. Trump's 'not looking to renew' statement is a negotiating position, not a legal act. No withdrawal notice has been filed.",
    sourceUrl: "https://www.cbc.ca/news/politics/trump-cusma-usmca-trade-renew-9.7230164",
  },
];

const tipOfTheDay = {
  title: "Honda Recall: Run Your Customer Database Now, Before the Dealer Letters Arrive in July",
  text: "Honda Canada will mail recall letters to registered owners of affected vehicles starting in July. That gives you a 3-4 week window to get ahead of the dealer network. Here is what to do this week. First, pull every 2014-2023 Honda Pilot, 2019-2023 Honda Passport, 2017-2023 Honda Ridgeline, and 2014-2020 Acura MDX from your customer database. Second, run each VIN through Honda.ca/recalls or the Transport Canada recall database to confirm which are affected. Third, call or text those customers before the dealer letter arrives: 'We noticed your [year/model] is part of a Honda safety recall for rear subframe corrosion. We can inspect it for you and take care of any other service while it's in.' Fourth, when the vehicle comes in, perform a full inspection — brake service, fluid changes, tire rotation, and any deferred maintenance are all billable alongside the recall inspection. Fifth, contact your Honda parts distributor this week to understand reinforcement kit availability — the 880,000-unit U.S. recall means parts will be in high demand.",
};

const quoteOfTheDay = {
  text: "I don't know if I'm going to renew it. I'm not looking to renew it.",
  author: "President Donald Trump",
  title: "On CUSMA — Oval Office, June 10, 2026",
};

const rideOfTheDay = {
  name: "1970 Buick GSX Stage 1 — The Gentleman's Brawler",
  description: "The 1970 Buick GSX Stage 1 is the most underrated muscle car of the golden era. While everyone was watching Chevelles and Mopars, Buick quietly built the fastest production car in America. The Stage 1 455 cubic inch V8 produced 360 hp factory-rated — but the real number was closer to 400 hp and a tire-shredding 510 lb-ft of torque. That torque figure was the highest of any production car in 1970. Available only in Saturn Yellow or Apollo White with black stripes, the GSX was a visual statement as bold as its performance. Only 678 Stage 1 cars were built in 1970. The GSX ran the quarter mile in 13.38 seconds at 105.5 mph — faster than a Chevelle SS 454 LS6 in contemporary testing. Today, a documented Stage 1 GSX trades for $150,000-$250,000 at major auctions. On a Wednesday when Trump says he's 'not looking to renew' CUSMA, the UAW just won a 36% wage increase, and Honda is recalling 130,000 Canadian vehicles, the GSX is a reminder that the most powerful option is not always the most obvious one — and that the best results often come from the competitor nobody was watching.",
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
              <div className="flex gap-2">
                {["CUSMA", "UAW DEAL", "HONDA RECALL", "BRIDGE"].map((tag) => (
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
              alt="Honda Pilot on hoist in Canadian service bay — rear subframe recall June 2026"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#e05a1a] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Today's Edition</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Trump: "Not Looking to Renew" CUSMA — UAW Dauch Strike Settled — Honda Recalls 130,000 Canadian Vehicles
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
