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

const BRIEFING_NUMBER = 49;
const BRIEFING_DATE = "June 25, 2026";
const BRIEFING_DAY = "Thursday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/NHZDWTIlzrAsuNNr.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/guxRRVBNuqEZtUJm.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/wXVJTyRxlrMyOapf.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/dHzGSqZEFVzpAjAb.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/viMYWXuNdyQYppJl.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "GORDIE HOWE BRIDGE / MICHIGAN SENATE",
    tagColor: "#b91c1c",
    headline: "Gordie Howe Bridge Now a Michigan Senate Race Issue — McMorrow: \"Open This Damn Bridge\" — Moroun Donor Angle Goes National",
    summary: "Democratic Michigan Senate candidate Mallory McMorrow launched a $400,000+ TV and digital ad campaign in the Detroit market on June 24, accusing President Trump of keeping the Gordie Howe International Bridge closed to benefit a major political donor. Standing in front of the closed bridge, McMorrow says: 'Donald Trump won't open it. I'm Mallory McMorrow and I have one message for the president: open this damn bridge.' The ad references Matthew Moroun, whose family owns the privately held Ambassador Bridge between Detroit and Windsor. Federal campaign finance records confirm Matthew Moroun donated US$1 million to Trump's super PAC earlier this year. The bridge was slated for a ribbon-cutting on June 12 — abruptly postponed after officials cited 'outstanding issues.' Canada financed the bridge's construction at close to US$4.4 billion, including the U.S. port of entry. The project was negotiated by former Republican Governor Rick Snyder and has been under construction since 2018. Republican Senate hopeful Mike Rogers has also used the bridge in his messaging, saying he would open it if elected. The winner of the Democratic primary faces Rogers in the general election. The primary is in August. The bridge has now moved from a Canada-U.S. trade dispute to a U.S. domestic political liability for Trump — with $400,000 in ad spend in the Detroit market in the first week alone.",
    whyItMatters: "The Gordie Howe Bridge becoming a Michigan Senate race issue is the most significant development in the bridge story since the June 12 cancellation. Here is why it matters to your shop: (1) Political pressure on Trump to resolve the bridge delay has now increased dramatically. A $400,000 ad campaign in the Detroit market, with more planned, means the Moroun donor angle is now part of the mainstream U.S. political conversation — not just Canadian trade coverage. (2) The bridge delay has direct practical consequences for the Windsor-Essex region. The Ambassador Bridge carries approximately $400 million in cross-border trade every day. Every truck, every parts shipment, and every worker crossing the border is subject to Ambassador Bridge congestion and Moroun toll pricing. The Gordie Howe Bridge would have added capacity, redundancy, and dedicated commercial lanes. (3) The political dynamics have shifted: Trump now has a domestic political reason to open the bridge — to neutralize McMorrow's ad and take the issue away from Democrats. Watch for a bridge opening announcement before the Michigan primary in August. (4) For shops in Windsor-Essex: the bridge opening, when it comes, will reduce cross-border parts delivery times and congestion costs. It is worth tracking the Michigan Senate race as a leading indicator of when the bridge will open.",
    source: "Globe and Mail / Associated Press — June 24, 2026",
    sourceUrl: "https://www.theglobeandmail.com/world/us-politics/article-trump-gordie-howe-bridge-closed-delay-help-donor-michigan-senate/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CUSMA / AGRICULTURE / JULY 1",
    tagColor: "#7c3aed",
    headline: "U.S. Agriculture Lobby Says CUSMA Will Survive — But the Trade Law Numbers Reveal What Termination Would Actually Cost: $80–$160B/Year in Auto Production Losses",
    summary: "CBC News June 25 morning lead: U.S. agriculture industry insiders at a Washington conference organized by the Center for Strategic and International Studies are confident CUSMA will survive Trump's threats. Darci Vetter, vice-president of Driscoll's and former Obama USTR chief agricultural negotiator: 'I'm actually quite confident and very optimistic that at the end of this, we will still have a USMCA.' John Bode, president and CEO of the U.S. Corn Refiners Association: 'The evidence is so compelling that this agreement is to the benefit of North Americans.' Gregg Doud, former Trump first-term chief agricultural negotiator and now president of the National Milk Producers Federation, called CUSMA the 'gold standard' for trade agreements. Vetter: 'I think it could be a bumpy ride. I don't think we should underestimate the extent to which the president himself questions trade relationships.' Meanwhile, the JD Supra trade law analysis published June 24 by Braumiller Law Group puts hard numbers on what CUSMA termination would actually mean: $80–$160 billion per year loss in North American auto production value. A typical auto part crosses the U.S.-Canada or U.S.-Mexico border 6–8 times before final assembly. High-complexity components such as engines, transmissions, and wiring harnesses: 8–12 crossings. Some vehicles involve 30+ cross-border movements when counting sub-components and tier-2/tier-3 suppliers. Importers would face 20–40% higher compliance overhead and 5–15% higher freight costs on cross-border lanes. The total Canada-U.S.-Mexico trade relationship: approximately $2 trillion annually — larger than U.S.-EU trade. Canada-U.S. two-way trade in 2025: $719 billion. The agriculture lobby's confidence is the real signal: U.S. corn, dairy, and fruit producers need Canada and Mexico more than Trump needs the leverage.",
    whyItMatters: "The agriculture lobby's confidence in CUSMA survival is the most important signal for Canadian shop owners this week. Here is the practical breakdown: (1) The U.S. agriculture sector — corn, dairy, fruit, soy, meat — exports heavily to Canada and Mexico. These are politically powerful industries in the Midwest and Great Plains states that Trump needs for the 2026 midterms and 2028. They are lobbying hard for CUSMA renewal. (2) The $80–$160 billion per year auto production loss estimate from the JD Supra analysis is the best public quantification of what CUSMA termination would cost. For context: Canada's entire auto sector generates approximately $17 billion in GDP annually. A CUSMA termination scenario would be catastrophic — not just for Canada, but for U.S. auto production as well. (3) The 6–8 border crossings per auto part is the key number to understand. The 25% tariff is not applied once — it compounds with every crossing. A wiring harness that crosses the border 10 times before final assembly accumulates tariff exposure at every crossing. This is why the effective tariff rate on Canadian vehicles is 12–13% — comparable to Japan and South Korea — even though the nominal rate is 25%. (4) The July 1 meeting is 6 days away. The most likely outcome remains zombie CUSMA — annual rolling reviews with the 25% tariff in place. The agriculture lobby's confidence means CUSMA will not be terminated. But it does not mean the 25% auto tariff will be removed. Plan accordingly.",
    source: "CBC News / JD Supra — June 25, 2026",
    sourceUrl: "https://www.cbc.ca/news/world/trump-trade-tariffs-usmca-cusma-agriculture-9.7247959",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "UNIFOR LOCAL 195 / WINDSOR / LOCKOUT",
    tagColor: "#1d4ed8",
    headline: "Titan Tool & Die Windsor: 11-Month Lockout — Company Now Cutting Retiree Health Benefits and Pensions — Unifor: \"A Disgraceful New Low\"",
    summary: "Unifor is condemning Titan Tool & Die in Windsor for terminating healthcare benefits and ending a supplemental monthly pension benefit program for current retirees and surviving spouses, as the company's dispute with Unifor Local 195 members nears eleven months. Members of Unifor Local 195 have been locked out since August 11, 2025. Unifor National President Lana Payne: 'Going after the most vulnerable people in this dispute, retirees and their surviving spouses, is a disgraceful new low for Titan Tool & Die's owners. Retirees spent decades building Titan into a successful Canadian company Windsor was proud of. Instead of paying monies lawfully owed to workers, Titan is cutting off health care and reducing pension benefits of the most vulnerable. No company in this country should be allowed to treat people this way.' Unifor Local 195 President Emile Nabbout: 'Our locked-out members and our retirees will never be intimidated. We will be on that picket line until Titan Tool & Die pays every dollar it owes.' At the same time, Titan Tool & Die has filed for yet another injunction against the union, continuing to use the legal system to dismantle Unifor members' picketing and solidarity actions. Titan has not paid a single penny in severance or termination pay owed to locked-out workers. The cuts affect former employees and surviving spouses who relied on benefits earned through decades of service. This is happening in Windsor — the same city where the Gordie Howe Bridge sits closed, where Stellantis Brampton is idle, and where Unifor-Ford talks are now in Day 4.",
    whyItMatters: "The Titan Tool & Die lockout is the most acute local labour story in Canadian auto manufacturing today, and it has direct relevance to every shop owner in the Windsor-Essex region. Here is why it matters: (1) Titan Tool & Die is a Windsor-based auto parts manufacturer. Unifor Local 195 represents workers in the Windsor area across multiple employers — including auto parts suppliers that supply components to the OEM plants in the region. A nearly 11-month lockout depletes the local skilled trades workforce and creates instability in the supply chain. (2) The decision to cut retiree health benefits and pension supplements is legally aggressive and practically devastating for the workers affected. These are people who spent 30–40 years building the company. The cuts are designed to pressure the union to settle on the company's terms. (3) The injunction filing is the third or fourth such filing by Titan — a pattern of using the legal system to suppress picketing. Unifor's legal team is fighting each one. The cost of the legal battle is borne by the union and its members. (4) The broader context: this lockout is happening simultaneously with Unifor-Ford bargaining in Toronto (Day 4), the July 1 CUSMA review, and the Gordie Howe Bridge closure. Windsor's auto sector is under simultaneous pressure from every direction. The Titan Tool & Die situation is a microcosm of the larger crisis — and it is the workers and retirees who are paying the price.",
    source: "Unifor Canada — June 24, 2026",
    sourceUrl: "https://www.unifor.org/news/all-news/titan-tool-die-takes-egregious-step-cutting-retiree-health-care-benefits-and-monthly",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🌉",
    text: "Michigan Democratic Senate candidate Mallory McMorrow launched a $400,000+ TV and digital ad campaign accusing Trump of keeping the Gordie Howe Bridge closed to benefit Matthew Moroun, who gave $1M to Trump's super PAC. Republican Mike Rogers is also using the bridge in his messaging. The Michigan primary is in August — Trump now has a domestic political reason to open the bridge before then.",
    sourceUrl: "https://www.theglobeandmail.com/world/us-politics/article-trump-gordie-howe-bridge-closed-delay-help-donor-michigan-senate/",
  },
  {
    icon: "🌽",
    text: "U.S. agriculture lobby at a Washington CSIS conference: 'I'm quite confident CUSMA will survive.' Former Trump first-term chief ag negotiator Gregg Doud called CUSMA the 'gold standard' for trade agreements. The agriculture sector's confidence is the real signal — U.S. corn, dairy, and fruit producers need Canada and Mexico more than Trump needs the leverage.",
    sourceUrl: "https://www.cbc.ca/news/world/trump-trade-tariffs-usmca-cusma-agriculture-9.7247959",
  },
  {
    icon: "🤝",
    text: "Unifor-Ford bargaining is now in Day 4 in downtown Toronto. The July 10 tentative deal target is 15 days away. Ford has not yet publicly responded to Unifor's production commitment demand. A work stoppage at Windsor Assembly would affect Bronco Sport and Lincoln Corsair parts availability within days. GM and Stellantis follow whatever Ford agrees to.",
    sourceUrl: "https://www.aol.com/articles/canadian-autoworkers-union-unifor-sets-191024000.html",
  },
  {
    icon: "⚙️",
    text: "Titan Tool & Die Windsor has now cut retiree health benefits and pension supplements after 11 months of locking out Unifor Local 195 members. The company has also filed another injunction against the union. Titan has not paid a single penny in severance or termination pay owed to locked-out workers. Lana Payne: 'A disgraceful new low.'",
    sourceUrl: "https://www.unifor.org/news/all-news/titan-tool-die-takes-egregious-step-cutting-retiree-health-care-benefits-and-monthly",
  },
];

