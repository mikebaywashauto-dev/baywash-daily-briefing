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

const BRIEFING_NUMBER = 44;
const BRIEFING_DATE = "June 20, 2026";
const BRIEFING_DAY = "Saturday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/VXCjQvcmqxgGquMC.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/GHzAGYSeefIhWjlG.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/EBfumVcKWrIavCPD.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/JrNxixwRVyuNUMjM.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/sjgxgIJTXwTSUtuH.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "CUSMA / ZOMBIE DEAL",
    tagColor: "#b91c1c",
    headline: "'Beware the Zombie CUSMA' — KPMG Trade Expert Warns of Years of Uncertainty — And the 82% Auto Content Bomb",
    summary: "Joy Nott, partner in the Trade and Customs Practice at KPMG Canada, delivered the most sobering CUSMA assessment of the week on BNN Bloomberg Friday morning. The most likely outcome of the July 1 review is not a 16-year renewal — it is a 'zombie' agreement that technically stays alive but requires annual renegotiation at the table every year. 'That's just repeated uncertainty for Canadian, U.S., and Mexican companies that are trying to plan their business,' Nott said. She pushed back against suggestions that Canada should take an aggressive approach, arguing that all three countries benefit from the agreement. 'Realistically speaking, the U.S. needs this trade agreement, as does Mexico, just as much as Canada does.' But the bigger bomb in the CUSMA negotiation is the U.S. auto content proposal. Reuters reported in late May that the Trump administration wants to raise North American vehicle content requirements from 75% to 82% — with 50% of total vehicle value required to originate in the United States. No provision for Canadian content in the U.S. proposal. This was unveiled during U.S.-Mexico talks in Mexico City. Canada was not in the room. Under the current CUSMA, 40% of 'core parts' value must be produced in high-wage jurisdictions — effectively the U.S. or Canada. The U.S. proposal would require 50% of total vehicle value from the U.S. alone. If accepted, this would be a fundamental restructuring of the North American auto supply chain. Canadian-assembled vehicles — Civic, CR-V, RAV4, Silverado — would need massive U.S. content increases to qualify for tariff-free access. Nott's read: 'Up to now we've been hearing we don't need anything from Canada, right? So now there's a path. At least it's something.' The Gordie Howe Bridge delay is also a U.S. bargaining chip. Nott: 'I think they like to ensure that they always have the upper hand every time that we sit down at the table with them.' On whether Trump can unilaterally withdraw from CUSMA: 'If the president does take unilateral action and withdraw the United States from the deal, I think it's pretty safe to say you will see litigation happening in the U.S.'",
    whyItMatters: "The 'zombie CUSMA' scenario is the most likely outcome — and it is the worst outcome for Canadian shop owners. Annual renegotiation means annual uncertainty. Every year, OEMs will face the question of whether to commit to Canadian production — and every year, the answer will be 'wait and see.' The 82% auto content proposal with 50% U.S. requirement is the most aggressive U.S. demand yet. If Canada accepts it, Canadian-assembled vehicles would need to dramatically increase U.S. parts content — which means Canadian parts suppliers lose business to U.S. suppliers. If Canada rejects it, the 25% auto tariff stays in place indefinitely. There is no good option here. The practical implication for shop owners: plan for the 25% auto tariff to remain in place through at least 2027. The zombie CUSMA scenario means the tariff environment does not resolve on July 1 — it continues in a state of managed uncertainty. Parts prices, labour costs, and vehicle values will all remain elevated. The shops that thrive in this environment will be those that have locked in parts supply agreements, diversified their supplier base, and communicated clearly with customers about why prices are higher.",
    source: "BNN Bloomberg / CP24 — June 19, 2026",
    sourceUrl: "https://www.cp24.com/news/money/2026/06/19/beware-the-zombie-cusma-trade-expert-warns-of-years-of-uncertainty/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "UNIFOR / FORD",
    tagColor: "#d97706",
    headline: "Unifor-Ford Talks Open Monday: One-Third of Members Laid Off, Target Deal by July 10 — The Full State of the Industry",
    summary: "The Detroit Free Press and AOL published the most comprehensive pre-bargaining breakdown of the Unifor-Ford talks ahead of Monday's June 22 opening in downtown Toronto. The numbers are stark: of Unifor's 18,900 Detroit Three members, one-third are currently laid off. At Ford specifically: 2,714 active members, 1,942 laid off. At GM: 2,715 active, 1,502 laid off. At Stellantis: 6,590 active, 2,290 laid off. Unifor's target: a tentative deal with Ford by July 10 — before the CUSMA July 1 meeting changes the political landscape. The union's key demands: (1) product commitments for Oakville Assembly, where Ford is restarting Super Duty production this fall and recalling 1,800-1,900 laid-off workers; (2) job security language for Windsor Assembly (Bronco Sport, Lincoln Corsair); (3) no concessions on wages or pensions; (4) fair economic progress on wages. Unifor chose Ford as primary target because it is the only Detroit Three OEM that kept its Canadian commitments — launching Super Duty at Oakville despite tariffs. GM idled CAMI in Ingersoll (BrightDrop EV van production cancelled, ~1,200 workers laid off). Stellantis idled Brampton (Jeep Compass moved to Belvidere, Illinois, ~2,000 workers laid off). Those negotiations will be far harder. Labor expert Erik Gordon (University of Michigan): 'Ford is in a tough spot. It can't guarantee security for jobs that produce cars that can't be sold in the U.S. and won't be absorbed by the Canadian market.' Harley Shaiken (UC Berkeley): 'Unifor correctly thinks locking in gains now is their best bet. The situation, however, is volatile and the hyper-volatility of the U.S. president could complicate the situation much more.' The union also faces the Chinese EV threat: Canada's 49,000-unit annual quota for Chinese EVs at 6.1% tariff will increase each year. Unifor worries that low-priced Chinese EVs will eventually dissuade OEMs from building in North America.",
    whyItMatters: "The one-third layoff rate is the most important number in this story. It means that one in three Unifor members at the Detroit Three is currently not working — and the contracts that will govern their recall (or permanent layoff) are being negotiated starting Monday. For shop owners, the Unifor-Ford talks are a leading indicator of the health of Canadian auto production for the next three years. If Ford agrees to strong product commitments for Oakville and Windsor, that is a positive signal for the Canadian auto supply chain. If Ford hedges, it signals that Canadian production is being wound down. The July 10 target deadline is significant — Unifor wants a deal before the July 1 CUSMA meeting, because a CUSMA deal (or non-deal) will change the bargaining dynamics with GM and Stellantis. A work stoppage at Windsor Assembly would affect Bronco Sport and Lincoln Corsair parts availability within days. Watch for Unifor's opening demands on Monday — they will tell you a great deal about how the union assesses the health of Canadian auto production.",
    source: "Detroit Free Press / AOL — June 20, 2026",
    sourceUrl: "https://www.aol.com/articles/unifor-ford-head-bargaining-heres-133455968.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "RBC REPORT / SCENARIOS",
    tagColor: "#1d4ed8",
    headline: "RBC 'Steering Through Uncertainty': Canada's Auto Industry Could Shutter by 2040 — Or Reach 2 Million Units — Four Scenarios",
    summary: "RBC Thought Leadership published its most comprehensive analysis of Canada's auto industry future this week: 'Steering Through Uncertainty: Four Future Paths for Canada's Auto Industry.' The report, based on interviews with automakers, parts suppliers, and industry experts over 10 months, sets out four scenarios to 2040. The industry today: 125,000 workers, 1.3 million units produced in 2024, $17B in GDP, $102B in shipments, 700 parts suppliers, five OEMs (Toyota, Honda, Stellantis, GM, Ford). Scenario 1 — 'Fast Lane': Duty-free U.S. access restored, rules of origin reformed, Chinese EVs kept out, EV investments proceed. Result: 2 million units by 2040, the Windsor-Montreal corridor becomes a 'Silicon Valley of the North.' Scenario 2 — 'Slow Lane': Partial tariff relief, some investment proceeds, gradual decline in market share. Result: 1.5 million units, manageable but diminished. Scenario 3 — 'Off-Ramp': No CUSMA renewal, tariffs persist, OEMs shift production to U.S. Result: Plants shutter by 2035, industry hollowed out. Scenario 4 — 'Dead End': CUSMA collapses, Chinese EVs flood market, North American OEMs lose market share. Result: Canadian assembly ends by 2040. RBC's assessment of the current trajectory: closest to 'Off-Ramp.' Key finding: 'Canada's auto industry is at the centre of a storm. The present deluge poses a serious — perhaps existential — threat.' The U.S. captures roughly twice the GDP per assembled vehicle than Canada — and the gap is widening. RBC's underutilized asset: 'Only Americans buy more cars, per capita, than Canadians. With 90% of the Canadian market supplied by imports, Canada can link market access to investment commitments.' Canada's competitive advantages: skilled labour, clean and affordable power, award-winning assembly facilities. The path to the Fast Lane requires: restored duty-free U.S. access, reformed rules of origin, a protective tariff wall against Chinese EVs, and resumed EV investments.",
    whyItMatters: "The RBC four-scenario framework is the most useful planning tool published this year for anyone in the Canadian auto sector. For shop owners, the scenario that matters most is the difference between 'Off-Ramp' and 'Fast Lane' — and the current trajectory is Off-Ramp. The practical implication: plan your business for a 10-15 year period of declining Canadian vehicle production, rising parts prices, and increasing demand for maintenance on aging vehicles. The vehicles already on Canadian roads will need more service as owners keep them longer. The RBC finding that Canada can 'link market access to investment commitments' is the most important strategic insight in the report — and it is exactly what Carney was doing at the G7 when he told Trump about the Chinese EV cap. Canada's 40 million consumers are a bargaining chip. The question is whether the Carney government has the political will to use it. The Unifor-Ford talks starting Monday are the first test of whether that strategy translates into actual production commitments on the ground.",
    source: "RBC Thought Leadership — June 2026",
    sourceUrl: "https://www.rbc.com/en/thought-leadership/the-growth-project/steering-through-uncertainty-four-future-paths-for-canadas-auto-industry/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🇯🇵",
    text: "Industry Minister Joly wrapped her Japan visit Friday, meeting Honda and Toyota executives. No formal joint statement released yet. Honda's $15B EV value chain investment remains suspended. Toyota's Cambridge EV SUV timeline is under review. Joly's Instagram: 'Canada has the workers, the expertise, and the supply chains to participate in building the next generation of vehicles.' Watch for a joint statement early next week.",
    sourceUrl: "https://www.instagram.com/p/DZxq8Xjjsm8/",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge — still no opening date. KPMG's Joy Nott confirmed Friday that the bridge delay is a deliberate U.S. bargaining chip: 'I think they like to ensure that they always have the upper hand every time that we sit down at the table with them.' Canada paid $5.7 billion USD including the U.S. port of entry. The bridge has been finished since December 2025. Every day of delay costs the Windsor-Detroit corridor — the busiest trade corridor in North America.",
    sourceUrl: "https://www.cp24.com/news/money/2026/06/19/beware-the-zombie-cusma-trade-expert-warns-of-years-of-uncertainty/",
  },
  {
    icon: "📊",
    text: "Canada's used vehicle market posted a modest recovery in April, with sales increasing month-over-month even as overall demand remained below year-ago levels. Average repair order values at independent shops are up 15-20% year-over-year. The tariff environment is driving customers to keep vehicles longer — which is good for service revenue but increases demand for older parts. The 64,000 fewer new vehicles built in Canada through April will reduce the future pool of vehicles needing service in 3-5 years.",
    sourceUrl: "https://canadianautodealer.ca/2026/06/april-sales-slip-but-market-holds-steady/",
  },
  {
    icon: "🔧",
    text: "Honda and Sony have officially abandoned their Afeela EV joint venture — hundreds of millions of dollars sunk, trial production completed, showrooms already opened — without selling a single car. The out-the-door price above $100,000 and sedan body style in an SUV-dominant market were fatal. For Canadian shops: the EV transition is moving slower than forecast. Customers are keeping ICE vehicles longer. The demand for traditional service is stronger than the EV transition projections suggested.",
    sourceUrl: "https://www.nytimes.com/2026/06/20/business/afeela-automakers-spinoffs-brands.html",
  },
];

