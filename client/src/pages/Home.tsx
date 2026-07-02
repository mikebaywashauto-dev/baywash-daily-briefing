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

const BRIEFING_NUMBER = 56;
const BRIEFING_DATE = "July 2, 2026";
const BRIEFING_DAY = "Thursday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/zllohzgyRaBNxpXy.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/fIOJAuwNjaUunaeE.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/uAHNliYGQAMiXHQT.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/jmaBTUbbsvtUbGdv.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ZNuNHmmNQuMbKbjk.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "CUSMA DAY-AFTER / U.S. DEMANDS / NO TALKS SCHEDULED",
    tagColor: "#b91c1c",
    headline: "Day After CUSMA Sunset: U.S. Says 'Canada Is In a Different Position' — No Canada-U.S. Negotiating Dates Set — Mexico Has Round 3 on July 20",
    summary: "The day after the U.S. triggered the CUSMA sunset clause, the picture for Canada is coming into sharper focus — and it is not encouraging. A senior Trump administration official who briefed reporters on Wednesday drew a pointed distinction between Mexico and Canada. 'Mexico, although we have many challenges in our relationship, including on trade, they do understand the administration's tariff policies. In many ways they've been constructive in this,' said the official. 'Canada is in a different position,' the official added, accusing Ottawa of not addressing 'many of the non-tariff barriers and trade challenges' that the U.S. has raised. The contrast is stark: Mexico has a third formal round of negotiations with the U.S. scheduled for the week of July 20. Canada has no negotiating dates scheduled at all. U.S. Trade Representative Jamieson Greer 'keeps an open line' to Canadian Trade Minister Dominic LeBlanc, but no formal sessions are on the calendar. The U.S. has cited three specific grievances against Canada: (1) Canada's January 2026 deal with China reducing tariffs on Chinese EVs to 6.1% for 49,000 vehicles annually — a deal that U.S. officials say undermines CUSMA's rules of origin, designed to keep non-market economies from using Canada as a backdoor into North America; (2) Canada's failure to enforce its forced-labour import ban — the USTR concluded in June that Canada has formally barred only 2 suspect shipments since 2020, compared to more than 6,300 the U.S. denied in 2024 alone; (3) Canada's dairy supply management system, which the U.S. argues creates a loophole in CUSMA's dairy provisions. The U.S. is also proposing a 10% tariff on Canadian goods not covered by CUSMA, with hearings beginning July 7. Canada's effective tariff rate on autos — even with the 25% Section 232 tariff — is approximately 10–12%, comparable to what Europe accepted after agreeing to blanket tariffs, according to University of Toronto economist Joseph Steinberg. Canada's exports to the U.S. fell 5.8% in 2025. The Bank of Canada projects GDP will finish 2026 roughly 1.5% lower than its pre-tariff trajectory. Canada's economy grew just 0.7% in 2026 per Deloitte's summer outlook.",
    whyItMatters: "The 'Canada is in a different position' comment from a senior U.S. official is the most important sentence to come out of the CUSMA review — and it was buried in the day-after coverage. It means Canada is not just behind Mexico in the negotiating queue — Canada is in a different category entirely. Mexico is having substantive talks with the U.S. about rules of origin, auto content, and tariff rates. Canada is not. No dates are scheduled. The practical implication for shop owners: the tariff environment is not going to change in the near term. The 25% Section 232 auto tariff, the tariffs on steel and aluminum, and the elevated parts costs are not going away before the U.S. midterms in November 2026 at the earliest — and more likely not until 2027. Plan your business accordingly. The shops that are building customer loyalty, investing in efficiency, and managing their parts costs proactively will be the ones that survive and thrive in a sustained tariff environment. The shops that are waiting for the tariffs to go away are going to be waiting for a long time.",
    source: "CBC News / The Hub / APCO Worldwide — July 1–2, 2026",
    sourceUrl: "https://www.cbc.ca/news/world/cusma-usmca-trump-extension-renewal-9.7255204",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "SECTION 122 / TARIFF EXPIRY / SECTION 301 INCOMING",
    tagColor: "#b45309",
    headline: "Section 122 Tariff Expires July 24 — 22 Days — U.S. Replacing It With Section 301 Forced-Labour Tariffs of 10–12.5% — What Changes and What Doesn't",
    summary: "The 10% Section 122 tariff — the White House's legal workaround after the Supreme Court struck down the IEEPA reciprocal tariffs in February — expires on July 24, 2026. That is 22 days from today. The Section 122 tariff was imposed under the Trade Act of 1974 and is limited to 150 days, which is why it expires on July 24. When it expires, the tariff does not simply disappear. The U.S. Trade Representative has already proposed replacement tariffs of 10–12.5% under Section 301 of the Trade Act, targeting 60 economies on forced-labour grounds. These Section 301 tariffs are designed to be the permanent replacement for the Section 122 tariff wall. The USTR concluded in June that Canada is 'failing to effectively enforce' its forced-labour import ban — a finding that makes Canada a direct target for the Section 301 forced-labour tariffs. The Section 301 hearings begin July 7. The timeline is tight: the USTR needs to complete the hearing process and publish final rates before July 24 for the tariff wall to remain seamless. APCO Worldwide trade analysts say the administration's next move is 'not a retreat but a shift to a more durable Section 301 tariff architecture.' The 25% Section 232 auto tariff is not affected by any of this — it operates on a separate legal track and is not expiring. For Canadian auto parts exporters and importers, the practical question is whether the Section 301 tariff rate will be higher or lower than the current 10% Section 122 rate. The proposed range is 10–12.5%. The USTR has indicated it may adjust rates for individual countries based on pre-negotiation. Canada's forced-labour enforcement record — 2 shipments formally barred since 2020 versus 6,300 by the U.S. in 2024 alone — gives the U.S. maximum justification to apply the full 12.5% rate to Canada.",
    whyItMatters: "The Section 122 expiry on July 24 is the most immediately consequential tariff date for Canadian shop owners — more immediate than the CUSMA 10-year countdown. Here is what you need to know: The 10% tariff on Canadian goods not covered by CUSMA is not going away. It is being replaced by a Section 301 forced-labour tariff of 10–12.5%. The rate may go up slightly. The legal basis is changing from a temporary emergency measure to a more permanent trade enforcement tool. For your shop, the practical impact is the same: imported parts, tools, and equipment from the U.S. or routed through the U.S. tariff system will continue to carry elevated costs. The July 7 USTR hearings are worth watching — if Canada makes a credible commitment to improve its forced-labour enforcement, it may negotiate a lower rate. But given the current state of Canada-U.S. relations, that is not the base case. Budget for 10–12.5% tariff costs on non-CUSMA goods through at least the end of 2026.",
    source: "APCO Worldwide / Holland & Knight / Flexport — June–July 2026",
    sourceUrl: "https://apcoworldwide.com/blog/qa-july-is-a-big-month-for-trade-whats-coming-next/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "UNIFOR / FORD / BARGAINING DAY 11 / 8 DAYS TO DEADLINE",
    tagColor: "#15803d",
    headline: "Unifor-Ford Bargaining: Day 11 — 8 Days to July 10 Deadline — Windsor Assembly and Oakville Production Commitments at the Heart of Talks",
    summary: "Unifor's bargaining team was at the table with Ford Motor Company on Canada Day — Day 10 of negotiations — and is back today for Day 11. The July 10 strike deadline is 8 days away. The union is bargaining for more than 5,000 auto workers at Ford's Canadian operations, including Windsor Assembly (Bronco Sport, Lincoln Corsair) and Oakville Assembly (Ford Super Duty trucks). The core of Unifor's demands is production security: explicit commitments from Ford to maintain and expand Canadian production in the context of the 25% auto tariff, the CUSMA sunset, and the broader North American trade uncertainty. Unifor president Lana Payne has called these the 'most consequential' auto negotiations in the union's history. The union is also seeking wage increases to offset inflation — Canada's CPI was 3.2% in May 2026 — and improvements to the pension and benefits package. Ford has not publicly responded to specific demands. The pattern in Detroit Three bargaining is typically for the lead company — Ford in 2026 — to set the template that GM and Stellantis then follow. A work stoppage at Windsor Assembly would immediately affect production of the Bronco Sport and Lincoln Corsair, both of which are sold in the U.S. market. Under the 25% auto tariff, a work stoppage at Windsor would not provide Ford with a tariff-free alternative — U.S.-built vehicles face the same market dynamics. The economic pressure on both sides to reach a deal before July 10 is significant. A tentative agreement, if reached, would be subject to ratification by Unifor members. The ratification vote typically takes 5–7 days after a tentative agreement is announced. Watch for a framework agreement announcement in the next 72 hours — the final push in Detroit Three bargaining typically happens in the last 3–4 days before the deadline.",
    whyItMatters: "The Unifor-Ford outcome will set the wage and benefits pattern for all Detroit Three Canadian operations in 2026. Here is why it matters to your shop: First, if Unifor wins significant wage increases, it creates upward pressure on wages across the Ontario automotive ecosystem — including independent shops. Your technicians will be watching what Unifor members get. If you are not already benchmarking your compensation against the local market, now is the time. Second, a work stoppage at Windsor Assembly would affect parts availability within days. The Bronco Sport and Lincoln Corsair share platforms and components with other Ford vehicles. If you service Ford vehicles, monitor the bargaining closely and consider whether to build a small buffer of common Ford parts before July 10. Third, the production commitments Unifor extracts from Ford will signal how committed Ford is to Canadian manufacturing in the tariff era. If Ford makes strong commitments to Windsor and Oakville, it is a positive signal for the Canadian auto supply chain. If Ford hedges or offers weak language, it may signal a longer-term shift of production to the U.S.",
    source: "Unifor Canada / CBC News / refdesk.ca — July 1–2, 2026",
    sourceUrl: "https://refdesk.ca/blog/unifor-ford-detroit-three-auto-bargaining-july-10-2026-deadline-canadian-autoworkers-cusma-tariffs-guide",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🇺🇸",
    text: "U.S. USTR hearings on Section 301 forced-labour tariffs begin July 7 — 5 days from today. Canada is specifically named as a target after the USTR found Canada 'failing to effectively enforce' its forced-labour import ban. The proposed rate is 10–12.5%. These tariffs would replace the expiring Section 122 tariff on July 24. Watch for a White House proclamation this week.",
    sourceUrl: "https://apcoworldwide.com/blog/qa-july-is-a-big-month-for-trade-whats-coming-next/",
  },
  {
    icon: "📉",
    text: "Canadian wholesale vehicle values declined 0.35% in the week ending June 27, with nearly half of all segments showing changes of more than $100, according to Canadian Black Book. The decline has been 'slightly steeper' in recent weeks. Used vehicle prices remain elevated vs. 2024 but are softening. This is a tailwind for repair-vs-replace decisions — customers are less likely to trade in when used vehicle values are declining.",
    sourceUrl: "https://www.autoremarketing.com/arcanada/decline-in-canadian-wholesale-vehicle-values-gets-slightly-steeper/",
  },
  {
    icon: "🏭",
    text: "AutoCanada expanded its collision repair footprint to Thunder Bay, Ontario, acquiring Mascarin Collision Centre — the dealer group's first collision repair presence in the city. AutoCanada has been aggressively building its collision repair business across Ontario and Alberta. The consolidation of collision repair into dealer group networks is a long-term competitive pressure on independent collision shops.",
    sourceUrl: "https://www.autoremarketing.com/arcanada/autocanada-expands-collision-repair-business-to-thunder-bay/",
  },
  {
    icon: "🏛️",
    text: "Canada's GDP is projected to grow just 0.7% in 2026, per Deloitte's summer outlook — the weakest growth in decades outside of the COVID recession. The Bank of Canada projects GDP will finish 2026 roughly 1.5% lower than its pre-tariff trajectory. Youth unemployment is at 13.4%. Household debt is the highest in the G7. The economic environment for discretionary spending — including automotive service — is under pressure.",
    sourceUrl: "https://thehub.ca/2026/07/01/cusma-renewal-deadline-passed-u-s-tariffs-remain-what-it-means-for-canada-and-its-economy/",
  },
];