const tipOfTheDay = {
  title: "The Bridge Opening Is Now a Political Event — Watch the Michigan Primary Calendar",
  text: "The Gordie Howe Bridge is now a $400,000 ad campaign issue in the Michigan Senate race. Trump has a domestic political reason to open the bridge before the August Michigan primary. Here is what to watch: (1) If Trump opens the bridge before August, it neutralizes McMorrow's ad and takes the issue away from Democrats. (2) For Windsor-Essex shops: the bridge opening will reduce cross-border parts delivery times and congestion costs. (3) Track the Michigan Senate race as a leading indicator — when the political pressure peaks, the bridge opens. (4) In the meantime, factor Ambassador Bridge congestion into your parts delivery estimates for U.S.-sourced components.",
};

const quoteOfTheDay = {
  text: "I'm Mallory McMorrow and I have one message for the president: open this damn bridge.",
  author: "Mallory McMorrow",
  title: "Michigan Democratic Senate Candidate — Campaign Ad, June 24, 2026",
};

const rideOfTheDay = {
  name: "1970 Buick GSX Stage 1 — Saturn Yellow, Black Stripes, Ontario-Plated",
  description: "The 1970 Buick GSX Stage 1 is the most underrated muscle car of the era — and one of the most powerful. Buick's 455 cubic inch Stage 1 engine produced 360 horsepower officially, but independent testing consistently showed 400+ horsepower at the crank. The 0-60 time of 5.5 seconds made it faster than a 1970 Chevelle SS 454 LS6 in real-world testing. Saturn Yellow with black hood stripes and a black interior is the definitive GSX colour combination — aggressive, purposeful, and unmistakably 1970. Buick built only 678 GSX Stage 1 cars in 1970, making it one of the rarest muscle cars of the era. The Ontario plate on this example means it survived the salt seasons — a remarkable achievement for a car that was built to be driven hard. The GSX was Buick's answer to the Chevelle SS, the Pontiac GTO, and the Oldsmobile 442 — all built on the same A-body platform, all competing for the same buyer. Buick's version had the largest engine, the most torque, and the least recognition. Today, a documented 1970 GSX Stage 1 in Saturn Yellow with an Ontario plate is worth between $120,000 and $200,000 depending on condition and matching numbers. It is the muscle car that the people who know, know about. Everyone else drives past it looking for the Chevelle.",
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
                {["GORDIE HOWE BRIDGE", "CUSMA 6 DAYS", "UNIFOR-FORD DAY 4", "BUICK GSX"].map((tag) => (
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
              alt="Gordie Howe Bridge Closed / Unifor Local 195 Lockout Windsor — Baywash Daily Briefing Edition No. 49"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Thursday Edition</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Bridge Closed, Workers Locked Out, CUSMA 6 Days Away — Windsor Is Ground Zero
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
