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

const BRIEFING_NUMBER = 68;
const BRIEFING_DATE = "July 14, 2026";
const BRIEFING_DAY = "Tuesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/jGrWPPJyOzpqwfPK.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/sCJWpMmgLJLScgge.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/peDRrWRXPZmUguDv.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/LtYjoRMoBiPiWWzV.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/SpUgohRlOhMreEhl.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "BANK OF CANADA / JULY 15 / 6TH CONSECUTIVE HOLD EXPECTED",
    tagColor: "#1d4ed8",
    headline: "Bank of Canada Rate Decision Tomorrow — 6th Consecutive Hold at 2.25% Expected — Oxford Economics: Economy in a 'Pickle' — CUSMA Uncertainty + Iran Conflict Complicate the Outlook — Prime Rate Stays at 4.45%",
    summary: "The Bank of Canada announces its overnight rate decision on Wednesday, July 15, and economists across Canada are unanimous: the central bank will hold at 2.25 per cent for the sixth consecutive meeting. The Financial Post reported Monday that Oxford Economics director of Canada economics Tony Stillo described the Bank's governing council as being in a 'pickle' — facing competing pressures from elevated inflation driven by energy prices and a sluggish economy weakened by CUSMA uncertainty and the collapse of the U.S.-Iran interim peace agreement. Headline inflation accelerated to 3.2 per cent in May due to surging gas prices, but core inflation measures — which the Bank watches more closely — remained relatively stable. TD Economics economist Maria Solovieva said the Bank's main concern will be whether the energy price shock has fed into other goods and services. TD expects higher energy prices will broadly filter through to other things, but the impact on core inflation will be mitigated by a sluggish economy. Oxford Economics recently downgraded its 2027 real GDP growth forecast for Canada to 1.6 per cent, but still expects the economy to grow by 0.7 per cent in 2026. A Reuters poll of economists conducted July 10 found that the Bank of Canada will hold its overnight rate at 2.25 per cent on July 15 and keep it there 'well into next year' as price pressures remain largely contained. The C.D. Howe Institute's Monetary Policy Council recommended on July 9 that the Bank maintain the overnight rate at 2.25 per cent for the next six months, then increase to 2.5 per cent by July 2027. Economists no longer expect any CUSMA deal to lower U.S.-Canada tariffs, which will weaken economic growth and prolong uncertainty for steel, aluminum, lumber, and auto sectors.",
    whyItMatters: "A hold at 2.25 per cent is the best outcome for your shop's customers. Prime rate stays at 4.45 per cent. Auto loan rates stay flat. Customers who are on the fence about a major repair — an engine, a transmission, a full suspension rebuild — are not facing higher borrowing costs. The hold also means your shop's line of credit rate does not move. If you are carrying inventory debt or a parts account with a floating rate, your cost of capital stays the same. The risk scenario — a rate cut — would be good for borrowers but would signal that the Bank sees the economy weakening faster than expected. A rate hike would signal inflation is getting out of control. Neither scenario is on the table for July 15. The practical implication for your service advisors: customers asking about financing large repairs can be told that rates are stable and are expected to stay stable through the end of 2026. That is a genuine selling point for deferred maintenance work.",
    source: "Financial Post / Reuters / C.D. Howe Institute — July 13, 2026",
    sourceUrl: "https://financialpost.com/news/economy/bank-of-canada-likely-hold-interest-rates-economists",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "USTR / CUSMA RULES OF ORIGIN / U.S. CONTENT DECLINING / REVISION PROPOSED",
    tagColor: "#b91c1c",
    headline: "USTR Wants to Revise CUSMA Automotive Rules of Origin — U.S. Content in Canadian-Built Vehicles Is Declining — More American Parts Required — Direct Threat to Ontario Parts Suppliers — ITIF: Auto Components Cross Borders Up to 8 Times",
    summary: "The Office of the United States Trade Representative published a report on July 14 on the operation of the USMCA with respect to automotive goods, signalling that the U.S. intends to seek revisions to the automotive rules of origin during the CUSMA annual review process. The report states that in the six years since CUSMA's entry into force, the automotive rules of origin have had a positive impact on the U.S. automotive sector — but that U.S. content in vehicles produced in Mexico and Canada is declining, and that the U.S. automotive trade deficit with Mexico remains persistently large. In response, the USTR states it will seek to: first, assess and strengthen the automotive rules of origin to incentivize the use of additional U.S. and North American content; second, streamline and simplify these rules to help ensure that the benefits of CUSMA are more easily achievable, especially by small and medium-sized suppliers; and third, mitigate risks posed to the North American automotive supply chain by non-market-economy third parties — a reference to China. The Information Technology and Innovation Foundation published a major report on July 13 titled 'Why the USMCA Matters for North America's Economic Future,' finding that auto components cross borders up to eight times before reaching final assembly, that automotive trade accounts for 22 per cent of total CUSMA trade, and that North America is the third-largest auto producer in the world after China and the European Union. The ITIF report found that without CUSMA, the U.S. strategic sector output gap versus China widens from 0.3 percentage points to 3.1 percentage points — making CUSMA renewal a U.S. national security issue as much as a trade issue.",
    whyItMatters: "The USTR's proposed revision to automotive rules of origin is the most important long-term threat to Ontario parts suppliers that has emerged from the CUSMA annual review process. Here is what it means in plain language. The current CUSMA rules require that a vehicle must contain at least 75 per cent North American content — meaning parts from Canada, the U.S., or Mexico — to qualify for tariff-free treatment. The USTR is now saying that U.S. content specifically is declining, and it wants to change the rules to require more American parts in vehicles built in Canada and Mexico. If the USTR succeeds in revising the rules of origin to require a higher share of U.S.-made content, Canadian parts suppliers face a stark choice: either increase their U.S. content (by sourcing more inputs from American suppliers) or lose their CUSMA-compliant status. Losing CUSMA compliance means their parts would be subject to tariffs when crossing into the U.S. — making them uncompetitive against American-made alternatives. For your shop, the practical implication is this: ask your top three parts suppliers whether their products are CUSMA-compliant and what percentage of their content is U.S.-origin. Suppliers with high Canadian or Mexican content and low U.S. content are most exposed to a rules-of-origin revision. This is a 12-to-24-month risk, not an immediate one — but the time to ask the question is now, before the revision is finalized.",
    source: "ST&R Trade Report / ITIF — July 13–14, 2026",
    sourceUrl: "https://www.strtrade.com/trade-news-resources/str-trade-report/trade-report/july/ustr-wants-to-revise-usmca-automotive-rules-of-origin",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "AUTO INDUSTRY CONFIDENCE / Q2 2026 SURVEY HIGH / TARIFFS / AFFORDABILITY / CHINA",
    tagColor: "#15803d",
    headline: "Auto Industry Confidence Reaches Survey High in Q2 2026 — All Four Sectors Optimistic for First Time — But Tariffs, Affordability, and China Remain Top Concerns — Consumers Keeping Vehicles Longer — Direct Tailwind for Shop Service Revenue",
    summary: "The Automotive News Confidence Index for the second quarter of 2026, published July 12, found that auto industry confidence reached a survey high, with all four sectors — manufacturing, retail, supplier, and finance — posting optimistic six-month outlooks for the first time in the survey's history. The overall index rose 2.9 points from the previous quarter. Industry projections suggest that broad auto tariffs could push the price of a $30,000 car up by as much as $6,400, making new vehicles less affordable for many Canadians. Canadian Auto Dealer columnist Robert Arena, a CPA and faculty member at the Automotive Business School of Canada, published an analysis on July 13 titled 'Costs Reshape the Market,' noting that rising fuel prices and interest rates are having a direct, multi-layered impact on consumer behaviour in the retail automotive market. Arena found that as fuel prices and interest rates rise, total cost of ownership increases, resulting in downward pressure on demand for both new and used vehicles. Consumers are shifting toward more fuel-efficient options, including hybrids and electric vehicles. Vehicles will be kept longer, which in turn tightens supply in the used market. Reduced availability will put upward pressure on used vehicle pricing. Lower-income households are particularly affected, with many delaying purchases until conditions stabilize. Canadian auto production is down approximately 15 per cent year-over-year. The U.S. auto market is proving resilient but is poised to fall in the second half of 2026, according to GlobalData and AutoForecast Solutions, which have lowered their full-year outlooks citing numerous economic headwinds.",
    whyItMatters: "The confidence index reaching a survey high is genuinely good news — it means the industry has absorbed the tariff shock better than feared and is not in freefall. But the more important signal for your shop is buried in the details: consumers are keeping vehicles longer. When new vehicle prices rise by $6,400 due to tariffs, the repair-versus-replace calculation tilts sharply toward repair. A customer who would have traded in their 2019 Silverado for a new one is now more likely to spend $3,500 on a timing chain and water pump to keep it running another three years. That is your revenue. Robert Arena's analysis is worth reading in full — his point about total cost of ownership becoming the primary decision driver is directly relevant to how your service advisors should be framing large repair estimates. The conversation is no longer 'here is what this repair costs.' It is 'here is what this repair costs versus what a new vehicle payment would cost you every month for the next 72 months.' When you frame it that way, a $4,000 repair looks very different. Consumers are also driving less and prioritizing efficiency — which means more demand for fuel system maintenance, tire rotations, and alignment work on vehicles that are being used more carefully. The market is reshaping itself in your favour. Position your shop accordingly.",
    source: "Automotive News / Canadian Auto Dealer — July 12–13, 2026",
    sourceUrl: "https://canadianautodealer.ca/2026/07/costs-reshape-the-market/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🏦",
    text: "Bank of Canada rate decision: TOMORROW, July 15. Current rate: 2.25%. Prime rate: 4.45%. Expert consensus: HOLD for the 6th consecutive time. C.D. Howe recommends hold through January 2027. Auto loan rates stay flat. A hold is the best scenario for customer financing affordability.",
    sourceUrl: "https://financialpost.com/news/economy/bank-of-canada-likely-hold-interest-rates-economists",
  },
  {
    icon: "🗳️",
    text: "Ford ratification vote: July 17–19 — 3 days away. Watch Unifor social media channels for results. A yes vote makes the 15% wage deal official. A no vote returns the parties to the table — strike risk increases. 54% preliminary survey endorsement. GM and Stellantis bargaining begins after Ford ratification.",
    sourceUrl: "https://www.autonews.com/manufacturing/automakers/anc-unifor-ford-tentative-agreement-0711/",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge opens July 27 — 13 days. Call your Michigan and Ohio parts suppliers this week: will they route commercial shipments through the new bridge? Dedicated truck lanes and modern customs facility mean faster transit times than the Ambassador Bridge for commercial traffic.",
    sourceUrl: "https://www.canada.ca/en/housing-infrastructure-communities/news/2026/07/the-gordie-howe-international-bridge-will-open-on-july-27th-strengthening-trade-connectivity-and-economic-development.html",
  },
  {
    icon: "⚖️",
    text: "Section 122 tariff expiry: July 24 — 10 days. Section 301 forced labour final determination: July 21–23. CUSMA-compliant goods exemption demanded by 1,500+ submissions — decision pending. Ask your top 3 parts suppliers about CUSMA compliance status this week. Non-compliant parts with Chinese content are most exposed.",
    sourceUrl: "https://www.strtrade.com/trade-news-resources/str-trade-report/trade-report/july/ustr-wants-to-revise-usmca-automotive-rules-of-origin",
  },
];

