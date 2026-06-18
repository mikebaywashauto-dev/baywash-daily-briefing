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

const BRIEFING_NUMBER = 42;
const BRIEFING_DATE = "June 18, 2026";
const BRIEFING_DAY = "Thursday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/SDoRktnOvnXGdXmV.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/optSsdTmsfSLiHcJ.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/yQLoeptYquKwmepV.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ELxlDnsBfxJJvWyj.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/puhHBsSyClZLbIES.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "CUSMA / TRUMP",
    tagColor: "#b91c1c",
    headline: "Trump Says He'd 'Rather Not' Have CUSMA — Prefers It 'Terminated' — But He Can't Kill It Alone",
    summary: "The most alarming headline of the week came not from a negotiating table but from a tarmac. Speaking to reporters at Paris Orly Airport as he boarded Air Force One after the G7 summit, U.S. President Donald Trump said: 'I would rather not have the agreement, but I may sign it' and 'I view it as possibly expiring immediately.' He also said he only signed CUSMA in his first term to escape NAFTA, which had no U.S. withdrawal mechanism. 'We do better without that agreement,' Trump said. But here is the legal reality that trade lawyers are repeating this morning: CUSMA cannot be unilaterally terminated. Any country must give six months written notice to withdraw. CUSMA runs until 2036. July 1 is a mandatory review window — not an expiry date. Christopher Sands, director of Johns Hopkins University's Center for Canadian Studies, described July 1 as 'like the moment in a poker game where the players lay their cards on the table.' Each country indicates whether they want to renew for 16 years, withdraw entirely, or neither. Withdrawal is the only unilateral option — and it requires six months notice. The practical outcome if no renewal is agreed on July 1: CUSMA enters annual rolling reviews for up to 10 years. It stays in place. The trade deal continues. Official Canada-U.S. talks have not even formally started. U.S.-Mexico Round 2 talks are already underway. Canada is still waiting for its first formal negotiating session with Washington. U.S. Trade Representative Jamieson Greer has said there are 'pillars' of CUSMA that work well and that he would be open to two separate bilateral agreements. Canada-U.S. Trade Minister Dominic LeBlanc met Greer on the G7 sidelines Tuesday and said talks are 'not a one-way conversation.' The next step: Canada needs to get to the formal negotiating table before July 1.",
    whyItMatters: "Trump's 'terminated' comment is the most significant CUSMA signal since the tariff war began — but it is important to understand what it actually means. Trump cannot terminate CUSMA alone. He would need to give six months notice, which would take the U.S. to January 2027 at the earliest. Congress would likely push back. U.S. agriculture groups, auto manufacturers, and retailers are all lobbying hard for CUSMA renewal. The more likely scenario: July 1 passes without a renewal agreement, CUSMA enters annual reviews, and negotiations continue through 2026 and into 2027. For Canadian shop owners, the practical implication is this: the 25% auto tariff stays in place regardless of what happens on July 1. CUSMA renewal does not automatically remove the Section 232 sectoral tariffs on autos, steel, and aluminum — those are separate. What matters is whether Canada can negotiate a package deal that includes tariff relief as part of a broader CUSMA renewal. That negotiation has not formally started. Watch for LeBlanc to announce a formal negotiating session with Greer in the next two weeks.",
    source: "Global News / Canadian Press — June 17, 2026",
    sourceUrl: "https://globalnews.ca/news/11910284/donald-trump-cusma-terminated/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CRITICAL MINERALS / G7",
    tagColor: "#1d4ed8",
    headline: "Canada Leaves G7 with $5B in Critical Minerals Deals — 13 New Partnerships with 8 Countries — The Auto Sector Connection",
    summary: "The real G7 deliverable for Canada was not the CUSMA hot mic — it was the critical minerals haul. Canada secured 13 new partnerships and initiatives through the Critical Minerals Resilience and Production Alliance, unlocking more than $5 billion in capital investment across the Canadian critical minerals value chain. The key deals: German company RCT Solutions will partner with Canada's Sio Silica for a high-purity silica project and solar manufacturing hub in Manitoba; Japanese Sumitomo Corporation will partner with Canada's Ucore Rare Metals to supply rare earths for magnet makers across Japan and North America; Italian Eni is investing in Nouveau Monde Graphite's Matawinie Mine in Quebec; French Schneider Electric will partner with Torngat Metals for rare earths in Quebec; Japanese Hanwa will partner with KAP Minerals for phosphate and rare earths in Ontario. France, Germany, Italy, and Korea will stockpile Canadian critical minerals. Canada also announced its first EU SAFE initiative procurement — Montréal's Marconi Technologies will build ORION tactical radios for Poland's Cyber Command. And Canada launched negotiations to buy Italian M-346 advanced jet trainer aircraft from Leonardo. Carney held bilateral meetings with Germany, India, Italy, Korea, Ukraine, the UAE, and the EU. Carney's quote: 'Canada is showing up — not only with the strength of our values, but with the value of our strength.' The critical minerals deals are directly relevant to the auto sector: EV battery supply chains depend on lithium, graphite, rare earths, and phosphate — all of which Canada is now positioning to supply to European and Japanese partners. This is Canada's long game: if the U.S. relationship deteriorates, Canada will have alternative buyers for its critical minerals.",
    whyItMatters: "The critical minerals deals matter to Canadian shop owners for two reasons. First, they signal that Canada is building leverage for the CUSMA negotiations. The more countries that depend on Canadian critical minerals, the more pressure there is on the U.S. to keep Canada as a partner rather than an adversary. Second, the EV battery supply chain is directly relevant to the future of Canadian auto production. Honda's $15B EV value chain investment — currently suspended — depends on Canadian graphite, lithium, and rare earths. If Canada can secure European and Japanese buyers for these minerals, it creates the economic case for Honda, Toyota, and others to restart their Canadian EV investments. The Sumitomo-Ucore deal is particularly significant: Sumitomo is a major supplier to Toyota, and rare earths are essential for EV motors. If Canadian rare earths flow to Japanese automakers, that strengthens the case for Japanese automakers to maintain and expand Canadian production. Watch for Minister Joly's Japan visit this week — she is meeting Honda and Toyota executives. The critical minerals deals from G7 will be the backdrop for those conversations.",
    source: "Prime Minister's Office / Newswire — June 17, 2026",
    sourceUrl: "https://www.newswire.ca/news-releases/prime-minister-carney-secures-new-partnerships-in-defence-and-critical-minerals-at-the-2026-g7-leaders-summit-867582340.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "UNIFOR / LABOUR",
    tagColor: "#d97706",
    headline: "Unifor: 'If We Can't Resolve the Tariff Situation, It Will Have Massive Long-Term Implications' — Ford Talks Open Monday",
    summary: "Unifor National President Lana Payne gave the most direct public statement yet about the stakes of the 2026 contract talks in an interview with The Canadian Press published Thursday morning. 'This is the most consequential round of auto bargaining that we have done in our history,' she said. She compared it to the 2008-2009 financial crisis — when Chrysler and General Motors nearly collapsed and required billions in federal and provincial bailouts — and said this is 'on a much larger scale.' The reason: 'If we're unable to resolve the tariff situation and find a path forward here through the CUSMA review, it will have massive long-term implications for the Canadian auto industry.' Talks between Unifor and Ford Motor Company open Monday, June 22 in downtown Toronto. The current collective agreement covering nearly 19,000 workers at Ford, GM, and Stellantis expires at 11:59 p.m. on September 20. Unifor selected Ford as its primary bargaining target — as it did three years ago — because Ford is the 'most stable employer' of the three. Ford's Windsor engine plants 'haven't missed a beat' under the tariff regime, and Ford has an ongoing $5 billion Canadian investment commitment. The 25% tariff on all cars and trucks not built in the U.S. remains in place. CUSMA-compliant auto parts are currently exempt. Payne: 'Bargaining is one thing that is inside our control.' The union is not waiting for CUSMA to be resolved — it is using the contract to force production commitments regardless of the trade outcome. Key demands expected: production commitments for Windsor Assembly (Bronco Sport, Lincoln Corsair) and Oakville (retooling for EVs), job security guarantees tied to EV transition timelines, and cost-of-living adjustments linked to tariff-driven inflation.",
    whyItMatters: "Payne's 'massive long-term implications' statement is the most direct public acknowledgment yet that the Canadian auto sector is in genuine existential danger — not just facing a difficult negotiating environment. For shop owners, the Unifor-Ford talks are a leading indicator of the health of Canadian auto production. If Ford agrees to production commitments for Windsor Assembly and Oakville, that is a positive signal for the Canadian auto supply chain. If Ford hedges or refuses, it signals that Canadian production is being wound down — which has long-term implications for parts availability, shop economics, and the broader Canadian auto ecosystem. The contract talks also matter because they will put the 25% auto tariff on the public record as a direct threat to Canadian jobs. That political pressure may help LeBlanc's case in CUSMA negotiations. Watch for Unifor's opening demands on Monday, June 22 — they will tell you a great deal about how the union assesses the health of Canadian auto production. A work stoppage at Windsor Assembly would affect Bronco Sport and Lincoln Corsair parts availability within days.",
    source: "Canadian Press / Yahoo Finance Canada — June 18, 2026",
    sourceUrl: "https://ca.finance.yahoo.com/news/detroit-three-union-set-open-080010971.html",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🇯🇵",
    text: "Industry Minister Joly is in Japan today and tomorrow meeting Honda and Toyota executives. Honda and Toyota together represent 77% of Canadian auto assembly. Joly's pitch: Canada's critical minerals, stable investment environment, and skilled workforce. Honda's $15B EV value chain investment is currently suspended. Toyota's Cambridge and Woodstock plants are operating but under uncertainty. The G7 critical minerals deals — particularly the Sumitomo-Ucore rare earths partnership — will be the backdrop for these conversations.",
    sourceUrl: "https://www.instagram.com/reel/DZs2-TNCiHM/",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge — still no opening date. The Toronto Sun's letters section today: 'How is the transportation of Canadian auto goods across the spanking new Gordie Howe bridge going to help us in U.S. trade when we are importing Chinese EVs?' The bridge was finished in December 2025. Canada paid $5.7 billion USD including the U.S. port of entry. Trump's team is demanding renegotiation of the operating agreement. The Ambassador Bridge remains the only Windsor-Detroit crossing. Every day of delay costs the corridor.",
    sourceUrl: "https://torontosun.com/opinion/letters/letters-to-the-editor-june-18-2026",
  },
  {
    icon: "📋",
    text: "CUSMA July 1 explainer: July 1 is NOT an expiry date. CUSMA runs to 2036. July 1 is the start of a mandatory review window. If no 16-year renewal is agreed, CUSMA enters annual rolling reviews for up to 10 years — it stays in place. Any country must give 6 months written notice to withdraw. Trump cannot terminate CUSMA alone. The 25% auto tariff is a separate Section 232 measure — it exists independently of CUSMA and will not be automatically removed by CUSMA renewal.",
    sourceUrl: "https://winnipeg.citynews.ca/2026/06/17/what-you-need-to-know-as-the-deadline-for-formally-extending-cusma-approaches/",
  },
  {
    icon: "🔧",
    text: "Used vehicle values up 8-12% in 2026 as new vehicle production uncertainty reduces supply. Canada's Used Car Week 2026 wrapped in Toronto yesterday. Key takeaway from dealers: customers are spending more on maintenance to extend vehicle life. Average repair order values at independent shops are up 15-20% year-over-year. The tariff environment is driving customers to keep vehicles longer — which is good for service revenue but increases demand for older parts and creates supply chain pressure.",
    sourceUrl: "https://www.instagram.com/p/DZp97THE2Nm/",
  },
];

