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

const BRIEFING_NUMBER = 69;
const BRIEFING_DATE = "July 15, 2026";
const BRIEFING_DAY = "Wednesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/YkrrhxczzMZjGEhu.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/LqXaDYdiTeLPPEUm.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/uIToaldIwnEDwJyW.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/jwpBEBgNrDAIwONz.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/FGiBfOyUNtdqNJCK.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "BANK OF CANADA / JULY 15 / 6TH CONSECUTIVE HOLD / 2.25%",
    tagColor: "#1d4ed8",
    headline: "Bank of Canada Holds at 2.25% — 6th Consecutive Hold — MPR Released Today — Oxford Economics: Economy in a 'Pickle' — CUSMA Uncertainty + Iran Conflict Complicate Outlook — Prime Rate Stays at 4.45%",
    summary: "The Bank of Canada announced its overnight rate decision on Wednesday, July 15, holding at 2.25 per cent for the sixth consecutive meeting — exactly as every major economist had forecast. The Bank also released its July Monetary Policy Report today, providing a full update on the economic outlook. Oxford Economics director of Canada economics Tony Stillo described the Bank's governing council as being in a 'pickle' — facing competing pressures from elevated inflation driven by energy prices and a sluggish economy weakened by CUSMA uncertainty and the collapse of the U.S.-Iran interim peace agreement. Headline inflation accelerated to 3.2 per cent in May due to surging gas prices, but core inflation measures — which the Bank watches more closely — remained relatively stable. TD Economics economist Maria Solovieva noted that the Bank's main concern will be whether the energy price shock has fed into other goods and services. Oxford Economics recently downgraded its 2027 real GDP growth forecast for Canada to 1.6 per cent, but still expects the economy to grow by 0.7 per cent in 2026. A Reuters poll of economists conducted July 10 found that the Bank of Canada will hold its overnight rate at 2.25 per cent and keep it there 'well into next year' as price pressures remain largely contained. The C.D. Howe Institute's Monetary Policy Council recommended on July 9 that the Bank maintain the overnight rate at 2.25 per cent for the next six months, then increase to 2.5 per cent by July 2027. Economists no longer expect any CUSMA deal to lower U.S.-Canada tariffs before late 2026 at the earliest, which will continue to weaken economic growth and prolong uncertainty for steel, aluminum, lumber, and auto sectors.",
    whyItMatters: "A hold at 2.25 per cent is the best outcome for your shop's customers. Prime rate stays at 4.45 per cent. Auto loan rates stay flat. Customers who are on the fence about a major repair — an engine, a transmission, a full suspension rebuild — are not facing higher borrowing costs. The hold also means your shop's line of credit rate does not move. If you are carrying inventory debt or a parts account with a floating rate, your cost of capital stays the same. The risk scenario — a rate cut — would be good for borrowers but would signal that the Bank sees the economy weakening faster than expected. A rate hike would signal inflation is getting out of control. Neither scenario is on the table today. The practical implication for your service advisors: customers asking about financing large repairs can be told that rates are stable and are expected to stay stable through the end of 2026. That is a genuine selling point for deferred maintenance work. The Bank's next rate decision is September 10, 2026.",
    source: "Bank of Canada / Financial Post / Reuters — July 15, 2026",
    sourceUrl: "https://www.bankofcanada.ca/2026/07/fad-announcement-release-mpr-2026-07-15/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "U.S. SENATE / CHINESE VEHICLE BAN / CONNECTED VEHICLE SECURITY ACT / VOTE TODAY",
    tagColor: "#b91c1c",
    headline: "U.S. Senate Commerce Committee Votes Today on Permanent Chinese Vehicle Ban — Connected Vehicle Security Act of 2026 — BYD Blocked From U.S. But Targeting 20 Canadian Dealerships — Bill Ford: 'We Can't Expect to Keep Them Out Forever'",
    summary: "The U.S. Senate Commerce Committee is voting today, July 15, on the Connected Vehicle Security Act of 2026 — bipartisan legislation introduced by Senator Bernie Moreno (R-Ohio) and Senator Elissa Slotkin (D-Michigan) that would permanently codify restrictions preventing Chinese automakers from selling connected passenger vehicles in the U.S. market. The bill would impose software and vehicle restrictions effective 2027 and hardware restrictions effective 2030. It would also establish a 15 per cent Chinese ownership threshold as a trigger for national security review — a provision that could affect Mercedes-Benz, which has approximately 20 per cent Chinese ownership through BAIC. Ford Motor Company, General Motors, and the UAW all support the legislation. Bill Ford, Ford's executive chairman, said at an Axios event in Washington on Tuesday: 'We have to go toe-to-toe with China. We can't expect to keep them out forever, and we have to be able to beat them at their own game.' Polestar has already been forced out of the U.S. market under the existing Biden-era rule that the bill would codify. BYD is currently planning 20 Canadian dealerships within the next 12 months — the Canadian market is being used as a North American beachhead precisely because Chinese vehicles are blocked from the U.S. Chery and Geely (Lotus) are also preparing Canadian dealer launches. Canada's 6.1 per cent tariff on Chinese EVs — compared to the U.S. rate of 102.5 per cent — makes Canada the only viable entry point for Chinese automakers into the North American market.",
    whyItMatters: "The Senate vote today is directly relevant to your shop's future service mix. Here is the logic: Chinese automakers are blocked from the U.S. market by tariffs and now potentially by law. Canada has a 6.1 per cent tariff on Chinese EVs — a fraction of the U.S. rate. BYD is opening 20 Canadian dealerships. Chery and Geely are following. Within 18 to 24 months, Chinese-branded EVs will be on Ontario roads. The question for your shop is not whether they are coming — they are. The question is whether you will be ready to service them when the warranty expires. BYD uses Blade Battery technology — lithium iron phosphate chemistry — which is incompatible with any existing North American EV platform. The diagnostic tools, the high-voltage safety training, and the battery management system knowledge required to service a BYD are different from what you need for a GM Ultium or a Ford Lithium-Ion pack. Shops that invest in Chinese EV training now will capture out-of-warranty service work from day one. Shops that wait will be turning away customers. The Senate vote today determines whether the U.S. market stays closed — but it has no effect on Canada. The Chinese EVs are coming here regardless.",
    source: "CBT News / WSJ / Ford Motor Company — July 11–15, 2026",
    sourceUrl: "https://www.cbtnews.com/senate-bill-blocking-chinese-automakers",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "RIGHT TO REPAIR / FTC / JOHN DEERE / BILL C-244 / INDEPENDENT SHOPS",
    tagColor: "#15803d",
    headline: "FTC Right-to-Repair Settlement with John Deere Sets Precedent — Deere Must Provide Diagnostic Tools to Equipment Owners — Canada's Bill C-244 Already In Force — OEM Automotive Diagnostic Access Is the Next Frontier — Independent Shops Benefit",
    summary: "The U.S. Federal Trade Commission announced a settlement with John Deere requiring the agricultural equipment manufacturer to provide diagnostic and repair tools directly to equipment owners and independent repair shops — a landmark right-to-repair ruling that sets a significant precedent for the automotive sector. The settlement requires Deere to make available the same diagnostic software, repair manuals, and technical service information that it provides to its authorized dealer network. The right-to-repair movement has been working to reverse decades of OEM restrictions that required consumers and independent shops to use only authorized dealers for repairs and diagnostics. In Canada, Bill C-244 — the right to repair legislation — received Royal Assent in 2024 and is now in force. The legislation requires manufacturers to provide independent repair facilities with access to the same diagnostic and repair information available to authorized dealers. The automotive sector has been slower to comply than the agricultural sector, with OEM resistance centred on cybersecurity concerns and the complexity of connected vehicle systems. Kevin O'Reilly, right-to-repair advocate and board member with the Repair Association, told Eco-Logic Radio this week that the John Deere settlement 'changes the conversation' and creates a template for automotive right-to-repair enforcement. The FTC settlement is a U.S. ruling and does not directly apply in Canada — but it establishes the regulatory direction of travel and strengthens the hand of Canadian right-to-repair advocates pushing for automotive compliance with Bill C-244.",
    whyItMatters: "The John Deere settlement matters to your shop for one reason: it establishes that regulators on both sides of the border are willing to force OEMs to open up their diagnostic ecosystems to independent shops. Bill C-244 is already law in Canada. The question is enforcement. The automotive OEMs — particularly the German brands and the Japanese brands — have been slow to comply with the spirit of right-to-repair legislation, providing access to some information while restricting the most valuable diagnostic data. The John Deere settlement creates a template: the FTC required Deere to provide the same tools to independents that it provides to dealers. If that standard is applied to automotive OEMs in Canada under Bill C-244, your shop gains access to the same diagnostic software that the dealer down the street uses. That is a significant competitive advantage. The practical step for your shop today: document every instance where you have been unable to complete a repair because an OEM restricted diagnostic access. That documentation is the evidence base for a right-to-repair complaint under Bill C-244. The more complaints regulators receive, the faster enforcement moves. You have a right to repair. Use it.",
    source: "Spectrum Local News / Eco-Logic Radio / CBT News — July 9–15, 2026",
    sourceUrl: "https://spectrumlocalnews.com/nc/coastal/news",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🏦",
    text: "Bank of Canada HOLDS at 2.25% — 6th consecutive hold confirmed today. Prime rate stays at 4.45%. Auto loan rates flat. Next decision: September 10, 2026. C.D. Howe recommends hold through January 2027. A hold is the best scenario for customer financing affordability.",
    sourceUrl: "https://www.bankofcanada.ca/2026/07/fad-announcement-release-mpr-2026-07-15/",
  },
  {
    icon: "🗳️",
    text: "Ford ratification vote: July 17–19 — this weekend. Watch Unifor social media channels for results. A yes vote makes the 15% wage deal official. A no vote returns the parties to the table — strike risk increases. 54% preliminary survey endorsement. GM and Stellantis bargaining begins after Ford ratification.",
    sourceUrl: "https://www.autonews.com/manufacturing/automakers/anc-unifor-ford-tentative-agreement-0711/",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge opens July 27 — 12 days. Call your Michigan and Ohio parts suppliers this week: will they route commercial shipments through the new bridge? Dedicated truck lanes and modern customs facility mean faster transit times than the Ambassador Bridge for commercial traffic.",
    sourceUrl: "https://www.canada.ca/en/housing-infrastructure-communities/news/2026/07/the-gordie-howe-international-bridge-will-open-on-july-27th-strengthening-trade-connectivity-and-economic-development.html",
  },
  {
    icon: "⚖️",
    text: "Section 122 tariff expiry: July 24 — 9 days. Section 301 forced labour final determination: July 21–23. CUSMA-compliant goods exemption demanded by 1,500+ submissions — decision pending. Ask your top 3 parts suppliers about CUSMA compliance status this week. Non-compliant parts with Chinese content are most exposed.",
    sourceUrl: "https://www.strtrade.com/trade-news-resources/str-trade-report/trade-report/july/ustr-wants-to-revise-usmca-automotive-rules-of-origin",
  },
];

