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

const BRIEFING_NUMBER = 66;
const BRIEFING_DATE = "July 12, 2026";
const BRIEFING_DAY = "Sunday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/vKFpDupdruMZaHUv.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/feIrOeAsISzLGmsv.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/DXiSNhryTvgKMPDs.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/jqkOhkIChxdYwnmZ.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ZHRCHjqkTTXAWerf.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "UNIFOR / FORD / TENTATIVE AGREEMENT / JULY 11 / DEAL DONE",
    tagColor: "#15803d",
    headline: "DEAL DONE: Unifor and Ford Reach Tentative Agreement Saturday Night — Three-Year Contract 2026–2029 — 5,150 Workers Covered — Windsor Assembly and Oakville Assembly Secure — Ratification Meetings July 15–17",
    summary: "Unifor and Ford Motor Company of Canada reached a tentative agreement on Saturday evening, July 11, 2026, ending 20 days of negotiations that extended past the union's self-imposed July 10 deadline. The three-year deal — covering the period 2026 to 2029 — was unanimously endorsed by the Unifor Ford Master Bargaining Committee. The agreement covers approximately 5,150 union members at five facilities: the Oakville Assembly Complex (Super Duty pickup trucks), Windsor Annex and Essex Engine Plants, and parts distribution centres in Paris and Casselman, Ontario and Leduc, Alberta. Details of the agreement are being kept under wraps until they can be presented to union members at ratification meetings scheduled for Wednesday through Friday, July 15–17. Unifor National President Lana Payne said: 'Securing this tentative agreement comes at a vital time for Canada's auto workers and our domestic industry. Every member of our bargaining committee came to the table resolved to reach a fair deal that protects good union jobs in the most challenging of economic times.' Unifor Ford master bargaining chair John D'Agnolo said: 'Our members put in the work on the shop floor every day, and our entire negotiating team made sure that work was recognized at the bargaining table.' Ford Canada Vice President of Human Resources Meredith Keenan confirmed the three-year agreement but declined to provide further details out of respect for the ratification process. Unifor had sought a contract that offers job security with future product commitments, enhanced pensions and retirement benefits, wage increases, and strengthened income protections. Ford changed its plans for the Oakville Assembly Complex away from a three-row electric SUV — due to declining EV demand — and is now moving forward with launching Super Duty production there this year. Negotiations with Stellantis and General Motors are expected to begin after the Ford agreement is ratified. The UAW's contracts with the Detroit Three expire in May 2028.",
    whyItMatters: "The Unifor-Ford tentative agreement is the best possible outcome for your shop's Ford parts supply chain. The deal means Windsor Assembly (Bronco Sport, Lincoln Corsair) and Oakville Assembly (Super Duty) will continue production without interruption. There will be no Ford parts shortage. If you built a 30-day Ford parts buffer over the past week, you can begin drawing it down over the next 30 days — return any excess to your supplier within your return window. The ratification vote is July 15–17. A 'yes' vote makes the deal official. A 'no' vote is rare but possible — if members reject the deal, Unifor returns to the table and a strike becomes more likely. Watch Unifor's social media channels on July 15–17 for ratification results. The three-year term (2026–2029) gives Ford Canada labour cost certainty through the entire CUSMA annual review cycle. That certainty is what Ford needed to commit to Super Duty production at Oakville. The pattern agreement with Ford will now set the template for Unifor's negotiations with GM and Stellantis — which begin immediately after ratification.",
    source: "Detroit News / CityNews / The Canadian Press — July 11–12, 2026",
    sourceUrl: "https://www.detroitnews.com/story/business/autos/ford/2026/07/11/ford-unifor-tentative-agreement-canada-autoworkers/90890536007/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "BANK OF CANADA / JULY 15 / HOLD EXPECTED / JUNE JOBS REPORT",
    tagColor: "#1d4ed8",
    headline: "Bank of Canada Rate Decision Wednesday July 15 — 6th Consecutive Hold at 2.25% Expected — Canada Added 18,200 Jobs in June — Manufacturing Lost 17,000 — RBC: Hold Through End of 2026",
    summary: "Canada's economy added 18,200 jobs in June 2026, beating the consensus forecast of 10,000, while the unemployment rate edged down to 6.5% from 6.6% in May, according to Statistics Canada data released Friday. However, economists say the results are not strong enough to move the Bank of Canada away from its current holding position. The Bank of Canada has held its overnight lending rate at 2.25% for five consecutive decisions. The sixth hold is widely expected at the July 15 announcement. The headline job number masks significant weakness in the manufacturing sector, which lost 17,000 jobs in June. Manufacturing employment has now fallen by 61,000 positions since January 2025 — a 3.2% decline — as tariff uncertainty continues to suppress investment and production decisions. Most of the June gains were in accommodation and food services, which added 15,000 jobs — a sector that received a temporary boost from the FIFA World Cup being hosted in Canada and the United States. BMO Chief Economist Douglas Porter graded the June report at 57.6 out of 100: 'a pass, but not robust.' RBC Economist Nathan Janzen noted that 'the labour market is still not strong — the unemployment rate is still higher than normal.' TD Economics stated that manufacturing 'remains a poster child of the uncertainty hanging over the Canadian economy' and confirmed its expectation that the Bank of Canada will hold at 2.25% on July 15. RBC expects the Bank of Canada to hold through the end of 2026, then raise rates to 3.25% by the end of 2027 as the economy recovers. Average hourly wages rose 3.3% year-over-year in June, up from 3.0% in May — a positive signal for consumer purchasing power but not enough to prompt a rate move.",
    whyItMatters: "The Bank of Canada rate decision on Wednesday, July 15 matters directly to your shop in three ways. First, auto loan rates are tied to the prime rate, which is currently 4.45% (Bank of Canada rate plus 2.2%). A hold at 2.25% means customer financing costs stay flat through August. A rate cut would be a tailwind for vehicle purchases and shop financing; a rate hike would be a headwind. The consensus is a hold — plan accordingly. Second, the manufacturing job losses are a leading indicator for your service ticket averages. Windsor, Oshawa, Brampton, Cambridge — these are your customers. When manufacturing employment falls, discretionary spending on vehicle maintenance falls with it. The 61,000 manufacturing jobs lost since January 2025 represent real customers who are watching their spending. Third, the World Cup boost to hospitality jobs is temporary. When the World Cup ends, those jobs go away. The underlying labour market is fragile. Build your service revenue on the assumption that your customers are under financial pressure — offer payment plans, loyalty discounts, and transparent pricing.",
    source: "Yahoo Finance / Financial Post / TD Economics / BNN Bloomberg — July 10, 2026",
    sourceUrl: "https://finance.yahoo.com/news/canadas-june-job-numbers-not-161909718.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "UNIFOR / GM / STELLANTIS / IDLE PLANTS / NEXT BARGAINING",
    tagColor: "#b91c1c",
    headline: "Next Up: Unifor vs. GM and Stellantis — Two Idle Canadian Plants — No Product Commitment — Bargaining Begins After Ford Ratification July 15–17 — Windsor Stellantis and Brampton Assembly in the Balance",
    summary: "With the Unifor-Ford tentative agreement in hand, the union's attention turns immediately to General Motors and Stellantis — the two remaining Detroit Three automakers with Canadian operations. Unifor will begin bargaining with both companies after the Ford agreement is ratified, expected July 15–17. The Ford pattern agreement will serve as the template for both negotiations. The stakes are significantly higher for GM and Stellantis than they were for Ford. GM Canada's situation is mixed: Oshawa Assembly (Chevrolet Silverado) is running, and CAMI Assembly in Ingersoll (Chevrolet Equinox EV) is running. However, GM has been vague about future product commitments for both plants beyond their current model cycles. Stellantis Canada's situation is more acute. The Windsor Assembly plant — which builds the Chrysler Pacifica and Dodge Grand Caravan — has been operating on reduced shifts and faces an uncertain future as Stellantis restructures its minivan lineup globally. Brampton Assembly, which built the Chrysler 300 and Dodge Charger, ended production in 2024 and has been idle since. Stellantis has made no product commitment for Brampton. Unifor's core demand in both negotiations will mirror the Ford pattern: job security with future product commitments, wage increases that keep pace with inflation, enhanced pensions, and income protections. The difference is that Ford had product to offer — Super Duty at Oakville, Bronco Sport at Windsor. GM and Stellantis do not have the same clarity. Lana Payne has said she wants to see U.S. auto tariffs removed and has urged Canadian federal policy to prioritize domestic automotive manufacturing investments. The CUSMA annual review process adds a layer of complexity: both GM and Stellantis are using tariff uncertainty as a reason to delay product commitments.",
    whyItMatters: "The Unifor-GM and Unifor-Stellantis negotiations are the next supply chain risk for your shop. Here is the exposure map. For GM: Oshawa Assembly (Silverado) and CAMI (Equinox EV) are currently running. A GM strike would affect Silverado parts (very high volume for Ontario shops), Equinox EV parts, and GM truck accessories. For Stellantis: Windsor Assembly (Pacifica, Grand Caravan) is the primary risk. A Stellantis strike would affect Pacifica and Grand Caravan parts — both popular family vehicles with high service frequency. Brampton is already idle — no additional supply chain risk from Brampton. The timeline: Ford ratification July 15–17, then Unifor announces its GM or Stellantis bargaining target (likely GM first, as it has more product to offer). Expect GM bargaining to begin by July 21. Expect a GM deadline in mid-August. Begin building a 30-day GM parts buffer in the first week of August — before the deadline pressure begins. The Ford pattern will be the floor for GM and Stellantis. If the Ford deal included production volume guarantees, GM and Stellantis will face the same demand.",
    source: "Detroit News / Unifor Canada / Automotive News Canada — July 11–12, 2026",
    sourceUrl: "https://www.detroitnews.com/story/business/autos/ford/2026/07/11/ford-unifor-tentative-agreement-canada-autoworkers/90890536007/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🌉",
    text: "Gordie Howe Bridge: 15 days to July 27 opening. Trump confirmed: 'Much better deal.' Michigan Governor Whitmer: 'great deal for our state.' Windsor-Detroit corridor: $350M/day. The Ambassador Bridge now has a backup. The longest cable-stayed span in North America — 853 metres — opens in two weeks.",
    sourceUrl: "https://www.canada.ca/en/housing-infrastructure-communities/news/2026/07/the-gordie-howe-international-bridge-will-open-on-july-27th-strengthening-trade-connectivity-and-economic-development.html",
  },
  {
    icon: "📅",
    text: "Section 122 expiry countdown: 12 days (July 24). Section 301 final determination expected July 21–23. CUSMA-compliant goods exemption: demanded by 1,500+ submissions — decision pending. Ask your parts supplier about CUSMA compliance status this week. Non-compliant parts with Chinese content (batteries, semiconductors, sensors) are the most exposed.",
    sourceUrl: "https://rsmcanada.com/insights/services/business-tax-insights/canadian-businesses-review-trade-strategies-cusma-talks.html",
  },
  {
    icon: "🏦",
    text: "Bank of Canada rate decision: Wednesday, July 15 — 3 days away. Current rate: 2.25%. Prime rate: 4.45%. Expert consensus: HOLD for the 6th consecutive time. RBC expects hold through end of 2026. For your shop: auto loan rates stay flat. A hold is the best scenario for customer financing affordability.",
    sourceUrl: "https://finance.yahoo.com/news/canadas-june-job-numbers-not-161909718.html",
  },
  {
    icon: "🗳️",
    text: "U.S. Senate Commerce Committee vote on Connected Vehicle Security Act: Wednesday, July 15. Bipartisan bill would permanently ban Chinese connected vehicles from U.S. market. BYD planning 20 Canadian dealerships — they cannot sell in the U.S. but they're coming to Ontario. Train on BYD LFP battery chemistry now.",
    sourceUrl: "https://fordauthority.com/2026/07/u-s-senate-committee-poised-to-codify-ford-supported-chinese-vehicle-ban/",
  },
];