const tipOfTheDay = {
  title: "Build a 30-Day Parts Buffer Before July 10",
  text: "With the Unifor-Ford deadline 8 days away and Section 122 expiring July 24, the next 3 weeks carry real supply chain risk. Consider building a 30-day buffer of your highest-velocity Ford parts — filters, brakes, belts, common wear items — before July 10. A work stoppage at Windsor Assembly would not immediately affect parts supply, but it would signal broader supply chain stress. The cost of carrying an extra 30 days of common parts is modest compared to the cost of a parts shortage.",
};

const quoteOfTheDay = {
  text: "Canada is in a different position. They have not addressed many of the non-tariff barriers and trade challenges that we have raised.",
  author: "Senior Trump Administration Official",
  title: "Briefing reporters on the CUSMA review outcome — July 1, 2026 (speaking on condition of anonymity)",
};

const rideOfTheDay = {
  name: "1969 Pontiac GTO Judge — Carousel Red, 'The Judge' Decals, Ontario-Plated",
  description: "On a day when Canada is being told it is 'in a different position' in trade negotiations, the Ride of the Day is a car that never apologized for what it was: the 1969 Pontiac GTO Judge. The Judge was Pontiac's answer to the critics who said the GTO had gone soft — too comfortable, too refined, not enough muscle. So Pontiac stripped it back, added the Ram Air III 400 cubic inch V8 producing 366 horsepower, bolted on a rear spoiler, painted it in colours that made your eyes hurt, and called it The Judge. The name came from a Laugh-In sketch — 'Here come de judge' — and it stuck. The Judge was never subtle. Carousel Red with black stripes and the psychedelic 'The Judge' decal on the front fender is the definitive spec. It is a car that says exactly what it is, without qualification. In a week when Canada is being told to get in line and wait its turn, there is something satisfying about a car that never waited for anyone's permission. Documented Judge hardtops in Carousel Red with the Ram Air III engine trade for $85,000–$120,000 at auction. The ones with the original window sticker go first.",
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
                {["CANADA IN DIFFERENT POSITION", "SECTION 122 EXPIRY", "UNIFOR-FORD DAY 11", "GTO JUDGE"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Day After CUSMA Sunset</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Canada in a different position — No Canada-U.S. talks scheduled — Unifor-Ford Day 11 — Section 122 expires July 24 — Baywash Daily Briefing Edition No. 56"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Day After CUSMA Sunset — Edition No. 56 — July 2, 2026</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                'Canada Is In a Different Position' — No Talks Scheduled — Section 122 Expires in 22 Days
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — The Judge</span>
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