const tipOfTheDay = {
  title: "Document Every OEM Diagnostic Restriction — It's Your Right-to-Repair Evidence",
  text: "Bill C-244 is law in Canada. Every time an OEM restricts your access to diagnostic data, software, or repair information that it provides to its authorized dealers, document it: the date, the vehicle, the OEM, and the specific information withheld. That documentation is the evidence base for a right-to-repair complaint. The John Deere FTC settlement shows that regulators will act when they have evidence. Build your file now.",
};

const quoteOfTheDay = {
  text: "We have to go toe-to-toe with China. We can't expect to keep them out forever, and we have to be able to beat them at their own game.",
  author: "Bill Ford",
  title: "Executive Chairman, Ford Motor Company — Axios Event, Washington D.C. — July 14, 2026",
};

const rideOfTheDay = {
  name: "1970 Buick GSX Stage 1 — Saturn Yellow, 455 Cubic Inch V8, 360 hp, Ontario-Plated",
  description: "The forgotten muscle car. In 1970, Buick built the GSX as its answer to the Chevelle SS 454 and the Pontiac GTO Judge — and built it better than either. The Stage 1 package added a 455 cubic inch V8 producing 360 horsepower from the factory, but the actual output was closer to 400 horsepower. The torque figure — 510 lb-ft at 2,800 rpm — was the highest of any production muscle car in 1970. Saturn Yellow with black hood stripes and 'GSX' badges on the front fenders. Rallye wheels with Goodyear Polyglas GT tires. Only 678 Stage 1 cars were built in 1970, making it one of the rarest muscle cars of the era. Buick sold the GSX in Canada through its Canadian dealer network — built in Flint, Michigan, sold in Ontario, driven on the same roads as the Chevelles and GTOs it was built to beat. The Bank of Canada held rates today for the sixth consecutive time. The GSX Stage 1 does not hold anything. It goes. Value: $80,000 to $150,000 at auction depending on condition and documentation. A numbers-matching Saturn Yellow Stage 1 with documentation has sold for over $200,000.",
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
                {["BOC HOLDS 2.25%", "SENATE: CHINESE CAR BAN VOTE", "FTC: RIGHT TO REPAIR", "'70 BUICK GSX STAGE 1"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Wednesday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Bank of Canada Holds 2.25% — Senate Chinese Vehicle Ban Vote — FTC Right to Repair — Baywash Daily Briefing Edition No. 69"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#1d4ed8] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 69 — Wednesday, July 15, 2026 — Bank of Canada Decision Day</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Bank of Canada Holds at 2.25% — Senate Votes on Chinese Car Ban — FTC Right-to-Repair Precedent
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '70 Buick GSX Stage 1</span>
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