const tipOfTheDay = {
  title: "Ask Your Parts Suppliers Three Questions Before July 24",
  text: "With the Section 122 tariff expiring July 24 and Section 301 forced labour tariffs taking effect, now is the time to ask your top three parts suppliers: (1) Are your products CUSMA-compliant? (2) What percentage of your content is U.S.-origin? (3) Do any of your products contain Chinese-sourced batteries, semiconductors, or sensors? Suppliers who cannot answer these questions clearly are suppliers whose pricing may change after July 24. Get the answers in writing before the deadline.",
};

const quoteOfTheDay = {
  text: "U.S. content in vehicles produced in Mexico and Canada is declining — and the U.S. will seek to strengthen automotive rules of origin to incentivize the use of additional U.S. content.",
  author: "USTR",
  title: "Report on the Operation of the USMCA with Respect to Automotive Goods — July 14, 2026",
};

const rideOfTheDay = {
  name: "1969 AMC AMX 390 — Big Bad Orange, 390 Cubic Inch V8, 315 hp, Ontario-Plated",
  description: "The underdog of the muscle car era. American Motors Corporation built the AMX as a two-seat performance car to compete with the Corvette and the Mustang — and did it on a fraction of the budget. The 390 cubic inch V8 produced 315 horsepower from the factory, enough to run 0-60 in 6.6 seconds and the quarter mile in 14.8 seconds. Big Bad Orange paint — one of three AMC 'Big Bad' colours introduced in 1969 alongside Big Bad Blue and Big Bad Green. Black AMX stripes on the hood and sides. Rallye wheels with BFGoodrich raised white letter tires. Ontario licence plate. Only 19,134 AMX models were built in 1969, making it one of the rarest two-seat American muscle cars ever produced. AMC sold the AMX in Canada through its Canadian dealer network — built in Kenosha, Wisconsin, sold in Ontario, driven on the same roads as the Camaros and Mustangs it was built to beat. Value: $40,000 to $80,000 at auction depending on condition and documentation. A numbers-matching Big Bad Orange example with documentation has sold for over $100,000. The AMX is what happens when an underdog decides to compete on merit instead of marketing budget. Sound familiar?",
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
                {["BOC HOLD TOMORROW", "USTR: MORE U.S. CONTENT", "Q2 CONFIDENCE: SURVEY HIGH", "'69 AMC AMX 390"].map((tag) => (
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
              alt="Bank of Canada Hold Tomorrow — USTR Wants More U.S. Content — Q2 Confidence Survey High — Baywash Daily Briefing Edition No. 68"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#1d4ed8] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 68 — Tuesday, July 14, 2026 — Bank of Canada Eve</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Bank of Canada Hold Tomorrow — USTR Wants More U.S. Content in CUSMA Vehicles — Industry Confidence at Survey High
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '69 AMC AMX 390</span>
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
