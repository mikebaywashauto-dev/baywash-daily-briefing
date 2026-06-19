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

const BRIEFING_NUMBER = 43;
const BRIEFING_DATE = "June 19, 2026";
const BRIEFING_DAY = "Friday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/nNolmEvWyMwmKkqF.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/nAcIXpUcyMOdzBVG.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/VWdNDPxBHmAWMsLj.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ltgkGfuORVUqaZiz.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/fSdRVrHZaiEzlooJ.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "TARIFFS / PRODUCTION",
    tagColor: "#b91c1c",
    headline: "Canada Is the Biggest Loser in the Tariff Era — 15% Production Drop, 64,000 Fewer Vehicles, 45% of All Tariff Market-Share Losses",
    summary: "The most damning data yet on the tariff impact on Canadian auto production was presented Thursday at the Center for Automotive Research (CAR) Management Briefing Seminars in Michigan. CAR Chief Economist Tyler Harp delivered the numbers: Canadian vehicle output fell 15% year-over-year through April 2026, while U.S. production increased 1.2% over the same period. Canadian assembly plants built roughly 64,000 fewer vehicles during the first four months of 2026 than a year earlier. By contrast, U.S. factories added approximately 44,000 units. Canada accounted for 45% of all tariff-related market-share losses among U.S. trading partners — the largest share of any individual country. Canada and Mexico combined represent 69% of total market-share losses. The tariff framework is redistributing production within North America — not reducing imports from overseas. U.S. factories gained nearly 6 percentage points in market share after the tariff was implemented. The effective tariff rate on Canadian vehicle exports to the U.S. is 12-13% — comparable to Japan, South Korea, and the United Kingdom. Several factors contributed to Canada's lower output: Toyota Canada temporarily reduced RAV4 production at Woodstock while retooling for the next-generation model; GM suspended CAMI Assembly in Ingersoll after discontinuing BrightDrop electric vans; GM reduced Silverado production in Oshawa citing changing trade conditions. Even accounting for these operational factors, CAR's analysis concludes that tariffs are influencing production decisions across the region. Vehicles with the weakest U.S. sales through Q1 2026: Toyota RAV4, Chrysler Pacifica, Honda CR-V, Honda Civic, Chevrolet Silverado, Ford F-Series. U.S. consumer confidence weakened during the spring — and because most Canadian-built vehicles are exported south of the border, any slowdown in U.S. purchasing activity will place further pressure on Ontario assembly operations.",
    whyItMatters: "The 15% production decline is the clearest single number that captures what the tariff war has done to Canadian auto manufacturing. For shop owners, the downstream effects are already visible: parts availability for Canadian-assembled vehicles is tightening, lead times are extending, and the supply chain disruptions that began in 2025 are accelerating. The 64,000 fewer vehicles built in Canada through April 2026 means 64,000 fewer vehicles entering the Canadian fleet — which reduces the future pool of vehicles needing service. The 12-13% effective tariff rate on Canadian vehicles is particularly significant because it means Canadian-assembled vehicles are now treated by the U.S. market the same as vehicles from Japan, South Korea, and the UK — countries that do not have a free trade agreement with the U.S. That is a fundamental change to the economics of Canadian auto production. Watch for OEMs to use this data in their CUSMA lobbying — and watch for Unifor to use it in their Ford contract talks opening Monday.",
    source: "Motor Illustrated / Automotive News Canada — June 18, 2026",
    sourceUrl: "https://motorillustrated.com/canadian-auto-production-slides-as-u-s-tariffs-redirect-north-american-manufacturing/187208/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CUSMA / JULY 1",
    tagColor: "#1d4ed8",
    headline: "First Trilateral CUSMA Meeting Confirmed for July 1 — Carney: 'It's No Secret Trump Isn't a Fan' — But the Deal Stays in Place",
    summary: "Mexico's Economy Secretary Marcelo Ebrard announced Thursday that Canadian, American, and Mexican officials will hold their first trilateral virtual meeting on July 1 to review CUSMA — the first confirmed formal three-way meeting since the review process began. Ebrard posted a video on social media: 'On July 1 we will hold a virtual meeting with our counterparts from Canada and the United States. We will present Mexico's position, and they will do the same regarding the future of the free trade agreement.' Ebrard also confirmed another meeting is scheduled for later in July — July 1 is the start of the process, not the finish. Prime Minister Mark Carney, speaking in Vancouver alongside B.C. Premier David Eby for an infrastructure funding announcement, shrugged off Trump's 'terminated' comments from Wednesday: 'It's no secret the president in recent years has not been the biggest fan of CUSMA or other trade deals. But there are specific things we can work together on.' Carney cited U.S. Trade Representative Jamieson Greer's statement that 'the underlying structure of CUSMA' is solid and will remain in place through negotiations. Carney said he had 'a number of conversations' with Trump about CUSMA at the G7 in France. Canada-U.S. Trade Minister Dominic LeBlanc met Greer on G7 sidelines and said Canada has 'made progress' on resolving U.S. trade irritants. Carney also addressed the forestry sector — softwood lumber is one of the 12 trade irritants on the U.S. list, and B.C. Premier Eby noted the U.S. is increasing lumber imports from Russia instead of Canada. The legal reality, repeated by trade lawyers this week: CUSMA cannot be unilaterally terminated. Any country must give six months written notice. CUSMA runs to 2036. If no renewal is agreed on July 1, CUSMA enters annual rolling reviews for up to 10 years — the deal stays in place.",
    whyItMatters: "The confirmation of a July 1 trilateral meeting is the most important procedural development of the week. It means the formal CUSMA review process is actually starting — not just being discussed. For Canadian shop owners, the July 1 meeting is the beginning of a negotiation that will likely run through the end of 2026 and into 2027. The 25% auto tariff will remain in place throughout that period. The key question is whether Canada can negotiate a package deal that includes tariff relief as part of a broader CUSMA renewal. Carney's 'specific things we can work together on' comment is diplomatic language for: Canada is prepared to make concessions on some of the 12 U.S. trade irritants in exchange for tariff relief. Watch for LeBlanc to announce Canada's formal negotiating position in the next two weeks. The forestry sector mention is significant — softwood lumber tariffs are a separate issue from auto tariffs, but they are on the same list of irritants. A comprehensive deal would address both.",
    source: "CBC News / Global News — June 18, 2026",
    sourceUrl: "https://www.cbc.ca/lite/story/9.7240822",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "TOYOTA / EVS",
    tagColor: "#d97706",
    headline: "Toyota Canada: 'EVs Are a Tough Sell Without Government Incentives' — Canada's Largest Vehicle Producer Speaks as Joly Lands in Japan",
    summary: "The Automotive News Canada podcast dropped today with Toyota Canada spokesperson Scott MacKenzie — and the timing is not coincidental. Industry Minister Melanie Joly arrived in Japan today to meet Honda and Toyota executives, the two companies that together represent 77% of Canadian auto assembly. MacKenzie's key statement: 'EVs are a tough sell without government incentives.' This is a direct challenge to the federal government's decision to wind down the iZEV consumer EV incentive program, which provided up to $5,000 off the purchase of a battery electric or fuel cell vehicle. MacKenzie addressed electrification, powertrains, Canadian production, affordability, and USMCA in the podcast. Toyota has invested over $1.3 billion to prepare its Cambridge plant for an all-new three-row battery electric SUV. Toyota broke ground in Cambridge in 1986 — 40 years of Canadian production. Toyota is Canada's largest vehicle producer. The RAV4 production reduction at Woodstock was temporary — the plant is retooling for the next-generation RAV4 model. But it still contributed to the 15% Canadian production decline reported by CAR this week. MacKenzie's USMCA message: Toyota needs the deal renewed and the 25% auto tariff removed. On Joly's Japan agenda: Honda's $15B EV value chain investment — currently suspended — and Toyota's Cambridge EV SUV timeline. The G7 critical minerals deals — particularly the Sumitomo-Ucore rare earths partnership — will be the backdrop for these conversations. Joly's four conditions for Chinese EV investment in Canada (majority Canadian JV, Canadian labour, Canadian parts, secure software) are also on the table as she meets Japanese OEM executives who are watching the Chinese EV file closely.",
    whyItMatters: "MacKenzie's 'EVs are a tough sell without government incentives' statement is the clearest signal yet that Toyota Canada is frustrated with the federal government's EV policy environment. The iZEV program cancellation removed the primary consumer incentive for EV adoption in Canada — and without consumer demand, the business case for Canadian EV production weakens. For shop owners, the EV transition timeline matters because it determines the future mix of vehicles in the Canadian fleet. If EV adoption slows due to the removal of incentives, the internal combustion engine vehicle fleet will remain larger for longer — which is good for traditional service revenue but delays the transition to EV service capabilities. Joly's Japan visit is the most important diplomatic event for the Canadian auto sector this week. Honda and Toyota together account for the majority of Canadian auto production. If Joly can secure commitments from Honda to restart its $15B EV value chain investment and from Toyota to proceed with the Cambridge EV SUV on schedule, it would be the most significant positive development for Canadian auto manufacturing since the tariff war began.",
    source: "Automotive News Canada Podcast — June 19, 2026",
    sourceUrl: "https://www.autonews.com/podcasts/canada-conversations/anc-auto-news-canada-podcast-toyota-scott-mackenzie/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🇯🇵",
    text: "Industry Minister Joly is in Japan today and tomorrow meeting Honda and Toyota executives. Honda and Toyota together represent 77% of Canadian auto assembly. Honda's $15B EV value chain investment is currently suspended. Toyota's Cambridge EV SUV timeline is under review. The G7 critical minerals deals — particularly the Sumitomo-Ucore rare earths partnership — will be the backdrop for these conversations. Watch for a joint statement from Joly and Honda Canada CEO Dave Jamieson.",
    sourceUrl: "https://www.facebook.com/groups/letstalkalbertaindependence/posts/2102594810338717/",
  },
  {
    icon: "📊",
    text: "CVMA celebrates 100 years. The Canadian Vehicle Manufacturers' Association — representing Ford, GM, and Stellantis — released its centennial report Thursday. Key stat: CVMA members have built over 100 million vehicles in Canada since 1904. CVMA CEO Brian Kingston: 'There would be no auto industry in Canada today without the contributions from Ford, General Motors, and Stellantis.' The report documents the history of the industry from the Auto Pact era through NAFTA, CUSMA, and the current tariff crisis.",
    sourceUrl: "https://finance.yahoo.com/economy/articles/canadian-vehicle-manufacturers-association-celebrates-123000787.html",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge — still no opening date. Canada paid $5.7 billion USD including the U.S. port of entry. Trump's team is demanding renegotiation of the operating agreement. The Ambassador Bridge remains the only Windsor-Detroit crossing. Every day of delay costs the Windsor-Detroit corridor — the busiest trade corridor in North America — in congestion, delays, and lost economic activity. The bridge was finished in December 2025. It has been sitting idle for six months.",
    sourceUrl: "https://ort.org/news/494e594ah_0VDCwXr5Y",
  },
  {
    icon: "🔧",
    text: "Used vehicle values up 8-12% in 2026 as new vehicle production uncertainty reduces supply. Average repair order values at independent shops are up 15-20% year-over-year. The tariff environment is driving customers to keep vehicles longer — which is good for service revenue but increases demand for older parts and creates supply chain pressure on aging inventory. The 64,000 fewer vehicles built in Canada through April 2026 will reduce the future pool of vehicles needing service in 3-5 years.",
    sourceUrl: "https://www.autonews.com/manufacturing/anc-effect-us-tariffs-canada-auto-production-0618/",
  },
];

