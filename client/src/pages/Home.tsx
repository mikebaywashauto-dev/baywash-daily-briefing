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

const BRIEFING_NUMBER = 38;
const BRIEFING_DATE = "June 14, 2026";
const BRIEFING_DAY = "Sunday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/fOEImMYDBZPUbZvy.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/eZzUcDZawsILvGFv.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/xRxWvEkeXhYqPoYk.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/EgGyIWNPdkFtSJnK.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/CEfkpyuuRGSZgiDK.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "HONDA",
    tagColor: "#b91c1c",
    headline: "Honda Canada CEO Sounds the Alarm at APMA Summit — 'Canada Is Making Itself Less Competitive'",
    summary: "Honda Canada President and CEO Dave Jamieson delivered a pointed address at the Automotive Parts Manufacturers' Association annual summit in Vaughan, Ontario on June 9, 2026 — a speech that should be required reading for every Canadian shop owner. Jamieson was direct: Honda Canada produced 400,000 vehicles at full capacity in Alliston last year and is on the same pace through the first five months of 2026. But the conditions that make that possible are eroding. Seventy-six per cent of the Civics and CR-Vs built in Alliston are exported to the United States — making the plant acutely sensitive to any deterioration in cross-border trade terms. Jamieson said tariffs are a 'cost burden that erode the cost competitiveness that free trade supports.' He warned that future production allocation decisions are made at the global level, and when Canada's risk profile becomes too unpredictable, global headquarters will shift investment elsewhere. The most consequential announcement in the speech: Honda has indefinitely suspended construction of its planned $15 billion Canadian EV value chain investment — the battery plant, cathode materials facility, and EV assembly expansion that were to be built in Alliston. Jamieson was careful to say this is not a cancellation and does not affect current employment or production. But it is a direct signal that the conditions required to commit billions to Canada's future are not currently in place. Jamieson also called out the misalignment of Canadian policy: GHG regulations, provincial ZEV mandates, trade policy, and industrial strategy are being developed in silos, and the combined effect is working against the manufacturers they are meant to support. He specifically criticized Ottawa's January 2026 deal allowing 49,000 Chinese EVs into Canada annually — arguing that state-subsidized competitors with no intention of building Canadian manufacturing capacity should not receive the same market access as companies that have invested for decades.",
    whyItMatters: "Honda has been in Alliston for 40 years. The Civic and CR-V are two of Canada's best-selling vehicles. When the CEO of Honda Canada stands at the APMA podium and says Canada is making itself less competitive at exactly the moment it needs to strengthen its position, that is not a political statement — it is a warning about future investment. For Canadian shop owners, the Honda Alliston plant is the anchor of a regional supply chain that extends to hundreds of Tier 1 and Tier 2 suppliers across Ontario. If production allocation shifts south, the downstream effect on parts availability, employment, and regional economic activity is significant. The $15 billion EV investment suspension is the more immediate signal: it means the next generation of Honda manufacturing capacity will not be built in Canada unless the trade and policy environment changes. Watch for Honda to use this speech as leverage in CUSMA negotiations — and watch for Ottawa's response. If the federal government does not address the policy misalignment Jamieson described, expect more OEMs to follow with similar warnings.",
    source: "Honda Canada News / APMA Summit — June 9–10, 2026",
    sourceUrl: "https://hondanews.ca/en-CA/releases/release-bb56dd5efb740e1d38d5e2818102b13b-2026-apma-summit-speech-from-dave-jamieson-president-and-ceo-honda-canada",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CHINESE EVS",
    tagColor: "#1d4ed8",
    headline: "CVMA to Ottawa: Scrap the China EV Deal — 'There Is No Canadian Auto Sector Without the U.S.'",
    summary: "Canadian Vehicle Manufacturers' Association president and CEO Brian Kingston testified before the House of Commons Standing Committee on International Trade on June 9, 2026, delivering a message that aligned closely with Honda Canada's Dave Jamieson: the United States is not an optional trading partner for Canada's auto industry — it is the only one that matters at scale. Kingston was blunt: more than 90 per cent of Canadian vehicle production is exported to the United States. Diversification is not a realistic strategy. 'Simply put, there is no Canadian auto industry without the U.S.,' Kingston told MPs. The CVMA's primary ask to the federal government is the elimination of the January 2026 trade arrangement with China that allows up to 49,000 Chinese-built electric vehicles to enter the Canadian market annually at a preferential tariff rate of 6.1 per cent — far below the 100 per cent surtax Canada imposed on Chinese EVs in 2024. Kingston warned that the deal creates a direct competitive threat to manufacturers that have invested billions in North American production capacity. The numbers are already real: Global Affairs Canada data shows 2,910 Chinese EVs arrived in Canada in May 2026 — the first month of the arrangement. The CVMA is also calling for additional tariffs on Chinese EVs beyond the 49,000-unit quota, restrictions on Chinese-connected vehicle software, and a halt to any further market access concessions to China in the automotive sector. Kingston's testimony was echoed by Canada's chief trade negotiator Janice Charette, who told the same APMA summit that Ottawa's primary objective in CUSMA negotiations is to eliminate the Section 232 automotive tariffs — the 25 per cent duties on Canadian vehicle exports — and to preserve the trilateral structure of CUSMA for a full 16-year renewal.",
    whyItMatters: "The China EV deal is a fault line running through Canada's CUSMA negotiating position. The U.S. has made clear that Chinese-connected vehicles and technology entering North America through Canada is a national security concern — and that concern is not separate from the CUSMA review. It is part of it. If Ottawa does not cancel or substantially restrict the China EV arrangement before July 1, it hands U.S. negotiators a legitimate grievance that could be used to justify harder terms on automotive content rules, tariff reductions, or both. For Canadian shop owners, the arrival of Chinese EVs in volume creates a new service reality: these vehicles will need maintenance, diagnostics, and repair. Most Canadian shops are not yet equipped with the software tools, training, or parts access to service Chinese EV brands. The shops that get ahead of this — identifying which brands are arriving, what diagnostic platforms they use, and what parts sourcing looks like — will have a competitive advantage as these vehicles age into the service bay. The shops that wait will be scrambling.",
    source: "Global News / Motor Illustrated / Epoch Times — June 9–11, 2026",
    sourceUrl: "https://globalnews.ca/news/11896298/scrap-china-ev-deal-auto-group/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "CUSMA",
    tagColor: "#047857",
    headline: "Ford Softens Tone — 'I Love the U.S.' — As CUSMA Talks Enter Final Stretch",
    summary: "Ontario Premier Doug Ford returned from Washington this week having completed the first of three planned U.S. trips in June, and the tone has shifted. The premier who threatened to cut hydro exports to three U.S. states in March 2025, who ran anti-tariff ads during the World Series featuring Ronald Reagan's voice, and who vowed to campaign against Trump in the midterms, told reporters Wednesday: 'I just love the American people. I love the U.S.' The change in register is deliberate. With CUSMA's official review date of July 1 now 17 days away, Ford is executing a strategy that Conservative strategist Laryssa Waler described to CBC as working through the donor and industry network that surrounds Trump — the farmers, the automotive industry, the aviation industry — rather than seeking direct meetings with the administration. Ford signed a memorandum of understanding with Pennsylvania Governor Josh Shapiro to strengthen the Ontario-Pennsylvania economic partnership, a move designed to demonstrate that Canadian provinces are reliable partners for U.S. states even when the federal relationship is strained. The strategic logic: the people who 'waltz into the Oval Office' are not government officials — they are industry leaders and major donors. If Ford can convince them that Canadian manufacturing is essential to their supply chains and their bottom lines, those conversations will carry more weight with Trump than any diplomatic channel. University of Ottawa political scientist Geneviève Tellier told CBC that Ford's strength is in the trade file: 'He's fighting for Ontarians, he's on the offensive.' But she cautioned that changing Trump's view of Canada's auto sector will be difficult regardless of who is making the argument.",
    whyItMatters: "Ford's Washington strategy matters to Canadian shop owners because it reflects the broader reality of how CUSMA negotiations will actually be resolved: not through formal diplomatic channels, but through the economic self-interest of U.S. industries that depend on Canadian supply chains. The auto sector is the most powerful of those industries. Ford, GM, and Stellantis all have Canadian assembly operations. Their U.S. dealers, suppliers, and investors understand that a disrupted Canadian supply chain means disrupted U.S. production. That shared interest is Canada's strongest negotiating leverage — and Ford's job is to make sure the people who can act on that leverage understand it. For shop owners, the practical implication is that the next three weeks are the most consequential period in Canadian automotive trade policy in a generation. The June 16-17 U.S.-Mexico Round 2 talks in Washington will signal whether Canada is being treated as a full trilateral partner or a secondary concern. Watch that signal closely. If Canada is excluded or marginalized in those talks, the July 1 review will begin from a weaker position than Ottawa is publicly acknowledging.",
    source: "CBC News / Shawn Jeffords — June 14, 2026",
    sourceUrl: "https://www.cbc.ca/news/canada/toronto/ford-cusma-trump-talks-9.7233192",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🌉",
    text: "Gordie Howe Bridge — still no opening date. The Windsor-Detroit Bridge Authority confirmed this week that Canada and the U.S. agreed to delay the opening to 'resolve outstanding issues.' The bridge was structurally complete and a ribbon-cutting was planned for June 12, with public opening June 15. Trump has demanded the U.S. receive a share of toll revenue despite Canada funding the entire $6.4 billion construction cost. No new date has been announced. The Ambassador Bridge remains the only Windsor-Detroit crossing.",
    sourceUrl: "https://www.cbc.ca/news/canada/windsor/gordie-howe-bridge-opening-delayed-9.7231287",
  },
  {
    icon: "🤝",
    text: "CUSMA — 17 days to July 1. U.S.-Mexico Round 2 talks are scheduled for June 16-17 in Washington. Canada's inclusion or exclusion from those talks is the single most important near-term signal for the auto sector. Canada has formally requested a full 16-year CUSMA renewal. The U.S. trade representative has called Canada's retaliatory tariffs on steel, aluminum, and autos 'a problem' for negotiations. Canada removed most retaliatory tariffs but counter-duties remain on over 300 U.S. products.",
    sourceUrl: "https://motorillustrated.com/canada-targets-tariff-relief-as-cusma-review-nears/186384/",
  },
  {
    icon: "🔧",
    text: "Unifor-Ford contract talks open June 22. The union represents 18,000 workers at Ford, GM, and Stellantis plants across Canada. Unifor has signalled it will not make concessions despite industry challenges — the union is entering talks from a position of principle, not accommodation. The UAW's $30/hr by 2030 benchmark will be cited at the table. Any Unifor action affecting Windsor or Oakville assembly would directly impact parts supply chains for Canadian shops.",
    sourceUrl: "https://www.facebook.com/unifor1285/posts/auto-talks-2026-message-from-lana-payne-bargaining-begins-june-22/1648170097314998/",
  },
  {
    icon: "🛢️",
    text: "Motor oil supply watch: 0W-20 and 5W-30 remain at peak constraint risk for July-September 2026. Honda's Alliston plant running at full capacity — 400,000 vehicles annually — means Honda-spec oil demand remains high. Place supplemental motor oil orders this week. Base oil supply from Gulf Coast refiners remains tight heading into summer. The shops that ordered ahead in May are in the best position.",
    sourceUrl: "https://jobbersworld.com/2026/06/05/will-there-be-enough-motor-oil/",
  },
];

