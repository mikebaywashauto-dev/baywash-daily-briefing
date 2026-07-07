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

const BRIEFING_NUMBER = 61;
const BRIEFING_DATE = "July 7, 2026";
const BRIEFING_DAY = "Tuesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/JDmyBIpDjhPvmfsp.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/SOQcYdsUCehYvanI.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/LxOwMvBYjPEWalPf.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/lhjIWbKWlTDJvCXq.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/XCfsgmtyNjNyVqtz.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "UNIFOR / FORD / CRITICAL WEEK / 3 DAYS TO JULY 10",
    tagColor: "#b91c1c",
    headline: "Unifor-Ford Enters 'Critical Week' — Lana Payne: Talks 'Challenging and Frustrating' — 3 Days to July 10 Deadline — Windsor Assembly and Oakville Production Security at the Core — Framework Expected Today or Tomorrow",
    summary: "The union representing Canadian autoworkers says it is in a critical week as it seeks to hammer out a new three-year deal with Ford Motor Co. ahead of the July 10 deadline. Unifor National President Lana Payne, in a video update posted Monday, said negotiations have at times been 'challenging and frustrating,' but confirmed the union remains committed to reaching a deal. 'There's lots of work ahead in the coming days, and we will remain committed to making progress for our members,' Payne said. Unifor represents roughly 5,000 workers at Ford Canada across two key plants: Windsor Assembly (Bronco Sport, Lincoln Corsair) and Oakville Assembly (Ford Super Duty). The July 10 deadline is self-imposed by Unifor — it is not a legal strike deadline, but it is the date by which Payne has said the union needs a tentative agreement to begin ratification and then move on to pattern bargaining with General Motors and Stellantis. Ford has said 'stability and flexibility are key' as it contends with rising costs, new competitors, and shifting product demand. The company has said it hopes its long-standing relationship with the union serves as a foundation for talks. The core issues in dispute are production commitments for Windsor Assembly and Oakville, wage increases that keep pace with inflation, and job security provisions that protect Canadian workers from production shifts to U.S. plants. The 25% U.S. auto tariff has complicated the talks: Ford wants flexibility to shift production between Canadian and U.S. plants depending on tariff conditions, while Unifor wants contractual guarantees that Canadian production volumes will be maintained regardless of tariff outcomes. A framework agreement is expected to emerge today (July 7) or tomorrow (July 8). If no framework by Wednesday, strike risk rises sharply. The pattern agreement with Ford will set the template for GM and Stellantis negotiations, which follow immediately after.",
    whyItMatters: "The Unifor-Ford deadline is the most immediate supply chain risk on your calendar. Here is the practical guidance for your shop. If a tentative agreement is reached today or tomorrow (July 7–8), the Ford parts supply chain is secure through ratification and beyond. If no agreement by July 10, Unifor can call a strike with 48 hours' notice — meaning Windsor and Oakville could go dark as early as July 12. Windsor Assembly builds the Bronco Sport and Lincoln Corsair. Oakville builds the Ford Super Duty. A strike at either plant would affect parts availability for those models within 30 days. The broader supply chain risk is the Tier 1 and Tier 2 suppliers who feed both plants — a strike at Windsor or Oakville triggers layoffs at dozens of Ontario parts suppliers within 72 hours. If you service Ford vehicles heavily, maintain a 30-day buffer on high-turnover Ford parts (filters, brakes, belts, sensors) through July 12. If a deal is reached, you can draw down that buffer over the following 30 days. The cost of holding 30 days of extra Ford parts inventory is far lower than the cost of turning away Ford service customers during a parts shortage.",
    source: "Yahoo Finance / The Canadian Press — July 7, 2026",
    sourceUrl: "https://ca.finance.yahoo.com/news/talks-ford-enter-critical-week-055930131.html",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CANADA ACT / SECTION 301 / ONTARIO LCBO / U.S. ALCOHOL BAN",
    tagColor: "#1d4ed8",
    headline: "Republican Introduces 'CANADA Act' to Investigate Ontario and Quebec Booze Bans Under Section 301 — 63% Drop in U.S. Spirits Exports to Canada in 2025 — Ontario Premier Doug Ford: 'Once That Deal's Done' — But CUSMA Was Not Renewed",
    summary: "A Republican congresswoman for New York said Monday she is introducing legislation to compel the U.S. Trade Representative to conduct an investigation into Canadian provinces that are not purchasing American alcohol. Rep. Claudia Tenney (R-N.Y.) said she would introduce the Combating Attacks on our National Alcoholic Drinks by Allies Act — or CANADA Act — in the U.S. House of Representatives to prompt an investigation under Section 301 of the Trade Act of 1974. 'Canadian provinces cannot be allowed to hold American wineries, breweries and distilleries hostage and attempt to ransom them,' Tenney said. If the investigation found unfair trade practices, the United States could respond with tariffs or other import restrictions. Several Canadian provincial liquor boards stopped purchasing American alcohol last year in response to U.S. President Donald Trump's tariffs and threats of annexation. While Saskatchewan and Alberta have returned American booze to the shelves, major purchasing provinces like Ontario and Quebec have not resumed stocking U.S. alcohol. Ontario Premier Doug Ford told reporters in Washington last month he would welcome back American alcohol once CUSMA is renewed. 'I just want to get this deal done,' he said. 'I can assure you once that deal's done, I'm going to be sitting down and bringing all the booze back on shelves in Ontario.' However, the United States last week said it was not going to renew CUSMA — it triggered the annual review process instead. Ontario's condition for restoring U.S. alcohol has therefore not been met. The Distilled Spirits Council of the United States has said retaliatory bans in Canada led to a 63 per cent decline in U.S. spirits exports to that market in 2025. USTR Greer and other members of the Trump administration have repeatedly pointed to the provincial alcohol bans as unfair and as an 'active impediment' to CUSMA renegotiation. The CANADA Act has the backing of WineAmerica, the American Craft Spirits Association, and the Wine Institute.",
    whyItMatters: "The CANADA Act is a new trade irritant that directly affects the CUSMA negotiating environment — and therefore your shop's tariff outlook. Here is why it matters. The U.S. now has three active or pending Section 301 investigations that name Canada as a target: the forced-labour investigation (hearings this week), the CANADA Act alcohol investigation (just introduced), and the ongoing China EV deal grievance. Each investigation is a potential tariff action. Each tariff action is a potential cost increase for your shop. The alcohol ban story is directly connected to the CUSMA annual review timeline. Ontario Premier Doug Ford has tied the return of U.S. alcohol to CUSMA renewal — but CUSMA was not renewed. The U.S. is now using the alcohol ban as leverage in CUSMA negotiations. The practical implication: the CUSMA annual review will not produce a deal quickly. Ontario and Quebec will not restore U.S. alcohol until there is a deal. The U.S. will not offer Canada a bilateral negotiating date until the alcohol ban is lifted. This is a circular stalemate that benefits no one — including your shop, which needs tariff certainty to plan parts purchasing and pricing. The Section 301 alcohol investigation, if launched, would take 12–18 months to complete. The tariff environment will remain uncertain through at least mid-2027.",
    source: "Kelowna Daily Courier / The Canadian Press — July 6, 2026",
    sourceUrl: "https://www.kelownadailycourier.ca/news/national_news/article_f4a4d5e2-cd2c-512b-b8a8-8b77fd5f79a2.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "SECTION 301 / FORCED LABOUR / DAY 2 / 16 COUNTRIES TESTIFYING",
    tagColor: "#15803d",
    headline: "Section 301 Forced Labour Hearings Day 2 — 16 Countries Defending Records at USTR — Former USTR Official Confirms 'Both' Motivations: Forced Labour AND Tariff Rebuilding — Canada's Position: 'Significant Improvement in 2026' — Final Determination Before July 24",
    summary: "The U.S. Trade Representative's public hearings on proposed Section 301 forced-labour tariffs continued Tuesday in Washington, D.C. Officials from 16 countries are testifying over three days (July 7–9), defending their domestic records on forced labour enforcement. Foreign governments are broadly rejecting U.S. claims that they are not taking sufficient steps to root out products made with forced labour from their supply chains. Kazakhstan noted it has banned forced labour internally and is considering additional measures. Uruguay's government stressed it is advancing legislation to prohibit imports of goods made with forced labour. Cambodia noted it was required to crack down on forced labour imports as part of a trade pact signed with the U.S. last year. Chile's agricultural trade group argued the country already has a law on the books prohibiting imports made with forced labour. A former USTR official familiar with the administration's thinking confirmed to Politico's Morning Trade that the Section 301 investigations are driven by 'both' motivations: a genuine commitment to ending forced labour, and a desire to rebuild tariffs struck down by the Supreme Court in February. 'It truly is both,' said the official, granted anonymity. 'USTR Greer is committed to ending forced labour and protecting workers.' Democratic lawmakers and foreign officials have expressed concern that the investigations are 'an attempt to remanufacture the tariffs struck down in February's ruling, with little regard for the trade facts.' Canada submitted its formal written response before the July 6 deadline, arguing that its forced-labour enforcement record has improved significantly in 2026 and that the proposed tariff is disproportionate. The final determination on Section 301 rates and scope will be published before July 24 — the date Section 122 expires.",
    whyItMatters: "The Section 301 hearings are the most important tariff event of the week for your shop's cost structure. Here is the timeline and what each outcome means. If Canada is excluded from Section 301 (best case): between July 24 and the next tariff action, some non-CUSMA-compliant goods may face lower tariffs. This is unlikely given the political dynamics. If Canada is included at 10% (most likely): the tariff environment is essentially unchanged from today — Section 301 replaces Section 122 at the same rate. Parts pricing stays flat. If Canada is included at 12.5% (worst case): a 2.5-point increase on non-CUSMA-compliant goods. Parts with Chinese content (batteries, semiconductors, rare earth magnets) are the most exposed. The key action for your shop before July 24: ask your parts suppliers about CUSMA compliance status for any parts sourced from suppliers who use Chinese inputs. CUSMA-compliant parts are exempt from Section 301. Non-compliant parts face the full tariff. You need to know your exposure before the deadline. The 'both motivations' confirmation from the former USTR official is significant — it means Section 301 is not going away even if the forced-labour enforcement record improves. The tariff wall is being rebuilt on a more durable legal foundation than Section 122. Plan accordingly.",
    source: "Politico Morning Trade / USTR — July 6–7, 2026",
    sourceUrl: "https://www.politico.com/newsletters/weekly-trade/2026/07/06/nations-push-back-on-forced-labor-findings-00987477",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🏦",
    text: "Bank of Canada rate decision: July 15 — 8 days away. Markets pricing BoC at 2.25% through July 2026 — no change expected. Prime rate steady at 4.45%. Fixed mortgage rates may rise slightly if bond yields increase. The BoC is watching the tariff impact on GDP closely — a surprise cut is possible if the tariff drag is larger than expected. For your shop: auto loan rates are tied to prime. A rate hold means customer financing costs stay flat.",
    sourceUrl: "https://www.nesto.ca/mortgage-basics/mortgage-rates-forecast-canada/",
  },
  {
    icon: "🗣️",
    text: "Ontario's Washington representative David Paterson: Canadian officials are experiencing 'chaotic ad hockery' from the U.S. on CUSMA annual review structure. CTV News (July 7): 'The uncertainty over annual CUSMA review negotiations is the biggest challenge.' No bilateral negotiating dates set for Canada. Mexico has July 20. Canada has nothing. The asymmetry is intentional — and it will persist until Canada addresses the three U.S. grievances: China EV deal, forced-labour enforcement, dairy.",
    sourceUrl: "https://www.youtube.com/watch?v=7NMRleUn4lQ",
  },
  {
    icon: "📅",
    text: "Section 122 expiry countdown: 17 days (July 24). Section 301 final determination expected by July 21–23. CUSMA-compliant goods are exempt. Non-compliant goods face 10–12.5%. Ask your parts supplier about compliance status this week — not next week. The window to adjust your parts sourcing before the deadline is closing.",
    sourceUrl: "https://www.peacocktariffconsulting.com/eu-cuts-to-zero/",
  },
  {
    icon: "🍺",
    text: "Ontario LCBO still not stocking U.S. alcohol. Ontario Premier Doug Ford's condition: CUSMA renewal. But CUSMA was not renewed — annual review triggered instead. The CANADA Act Section 301 investigation, if launched, takes 12–18 months. The stalemate benefits no one. For your shop: this is a proxy indicator of the CUSMA negotiating environment. When U.S. alcohol returns to Ontario shelves, it signals a deal is close. Watch the LCBO shelves as a leading indicator.",
    sourceUrl: "https://www.kelownadailycourier.ca/news/national_news/article_f4a4d5e2-cd2c-512b-b8a8-8b77fd5f79a2.html",
  },
];

