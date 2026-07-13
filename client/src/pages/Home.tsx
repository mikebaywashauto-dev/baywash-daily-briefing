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

const BRIEFING_NUMBER = 67;
const BRIEFING_DATE = "July 13, 2026";
const BRIEFING_DAY = "Monday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/UbfwyYlqDXTyPYwF.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/lMWpfXqzzONAdYHW.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/nYIPBecCvGDIcTah.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/eFrXGLzMEbRiLbjZ.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/DobNrfTWKLTWrPbG.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "UNIFOR / FORD / 15% WAGES / RATIFICATION JULY 17–19",
    tagColor: "#15803d",
    headline: "Unifor-Ford Deal Details Emerging — 15% General Wage Increase Over Three Years — 5,150 Workers Covered — Ratification Vote July 17–19 — GM and Stellantis Bargaining Begins This Week",
    summary: "Details of the Unifor-Ford tentative agreement — reached Saturday evening, July 11, 2026 — are emerging as the union prepares for ratification meetings scheduled for July 17–19. The three-year deal covering 2026 to 2029 includes a general wage increase of 15 per cent over three years, according to a preliminary member survey result posted to Unifor's social media channels, in which 54 per cent of members who voted endorsed the proposed collective agreement. That figure reflects an informal online vote and not the formal ratification, which takes place at in-person meetings July 17–19. The agreement covers approximately 5,150 union members at six facilities: Oakville Assembly Complex (Super Duty pickup trucks), Windsor Annex and Essex Engine Plants (Bronco Sport, Lincoln Corsair), and parts distribution centres in Paris and Casselman, Ontario and Leduc, Alberta. Unifor National President Lana Payne said the agreement was reached after an overnight bargaining session and was unanimously endorsed by the Unifor Ford Master Bargaining Committee. Ford Canada Vice President of Human Resources Meredith Keenan confirmed the three-year agreement but declined to provide further details out of respect for the ratification process. Unifor had sought a contract that offers job security with future product commitments, enhanced pensions and retirement benefits, wage increases, and strengthened income protections. Ford changed its plans for the Oakville Assembly Complex away from a three-row electric SUV — due to declining EV demand — and is now moving forward with launching Super Duty production there this year. Negotiations with Stellantis and General Motors are expected to begin after the Ford agreement is ratified. The existing collective agreements between Unifor and all three Detroit Three automakers expire September 20, 2026. Unifor chose Ford first because the automaker has been most committed to continuing its operations in Canada.",
    whyItMatters: "The 15% general wage increase over three years is the pattern. Every dollar of wage increase at Ford becomes the floor for GM and Stellantis negotiations — which begin this week after Ford ratification. For your shop, the wage increase has two direct effects. First, your technicians will expect comparable wage growth. If you are not already planning a wage review for your shop, do it now — before your best technicians start comparing their pay to the Unifor-Ford pattern. Second, the wage increase means Ford workers have more money to spend on vehicle maintenance. Windsor Assembly and Oakville Assembly workers are your customers. A 15% wage increase over three years is real purchasing power. The ratification vote is July 17–19. A yes vote makes the deal official. A no vote is rare but possible — if members reject the deal, Unifor returns to the table and a strike becomes more likely. Watch Unifor's social media channels on July 17–19 for ratification results. The three-year term (2026–2029) gives Ford Canada labour cost certainty through the entire CUSMA annual review cycle — that certainty is what Ford needed to commit to Super Duty production at Oakville.",
    source: "Unifor Canada / Detroit Free Press / Automotive News Canada — July 11–12, 2026",
    sourceUrl: "https://www.autonews.com/manufacturing/automakers/anc-unifor-ford-tentative-agreement-0711/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "GORDIE HOWE BRIDGE / JULY 27 / CANADA GIVES U.S. HALF TOLL PROFITS",
    tagColor: "#1d4ed8",
    headline: "Gordie Howe International Bridge Opens July 27 — Canada Gives U.S. Half of Net Toll Profits to Get Trump's Go-Ahead — 14 Days — Windsor-Detroit Corridor $350M/Day — Ambassador Bridge Now Has a Backup",
    summary: "The Gordie Howe International Bridge connecting Windsor, Ontario to Detroit, Michigan will open on July 27, 2026 — 14 days from today — after Canada agreed to give the United States a share of net toll profits in exchange for the Trump administration's approval, according to Bloomberg reporting confirmed by Canadian government officials. The deal ends a tense standoff that had kept the completed C$6.4 billion bridge closed since its construction was finished in April. Under the agreement, Canada will share the equivalent of half of operating profits — after operational expenses — and direct proceeds to a U.S.-run regional development fund. The 15-year economic development fund will be controlled by the United States. The U.S. must also approve toll rate changes greater than 10 per cent. The underlying Canada-Michigan deal — which gives Michigan and Canada equal ownership of the structure and splits toll revenue evenly after construction costs are recouped — is not being changed. Canada is effectively agreeing to a side deal with the Americans to reallocate some of the initial toll revenue before the construction costs are fully recovered. Trump confirmed the opening on Truth Social: 'much better deal for America.' Michigan Governor Gretchen Whitmer said: 'The Gordie Howe International Bridge has always been a great deal for our state.' The delay was caused by U.S. Commerce Secretary Howard Lutnick, who pressed for a larger share of toll revenue after the Moroun family — owners of the existing Ambassador Bridge — made a major donation to a Trump-aligned political group. The 853-metre cable-stayed span is the longest in North America. The Windsor-Detroit corridor handles approximately $350 million per day in trade. Lutnick considers the bridge a separate matter from ongoing CUSMA trade discussions.",
    whyItMatters: "The Gordie Howe Bridge opening on July 27 is the most significant supply chain infrastructure development for Ontario shops in a decade. Here is why it matters to your business. The Ambassador Bridge currently handles approximately 25 per cent of all Canada-U.S. trade by value. It is a single point of failure for the Windsor-Detroit corridor. When the Ambassador Bridge has a major incident — a structural issue, a security closure, a severe weather event — parts shipments from Michigan and Ohio suppliers are delayed by 6 to 24 hours. The Gordie Howe Bridge eliminates that single point of failure. With two crossings, a closure on one bridge no longer means a shutdown of the corridor. For shops that depend on same-day or next-day parts delivery from Michigan and Ohio suppliers, this is a direct reduction in supply chain risk. The bridge also has dedicated truck lanes and a new customs facility — meaning commercial traffic will move faster than it does on the Ambassador Bridge, which was built in 1929 and was never designed for modern commercial truck volumes. Mark June 30, 2027 on your calendar as well — that is when the steel and aluminum remission order expires. If it is not renewed, parts prices will rise. The bridge opening is good news. The remission order expiry is a risk.",
    source: "Bloomberg / Supply Chain Brain / Canada.ca — July 13, 2026",
    sourceUrl: "https://www.supplychainbrain.com/articles/44430-canada-gives-share-of-bridge-profits-to-us-to-get-trump-go-ahead",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "CARNEY / CALGARY STAMPEDE / BC PIPELINE DEAL / ENERGY DIVERSIFICATION",
    tagColor: "#b91c1c",
    headline: "Carney at Calgary Stampede: East-West Pipeline 'Looking Good' — BC Agreement Secured — No Shovel in Ground Yet — Alberta Reaction: 'Show Us the Shovel' — Energy Diversification as CUSMA Insurance",
    summary: "Prime Minister Mark Carney attended the Calgary Stampede on Saturday evening, July 12, and told reporters that a new east-west oil pipeline connecting Alberta's oil sands to the British Columbia coast for export to Asian markets is 'looking good,' after his government secured an agreement with British Columbia to proceed with the project. Carney said polling across the country shows majority support for the pipeline and that his government is 'moving at speeds never seen before.' The pipeline would reduce Canada's economic dependence on the United States by creating a Pacific export route for Alberta oil, reducing the share of Canadian crude that must be sold to American refineries at a discount. The BC agreement is the key new development — previous pipeline proposals, including Energy East and Northern Gateway, failed in part because of provincial opposition. Alberta reaction was mixed. Many Albertans and oil patch workers expressed skepticism, noting that no construction timeline has been announced, no environmental assessment has been completed, and no shovel has been put in the ground. Alberta Premier Danielle Smith was present at the Stampede but made no public statement endorsing the pipeline announcement. Critics noted that the Liberal government cancelled Energy East and Northern Gateway during the Trudeau years and questioned whether Carney's commitment to resource development is genuine. Carney acknowledged that the pipeline will require regulatory approvals and that the government is working to streamline the process. The ITIF published a major report on July 13 titled 'Why the USMCA Matters for North America's Economic Future,' finding that without CUSMA renewal, Canada loses its competitive advantage in the automotive sector and that auto components cross borders up to eight times before final assembly — making tariff uncertainty uniquely damaging to the Canadian auto industry.",
    whyItMatters: "The pipeline story matters to your shop in two ways that are not immediately obvious. First, Alberta oil patch spending is a leading indicator for Alberta shop revenue. When oil prices are high and pipelines are flowing, Alberta workers have money to spend on vehicle maintenance. When oil prices fall or pipeline capacity is constrained, Alberta shops feel it first. A new Pacific export route for Alberta oil would reduce the discount that Canadian crude trades at relative to West Texas Intermediate — meaning more revenue per barrel for Alberta producers and more spending power for Alberta workers. If you have Alberta customers or suppliers, the pipeline is directly relevant to your business. Second, energy diversification is Canada's most powerful long-term negotiating tool against U.S. tariff pressure. If Canada can sell oil to Japan, South Korea, and China — not just to U.S. refineries — the leverage dynamic in CUSMA negotiations shifts. The U.S. currently buys Canadian oil at a discount because Canada has no other buyer. A Pacific pipeline changes that calculus. For your shop, the strategic implication is this: the more Canada diversifies its trade relationships, the less vulnerable the Canadian economy — and your customers — are to U.S. tariff decisions. The pipeline is not just an energy story. It is a trade diversification story.",
    source: "Global News / Bloomberg / ITIF — July 12–13, 2026",
    sourceUrl: "https://globalnews.ca/news/11962907/mark-carney-stampede-pipeline/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🏦",
    text: "Bank of Canada rate decision: Wednesday, July 15 — 2 days away. Current rate: 2.25%. Prime rate: 4.45%. Expert consensus: HOLD for the 6th consecutive time. RBC expects hold through end of 2026. Auto loan rates stay flat. A hold is the best scenario for customer financing affordability.",
    sourceUrl: "https://finance.yahoo.com/news/canadas-june-job-numbers-not-161909718.html",
  },
  {
    icon: "🗳️",
    text: "Ford ratification vote: July 17–19. Watch Unifor social media channels for results. A yes vote makes the deal official. A no vote returns the parties to the table — strike risk increases. 54% of members who voted in the preliminary survey endorsed the deal. Formal ratification requires a majority of members voting at in-person meetings.",
    sourceUrl: "https://www.autonews.com/manufacturing/automakers/anc-unifor-ford-tentative-agreement-0711/",
  },
  {
    icon: "⚖️",
    text: "Section 301 forced labour tariff final determination: expected July 21–23. Section 122 expiry: July 24 — 11 days. CUSMA-compliant goods exemption demanded by 1,500+ submissions — decision pending. Ask your top 3 parts suppliers about CUSMA compliance status this week. Non-compliant parts with Chinese content (batteries, semiconductors, sensors) are most exposed.",
    sourceUrl: "https://refdesk.ca/blog/canada-forced-labour-tariff-section-301-hearing-july-2026-exporters-businesses-guide",
  },
  {
    icon: "🏭",
    text: "VW Group slashing model lineups and capacity amid China pressure, tariffs, and falling profits. German automakers hit by sharp China sales drop in Q2 2026. European auto industry under severe pressure — the same forces (Chinese competition, tariff uncertainty, EV transition costs) are now hitting North American OEMs. The global auto industry is restructuring in real time.",
    sourceUrl: "https://www.reuters.com/business/autos/volkswagen-revamp-plan-blocked-labour-opposition-sources-say-2026-07-10/",
  },
];