const tipOfTheDay = {
  title: "Get Ahead of Chinese EVs Before They Hit Your Service Bay",
  text: "The CVMA's testimony and Honda Canada's speech both confirm the same thing: Chinese EVs are arriving in Canada, and the volume will grow. The first 2,910 arrived in May 2026. The question for your shop is not whether you will see these vehicles — it is whether you will be ready when you do. Here is what to do this week. First, identify the brands arriving: NIO, BYD, SAIC (MG), and Zeekr are the most likely early entrants. Research what diagnostic platforms they use — most Chinese EVs do not use standard OBD-II protocols in the same way as North American vehicles, and some require proprietary software. Second, contact your diagnostic tool supplier and ask what coverage they currently have for Chinese EV brands. Third, talk to your parts distributor about sourcing timelines for Chinese EV components — the supply chain for these vehicles is almost entirely offshore, and lead times will be long. Fourth, consider whether your shop's EV safety protocols — high-voltage PPE, battery handling procedures, thermal runaway response — are adequate for lithium iron phosphate and NMC battery chemistries used by Chinese manufacturers. The shops that do this groundwork now will be the ones customers call when their Chinese EV needs service and the dealer has no idea what to do.",
};

const quoteOfTheDay = {
  text: "Simply put, there is no Canadian auto industry without the U.S. Diversification is not an option.",
  author: "Brian Kingston",
  title: "President & CEO, Canadian Vehicle Manufacturers' Association — June 9, 2026",
};

