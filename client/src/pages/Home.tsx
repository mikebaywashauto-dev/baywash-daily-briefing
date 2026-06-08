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

const BRIEFING_NUMBER = 32;
const BRIEFING_DATE = "June 8, 2026";
const BRIEFING_DAY = "Sunday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/CbQpRoIGzkKjoort.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/xdiOcldEvomujBhA.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/QXmRNDtCLnfWhMFG.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/DCdtbPtqSDWKAJHg.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/koVyTHMOOGvLiWdz.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "TRADE",
    tagColor: "#e05a1a",
    headline: "CUSMA 23 Days Out — Canada Makes Detailed Proposals, LeBlanc Warns of 'Turbulence' After Greer Drops New 10% Tariff Hours After Meeting",
    summary: "Canada submitted detailed trade proposals to the United States on June 3, and Trade Minister Dominic LeBlanc flew to Washington to meet USTR Jamieson Greer — the first formal bilateral Canada-U.S. trade meeting since the tariff war began. LeBlanc declared the talks 'unfrozen' and said he remains 'optimistic' but warned the road to a deal 'is sometimes not a straight line.' The warning proved prescient: hours after LeBlanc left Greer's office, the Trump administration announced new 10% 'forced labour' tariffs on 60 countries, including Canada. The tariffs are proposed under a Section 301 investigation claiming Canada fails to effectively enforce its own ban on forced-labour imports — citing just two shipments denied entry in six years. Critically, the tariffs apply only to non-CUSMA-compliant goods, meaning approximately 90% of Canadian exports to the U.S. would be exempt. Carney called the tariffs 'not a surprise' and said they 'will not have an impact on the vast majority of Canadian trade.' The tariffs cannot be imposed immediately — they require a public comment period and hearings in July. The July 1 CUSMA deadline now has a new dimension: if CUSMA is not renewed, the CUSMA exemption disappears, and the 10% forced labour tariff would apply to virtually all Canadian exports. The U.S.-Mexico Round 2 talks are scheduled for June 16-17 in Washington. Canada's status in those talks — participant or observer — will be the most important signal of whether July 1 is a managed transition or a crisis. Bank of Canada rate decision: Wednesday, June 11.",
    whyItMatters: "The forced labour tariff announcement has three direct implications for Canadian shop owners. First, it is a reminder that the CUSMA exemption is the single most important protection for the Canadian automotive supply chain. If CUSMA lapses or is modified to exclude Canadian parts content, the 25% auto tariff and the new 10% forced labour tariff would stack — creating a 35% cost increase on virtually all Canadian-made parts sold into the U.S. market. Second, the announcement came hours after a meeting described as 'constructive' — which tells you that the U.S. is negotiating on multiple tracks simultaneously and that any positive signal from Washington can be reversed within hours. Third, the Bank of Canada rate decision on Wednesday is now more complex: the jobs report (87,800 new jobs in May) argues for holding or hiking; the tariff uncertainty argues for cutting. Watch for the Bank's language on the trade war's impact on the growth outlook.",
    source: "CBC News / Mike Crawley / Global Affairs Canada / USTR / BNN Bloomberg",
    sourceUrl: "https://www.cbc.ca/news/world/trump-tariffs-forced-labour-explained-9.7221691",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "INFRASTRUCTURE",
    tagColor: "#1d4ed8",
    headline: "Gordie Howe Bridge — 114 Days Since Trump Blocked It, Michigan Democrats Demand Opening, DHS 'Ready to Go'",
    summary: "It has been 114 days since President Trump vowed to block the Gordie Howe International Bridge from opening. Michigan Democratic Party Chair Curtis Hertel issued a public statement on June 5: 'It's been 114 days since Trump vowed to block the Gordie Howe Bridge from opening once completed, which came a day after he met with the billionaire owner of a competing bridge who's donated millions of dollars to his campaign. Now, the Gordie Howe Bridge is nearly finished and the Customs staff are ready to go, and it's well past time for Donald Trump and Republicans to quit playing political games and open this bridge, which is a game-changer for our economy. Every day that Trump keeps the bridge closed is a day that our economy suffers even more.' DHS Secretary Mullin confirmed to the Senate that customs and border protection staff are staffed and ready. The bridge is jointly owned by Michigan and Canada, with Canada financing the entire $5.7 billion project. Canada plans to recover the funding through toll revenue. Trump has demanded 'at least one half' of the asset, claiming the revenues 'will be astronomical.' He also cited Ontario's restrictions on U.S. alcohol products and Canadian dairy tariffs as reasons to block the opening. The bridge was expected to open in spring 2026 — spring ends June 20. The Windsor-Detroit corridor handles more than $50 billion in annual trade, the majority of which is automotive parts and finished vehicles. The Ambassador Bridge, which handles the bulk of that traffic, is privately owned by Matty Moroun's family — the billionaire Trump met with before announcing the blockade.",
    whyItMatters: "The Gordie Howe Bridge is not just an infrastructure story — it is a direct supply chain risk for every Canadian automotive shop. The Windsor-Detroit corridor is the single most important automotive trade route in North America. Approximately $50 billion in automotive parts and finished vehicles cross this corridor annually. A disruption — even a partial one caused by congestion at the Ambassador Bridge — would create parts shortages within days. The bridge opening could become a bargaining chip in the LeBlanc-Greer CUSMA talks: Canada could offer concessions on dairy or alcohol in exchange for the bridge opening and a CUSMA renewal. Watch for any mention of the bridge in official communiqués from the June 16-17 U.S.-Mexico round. If Canada is included in those talks, the bridge could be on the table.",
    source: "CBS Detroit / Paula Wethington / Michigan Democratic Party / WDBA / Fox 2 Detroit",
    sourceUrl: "https://www.cbsnews.com/detroit/news/michigan-democrats-demand-trump-allow-gordie-howe-bridge-to-open/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "ECONOMY",
    tagColor: "#16a34a",
    headline: "Canada Adds 87,800 Jobs in May — Best Month Since December 2024, But Economy Still 25,000 Jobs Below Year-End 2025",
    summary: "Statistics Canada reported on June 6 that employment in Canada increased by a surprising 87,800 in May — the largest monthly gain since December 2024. Economists surveyed by Bloomberg had expected only 10,000 new jobs. The unemployment rate fell to 6.6% from 6.9% in April. The increase was driven by full-time work and was observed across industries. Ontario led all provinces, adding 42,000 jobs and bringing its unemployment rate to 7.0% — the lowest since September 2024. Construction led sector gains with 27,000 new jobs. Information, culture and recreation as well as transportation and warehousing added 19,000 jobs each. The loonie rallied approximately 0.1% against the U.S. dollar on the news. Canadian bond yields jumped — the two-year yield rose about 10 basis points to 2.907%, the biggest intraday jump since May 15. Swaps traders raised expectations of Bank of Canada rate hikes, now pricing more than 30 basis points of tightening by December. However, the report contains important caveats: employment is still almost 25,000 lower than it was at the end of 2025. Wholesale and retail trade shed 35,000 jobs in May — down 64,000 year-over-year. The labour force survey is notoriously volatile. Desjardins' Royce Mendes: 'Given the volatility in the labour force survey, it's difficult to have much confidence in the signaling power of today's reading. We continue to see downside risks for the Canadian economy both from fundamental weakness and trade negotiations.' The Bank of Canada holds its next rate meeting on Wednesday, June 11.",
    whyItMatters: "The May jobs report has two direct implications for Canadian shop owners. First, 87,800 new jobs means 87,800 more Canadians with paycheques — and vehicles to maintain. Construction employment up 27,000 means more work trucks on the road. Transportation and warehousing up 19,000 means more commercial vehicles needing service. The employment rebound, if sustained, is good for your customer base. Second, the bond market reaction (yields jumping, rate hike expectations rising) suggests the Bank of Canada may hold or even raise rates on Wednesday rather than cut. Higher rates make vehicle financing more expensive, which further discourages new vehicle purchases and keeps existing vehicles on the road longer. Eight consecutive months of declining Canadian new vehicle sales is already the most powerful tailwind for independent service shops — the jobs report suggests that tailwind continues.",
    source: "Statistics Canada / Bloomberg / Nojoud Al Mallees / Desjardins / Bank of Nova Scotia",
    sourceUrl: "https://www.canadianmortgagetrends.com/2026/06/canadian-employment-up-87800-jobless-rate-falls-to-6-6/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🤝",
    text: "CUSMA — 23 days to the July 1 deadline. Canada submitted detailed proposals June 3. LeBlanc declared talks 'unfrozen.' U.S.-Mexico Round 2 is June 16-17 in Washington — whether Canada participates or runs parallel talks will be the most important signal of the week. The 82%/50% U.S. content demand (which would exclude Canadian parts from vehicle content calculations entirely) remains on the table.",
    sourceUrl: "https://www.cbc.ca/news/world/trump-tariffs-forced-labour-explained-9.7221691",
  },
  {
    icon: "🔧",
    text: "UAW Dauch Strike Day 8 — GM has approximately six days of Silverado/Sierra axle inventory remaining. No negotiations scheduled. NLRB unfair labor practice charge filed June 6. Nexteer ratification vote pending — if it fails, GM faces simultaneous axle and steering gear disruptions. Oshawa Assembly Complex is in the direct supply chain. Call your top GM truck customers today.",
    sourceUrl: "https://www.crainsdetroit.com/manufacturing-logistics/automotive/cdb-uaw-strike-dauch-20260601/",
  },
  {
    icon: "🛢️",
    text: "Motor oil shortage update: the DIFM channel (your shop) gets hit July-September 2026 — four to twelve weeks away. 0W-20 is the most at-risk grade. Shell's Pearl GTL (world's largest Group III producer) is offline for at least 12 months. Allocation programs are active. This weekend is the last realistic window to place supplemental orders before distributor allocation programs restrict ordering.",
    sourceUrl: "https://jobbersworld.com/2026/06/05/will-there-be-enough-motor-oil/",
  },
  {
    icon: "⛽",
    text: "Bank of Canada rate decision Wednesday, June 11. The May jobs report (+87,800, unemployment to 6.6%) argues for holding or hiking. Tariff uncertainty argues for cutting. Bond markets are pricing more than 30 basis points of tightening by December. Either outcome affects consumer credit availability and vehicle financing — higher rates mean fewer new vehicle purchases and more service work for your shop.",
    sourceUrl: "https://www.canadianmortgagetrends.com/2026/06/canadian-employment-up-87800-jobless-rate-falls-to-6-6/",
  },
];

