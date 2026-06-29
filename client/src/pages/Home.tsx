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

const BRIEFING_NUMBER = 53;
const BRIEFING_DATE = "June 29, 2026";
const BRIEFING_DAY = "Monday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/udAEIZJlTBHIyJkx.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/jtvbErvwktCMNNGC.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/PbVhxbZdXLhqbFXv.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/YHfPKrAUHDlkMXUC.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ehletuZXxcAQfHBa.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "CUSMA REVIEW DAY / JULY 1 / ZOMBIE CUSMA",
    tagColor: "#1d4ed8",
    headline: "CUSMA Review Day Is Here — \"A Checkpoint, Not a Cliff\" — Premier Ford on Third U.S. Trip — Unifor: \"Hold the Line, Don't Lose Your Nerve\"",
    summary: "The July 1 trilateral virtual Free Trade Commission meeting is today. Canada, the United States, and Mexico are meeting virtually to conduct the first formal review of CUSMA since it came into force in 2020. The meeting is not a signing ceremony — it is the beginning of a process that could take months or years. Ontario Chamber of Commerce CEO Daniel Tisch: 'We look at next week with some anxiety, but also hope, because the deal will continue. This is a checkpoint, not a cliff.' Unifor President Lana Payne: 'My advice has been, stay calm, hold the line, don't lose your nerve.' Canadian Manufacturers and Exporters CEO Dennis Darby: 'It's the effect of uncertainty — companies are sitting on their hands in both countries.' Ontario Premier Doug Ford is on his third U.S. trip of June — attending the Western Governors' Association conference in Salt Lake City, Utah today and tomorrow. Ford's strategy: build relationships with U.S. governors who have economic stakes in the Canada-U.S. relationship. U.S. Ambassador Pete Hoekstra told CTV News last week: 'We're not anywhere close on a new CUSMA framework.' The most likely outcome of today's meeting: annual rolling reviews — the 'zombie CUSMA' scenario that KPMG's Joy Nott warned about. Canada and the U.S. have had zero formal bilateral negotiating sessions. U.S.-Mexico bilateral talks have already had two rounds. Canada is still waiting for its first formal session with the U.S. Prime Minister Carney said last Thursday that the breakthrough will happen at the 'leadership level' — meaning a Carney-Trump summit. But Carney spoke with Trump on Wednesday and did not raise CUSMA. Poilievre: 'The aluminum, steel, auto, and lumber workers are desperate for their jobs and their paycheques, and Mr. Carney has a long telephone conversation with the president and doesn't even bring it up.'",
    whyItMatters: "The 25% auto tariff (Section 232) is not affected by today's CUSMA review meeting. It is a separate legal instrument under the Trade Expansion Act of 1962 and will not be resolved by the July 1 meeting. Whatever happens today — 16-year renewal, zombie CUSMA, or withdrawal notice — the tariff on vehicles and non-CUSMA-compliant auto parts remains in place. The tariff that matters most to your shop will not change today. Plan accordingly. The next critical date is July 24 — when the Section 122 temporary 10% surcharge expires and must be replaced by a new tariff regime. Watch for a White House proclamation between now and July 24. The Unifor-Ford July 10 deadline is 11 days away — that is the most immediately consequential date for Canadian auto workers and the Windsor-area supply chain.",
    source: "CBC News / Ontario Chamber of Commerce / Unifor — June 29, 2026",
    sourceUrl: "https://www.cbc.ca/news/canada/toronto/cusma-talks-checkpoint-businesses-unions-9.7250899",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "GORDIE HOWE BRIDGE / NPR / MICHIGAN SENATE",
    tagColor: "#b91c1c",
    headline: "NPR Takes the Gordie Howe Bridge Story National in the U.S. — \"A Bridge to Canada May Be Blocked by the Trump Administration\" — Pentagon Also Suspending 86-Year-Old Canada-U.S. Defense Board",
    summary: "NPR's Don Gonyea visited Windsor and Detroit this week for a 9-minute radio documentary on the Gordie Howe Bridge that aired nationally on Sunday. Canadian Trucking Alliance President Stephen Laskowski: 'I was heading out. My wife said, your phone's ringing... it said, don't bother going.' The NPR piece is significant because it takes the Moroun donor story — Matthew Moroun's $1 million contribution to a Trump-aligned super PAC in January 2026, and his subsequent meeting with Commerce Secretary Howard Lutnick — to a U.S. national audience for the first time. The story is no longer just a Canada-U.S. trade dispute. It is now a U.S. domestic political story about a billionaire donor using political contributions to protect a monopoly. War on the Rocks (June 29) added a national security dimension: 'The opening of the gleaming new bridge between Detroit and Windsor has been long delayed in the tense run-up to the continental trade deal review.' But War on the Rocks also reported that the Pentagon has unilaterally suspended the 86-year-old Permanent Joint Board on Defense — the oldest Canada-U.S. defense institution, established in 1940 by Roosevelt and King. The suspension of the PJBD is not widely reported in Canadian media but is deeply alarming to defence analysts. War on the Rocks: 'Just when Washington needs to expand its defense industrial base, the Trump administration is undermining the political foundations needed to do so with its closest allies.' The bridge delay and the PJBD suspension are part of the same pattern: the Trump administration is using every lever of the Canada-U.S. relationship as a bargaining chip. Former Michigan Governor Blanchard: 'Sooner or later, it will open. If Trump wants money, he should get it from the Morouns.' The Michigan primary is in August. Democratic candidate Mallory McMorrow's $400,000+ TV and digital ad campaign is running in the Detroit market. Trump has a domestic political incentive to open the bridge before then.",
    whyItMatters: "The NPR documentary and the War on the Rocks analysis are significant for one reason: they signal that the Gordie Howe Bridge delay has moved from a bilateral trade dispute to a U.S. domestic political liability for Trump. When NPR covers a story, it reaches the educated, politically engaged U.S. audience that includes the donors, policy advisors, and media figures who influence Trump's decisions. The Moroun donor angle is now in the U.S. national conversation. The Michigan primary pressure is real — Trump has a political incentive to open the bridge before August. For Windsor-area shop owners: when the bridge opens, the corridor will see a surge in cross-border traffic, parts deliveries will improve, and cross-border customer traffic will increase. Watch for an opening announcement in the next 4–6 weeks. For shop owners outside Windsor: the bridge opening will be a signal that the U.S.-Canada relationship is stabilizing. It will likely coincide with — or follow — a CUSMA framework agreement.",
    source: "NPR / War on the Rocks / Windsor Star — June 28–29, 2026",
    sourceUrl: "https://www.wrkf.org/npr-news/2026-06-28/a-bridge-to-canada-may-be-blocked-by-the-trump-administration",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "BANK OF CANADA / RATE HOLD / MARKET DATA",
    tagColor: "#7c3aed",
    headline: "Bank of Canada Rate Hold #5 — 2.25% — What It Means for Shop Owners — June Auto Sales Due Wednesday",
    summary: "The Bank of Canada held its overnight policy rate at 2.25% for the fifth consecutive time on June 10, 2026. The next rate decision is July 15. RBC Economics: Canada's economy likely started Q2 on a stronger footing — GDP growth picking up in Q2, core inflation subdued. RBC: 'We continue to expect no change in interest rates from the central bank in 2026.' The Bank of Canada is caught in a stagflation dilemma: weak economic growth (caused by tariff uncertainty and reduced business investment) combined with elevated inflation (caused by tariffs on imported goods). Cutting rates would stimulate growth but risk an inflation spike. Raising rates would control inflation but further weaken growth. Holding at 2.25% is the least-bad option. The GDP data for May 2026 is due Wednesday — this will be the most important economic data point of the week. If GDP growth is positive, the Bank of Canada has more room to hold. If GDP contracts, pressure for a rate cut will increase. June auto sales results are also due Wednesday from the major OEMs. Watch for: Honda Canada (Alliston production impact), Toyota Canada (Woodstock RAV4 retool status), Stellantis Canada (Brampton idle impact on Chrysler/Dodge/Jeep sales), GM Canada (CAMI idle impact on BrightDrop), Ford Canada (Super Duty Oakville launch impact). The 25% auto tariff has inflated new vehicle prices by an estimated $5,000–$15,000 depending on model. This is pushing consumers into used vehicles and repair shops. Rate stability at 2.25% means financing costs for used vehicle purchases and shop equipment loans remain predictable.",
    whyItMatters: "Rate stability at 2.25% has three direct implications for Canadian shop owners: (1) Borrowing costs for shop equipment, lifts, diagnostic tools, and facility upgrades remain predictable. If you have been delaying a capital purchase, the financing environment is as stable as it has been in two years. (2) Customers financing used vehicle purchases face predictable monthly payments. The used vehicle market is softening (Canadian Black Book: -0.35% last week) — which means more customers are choosing to repair and keep rather than buy new or used. This is a tailwind for maintenance and repair work. (3) The Bank of Canada's hold signals that the economy is not in freefall — but it is not growing strongly either. Consumer confidence is fragile. Customers are making careful spending decisions. Your shop's value proposition — repair and keep versus replace — has never been more relevant. The June auto sales data due Wednesday will tell you how many new vehicles are actually moving in your market. If sales are down, more customers are keeping their current vehicles. That means more work for you.",
    source: "Bank of Canada / RBC Economics / Statistics Canada — June 2026",
    sourceUrl: "https://www.bankofcanada.ca/rates/interest-rates/canadian-interest-rates/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📅",
    text: "CUSMA Review Day: The July 1 trilateral virtual meeting is today. Most likely outcome: zombie CUSMA annual rolling reviews. Canada and the U.S. have had zero formal bilateral sessions. The 25% auto tariff is not affected by the outcome. Nothing changes at midnight tonight for your shop.",
    sourceUrl: "https://www.cbc.ca/news/canada/toronto/cusma-talks-checkpoint-businesses-unions-9.7250899",
  },
  {
    icon: "🌉",
    text: "NPR took the Gordie Howe Bridge story national in the U.S. on Sunday — the Moroun donor angle is now in the U.S. national conversation. War on the Rocks also reported the Pentagon unilaterally suspended the 86-year-old Permanent Joint Board on Defense. The bridge delay and the PJBD suspension are part of the same pattern.",
    sourceUrl: "https://www.wrkf.org/npr-news/2026-06-28/a-bridge-to-canada-may-be-blocked-by-the-trump-administration",
  },
  {
    icon: "🤝",
    text: "Unifor-Ford bargaining is now in Day 8 in downtown Toronto. The July 10 tentative deal target is 11 days away. Ford has not yet publicly responded to Unifor's production commitment demand for Windsor Assembly and Oakville. A work stoppage at Windsor Assembly would affect Bronco Sport and Lincoln Corsair parts availability within days.",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-launches-negotiations-ford-motor-company",
  },
  {
    icon: "📊",
    text: "June auto sales data due Wednesday from all major OEMs. Watch for: Honda Canada (Alliston production impact), Toyota Canada (Woodstock RAV4 retool), Stellantis Canada (Brampton idle), GM Canada (CAMI idle), Ford Canada (Super Duty Oakville launch). The 25% tariff has inflated new vehicle prices by $5,000–$15,000 depending on model.",
    sourceUrl: "https://www.bankofcanada.ca/rates/interest-rates/canadian-interest-rates/",
  },
];