const tipOfTheDay = {
  title: "Gordie Howe Bridge Opens July 27 — Review Your Parts Supplier Routing",
  text: "The Gordie Howe Bridge opens in 14 days. Call your top Michigan and Ohio parts suppliers this week and ask: will they route commercial shipments through the Gordie Howe Bridge once it opens? The new bridge has dedicated truck lanes and a modern customs facility — transit times should be faster than the Ambassador Bridge for commercial traffic. If your supplier confirms they will use the new crossing, you may be able to reduce your safety stock on Michigan-sourced parts. If they are unsure, maintain your current buffer until you have confirmation. The bridge opening is the biggest supply chain infrastructure improvement for Ontario shops in a generation.",
};

const quoteOfTheDay = {
  text: "Canada gave up half of the toll profits from a bridge it paid for entirely — just to get permission to open it.",
  author: "Supply Chain Brain",
  title: "Bloomberg Report on the Gordie Howe Bridge Deal — July 13, 2026",
};

const rideOfTheDay = {
  name: "1970 Chevrolet Chevelle SS 454 LS6 — Cranberry Red, 454 Cubic Inch Big Block V8, 450 hp, Ontario-Plated",
  description: "The most powerful muscle car ever built by General Motors from the factory. The 1970 Chevelle SS 454 LS6 produced 450 horsepower from the factory — a figure that GM engineers later admitted was understated to avoid insurance surcharges. Actual output was closer to 500 horsepower. The 454 cubic inch big block V8 with solid lifters, an 11.25:1 compression ratio, and a 780-cfm Holley four-barrel carburetor made the LS6 the benchmark of the muscle car era. Cranberry Red paint. Black SS stripes. Rallye wheels. Ontario-plated, because the workers at Oshawa Assembly — who built the Silverado that is the backbone of GM Canada's H1 2026 sales lead — deserve a car that matches their work ethic. The Chevelle SS 454 LS6 is what Monday morning looks like when you mean business. Value: $80,000 to $200,000 at auction depending on documentation and numbers-matching status. A documented LS6 with original drivetrain has sold for over $300,000.",
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
                {["FORD DEAL: 15% WAGES", "BRIDGE OPENS JULY 27", "CARNEY: BC PIPELINE DEAL", "'70 CHEVELLE SS 454 LS6"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Monday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Unifor-Ford 15% Wages — Gordie Howe Bridge Opens July 27 — Carney BC Pipeline Deal — Baywash Daily Briefing Edition No. 67"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#15803d] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 67 — Monday, July 13, 2026 — Deal Details, Bridge Opens, Pipeline</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Ford Deal: 15% Over Three Years — Gordie Howe Bridge Opens July 27 — Carney Secures BC Pipeline Agreement
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Chevelle SS 454 LS6</span>
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