const tipOfTheDay = {
  title: "The Empty Table: Canada-U.S. Formal Talks Haven't Started — What That Means for Your Shop",
  text: "The most important fact in today's briefing is not Trump's 'terminated' comment — it is that formal Canada-U.S. CUSMA negotiations have not started. U.S.-Mexico Round 2 talks are already underway. Canada is still waiting. That empty negotiating table means the 25% auto tariff will be in place for at least several more months regardless of what happens on July 1. Plan your parts procurement, pricing strategy, and customer communication accordingly. The tariff is not going away in July.",
};

const quoteOfTheDay = {
  text: "If we're unable to resolve the tariff situation and find a path forward here through the CUSMA review, it will have massive long-term implications for the Canadian auto industry.",
  author: "Lana Payne, Unifor National President",
  title: "Interview with The Canadian Press — June 18, 2026",
};

const rideOfTheDay = {
  name: "1970 Chevrolet Chevelle SS 454 LS6 — Cranberry Red, Ontario-Plated",
  description: "The 1970 Chevrolet Chevelle SS 454 with the LS6 engine option is widely regarded as the most powerful production muscle car ever built in the muscle car era. The LS6 produced 450 horsepower and 500 lb-ft of torque — officially. Chevrolet's engineers, constrained by insurance industry pressure, almost certainly underrated it. The actual output was closer to 500 horsepower. The 454 cubic inch big-block V8 was so large that it barely fit under the Chevelle's hood. The LS6 option cost $263 in 1970 — about $2,100 in today's money. For that, you got a car that would run the quarter mile in the low 13s. Today, an LS6 Chevelle in original condition is worth $150,000 to $300,000. On a day when Trump says he'd 'rather not' have CUSMA, when Canada's negotiating table is still empty, and when Unifor is warning of 'massive long-term implications,' the LS6 Chevelle is the right car for the moment: built in an era when North American auto manufacturing was the envy of the world, powered by an engine so large it barely fit, and worth more today than anyone imagined in 1970. The Ontario plate is a reminder that Canadian roads and Canadian shops kept these cars alive.",
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
                {["TRUMP / CUSMA", "$5B MINERALS", "UNIFOR MONDAY", "CHEVELLE SS 454"].map((tag) => (
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
              alt="Trump at Paris Orly Airport — Baywash Daily Briefing Edition No. 42"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Breaking</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Trump: "I'd Rather Not Have CUSMA" — Canada Leaves G7 with $5B Minerals Deals — Unifor Talks Open Monday
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
