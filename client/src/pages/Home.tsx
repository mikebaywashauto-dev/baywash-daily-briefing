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

const BRIEFING_NUMBER = 48;
const BRIEFING_DATE = "June 24, 2026";
const BRIEFING_DAY = "Wednesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/UIhWGrmLRGqZSOfN.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/yhZXVSnNLPKEVSfi.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/OazKYiXZYPjeaHOw.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/BisCLjOytXpigZsf.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/TRqDVlkezUSdivqg.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "GORDIE HOWE BRIDGE / MOROUN MONEY",
    tagColor: "#b91c1c",
    headline: "Gordie Howe Bridge: The Moroun Money Trail — \"Trump Doesn't Need $1M, But He Listens to It\" — Canada Paid $6.4B, Still No Opening Date",
    summary: "The Windsor Star's Randy Essex — retired Detroit Free Press, 45-year career — published the most detailed account yet of the political money behind the Gordie Howe Bridge delay. Matthew Moroun, whose family owns the 96-year-old Ambassador Bridge, gave $1 million to a Trump-aligned PAC in January 2026. Moroun met with Commerce Secretary Howard Lutnick the day before Trump's February pronouncement blocking the bridge. Former Michigan Governor and U.S. Ambassador to Canada James Blanchard told Essex: 'Delays are merely a gift to the Moroun family, which has probably made hundreds of millions' by stalling the opening through litigation and lobbying. Blanchard says Governor Whitmer negotiated the June 12 ribbon-cutting with Trump's Chief of Staff Susie Wiles — but Lutnick 'felt cut out' and again urged Trump to halt the opening. Essex: 'I think the White House knows Howard Lutnick is a buffoon — but Trump listens to his distortions.' Republican Senate hopeful Mike Rogers (Detroit News, June 22) is now explicitly tying the bridge opening to Canada's Chinese EV tariff policy: 'I would use that leverage. Let's use this as an opportunity to push back on this Chinese car production issue that Canada has.' Rogers: 'This is the biggest existential threat we have to the American automobile business — Chinese-made cars.' The bridge cost Canada $6.4 billion — 100% Canadian-funded including the U.S. port of entry. Canada agreed to give Michigan half ownership and half the toll revenue after construction costs are recovered. Blanchard: 'We have the best deal we've ever had. If Trump wants money, he should get it from the Morouns.' There is no opening date. The Ambassador Bridge remains the only Windsor-Detroit crossing. Every day of delay costs the corridor an estimated $400M in trade.",
    whyItMatters: "The Gordie Howe Bridge delay has direct practical consequences for every shop owner in the Windsor-Essex region and every business that depends on the Windsor-Detroit trade corridor. Here is the breakdown: (1) The Ambassador Bridge carries approximately $400 million in cross-border trade every day. The Gordie Howe Bridge was designed to add capacity and redundancy — its absence means every truck, every parts shipment, and every worker crossing the border is subject to Ambassador Bridge congestion and toll pricing controlled by the Moroun family. (2) The Moroun family's political strategy is now explicit: use the bridge as leverage to keep Chinese EVs out of Canada. This means the bridge opening is directly tied to the outcome of CUSMA negotiations on the Chinese EV issue. If Canada makes concessions on Chinese EVs, the bridge may open. If Canada does not, it may remain closed indefinitely. (3) For shops in Windsor-Essex: parts delivery times from Michigan suppliers are longer than they should be. The redundancy that the Gordie Howe Bridge would provide — a second crossing, dedicated commercial lanes, a new Canadian port of entry — remains unavailable. (4) The political money story is important context for understanding why the bridge is closed. It is not a technical or regulatory issue. It is a political money issue. The solution is political, not bureaucratic.",
    source: "Windsor Star / Detroit News — June 22–23, 2026",
    sourceUrl: "https://windsorstar.com/opinion/money-at-the-centre-of-delay-in-opening-gordie-howe-bridge",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CUSMA / 7 DAYS / HOEKSTRA",
    tagColor: "#7c3aed",
    headline: "Canada and U.S. \"Not Anywhere Close\" on CUSMA — U.S. Ambassador Hoekstra — 7 Days to July 1 — And Carney Has Been Sidelined from 17 Government Deliberations",
    summary: "U.S. Ambassador to Canada Pete Hoekstra told CTV News Power Play on June 23 that Canada and the United States are 'not anywhere close' to a new CUSMA framework. Hoekstra: 'We still have a lot of work to do.' The July 1 trilateral meeting is confirmed as a virtual meeting — not a signing ceremony. Canada's position: sectoral tariff relief on autos (25%), steel (25%), and aluminum (25%) must be part of any deal. The U.S. position: 82% North American content (50% U.S.), digital services tax eliminated, dairy supply management opened, softwood lumber resolved, Chinese EVs capped, and defence spending increased. The gap between the two positions is enormous. Separately, the Toronto Star revealed June 23 that Prime Minister Mark Carney has been sidelined from at least 17 government deliberations because of corporate conflicts of interest stemming from his time as Governor of the Bank of England and CEO of Brookfield Asset Management. The Privy Council Office sent letters to a parliamentary committee confirming Carney recused himself from discussions of a $3.1 billion housing loan payout, the possible export of electricity to the United States, and the creation of this week's new nuclear energy plan. The conflicts are managed through 'screens' — formal recusal processes — but they mean Canada's Prime Minister cannot participate in some of the most consequential economic decisions facing the country. The electricity export discussion is directly relevant to CUSMA: electricity exports to the U.S. are one of Canada's most significant economic levers in the trade negotiation.",
    whyItMatters: "The 'not anywhere close' statement from the U.S. Ambassador is the most important CUSMA signal of the week. Here is what it means for your shop: (1) The 25% auto tariff is not going away on July 1. Plan your parts pricing, your labour rates, and your customer communication accordingly. The tariff is now a structural feature of the operating environment — not a temporary disruption. (2) The July 1 meeting is the beginning of a process, not the end of one. The most likely outcome is a 'zombie CUSMA' — annual rolling reviews with the 25% auto tariff remaining in place. Budget for this. (3) Carney's 17 recusals are a governance problem that affects Canada's negotiating capacity. The Prime Minister cannot participate in discussions about electricity exports to the U.S. — one of Canada's most powerful bargaining chips. This weakens Canada's negotiating position. (4) The U.S. demand for 82% North American content (50% U.S.) would fundamentally restructure the Canadian auto supply chain. If accepted, vehicles assembled in Canada would need to source 50% of their value from U.S. parts — which would reduce Canadian parts supplier revenue and potentially make Canadian assembly uneconomic. Watch for this demand to surface in the July 1 meeting.",
    source: "CTV News / Toronto Star — June 23, 2026",
    sourceUrl: "https://www.youtube.com/watch?v=lVjHsseAnFo",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "UNIFOR / FORD / JULY 10 DEADLINE",
    tagColor: "#1d4ed8",
    headline: "Unifor Sets July 10 Ford Deadline — \"It's Too Risky to Wait\" — Payne: \"We Can't Be a Nation That Only Digs Things Out of the Ground\"",
    summary: "Canadian autoworkers union Unifor set a bargaining deadline of July 10 for contract talks with Ford Motor Company, as the labour group seeks stability amid what Unifor President Lana Payne called a 'crisis' for members affected by layoffs, U.S. tariffs, and the ongoing CUSMA review. Contracts with the Detroit Three do not expire until September 20. Unifor chose Ford as the primary target because it is the only Detroit Three OEM that kept its Canadian commitments — Ford is moving forward with Super Duty production at Oakville Assembly Complex this year, despite tariff uncertainty. GM's CAMI plant in Ingersoll has been idle since October 2025 (end of BrightDrop production). Stellantis Brampton has been idle since end of 2023. Unifor is seeking a three-year contract that delivers: (1) job security with future product commitments; (2) enhanced pensions and retirement benefits; (3) wage increases; (4) strengthened income protections. Unifor Ford Master Bargaining Chair John D'Agnolo: 'We've worked through difficult issues before. We believe negotiating right here, right now, is the best option.' Ford spokesperson Said Deep: 'We look forward to constructive, good-faith discussions to reach a fair agreement with the goal of providing stability for our workforce, while securing the long-term competitiveness of our Canadian manufacturing operations.' Payne: 'It's too risky to wait. We have a lot of members who need answers.' She also referenced the 5 million vehicles imported into North America annually that are not built here — a direct reference to Chinese EVs. Payne: 'We can't just be a nation that takes things out of the ground and exports those things. We must also be a nation that builds things, and part of that also means getting a trade deal that works for us.'",
    whyItMatters: "The Unifor-Ford July 10 deadline matters to shop owners for several reasons. First, a work stoppage at Windsor Assembly would affect Bronco Sport and Lincoln Corsair parts availability within days — these vehicles share platforms with other Ford products, and a production halt creates ripple effects through the supply chain. Second, the pattern bargaining model means whatever Ford agrees to, GM and Stellantis must follow. If Ford agrees to production commitments for Oakville and Windsor, it sets a precedent that could reopen CAMI and Brampton — which would restore parts supply chain capacity and employment in those communities. Third, the July 10 deadline is strategically set before the July 1 CUSMA meeting changes the bargaining landscape. Unifor wants a deal in hand before the trade outcome is known — because a bad CUSMA outcome would give Ford leverage to demand concessions. Fourth, Payne's statement that 'we can't be a nation that only digs things out of the ground' is a direct challenge to the Globe and Mail's 'let the auto sector fade away' argument from June 22. The union is making a political argument, not just a labour argument. The outcome of Unifor-Ford bargaining will shape the political narrative around Canadian manufacturing for the next three years.",
    source: "Detroit News / Arcamax — June 22–23, 2026",
    sourceUrl: "https://www.arcamax.com/business/businessnews/s-4235265",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🌉",
    text: "The Gordie Howe Bridge has been finished and ready since Christmas 2025. Canada paid 100% of the $6.4B construction cost including the U.S. port of entry. Canada agreed to give Michigan half ownership and half the toll revenue after costs are recovered. Trump blocked the June 12 ribbon-cutting. Matthew Moroun gave $1M to a Trump PAC in January 2026. Commerce Secretary Lutnick met with Moroun the day before Trump's February pronouncement. Still no opening date.",
    sourceUrl: "https://windsorstar.com/opinion/money-at-the-centre-of-delay-in-opening-gordie-howe-bridge",
  },
  {
    icon: "🤝",
    text: "Unifor-Ford bargaining is now in Day 3 in downtown Toronto. The union led with job security demands on Day 1 — a signal that Unifor is genuinely worried about plant closures, not just wages. Ford has not yet publicly responded to the production commitment demand. The July 10 tentative deal target is 16 days away. A work stoppage at Windsor Assembly would affect Bronco Sport and Lincoln Corsair parts availability within days.",
    sourceUrl: "https://www.arcamax.com/business/businessnews/s-4235265",
  },
  {
    icon: "📉",
    text: "U.S. Ambassador Hoekstra: Canada and the U.S. are 'not anywhere close' on a new CUSMA framework. The 25% auto tariff is not going away on July 1. The July 1 meeting is virtual and trilateral — it is the beginning of a process, not a signing ceremony. The most likely outcome: zombie CUSMA with annual rolling reviews and the 25% tariff remaining in place through at least 2027.",
    sourceUrl: "https://www.youtube.com/watch?v=lVjHsseAnFo",
  },
  {
    icon: "🏛️",
    text: "PM Carney has been sidelined from at least 17 government deliberations because of corporate conflicts — including electricity exports to the U.S. (a key CUSMA bargaining chip) and the new nuclear energy plan. The Privy Council Office confirmed the recusals in letters to a parliamentary committee. The conflicts stem from Carney's time as Governor of the Bank of England and CEO of Brookfield Asset Management.",
    sourceUrl: "https://www.thestar.com/politics/federal/mark-carney-sidelined-from-at-least-17-government-deliberations-because-of-corporate-conflicts/article_e69b9a88-9bdc-4268-8d73-a8c1f70d395f.html",
  },
];