const tipOfTheDay = {
  title: "Build Your 30-Day Ford Parts Buffer Before July 12 — Not July 10",
  text: "If Unifor-Ford talks fail and a strike is called on July 10, Windsor Assembly and Oakville could go dark by July 12 with 48 hours' notice. The parts shortage won't be immediate — dealers and distributors hold 2–4 weeks of inventory. But by week 3 of a strike, high-turnover Ford parts (oil filters, brake pads, air filters, sensors) will be on allocation. Build your buffer now. The cost of holding 30 days of extra Ford parts is far lower than turning away Ford service customers during a shortage.",
};

const quoteOfTheDay = {
  text: "There's lots of work ahead in the coming days, and we will remain committed to making progress for our members.",
  author: "Lana Payne",
  title: "Unifor National President — July 7, 2026",
};

const rideOfTheDay = {
  name: "1970 Plymouth Barracuda 'Cuda — Vitamin C Orange, Black Hockey Stick Stripes, 440 Six Pack, 390 hp, Ontario-Plated",
  description: "Tuesday morning, and the 1970 Plymouth 'Cuda in Vitamin C Orange is the car that gets you through the hard part of the week. The 'Cuda was built for one purpose: to be the most aggressive thing on the road. Vitamin C Orange is a 1970-only colour — a vivid, almost fluorescent orange that looks like it was mixed by someone who had never heard the word 'subtle.' Black hockey stick stripes along the lower body, a shaker hood scoop that feeds cold air directly to the 440 cubic inch big block, and three two-barrel Holley carburetors that together are known as the Six Pack. Factory rating: 390 horsepower. Actual output: closer to 450. The 'Cuda was built at the Hamtramck, Michigan assembly plant — sold in Canada under the 1965 Auto Pact. Ontario-plated, documented, numbers-matching 440 Six Pack 'Cuda: $150,000–$250,000 at auction. The 'Cuda is the Tuesday car — aggressive, purposeful, doesn't waste time. Three days to the Unifor-Ford deadline. The Section 301 hearings are running. The CANADA Act is on the floor. The 'Cuda doesn't care about any of it. It just wants to run.",
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
                {["UNIFOR-FORD 3 DAYS", "CANADA ACT", "SECTION 301 DAY 2", "'70 'CUDA"].map((tag) => (
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
              alt="Unifor-Ford Critical Week — CANADA Act Introduced — Section 301 Day 2 — Baywash Daily Briefing Edition No. 61"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 61 — Tuesday, July 7, 2026</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Unifor-Ford 'Critical Week' — CANADA Act Targets Ontario Booze Ban — Section 301 Day 2: 16 Nations Defend Records
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Plymouth 'Cuda 440 Six Pack</span>
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