const tipOfTheDay = {
  title: "CUSMA Contingency Planning — Three Scenarios for Your Parts Sourcing Strategy",
  text: "With 23 days to the July 1 CUSMA deadline, it is time to build a contingency plan. Three scenarios: Scenario 1 (Renewal) — CUSMA renews with minor modifications. The 25% auto tariff offset provisions remain. Your parts costs stay roughly stable. No action required beyond monitoring. Scenario 2 (Annual Review) — CUSMA enters a 12-month review period. The existing tariff structure continues but with annual uncertainty. Begin identifying alternative suppliers for your top 20 parts categories. Scenario 3 (Lapse) — CUSMA lapses or is modified to exclude Canadian content. The 25% auto tariff and the new 10% forced labour tariff stack to 35% on Canadian-made parts sold into the U.S. market. Parts prices rise 15-25% within 90 days. Action: this week, ask your top three parts suppliers which of their products are manufactured in Canada, the U.S., and Mexico. Understand your exposure before July 1.",
};

const quoteOfTheDay = {
  text: "It's been 114 days since Trump vowed to block the Gordie Howe Bridge from opening. Every day that Trump keeps the bridge closed is a day that our economy suffers even more.",
  author: "Curtis Hertel",
  title: "Michigan Democratic Party Chair — CBS Detroit, June 5, 2026",
};

