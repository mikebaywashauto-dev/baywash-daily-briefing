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

const BRIEFING_NUMBER = 37;
const BRIEFING_DATE = "June 13, 2026";
const BRIEFING_DAY = "Saturday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/eCLZCdVqrbVcyJSr.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/NlxVeZMjnqiZssYm.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/fHcsXrMTXRhrpotI.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ePHUOGJgVoYpmuBH.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/NenLKNclfryiiAyS.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "TARIFFS",
    tagColor: "#b91c1c",
    headline: "Japan's Six Automakers Face $40B+ Tariff Hit — Honda Posts First Annual Loss in 70 Years",
    summary: "Japan's six largest automakers — Toyota, Honda, Nissan, Subaru, Mazda, and Mitsubishi — absorbed an estimated $27.6 billion in costs tied to U.S. tariffs, shifting EV policies, and regulatory changes during the fiscal year ending March 31, 2026. Industry forecasts project an additional $14.4 billion in costs through March 2027, bringing the total impact to over $40 billion. Tariffs drove the largest share of those costs, totalling roughly $15.2 billion for the fiscal year. Toyota alone expects tariff-related costs to reach $17.2 billion through March 2027. Honda recorded $9.1 billion in EV-related write-downs after scaling back its EV plans and cancelling certain programs — contributing to the company's first annual loss since going public nearly 70 years ago. Nissan anticipates nearly $3.1 billion in tariff expenses and has retooled its Canton, Mississippi plant from EV production to truck manufacturing. Subaru's failure to launch its first in-house EV cost the automaker $361 million in impairments. Executives across the industry say future investment decisions now depend on political and regulatory developments rather than traditional manufacturing considerations. New trade barriers have disrupted the integrated U.S.-Canada-Mexico supply chains that Japanese automakers built their North American strategies around — intensifying pressure to relocate production to the United States.",
    whyItMatters: "Honda's Alliston, Ontario plant is directly embedded in the supply chain affected by these losses. When Honda posts its first loss in 70 years and begins retooling production toward U.S. facilities, Alliston's long-term output is at risk. For Canadian shop owners, the immediate signal is this: the OEMs absorbing the largest tariff hits are the ones most likely to shift production south, which means Canadian assembly jobs — and the parts ecosystems built around them — face structural pressure. The secondary effect is parts pricing. As Japanese OEMs absorb $40B+ in costs, they will look to recover margin wherever possible, including through parts pricing to dealers and independent distributors. Honda, Toyota, and Subaru parts are among the most common in Canadian service bays. Watch for quiet price increases on OEM parts over the next two quarters. This is a long-term story — but it is moving faster than most shop owners realize.",
    source: "CBT News / Automotive Manufacturing Solutions — June 12, 2026",
    sourceUrl: "https://www.cbtnews.com/japanese-automakers-face-28b-hit-from-u-s/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CUSMA",
    tagColor: "#1d4ed8",
    headline: "CUSMA Transparency Crisis — Driving.ca's David Booth: 'The Liberals Are Keeping Us In The Dark'",
    summary: "Driving.ca automotive journalist David Booth published a pointed analysis this week arguing that Canada's auto industry executives cannot get a straight answer from the Carney government on its CUSMA negotiating position. The core complaint: there is no unified tariff remission program, no clear communication of what Canada is willing to trade, and — critically — not a single person on Prime Minister Carney's economic advisory council with direct auto assembly experience. Booth notes that the 82%/50% North American content threshold being discussed is technically achievable for most Canadian-assembled vehicles, but the wording of how that content is calculated matters enormously. Canada's negotiators may be trading away the wrong chips without understanding the downstream consequences for assembly plants in Alliston, Cambridge, Ingersoll, and Windsor. With 18 days to the July 1 CUSMA annual review milestone, the U.S.-Mexico Round 2 talks scheduled for June 16-17 in Washington are the most important near-term signal. Canada's inclusion or exclusion from those talks will reveal whether Ottawa is being treated as a full partner or a secondary concern in the renegotiation.",
    whyItMatters: "The transparency crisis Booth describes is not just a political story — it is a business planning problem for every Canadian shop owner. When the OEMs and Tier 1 suppliers cannot get a clear answer on what Canada's negotiating position is, they cannot make investment decisions. When investment decisions stall, production schedules become uncertain. When production schedules become uncertain, parts availability becomes unpredictable. The absence of auto assembly expertise on Carney's advisory council is a structural gap that matters: the people advising the PM on trade strategy may not fully understand that a 2% change in content calculation methodology can determine whether a vehicle qualifies for tariff-free treatment or faces a 25% surcharge. For shop owners, the practical implication is to continue planning for tariff-elevated parts prices through at least Q3 2026. The July 1 milestone is not a resolution — it is the beginning of a longer review process. Do not wait for certainty before adjusting your parts procurement strategy.",
    source: "Driving.ca / David Booth — June 2026",
    sourceUrl: "https://driving.ca/auto-news/news/the-liberals-are-keeping-us-in-the-dark-on-cusma",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "PARTS",
    tagColor: "#047857",
    headline: "Salvage Yards Burning — The Hidden Parts Crisis Threatening Affordable Repairs",
    summary: "Automotive journalist Lauren Fix, writing for CBT News, has raised the alarm on a trend that deserves far more attention than it is receiving: record numbers of salvage yard fires across North America are destroying the recycled parts supply that helps keep vehicle repairs affordable. Every major salvage yard fire destroys inventory — engines, transmissions, suspension components, body panels, wheels, electronics, wiring harnesses, airbags, and sensors — that helps reduce repair costs for millions of drivers. Industry groups have reported record numbers of fires at recycling facilities in recent years. The explanation most frequently offered is lithium-ion batteries from EVs, hybrids, e-bikes, and power tools. But Fix raises a harder question: how many of these fires have been conclusively linked to batteries? How many remain under investigation? How many are classified as 'undetermined'? The concern is not one fire — it is a pattern. As recycled parts inventory shrinks, repair shops lose access to affordable alternatives to expensive new OEM components. The result: higher repair costs, higher insurance claims, higher premiums, and longer repair times. Independent shops that rely on recycled parts to compete with dealership service departments on price are directly exposed.",
    whyItMatters: "For Canadian independent shop owners, the salvage yard fire trend is a direct competitive threat. The ability to source quality recycled parts — a used transmission, a replacement body panel, a recycled electronic module — is one of the key ways independent shops provide value that dealerships cannot easily match on price. As salvage yard inventory shrinks due to fires, the competitive advantage of offering recycled parts narrows. The customer who was choosing your shop over the dealer because you could source a used part at half the price of new may no longer have that option. The practical response: build relationships with your regional salvage yards now, before inventory tightens further. Ask about their fire suppression protocols and EV battery handling procedures. Consider stocking a small inventory of high-demand recycled parts for your most common vehicle makes. And when a customer asks why recycled parts are harder to find, you now have the answer.",
    source: "CBT News / Lauren Fix — June 12, 2026",
    sourceUrl: "https://www.cbtnews.com/americas-savage-yards-are-burning/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🌉",
    text: "Gordie Howe Bridge — still no new opening date. The WDBA confirmed this week that 'outstanding issues' between Canada and the U.S. remain unresolved. The bridge is structurally complete. Trump is using it as leverage in CUSMA talks. The Ambassador Bridge remains the only Windsor-Detroit crossing for parts and vehicle shipments.",
    sourceUrl: "https://www.wilx.com/2026/06/11/opening-gordie-howe-international-bridge-delayed/",
  },
  {
    icon: "🤝",
    text: "CUSMA — 18 days to July 1. U.S.-Mexico Round 2 talks: June 16-17 in Washington. Canada's inclusion or exclusion from those talks is the single most important signal of the coming week. Trump confirmed the U.S. will not renew USMCA outright — annual reviews begin July 1. CUSMA remains in force until 2036 unless a withdrawal notice is filed.",
    sourceUrl: "https://www.cbtnews.com/trump-says-u-s-wont-renew-usmca/",
  },
  {
    icon: "🔧",
    text: "UAW Dauch ratification vote expected this weekend. Upon ratification, Three Rivers plant resumes full axle production for Silverado and Sierra. GM's supply crisis resolves. Unifor-Ford contract talks open June 22 — the $30/hr by 2030 UAW benchmark will be cited at the table. Canadian shop owners should watch for any Unifor action that could affect parts supply.",
    sourceUrl: "https://www.cbtnews.com/uaw-reaches-tentative-agreement-ending-strike/",
  },
  {
    icon: "🛢️",
    text: "Motor oil shortage watch: 0W-20 and 5W-30 remain at risk for peak constraint July-September 2026. Novelis Oswego aluminum plant restarted June 10 — a positive supply chain signal, but unrelated to lubricants. Place supplemental motor oil orders this week before summer demand peaks. Base oil supply from Gulf Coast refiners remains tight.",
    sourceUrl: "https://jobbersworld.com/2026/06/05/will-there-be-enough-motor-oil/",
  },
];