const tipOfTheDay = {
  title: "The 25% Auto Tariff Is Now a Structural Cost — Price It In",
  text: "U.S. Ambassador Hoekstra confirmed Canada and the U.S. are 'not anywhere close' on CUSMA. The 25% auto tariff is not going away on July 1. Here is what to do now: (1) Review your parts pricing from U.S. suppliers — the tariff is embedded in the price, not always visible. (2) If you are quoting jobs with U.S.-sourced parts, add a tariff buffer to your estimate. (3) Talk to your customers about why parts prices are elevated — they are hearing it from dealers too. (4) Identify which of your top 20 parts come from U.S. suppliers and find Canadian or Mexican alternatives where possible. The tariff is not going away. Build it into your business model.",
};

const quoteOfTheDay = {
  text: "We're not anywhere close on a new CUSMA framework. We still have a lot of work to do.",
  author: "Pete Hoekstra",
  title: "U.S. Ambassador to Canada — CTV News, June 23, 2026",
};

const rideOfTheDay = {
  name: "1967 Shelby GT350 — Wimbledon White, Blue Racing Stripes, Ontario-Plated",
  description: "The 1967 Shelby GT350 is the Mustang that Carroll Shelby built to prove a point. Ford gave him a pony car. He gave it back as a race car with a street licence. The 1967 model year was the first to use the larger Mustang body — which gave Shelby room to fit the 289 High Performance V8 with a Paxton supercharger option that pushed output to 306 horsepower in naturally aspirated form, or 390 horsepower with the blower. The Wimbledon White with blue Le Mans racing stripes is the definitive Shelby colour combination — a direct reference to the GT40's Le Mans victories in 1966 and 1967. The Ontario plate means this car survived the salt seasons, which is remarkable for a vehicle that was built to be driven hard and fast. Shelby built 1,175 GT350s in 1967. The side exhaust pipes, the Shelby-specific hood with functional scoops, and the lowered suspension are all original. Today, a documented 1967 GT350 in Wimbledon White with an Ontario plate is worth between $120,000 and $180,000 depending on condition and documentation. The GT350 is the car that proved the Mustang was more than a secretary's car. It is also the car that built the Ford performance brand — a brand that is now fighting for its survival in the tariff era, with Unifor bargaining for the future of Windsor Assembly in a Toronto hotel conference room.",
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
                {["GORDIE HOWE BRIDGE", "CUSMA 7 DAYS", "UNIFOR-FORD DAY 3", "SHELBY GT350"].map((tag) => (
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
              alt="Gordie Howe Bridge Closed / CUSMA 7 Days — Baywash Daily Briefing Edition No. 48"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Wednesday Edition</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Canada Paid $6.4B — Bridge Still Closed — And 7 Days to CUSMA: "Not Anywhere Close"
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