const rideOfTheDay = {
  name: "1970 Oldsmobile 442 W-30 — The Gentleman's Muscle Car That Was Actually a Street Brawler",
  description: "The 1970 Oldsmobile 442 W-30 is one of the most underrated muscle cars of the golden era — and one of the most capable. While the Chevelle SS 454 and the Hemi 'Cuda grabbed the headlines, the 442 W-30 was quietly running quarter miles in the low 13s from the factory. The W-30 package added a force-air induction system (cold air through functional hood scoops), a hotter cam, special cylinder heads, a transistorized ignition, and a fibreglass hood to reduce weight. The 455 cubic inch Rocket V8 was rated at 370 hp — a deliberate understatement to keep insurance premiums manageable. Actual output was closer to 400 hp, with torque figures that made the car genuinely dangerous in the wet. The Sebring Yellow paint with black hood stripes and the W-30 badge on the front fenders was one of the most striking factory colour combinations of the muscle car era. Only 3,100 W-30 cars were built in 1970. Today, a documented W-30 in Sebring Yellow commands $80,000-$120,000 at auction — a fraction of what comparable Chevelles and Mopars bring, which makes it one of the most compelling values in the classic muscle car market. On a Sunday morning when the CUSMA deadline is 23 days away and the Gordie Howe Bridge is still closed, the 442 W-30 is a reminder that the most capable option is not always the most celebrated one — and that the best deals are often hiding in plain sight.",
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
                {["CUSMA", "BRIDGE", "JOBS", "TARIFFS"].map((tag) => (
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
              alt="Gordie Howe International Bridge spanning the Detroit River at golden hour — 114 days since Trump blocked its opening"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#e05a1a] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">CUSMA Countdown</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                23 Days to July 1 — Canada Submits Proposals, Forced Labour Tariff Drops Hours After LeBlanc-Greer Meeting
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