const tipOfTheDay = {
  title: "The 15% Number: What Canada's Production Decline Means for Your Parts Ordering",
  text: "Canada built 64,000 fewer vehicles through April 2026. That means 64,000 fewer vehicles entering the Canadian fleet this year. Parts availability for Canadian-assembled models — RAV4, CR-V, Civic, Silverado, Pacifica — will tighten over the next 12-18 months as production volumes fall. Now is the time to audit your slow-moving parts inventory for these models and adjust your ordering strategy. The vehicles already on the road will need more maintenance as owners keep them longer — but the parts supply for future model years will be constrained.",
};

const quoteOfTheDay = {
  text: "EVs are a tough sell without government incentives.",
  author: "Scott MacKenzie, Toyota Canada Spokesperson",
  title: "Automotive News Canada Podcast — June 19, 2026",
};

const rideOfTheDay = {
  name: "1969 Dodge Charger R/T — Hemi Orange, 440 Magnum, Black Vinyl Top",
  description: "The 1969 Dodge Charger R/T is one of the most recognizable muscle cars ever built — the fastback roofline, the hidden headlights, the full-width taillights, and the recessed rear window that made it look like it was moving even when standing still. This one is finished in Hemi Orange with the 440 Magnum V8 — the engine that most buyers chose over the legendary 426 Hemi because it was nearly as fast and far more streetable. The 440 Magnum produced 375 horsepower and 480 lb-ft of torque. The black vinyl top and black R/T stripes against the orange paint is one of the great colour combinations of the muscle car era. The Charger's design was so good that it barely changed from 1968 to 1970 — and it became the car of choice for everyone from NASCAR teams to Hollywood studios. On a week when Canada's auto production has fallen 15% and the negotiating table is still being set, the 1969 Charger R/T is a reminder of what North American auto manufacturing looked like at its peak: bold, powerful, unapologetic, and built to last. The 440 Magnum is still running strong in shops across Ontario today — a testament to the engineering that went into these cars more than 55 years ago.",
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
                {["-15% PRODUCTION", "JULY 1 MEETING", "TOYOTA CANADA", "CHARGER R/T"].map((tag) => (
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
              alt="Canada: The Biggest Loser in the Tariff Era — Baywash Daily Briefing Edition No. 43"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Data Alert</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Canada: The Biggest Loser in the Tariff Era — 15% Production Drop — First Trilateral CUSMA Meeting July 1
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