const tipOfTheDay = {
  title: "Build Your Salvage Yard Relationships Now — Before Inventory Gets Any Tighter",
  text: "The salvage yard fire trend Lauren Fix described in CBT News is not a future problem — it is happening now, and Canadian yards are not immune. Here is what to do this weekend. First, identify the two or three salvage yards you use most frequently and call them Monday morning. Ask specifically: what is their current inventory level for your top five vehicle makes? Are they experiencing any supply gaps due to recent fires or reduced intake? Second, ask about their EV and hybrid battery handling protocols. Yards that are not properly managing lithium-ion batteries are the ones most at risk for fires — and the ones most likely to lose inventory you depend on. Third, consider pre-purchasing a small stock of high-demand recycled parts for your most common repairs — used transmissions, alternators, and starter motors for your top three vehicle makes. The carrying cost is low; the competitive advantage of having the part when a customer needs it is high. Fourth, when you source a recycled part that saves a customer $400 over new OEM pricing, tell them. That is a story worth telling — it builds loyalty and differentiates your shop from the dealer down the street.",
};

const quoteOfTheDay = {
  text: "The concern isn't one fire. The concern is a pattern — and the cost of these fires doesn't disappear when the flames are extinguished.",
  author: "Lauren Fix",
  title: "Automotive Journalist, CBT News — June 12, 2026",
};

