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

const BRIEFING_NUMBER = 59;
const BRIEFING_DATE = "July 5, 2026";
const BRIEFING_DAY = "Sunday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/CbsMFmbvpIPbYQBO.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/NfwidUDYJKOuXkbL.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/IUkvfUmecPOhaJgz.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/TYSPBTOOxHdpfUPO.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/LZtmrWCOtEbPyXri.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "BYD / CANADA / 20 DEALERSHIPS / NORTH AMERICA FOOTHOLD",
    tagColor: "#b91c1c",
    headline: "BYD Plans 20 Canadian Dealerships Within One Year — Nikkei Asia: Canada Is BYD's North American Beachhead — Detroit Three Issue Joint Warning on Cyber Risks — Carney Breaks With U.S. on Chinese EV Tariffs",
    summary: "BYD, the world's largest electric vehicle manufacturer by sales volume, is moving into Canada with speed and scale that has caught the Canadian automotive industry off guard. According to Nikkei Asia (July 2, 2026), BYD is reportedly planning to establish a dealer network of 20 locations across Canada within one year — a rollout pace that would rival established brands. The move follows Canada's decision in mid-June to open a narrow door for Chinese EVs: 49,000 vehicles annually at a 6.1% tariff, rising to 70,000 vehicles over five years. BYD is not alone. Chery and Geely — the latter of which owns Lotus and Volvo — are also preparing Canadian launches. Geely has already shipped the first batch of Lotus EVs to Canada. Nikkei Asia's analysis frames Canada as BYD's 'North American beachhead' — a market where the company can establish brand recognition, service infrastructure, and regulatory compliance experience before the inevitable push into the United States. The Canada-China EV arrangement is precisely what U.S. trade officials warned about: a potential backdoor for Chinese vehicles into the North American market. Prime Minister Carney has made a deliberate strategic choice to diverge from the U.S. position on Chinese EV tariffs, betting that Canadian consumers benefit from lower-cost EV options and that Canada can manage the national security concerns separately. The Detroit Three — Ford, General Motors, and Stellantis — issued a joint statement this week calling the entry of Chinese EVs into Canada a move that 'undermines' the domestic auto industry and opens Canadians to 'cyber risks' from China's data collection capabilities. The statement specifically cited BYD's connected vehicle technology and the potential for Chinese government access to Canadian driver data.",
    whyItMatters: "BYD is coming to your market. Twenty dealerships in one year means BYD vehicles will be on Ontario roads within 12 months. Here is what your shop needs to know. BYD uses its own proprietary battery technology — the Blade Battery, a lithium iron phosphate (LFP) chemistry — and its own e-Platform 3.0 architecture. It is not compatible with Toyota's THS-II, Honda's i-MMD, or any existing North American EV platform. BYD's Han sedan uses an 85.4 kWh Blade Battery. The Atto 3 uses a 60.5 kWh Blade Battery. The Seal uses a 61.4 or 82.5 kWh Blade Battery. All use BYD's own 800V fast-charging architecture. The shops that invest in BYD-specific training and tooling now — before the vehicles arrive in volume — will capture the out-of-warranty service work that BYD dealers cannot handle at scale. The Detroit Three's cyber risk warning is also a signal: connected vehicle data from Chinese EVs is a live regulatory issue. Watch for Transport Canada to issue guidance on connected vehicle data requirements in the next 6–12 months. That guidance will affect which Chinese EV models can be sold in Canada and what telematics systems must be disabled or modified.",
    source: "Nikkei Asia / Guangdong Today / Bradenton Herald — July 2–5, 2026",
    sourceUrl: "https://asia.nikkei.com/spotlight/comment/byd-spots-north-america-foothold-amid-us-canada-tariff-discord",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "GORDIE HOWE BRIDGE / CLOSED / AMBASSADOR BRIDGE / MOROUN FAMILY",
    tagColor: "#1d4ed8",
    headline: "Gordie Howe Bridge Remains Closed — U.S. Ambassador Denies Donations Delayed Opening — Moroun Family Donated US$1M to Trump Super PAC — Canada Paid Full Cost of Bridge — Windsor-Detroit Corridor Handles $350M/Day in Trade",
    summary: "The Gordie Howe International Bridge — the new cable-stayed crossing between Windsor, Ontario and Detroit, Michigan — remains closed to traffic despite Canada having paid the entire construction cost of the project. U.S. Ambassador Pete Hoekstra denied on July 4 that a US$1-million donation from billionaire Matthew Moroun — whose family owns the competing Ambassador Bridge — to Trump's MAGA Inc. super PAC was behind the delay. 'Absolutely not,' Hoekstra told Global News. The New York Times reported that Matthew Moroun met with U.S. Commerce Secretary Howard Lutnick hours before Trump posted in February that he could block the bridge's opening unless the U.S. was 'compensated.' A planned ribbon-cutting ceremony last month was cancelled at the request of the Americans. Prime Minister Carney said there were 'technical aspects' being worked through between Canada and the U.S. Hoekstra's position is that Americans are 'contributing significantly more than half of the revenue that will pay back however Canada financed this' — a reference to the fact that the bridge will be repaid through tolls, and that the Ambassador Bridge, which is 100% American-owned, generates the bulk of Windsor-Detroit crossing revenue. The Gordie Howe Bridge, when open, will be the largest international border crossing in North America. The Windsor-Detroit corridor is the most important automotive trade corridor in the world — approximately $350 million in goods cross the border daily, the majority of which are auto parts, finished vehicles, and automotive inputs. The Ambassador Bridge, built in 1929, is a single-span suspension bridge that is operating at or near capacity. The Gordie Howe Bridge is a six-lane cable-stayed crossing designed to handle modern truck traffic and provide redundancy for the corridor.",
    whyItMatters: "The Gordie Howe Bridge story matters to your shop because the Windsor-Detroit corridor is the spine of the Canadian automotive supply chain. Every auto part that crosses the border from Michigan to Ontario — and there are millions of them every day — crosses either the Ambassador Bridge or the Blue Water Bridge at Sarnia. The Gordie Howe Bridge was supposed to add capacity and redundancy to that corridor. It is still closed. The practical risk for your shop is supply chain disruption. If the Ambassador Bridge is closed for any reason — weather, accident, labour action, or political decision — the Canadian auto parts supply chain is immediately under stress. The Gordie Howe Bridge was supposed to be the insurance policy against that scenario. It is not yet available. The political dimension of the delay — the Moroun family's donations to Trump's super PAC, the Commerce Secretary meeting, the Trump post about compensation — is a reminder that the Canada-U.S. automotive relationship is now subject to political risk at a level that was unimaginable five years ago. The bridge delay is a concrete, physical manifestation of that risk. It is not abstract trade policy. It is a closed bridge.",
    source: "Global News / New York Times — July 3–4, 2026",
    sourceUrl: "https://globalnews.ca/news/11952021/pete-hoekstra-interview-canada/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "UNIFOR / FORD / DAY 14 / 5 DAYS TO JULY 10 DEADLINE",
    tagColor: "#15803d",
    headline: "Unifor-Ford Bargaining Day 14 — 5 Days to July 10 Deadline — Final Push Begins This Week — Windsor Assembly and Oakville Production Security at the Core — Watch for Framework Announcement Monday or Tuesday",
    summary: "Unifor and Ford Motor Company of Canada are in the final stretch of their 2026 collective bargaining round, with five days remaining before the July 10 strike deadline. As of Sunday, July 5, no tentative agreement has been announced. Unifor Canada confirmed on July 1 that the bargaining team was at the table on Canada Day, working to secure a deal for more than 5,000 auto members. The pattern in Detroit Three bargaining is well-established: the final framework typically emerges in the last 72–96 hours before the deadline, often after a 24-hour extension. That means the critical window is Monday, July 6 through Wednesday, July 8. The core issues in the 2026 round are production security and wages. Unifor's primary demand is a binding commitment from Ford to maintain production at Windsor Assembly (Bronco Sport, Lincoln Corsair) and Oakville Assembly (Super Duty trucks) through the life of the agreement. The wage demand is approximately 3.2% annually, in line with Canada's CPI. Ford's position is complicated by the tariff environment: the company is paying 25% on vehicles imported from the U.S. and faces uncertainty about CUSMA's future. Ford CEO Jim Farley has publicly called for a 'level playing field' with Toyota and Honda, which import vehicles from Japan and Canada respectively without the 25% surtax. The Unifor Local 707 (Oakville Assembly) has already scheduled its 72nd anniversary picnic for July 12 at Canada's Wonderland — a signal that members are planning ahead and expect a deal to be in place before the deadline.",
    whyItMatters: "The Unifor-Ford deadline is five days away. Here is your action checklist for this week. First, if you service Ford vehicles — F-150, F-250, F-350, Bronco Sport, Lincoln Corsair, Mustang — maintain a 30-day parts buffer through July 10. A strike at Windsor Assembly or Oakville would not immediately affect parts supply, but it would signal broader production disruption and could trigger parts hoarding by dealers. Second, watch for a tentative agreement announcement Monday or Tuesday (July 6–7). If a framework is announced, the strike risk drops to near zero and the parts buffer recommendation can be relaxed. Third, if no framework is announced by Wednesday, July 8, the strike risk rises sharply. At that point, consider extending the parts buffer to 45 days for high-volume Ford parts. Fourth, note that a Ford strike in Canada does not affect Ford's U.S. plants — the UAW contract is separate. The Canadian strike risk is specific to Windsor Assembly and Oakville Assembly. Parts made at those plants — Bronco Sport body panels, Super Duty frames — would be the first to be affected.",
    source: "Unifor Canada / Unifor Local 707 — July 1–5, 2026",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-ford-bargaining-update",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "⚖️",
    text: "USTR Section 301 forced-labour tariff hearings resume TOMORROW — Monday, July 7. Canada is a named target for 10–12.5% tariffs that would replace the expiring Section 122 tariff on July 24. The hearings will determine the scope and rate of the replacement tariff. If Canada is included at 12.5%, it would be on top of the existing 25% auto tariff — a combined 37.5% on non-CUSMA-compliant Canadian goods. Watch for the hearing transcript to be published by USTR by end of day Monday.",
    sourceUrl: "https://apcoworldwide.com/blog/qa-july-is-a-big-month-for-trade-whats-coming-next/",
  },
  {
    icon: "🚫",
    text: "Polestar has been denied U.S. authorization under the Connected Vehicle Rule, which restricts cars with Chinese-linked technology over national security concerns. Polestar is Swedish-branded but Geely-owned — the same Geely that is entering Canada with Lotus EVs. The U.S. Commerce Department's decision is a preview of the regulatory scrutiny that Chinese-linked EVs will face in North America. Transport Canada has not yet issued equivalent guidance, but it is watching the U.S. decision closely.",
    sourceUrl: "https://www.instagram.com/reel/DaV8YqKAWKA/",
  },
  {
    icon: "🛢️",
    text: "Alberta pipeline to the West Coast: PM Carney's government is proposing a new pipeline to reduce Canada's dependence on the U.S. market for energy exports. Internal PMO polls show a majority of Canadians support the project. The pipeline is not directly automotive, but it is a signal of Canada's strategic direction: diversify away from the U.S. market. For shop owners, the pipeline debate is a proxy for the broader question of how Canada responds to CUSMA uncertainty.",
    sourceUrl: "https://globalnews.ca/news/11952104/alberta-new-pipeline-hurdles-remain/",
  },
  {
    icon: "📊",
    text: "Chinese automakers overtook Japanese brands in Europe for the first time in May 2026, driven by BYD, PHEVs, and cost advantages despite EV tariffs — according to OICA data published July 3. This is the trajectory for Canada: Chinese brands are gaining market share in every market where they are allowed to compete. The 49,000-vehicle annual quota in Canada is a controlled entry, but the direction is clear. The question is not whether Chinese EVs will be on Canadian roads — they will. The question is when and in what volume.",
    sourceUrl: "https://oica.net/07-03-2026-oicas-5-major-news-items-summarized/",
  },
];