const rideOfTheDay = {
  name: "1971 Plymouth Hemi 'Cuda — The Last of the Real Muscle Cars",
  description: "The 1971 Plymouth Hemi 'Cuda is widely regarded as the pinnacle of the muscle car era — and one of the most valuable American cars ever built. Powered by the legendary 426 cubic inch Hemi V8 producing 425 horsepower, the Hemi 'Cuda was available in a handful of outrageous High Impact colours: Plum Crazy purple, Vitamin C orange, Lemon Twist yellow, and Sassy Grass green. This example wears Plum Crazy — a colour so vivid it was reportedly rejected by Chrysler's marketing department before being approved at the last minute. The 1971 model year was the last great year for the 'Cuda: insurance surcharges on high-performance vehicles were making muscle cars unaffordable for their target buyers, emissions regulations were beginning to strangle output, and Chrysler was already planning the detuned, emissions-compliant engines that would arrive in 1972. Only 107 Hemi 'Cudas were built for the 1971 model year — 59 hardtops and 48 convertibles. A documented Hemi 'Cuda convertible in a High Impact colour is among the rarest and most valuable American cars in existence, with examples selling for $3 million to $4 million at major auctions. The Hemi 'Cuda is a reminder that the most powerful things are often the ones that arrive just before the rules change — and that the cars built with no compromise are the ones that endure long after the era that produced them has passed. On a Sunday when Honda Canada is warning that Canada is making itself less competitive and Ottawa is keeping the industry in the dark on CUSMA, the Hemi 'Cuda is the right car for the moment: uncompromising, built for a specific purpose, and impossible to ignore.",
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
                {["HONDA", "CHINESE EVS", "CUSMA", "HEMI 'CUDA"].map((tag) => (
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
              alt="Honda of Canada Manufacturing plant in Alliston, Ontario — Baywash Daily Briefing Edition No. 38"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#e05a1a] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Today's Edition</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Honda Canada's Warning — Chinese EVs Arrive — Ford's Washington Charm Offensive
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