const rideOfTheDay = {
  name: "1969 Chevrolet Camaro COPO 427 — The Factory Drag Racer That Broke GM's Rules",
  description: "In 1969, General Motors had a corporate policy banning engines larger than 400 cubic inches in mid-size and pony cars — a rule designed to keep insurance costs manageable and avoid regulatory scrutiny. Vince Piggins, a Chevrolet performance engineer, found a loophole: the Central Office Production Order (COPO) system, designed for fleet and special-order vehicles, could be used to slip big-block engines past the corporate ban. The result was the COPO 427 Camaro — a factory-built drag racer that came with a 427 cubic inch L72 V8 producing 425 horsepower, a Muncie four-speed or Turbo-Hydramatic 400 automatic, and a 4.10:1 Positraction rear axle. Only approximately 1,015 COPO Camaros were built in 1969 across all variants. This example wears Fathom Green — one of the most striking colours of the muscle car era — with a black vinyl top and the distinctive cowl induction hood that fed cool air directly to the carburetor. The COPO Camaro ran the quarter mile in the low 13-second range stock, and with basic tuning, into the 11s. Today, a documented COPO 427 Camaro in top condition commands $200,000 to $400,000 at major auctions. On a Saturday when Japan's automakers are absorbing $40 billion in tariff losses and Canada's trade negotiators are keeping the industry in the dark, the COPO Camaro is a reminder that the best solutions are often found by people who know the rules well enough to work around them — and that the cars built with real substance under the hood are the ones that endure.",
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
                {["TARIFFS", "CUSMA", "PARTS CRISIS", "COPO 427"].map((tag) => (
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
              alt="Canadian automotive service bay — Baywash Daily Briefing Edition No. 37"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#e05a1a] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Today's Edition</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Japan's $40B Tariff Hit — CUSMA Transparency Crisis — Salvage Yards Burning
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