const tipOfTheDay = {
  title: "Ford Deal Done — Now Prepare for the GM Buffer Window",
  text: "The Unifor-Ford deal is done. Draw down your Ford parts buffer over the next 30 days. But the next supply chain risk is already on the horizon: Unifor will begin bargaining with GM after Ford ratification (July 15–17). Expect a GM deadline in mid-August. The window to build a 30-day GM parts buffer is the first week of August — before deadline pressure begins. Focus on high-volume GM parts: Silverado filters, brake pads, sensors, and Equinox EV components. The Ford pattern will be the floor for GM. If Ford gave production volume guarantees, GM will face the same demand.",
};

const quoteOfTheDay = {
  text: "Securing this tentative agreement comes at a vital time for Canada's auto workers and our domestic industry.",
  author: "Lana Payne",
  title: "Unifor National President — Unifor-Ford Tentative Agreement, July 11, 2026",
};

const rideOfTheDay = {
  name: "1968 Ford Mustang GT 390 Fastback — Highland Green Metallic, 390 FE V8, 325 hp, Ontario-Plated",
  description: "The deal is done. The only car for this Sunday morning is the Bullitt Mustang. The 1968 Ford Mustang GT 390 Fastback in Highland Green Metallic is the car Steve McQueen drove in the 1968 film 'Bullitt' — a 10-minute car chase through the streets of San Francisco that is still the benchmark for automotive cinema. The 390 cubic inch FE V8 produces 325 horsepower from the factory — enough to make the Highland Green paint look like it's moving even when the car is standing still. No stripes. No badges except the 390 fender emblem. Torq-Thrust wheels. Black interior. Ontario-plated, because the workers at Windsor Assembly and Oakville Assembly drive Mustangs. They built the deal. The Mustang is the reward. The original Bullitt Mustang sold at auction in January 2020 for US$3.74 million. A numbers-matching 1968 Mustang GT 390 Fastback in Highland Green: $150,000–$400,000 at auction depending on provenance. Deal done. Now let it run.",
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
                {["UNIFOR-FORD DEAL DONE", "BANK OF CANADA JULY 15", "GM & STELLANTIS NEXT", "'68 BULLITT MUSTANG"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Sunday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Unifor-Ford Deal Done — Bank of Canada July 15 — GM and Stellantis Next — Baywash Daily Briefing Edition No. 66"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#15803d] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 66 — Sunday, July 12, 2026 — Deal Done</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Unifor-Ford Tentative Agreement Reached — 5,150 Workers Secure — Bank of Canada July 15 — GM and Stellantis Next
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '68 Ford Mustang GT 390 Fastback</span>
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