const tipOfTheDay = {
  title: "CUSMA Review Day Changes Nothing for Your Shop — Here's What Actually Matters This Week",
  text: "The July 1 CUSMA review will not remove the 25% auto tariff. The Section 232 auto tariff is a separate legal instrument and is not part of CUSMA. Whatever happens today — 16-year renewal, zombie CUSMA, or withdrawal notice — the 25% tariff on vehicles and non-CUSMA-compliant parts remains in place. The dates that actually matter this week: July 10 (Unifor-Ford deadline) and July 24 (Section 122 tariff expiry). Watch for a White House proclamation between now and July 24 on what replaces the Section 122 surcharge.",
};

const quoteOfTheDay = {
  text: "My advice has been, stay calm, hold the line, don't lose your nerve.",
  author: "Lana Payne",
  title: "Unifor National President — on CUSMA Review Day, June 29, 2026",
};

const rideOfTheDay = {
  name: "1969 Pontiac GTO Judge — Carousel Red, Ram Air IV, Ontario-Plated",
  description: "The 1969 Pontiac GTO Judge was built to answer a simple question: what happens when Pontiac engineers stop worrying about being reasonable? The Judge was introduced in January 1969 as a response to the Plymouth Road Runner — a stripped-down, high-performance muscle car that proved you didn't need luxury to go fast. Pontiac's answer was the Judge: a GTO with the Ram Air III or Ram Air IV engine, a rear spoiler, side stripes, and a name borrowed from a Laugh-In catchphrase. The Ram Air IV produced 370 horsepower officially — but dyno testing consistently showed 400 or more at the flywheel. The Carousel Red paint was the signature Judge colour in 1969, though the car was available in any GTO colour. The Judge was not subtle. The rear spoiler was functional. The stripes were loud. The name was printed on the front fenders. Pontiac sold 6,725 Judges in 1969 — a significant number, but still a fraction of total GTO production. The Ram Air IV cars are the most sought-after, with documented examples selling for $80,000–$120,000 depending on condition. An Ontario-plated Carousel Red Ram Air IV Judge is the kind of car that stops traffic at a show — and stops hearts on a highway. Here comes the Judge.",
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
                {["CUSMA REVIEW DAY", "BRIDGE GOES NATIONAL", "RATE HOLD #5", "GTO JUDGE"].map((tag) => (
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
              alt="CUSMA Review Day: July 1 Countdown and Gordie Howe Bridge Goes National on NPR — Baywash Daily Briefing Edition No. 53"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Monday Edition — No. 53 — CUSMA Review Day</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                CUSMA Review Day Is Here — "A Checkpoint, Not a Cliff" — NPR Takes the Bridge Story National
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
