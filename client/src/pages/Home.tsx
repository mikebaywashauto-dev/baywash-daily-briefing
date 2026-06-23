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

const BRIEFING_NUMBER = 47;
const BRIEFING_DATE = "June 23, 2026";
const BRIEFING_DAY = "Tuesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/MjEEmTXURaiLmfme.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/sWNVXnvMvEiMHRdw.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/vrcxAZvHahqNeaZH.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/VSNcQjIQMVecCFBi.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/gAoOIGNxxKkFDyQI.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "JOLY / CHINESE EVs / HONDA",
    tagColor: "#b91c1c",
    headline: "Joly's China Gambit: \"Build Where You Sell\" — But Honda and Toyota Are Furious, and the U.S. May Ban Canadian-Driven Chinese EVs at the Border",
    summary: "Industry Minister Melanie Joly returned from a four-day trip to China and Japan this week with a message for Chinese automakers: if you want access to the Canadian market, build here. Joly told BYD, Chery, Geely, and Shanghai Launch Automotive Technology that getting more access to the Canadian market will require them to manufacture in Canada — under four conditions: majority Canadian-owned joint venture, Canadian labour standards, Canadian parts content, and data security compliance. She then flew to Tokyo and told Honda and Toyota that Canada is 'fully committed' to the auto sector. But Driving.ca's David Booth (Motor Mouth) is asking the obvious question: 'What the hell is Melanie Joly doing?' The contradiction is stark. Prime Minister Carney told Trump at the G7 hot mic that the Chinese EV deal is only 49,000 units and 'less than three per cent of our market' — implying it should not concern the U.S. Meanwhile, Joly was simultaneously flying to China to invite those same companies to build cars here. Honda Canada CEO Dave Jamieson specifically named 'rising competition from low-cost, state-subsidized, non-market-oriented producers' as a threat to Alliston in his APMA Summit speech. Toyota and Honda formed the Pacific Manufacturing Association of Canada (PMAC) precisely because their concerns about Chinese competition were not being heard. Now two U.S. senators from Michigan have introduced the 'Protecting America from Chinese Cars Act' — which would bar any Canadian from crossing the U.S. border in a Chinese-made EV. A companion bill, the Connected Vehicle Security Act, would ban any vehicle with Chinese-developed connectivity software from the U.S. market. Lorraine Sommerfeld (Driving.ca): 'The world is moving on without the U.S. carmakers.' The real question: is the Chinese EV deal a genuine industrial strategy, or a CUSMA bargaining chip that has already been played — and may have alienated both the U.S. and Canada's existing Japanese OEM partners in the process?",
    whyItMatters: "The Joly China gambit has direct implications for your shop. Here is the breakdown: (1) If Chinese OEMs build in Canada, they will eventually need a service network. BYD, Chery, and Geely are not going to train your technicians for free — they will build proprietary service networks, just as Tesla did. The first shops to get certified will have a competitive advantage. (2) Honda's $15B EV value chain investment remains suspended. If Honda Canada CEO Jamieson's concerns about Chinese competition are not addressed in CUSMA, the Alliston EV project may be permanently cancelled. That affects the long-term parts supply chain for Honda vehicles in Canada. (3) The U.S. 'Protecting America from Chinese Cars Act' is not law yet — but if it passes, any Canadian customer who buys a Chinese EV (BYD, Chery, Geely, or a Chinese-made Tesla Model 3) will be unable to drive it across the border. That is a significant resale value risk for those vehicles. Advise customers accordingly. (4) The Motor Mouth column is the most widely read automotive opinion column in Canada. When Booth asks 'what the hell is Melanie Joly doing?' — it shapes how the auto industry and shop owners think about government policy. The answer matters for your business planning.",
    source: "Driving.ca / CTV News / BNN Bloomberg — June 19–23, 2026",
    sourceUrl: "https://driving.ca/column/motor-mouth/melanie-joly-mark-carney-chinese-ev-cusma-trump",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "MAGNA / FRANK STRONACH",
    tagColor: "#7c3aed",
    headline: "Magna International Founder Frank Stronach Convicted of Two Sex Assault Counts — Stock Rises 1.6% — Sentencing in September",
    summary: "Ontario Superior Court Justice Anne Molloy convicted Frank Stronach on June 19 on one count of sexual assault and one count of indecent assault, stemming from incidents in the late 1970s and early 1980s. He was acquitted on several other charges and faces a separate trial next year. Sentencing is scheduled for September 2026. Stronach, now 91, founded Magna International in 1957 in a small Aurora, Ontario garage and built it into one of the world's largest automotive parts suppliers — a company that now employs over 150,000 people globally and supplies body structures, seating systems, powertrain components, mirrors, electronics, and advanced driver assistance systems to automakers including General Motors, Mercedes-Benz, and Stellantis. Control of Magna passed from Stronach in 2010 following a corporate restructuring. He stepped down as chairman in 2011 and has not held any role with the company since. Magna is now led by CEO Swamy Kotagiri and board chair Lisa A. Brown. Investors appeared entirely unconcerned by any reputational risk. As of midday June 22, Magna shares rose 1.6% to US$66.38 from the previous close of US$65.35. Stronach's lawyer Leora Shemesh stated her client was 'disappointed by the verdict' and intends to appeal. The convictions are the most significant personal legal story in Canadian automotive history — but the market's verdict is clear: Magna's institutional separation from its founder is complete.",
    whyItMatters: "The Stronach conviction matters to shop owners for two reasons. First, Magna is the largest Canadian-headquartered automotive parts supplier and one of the most important suppliers in the North American supply chain. Magna parts are in virtually every vehicle that comes through your bays — body panels, seating components, mirrors, ADAS sensors, and powertrain parts. The company's stability is directly relevant to your parts supply chain. The market's 1.6% share price increase on the day of the conviction is the clearest possible signal that Magna's institutional separation from Stronach is complete and the company's operations are unaffected. Second, the conviction is a reminder that the Canadian auto industry's founding generation is passing. Stronach built Magna from a single Aurora garage to a $20B global company. The industry he built is now fighting for its survival in the tariff era. The contrast between Magna's founding story — a $200 investment, a single stamping press, a garage in Aurora — and the current existential debate about whether Canada should 'let the auto sector fade away' is worth reflecting on.",
    source: "Collision Repair Magazine Tuesday Ticker — June 22, 2026",
    sourceUrl: "https://www.collisionrepairmag.com/news/collision-repair/market-trends/article/15828264/tuesday-ticker-june-23-2026",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "AUTONOMOUS / STELLANTIS / ELEMENT FLEET",
    tagColor: "#1d4ed8",
    headline: "Stellantis + Wayve + Uber: Level 4 Robotaxi Partnership — And Toronto's Element Fleet Will Manage Waymo's Autonomous Fleets",
    summary: "Two significant autonomous vehicle announcements in the past week have direct implications for the future of Canadian automotive service. First: Stellantis announced June 17 that it will partner with Wayve (AI driving software, London-based) and Uber (mobility network) to develop and deploy Level 4 fully autonomous robotaxis. Stellantis provides the L4-ready vehicle platforms — Chrysler, Dodge, Jeep, Ram, Fiat, Peugeot, and Alfa Romeo vehicles designed from the ground up for driverless operation. Wayve provides the artificial intelligence driving software. Uber provides access to its global mobility network. Initial deployment in San Diego before expanding to other markets. Stellantis Chief Engineering and Technology Officer Ned Curic: 'By combining our L4-ready platforms with Wayve's adaptive AI and Uber's global network, we are accelerating the deployment of autonomous vehicles that meet real customer needs.' Stellantis shares rose 1.7% to US$6.45. Second: Toronto-based Element Fleet Management Corp. announced June 15 a multi-year partnership with Waymo to provide fleet management and operational services for Waymo's autonomous vehicle fleets. Element manages more than 1.5 million vehicles globally for corporate, government, and institutional customers. The partnership begins with an initial deployment in San Diego before expanding. Element shares rose 3.7% to $27.99. The Renesas Electronics acquisition of embedded software developer Pictorus — which develops vehicle diagnostics, ADAS, and ECU software — is also relevant: as autonomous and semi-autonomous vehicles proliferate, the embedded software layer becomes the primary diagnostic interface.",
    whyItMatters: "The Stellantis-Wayve-Uber robotaxi partnership and the Element-Waymo deal are not abstract technology stories — they are the beginning of a structural shift in vehicle ownership and service that will reach Canadian shops within 5-10 years. Here is what to watch: (1) Level 4 autonomous vehicles are designed for driverless operation under defined conditions. When they fail — and they will fail — they will need service. The question is who services them. Waymo currently uses a proprietary service network. Stellantis may use its existing dealer network. The first shops to get certified for autonomous vehicle service will have a significant competitive advantage. (2) Fleet management companies like Element Fleet are the intermediaries between OEMs and fleet operators. As autonomous vehicle fleets grow, fleet management companies will control the service contracts. Building relationships with fleet operators now — before the autonomous transition — is a strategic priority. (3) The Renesas-Pictorus acquisition is a signal that the embedded software layer of vehicles is becoming a consolidation target. Diagnostic tools that depend on Pictorus software (ADAS calibration, ECU programming) may change hands and pricing. Check your diagnostic software licensing agreements. (4) Stellantis shares at US$6.45 are near a multi-year low — the company that owns Chrysler, Dodge, Jeep, and Ram is trading at a fraction of its 2021 peak. A distressed Stellantis is a risk to the Windsor Assembly supply chain.",
    source: "Collision Repair Magazine / ITS International — June 17–22, 2026",
    sourceUrl: "https://www.collisionrepairmag.com/news/collision-repair/market-trends/article/15828264/tuesday-ticker-june-23-2026",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🤝",
    text: "Unifor-Ford bargaining is now in Day 2 in downtown Toronto. The union led with job security demands on Day 1 — a signal that Unifor is genuinely worried about plant closures, not just wages. Ford has not yet responded to the production commitment demand. Watch for Ford's counter-proposal today. If Ford refuses to guarantee Canadian production volumes, it will set the tone for a difficult negotiation. Target: tentative deal by July 10.",
    sourceUrl: "https://www.thestar.com/business/ford-autoworkers-union-to-meet-today-to-kick-off-contract-talks/article_ee263814-d00b-587f-917a-81cf10a689b7.html",
  },
  {
    icon: "🌉",
    text: "The Gordie Howe Bridge still has no official opening date. The Hill Times reported June 22 that 'news reports suggest it will open shortly' — but no formal announcement from the Windsor-Detroit Bridge Authority or the Canadian or U.S. governments. The Ambassador Bridge remains the only Windsor-Detroit crossing. Every day of delay costs the corridor an estimated $400M in trade.",
    sourceUrl: "https://www.hilltimes.com/2026/06/22/american-midterms/508487/",
  },
  {
    icon: "📉",
    text: "Canadian vehicle production is down 15% year-over-year through April 2026 — 64,000 fewer vehicles — while U.S. production rose 1.2%. Canada accounted for 45% of all tariff-related market-share losses among U.S. trading partners. University of Michigan Consumer Sentiment Index hit an all-time low of 44.8 in May 2026 — which could further dampen U.S. demand for Canadian-assembled vehicles.",
    sourceUrl: "https://driving.ca/auto-news/industry/canada-us-car-production-trade-manufacturing-2026",
  },
  {
    icon: "🇨🇳",
    text: "BYD has posted 10+ management positions in Canada and is pursuing approximately 20 dealerships, starting in Ontario. Chery confirmed a late 2026 Canadian launch under the Omoda and Jaecoo brands. The Asia Pacific Foundation warned that any Chinese EV manufacturing deal in Canada must be compatible with U.S. connected-vehicle software rules — or Canadian-assembled Chinese vehicles could be barred from the U.S. market.",
    sourceUrl: "https://driving.ca/column/lorraine/chinese-made-tesla-banned-us-border",
  },
];