const tipOfTheDay = {
  title: "BYD Is Coming — Start Your Training Now, Not When the First BYD Arrives at Your Bay",
  text: "BYD's Blade Battery (LFP chemistry) is fundamentally different from NMC batteries used by most North American EVs. High-voltage safety protocols, battery management system diagnostics, and thermal management procedures are all BYD-specific. The shops that complete BYD EV training before the first Canadian dealerships open will be positioned to capture out-of-warranty service work from day one. Contact your provincial apprenticeship board about EV high-voltage safety certification — it is the foundation for any Chinese EV service work.",
};

const quoteOfTheDay = {
  text: "Canada is the perfect beachhead for what many industry experts view as the inevitable invasion of Chinese cars into the United States.",
  author: "Nikkei Asia",
  title: "On BYD's Canada strategy — July 2, 2026",
};

const rideOfTheDay = {
  name: "1966 Chevrolet Corvette Stingray — Nassau Blue, White Stinger Stripe, 427 Big Block, 425 hp, Ontario-Plated",
  description: "Sunday morning at a Canadian car show, and the 1966 Corvette Stingray in Nassau Blue is the car that stops traffic. The C2 Stingray is the most beautiful production car ever built in North America — a Bill Mitchell design that has aged better than anything that came before or after it. Nassau Blue with a white stinger stripe down the hood is the specification that wins best in show. The 427 cubic inch big block V8 with 425 horsepower and side exhaust pipes is the engine that defines the era. Chrome knock-off wheels, a removable hardtop, and an Ontario licence plate. The '66 Corvette was built at the St. Louis assembly plant — not in Canada — but it found its way into Canadian driveways and has never left. Today, a documented Nassau Blue 427 Stingray with Ontario history trades at $80,000–$120,000 at auction. On a Sunday morning in July, with the dew still on the grass and the show field filling up, the '66 Stingray is the reason people get up early. It is the car that reminds you why you got into this business.",
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
                {["BYD 20 DEALERSHIPS", "GORDIE HOWE CLOSED", "UNIFOR-FORD 5 DAYS", "'66 CORVETTE"].map((tag) => (
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
              alt="BYD Canada 20 Dealerships — Gordie Howe Bridge Closed — Unifor Ford 5 Days — Baywash Daily Briefing Edition No. 59"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 59 — Sunday, July 5, 2026</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                BYD Plans 20 Canadian Dealerships — Gordie Howe Bridge Still Closed — Unifor-Ford: 5 Days
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '66 Corvette Stingray</span>
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
