/**
 * BAYWASH DAILY BRIEFING — Home.tsx
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 71;
const BRIEFING_DATE = "July 17, 2026";
const BRIEFING_DAY = "Friday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/VieFfnskVCbRhnKc.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/lncEfMJxcFMUddar.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/rDZJFqaGjacPBdYo.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/UvTUucxMsQYWcPYB.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ToDTWmTnoKYmiYjX.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "SECTION 122 / EXPIRES JULY 24 / SECTION 301 TAKES OVER / 7 DAYS",
    tagColor: "#b91c1c",
    headline: "Trump Racing to Rebuild Tariff Wall — Section 122 Expires July 24 — Section 301 Forced Labour Tariffs Take Over — 'They're Going to Raise the Tariff Wall Again'",
    summary: "The Trump administration is racing to replace its expiring Section 122 tariffs with more durable Section 301 levies before the July 24 deadline, according to a detailed Associated Press analysis published July 16. Section 122 of the Trade Act of 1974 authorizes the president to impose tariffs for only 150 days — Trump's expire on July 24. Congress is unlikely to extend them given voter discontent over the high cost of living ahead of the November 3 midterm elections. The administration turned to Section 301 — the same legal authority used to impose tariffs on China in Trump's first term — to replace the expiring Section 122 levies. The USTR proposed a two-tier structure: a 10 per cent additional duty on 16 countries including Canada, the EU, the UK, and Mexico; and 12.5 per cent on the remaining 44 countries including China, India, Japan, and Vietnam. Section 301 tariffs expire after four years but can be renewed, making them far more durable than Section 122. Trade lawyer Ryan Majerus of King & Spalding, a former trade official in both the Trump and Biden administrations: 'They're going to raise the tariff wall again.' Tariff revenue peaked at US$31.4 billion in October 2025, then plummeted after the Supreme Court struck down the IEEPA tariffs in February 2026. June 2026 saw a US$25.6 billion tariff revenue loss as refund cheques outpaced new collections. A second Section 301 investigation into alleged overproduction by 16 countries — including Canada — is still pending and is expected to propose additional tariffs after the November midterms. CUSMA-compliant goods remain exempt from the proposed Section 301 forced labour tariffs.",
    whyItMatters: "The tariff wall is not coming down on July 24. It is being rebuilt on a more durable legal foundation. Here is what that means for your shop. Section 122 was always a temporary measure — it was only authorized for 150 days. Section 301 tariffs can last four years and be renewed indefinitely. The practical effect is that the 10 per cent tariff environment on non-CUSMA goods is becoming permanent, not temporary. The exemption that matters most for Canadian automotive businesses is the CUSMA rules-of-origin exemption: parts that comply with CUSMA origin requirements are exempt from the proposed Section 301 forced labour tariffs. That exemption covers the vast majority of Canadian-made and Canadian-sourced parts. The risk is non-CUSMA parts — parts with significant Chinese content, parts sourced from non-CUSMA suppliers, or parts where the supplier has not verified CUSMA compliance. Those parts face a 10 per cent additional tariff starting July 24. The second Section 301 investigation into overproduction is the one to watch after the midterms. If that investigation results in additional tariffs, the cumulative effect on non-CUSMA parts could be significant. The practical action this week: contact your top three parts suppliers and ask about CUSMA compliance before July 24.",
    source: "BNN Bloomberg / Associated Press — July 16, 2026",
    sourceUrl: "https://www.bnnbloomberg.ca/tariffs/2026/07/16/trump-administration-races-the-clock-to-rebuild-us-tariff-wall-knocked-down-by-supreme-court/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CUSMA / U.S. WON'T GIVE CANADA CREDIT / GREER ASPEN / NO NEGOTIATIONS SCHEDULED",
    tagColor: "#1d4ed8",
    headline: "U.S. Won't Give Canada Credit for Concessions — USTR Greer at Aspen: 'That's Just Good Practice on Their Part' — No Canada-U.S. Negotiations Scheduled — Mexico Has Formal Talks July 20",
    summary: "The United States Trade Representative Jamieson Greer said Wednesday at the Aspen Security Forum that the Trump administration will not give Canada credit for dropping its digital services tax and rolling back its Online Streaming Act — two major concessions Ottawa made to try to restart trade talks. 'That's just good practice on their part,' Greer said. 'They don't really get credit for doing something bad and then undoing it.' Prime Minister Mark Carney dropped the digital services tax in June 2025, hours before payments from tech giants would have been due, in a bid to resume suspended trade talks. The effort briefly steadied the Canada-U.S. relationship, and a limited deal on some sector-specific tariffs appeared imminent last October — but the U.S. froze talks again after Trump was angered by an Ontario-funded ad quoting former president Ronald Reagan criticizing tariffs. Greer said he is in weekly contact with his Canadian counterparts but 'we just haven't seen a lot of movement.' He said that if Trump and Carney reach a personal understanding, 'I'm sure we can put together something that makes sense to get us over the hump.' He added: 'We're always going to trade some with Canada, just because they're there.' Mexico, by contrast, has formal CUSMA negotiations underway, with a U.S.-Mexico round scheduled for July 20 in Mexico City. Canada has no negotiating dates set. Greer repeated the Trump administration's claim that Canada and China were the only countries to retaliate after Trump imposed sweeping tariffs — a claim that Canada disputes. The sector-specific duties on autos, steel, and aluminum remain in place and Trump has shown no willingness to shift his stance.",
    whyItMatters: "USTR Greer's statement at Aspen is the clearest signal yet that Canada is not going to get a trade deal before the November 2026 midterm elections. The U.S. is not giving Canada credit for the concessions it has already made. Mexico has formal negotiations underway. Canada does not. The auto tariffs — 25 per cent on non-CUSMA vehicles, 25 per cent on non-CUSMA auto parts — are not going anywhere before November at the earliest. The practical implication for your shop is straightforward: plan your parts sourcing and pricing strategy around a 25 per cent tariff environment through at least the end of 2026. The one piece of good news in Greer's statement is that he spoke optimistically about a future agreement and said the talks need to happen at the highest levels. That suggests a Carney-Trump summit is the most likely path to a deal — and those conversations are happening, even if slowly. But 'slowly' means your shop needs to operate as if the tariffs are permanent, not temporary.",
    source: "BNN Bloomberg / Canadian Press — July 16, 2026",
    sourceUrl: "https://www.bnnbloomberg.ca/business/politics/2026/07/16/canadas-concessions-have-meant-little-to-trump-administration-us-trade-czar/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "UNIFOR-FORD / RATIFICATION VOTE DAY 1 / JULY 17–19 / 54% PRELIMINARY ENDORSEMENT",
    tagColor: "#15803d",
    headline: "Unifor-Ford Ratification Vote Begins Today — July 17–19 — 54% Preliminary Endorsement — Oakville Workers Laid Off 3 Years — Results Released After Final Vote July 19",
    summary: "Unifor members at Ford Canada began voting today on the tentative three-year collective agreement reached Saturday night, July 11. Ratification meetings are scheduled for July 17, 18, and 19, with results released following the final vote on July 19. The agreement covers 5,150 workers across Windsor Assembly, Oakville Assembly, and Ford's Windsor engine plants. A preliminary member survey showed 54 per cent support — a narrow majority that mirrors the 54 per cent vote in the 2023 ratification, which also saw a majority rejection in Oakville and an outright rejection by skilled trades across Ford's entire Canadian operation. The tentative agreement includes a 15 per cent general wage increase over three years and production commitments for Windsor Assembly (Bronco Sport, continuing) and Oakville Assembly (Super Duty, beginning in approximately five months, contingent on a $465 million federal government investment). Oakville workers have been laid off for almost three years — since the scuttled electric vehicle retooling announced in the 2023 contract. The Unifor bargaining committee released only a 'Highlights' summary of the agreement before the vote, not the full contract — an unusual practice that drew criticism from rank-and-file members. If ratified, the agreement sets the 15 per cent wage pattern that GM and Stellantis will be expected to match in the next round of bargaining, which begins after the Ford ratification result. If rejected, the parties return to the table and strike risk increases significantly.",
    whyItMatters: "The Ford ratification vote this weekend is the most consequential labour event in Canadian auto manufacturing right now. Here is what each outcome means for your shop. If the deal is ratified: Windsor Assembly and Oakville Assembly are secure. Ford parts supply stabilizes. The 15 per cent wage pattern is set. GM and Stellantis bargaining begins next week. Begin drawing down your Ford parts buffer over 30 days. If the deal is rejected: the parties return to the table. Strike risk increases. Windsor Assembly could go dark within 48 hours of a strike notice. Maintain your 30-day Ford parts buffer and consider extending it to 45 days. The 54 per cent preliminary endorsement is a narrow majority — the same margin as 2023, when Oakville rejected the deal. The critical question is whether Oakville workers, laid off for almost three years, will accept a deal that promises Super Duty production in 'approximately five months' contingent on a federal government investment. Watch Unifor's social media channels for results on July 19. The result will be announced publicly after the final vote.",
    source: "CBC Windsor / Automotive News Canada / WSWS — July 12–17, 2026",
    sourceUrl: "https://www.cbc.ca/news/canada/windsor/ratification-vote-set-for-later-this-week-after-unifor-ford-reach-tentative-3-year-deal-9.7267816",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🌉",
    text: "Gordie Howe Bridge opens July 27 — 10 days. Trade war could cut annual traffic by 500,000 vehicles vs. pre-tariff projections (Detroit News, July 15). Windsor-Detroit corridor: $350M/day. Call your Michigan and Ohio parts suppliers this week: will they route commercial shipments through the new bridge? Modern customs facility means faster transit times for commercial traffic.",
    sourceUrl: "https://www.detroitnews.com/story/business/2026/07/15/trump-trade-war-with-canada-could-stifle-gordie-howe-bridge-traffic/90868707007/",
  },
  {
    icon: "⚖️",
    text: "Section 301 forced labour tariff final determination: July 21–23. Section 122 expiry: July 24. CUSMA-compliant goods are exempt from Section 301. Ask your top 3 parts suppliers about CUSMA compliance status this week. Non-CUSMA parts with Chinese content are most exposed to the 10% proposed tariff.",
    sourceUrl: "https://www.mltaikins.com/insights/what-new-proposed-u-s-forced-labour-tariffs-mean-for-canadian-employers/",
  },
  {
    icon: "🗳️",
    text: "Ford ratification vote: July 17–19. Results released July 19. 54% preliminary survey endorsement. 15% wage increase over 3 years. Windsor Assembly and Oakville secured. A yes vote sets the GM/Stellantis pattern. A no vote returns parties to the table — strike risk increases. Watch Unifor social media for results Sunday evening.",
    sourceUrl: "https://www.autonews.com/manufacturing/automakers/anc-unifor-ford-tentative-agreement-0711/",
  },
  {
    icon: "🏭",
    text: "Stellantis Brampton and Windsor still idle. Unifor bargaining begins after Ford ratification result July 19. 15% wage pattern from Ford deal is the floor. Production commitments for Brampton (no current product) and Windsor (Pacifica) are the core demand. Begin building 30-day Stellantis parts buffer in first week of August.",
    sourceUrl: "https://autotalks.uniforautohub.ca/",
  },
];

const tipOfTheDay = {
  title: "Ask Your Top 3 Suppliers About CUSMA Compliance Before July 24",
  text: "Section 301 forced labour tariffs take effect July 24 — the same day Section 122 expires. CUSMA-compliant parts are exempt. Non-CUSMA parts with Chinese content face a 10% additional tariff. Contact your top three parts suppliers this week and ask: are your parts CUSMA-compliant? Do any contain Chinese-sourced components not covered by CUSMA rules of origin? If a supplier cannot answer, that is a supply chain risk you need to manage before July 24.",
};

const quoteOfTheDay = {
  text: "They're going to raise the tariff wall again.",
  author: "Ryan Majerus",
  title: "Trade Lawyer, King & Spalding — Former U.S. Trade Official — July 16, 2026",
};

const rideOfTheDay = {
  name: "1970 Dodge Challenger T/A 340 Six Pack — Plum Crazy Purple, 340 V8, 290 hp, Ontario-Plated",
  description: "The Trans Am racing homologation car. In 1970, Dodge built the Challenger T/A to meet SCCA Trans-American Sedan Championship homologation requirements — a minimum of 2,500 street cars had to be built for every race car entered. Only 2,399 were produced, making it one of the rarest Challengers ever built. The 340 cubic inch V8 breathed through three two-barrel Holley carburetors on an Edelbrock intake manifold — the same Six Pack setup used on the 440 in the Road Runner and Super Bee. Factory-rated at 290 horsepower, actual output was closer to 360. Flat black fibreglass hood scoop. Rear spoiler. Side exhaust pipes. Plum Crazy Purple — a colour so vivid it was almost offensive. Ontario licence plate reads 71 SIXPAK. Parked on a rural Ontario highway at golden hour, hood open, three Holley carbs gleaming in the afternoon light. Only 2,399 built. $60,000 to $120,000 at auction depending on documentation. The T/A never won a Trans-Am race — but it looked like it could.",
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
                {["SECTION 122: 7 DAYS", "FORD VOTE: TODAY", "GORDIE HOWE: 10 DAYS", "'70 CHALLENGER T/A"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Friday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Section 122 Expires July 24 — 7 Days — Greer Aspen No Credit for Canada — Unifor-Ford Ratification Vote Day 1 — Baywash Daily Briefing Edition No. 71"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 71 — Friday, July 17, 2026 — 7 Days to Section 122 Expiry / Ford Vote Today</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Tariff Wall Being Rebuilt — Greer: No Credit for Canada — Ford Ratification Vote Begins Today
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Dodge Challenger T/A 340 Six Pack</span>
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