const tipOfTheDay = {
  title: "The Zombie CUSMA Scenario: How to Plan Your Shop for Annual Uncertainty",
  text: "If CUSMA enters annual rolling reviews after July 1, the 25% auto tariff stays in place and the uncertainty continues every year. The shops that will thrive in this environment are those that have: (1) locked in parts supply agreements with multiple suppliers; (2) diversified away from single-source OEM parts where possible; (3) communicated clearly with customers about why prices are higher and why vehicles should be maintained rather than replaced; and (4) built cash reserves to weather the next round of supply disruptions. The zombie CUSMA is not a crisis — it is a new normal. Plan for it.",
};

const quoteOfTheDay = {
  text: "We're going to go into this type of zombie agreement, where technically it's alive, but we have to meet and negotiate at the table once a year, every year. That's just repeated uncertainty.",
  author: "Joy Nott, Partner, KPMG Canada Trade and Customs",
  title: "BNN Bloomberg — June 19, 2026",
};

const rideOfTheDay = {
  name: "1971 Plymouth 'Cuda 440 Six Pack Convertible — Vitamin C Orange, Ontario-Plated",
  description: "The 1971 Plymouth 'Cuda convertible with the 440 Six Pack is one of the rarest and most valuable muscle cars ever built. Only 374 'Cuda convertibles were produced in 1971 — and of those, only a handful were ordered with the 440 Six Pack option. The 440 Six Pack used three two-barrel Holley carburetors mounted on an Edelbrock aluminum intake manifold, producing 385 horsepower and 490 lb-ft of torque. In Vitamin C orange — one of the legendary Chrysler High Impact colours — with the 440 Six Pack hood scoop, black interior, and Ontario plate, this is one of the great Canadian muscle car survivors. The 1971 'Cuda was the last year of the E-body Barracuda in its most powerful form. By 1972, insurance costs and emissions regulations had neutered the big-block options. A 1971 'Cuda 440 Six Pack convertible in original condition is worth $500,000 to $1 million today. On a Saturday when the CUSMA zombie walks and one-third of Unifor's members are laid off, the 1971 'Cuda convertible is the right car for the moment: built in the last year before the regulations changed everything, powered by three carburetors because one was never enough, and worth more today than anyone imagined when it rolled off the line in Highland Park, Michigan. The Ontario plate is a reminder that Canadian roads kept these cars alive.",
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
                {["ZOMBIE CUSMA", "82% CONTENT", "UNIFOR MONDAY", "'CUDA 440"].map((tag) => (
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
              alt="Zombie CUSMA vs Canadian Auto Assembly — Baywash Daily Briefing Edition No. 44"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Weekend Edition</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                "Beware the Zombie CUSMA" — 82% U.S. Content Bomb — Unifor-Ford Talks Open Monday
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