const tipOfTheDay = {
  title: "Chinese EVs Are Coming — Here Is How to Prepare Your Shop",
  text: "BYD, Chery, and Geely are hiring in Canada now. Here is what to do before they arrive: (1) Check whether your diagnostic equipment supports Chinese EV protocols — most current scan tools do not. Contact your tool supplier now. (2) BYD uses its own Blade Battery chemistry (lithium iron phosphate) — different from the NMC chemistry in most North American EVs. Your EV safety training may not cover it. (3) Chery's Omoda and Jaecoo brands are already selling in 80+ countries — service manuals and parts catalogues exist. Request access from your parts supplier now. (4) The first shop in your market to get certified for Chinese EV service will have a 2-3 year competitive advantage. The second shop will be playing catch-up.",
};

const quoteOfTheDay = {
  text: "What the hell is Melanie Joly doing?",
  author: "David Booth, Motor Mouth",
  title: "Driving.ca — June 19, 2026",
};

const rideOfTheDay = {
  name: "1970 Chevrolet Chevelle SS 454 LS6 — Cranberry Red, Ontario-Plated",
  description: "The 1970 Chevrolet Chevelle SS 454 LS6 is, by most measures, the most powerful production muscle car ever built in the classic era. General Motors rated the LS6 at 450 horsepower — a figure that was deliberately understated to avoid insurance surcharges. The actual output was closer to 500 horsepower, making it faster than the 426 Hemi in most real-world conditions. The LS6 option cost $263 in 1970 — a bargain that has aged extraordinarily well. Today, a documented LS6 Chevelle in Cranberry Red with an Ontario plate is worth between $150,000 and $300,000 depending on condition and documentation. The 454 cubic inch big-block V8 featured solid lifters, an 11.25:1 compression ratio, a Holley 780 CFM four-barrel carburetor, and an aluminium intake manifold. The exhaust note is not subtle. The LS6 was available in the Chevelle SS 454 for one year only — 1970 — before emissions regulations forced GM to detune the engine. Approximately 4,475 LS6 Chevelles were built. This one is wearing Cranberry Red with a black vinyl top and an Ontario plate, which means it survived the salt seasons — a remarkable achievement for a car that was built to be driven hard. The Chevelle SS 454 LS6 is the car that defined the peak of the muscle car era. Everything after 1970 was a retreat.",
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
                {["JOLY CHINA GAMBIT", "STRONACH CONVICTED", "ROBOTAXI WAVE", "CHEVELLE LS6"].map((tag) => (
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
              alt="Joly China Gambit vs Honda Canada — Baywash Daily Briefing Edition No. 47"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Tuesday Edition</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Joly Courts Chinese OEMs — Honda and Toyota Are Furious — U.S. May Ban Canadian-Driven Chinese EVs
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
