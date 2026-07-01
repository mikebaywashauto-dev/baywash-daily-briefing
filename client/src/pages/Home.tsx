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

const BRIEFING_NUMBER = 55;
const BRIEFING_DATE = "July 1, 2026";
const BRIEFING_DAY = "Wednesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/cdQoErkpjlHxqmFR.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ClobnlzJJGVJdCYW.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/DqsNmYMAlDXSdSDL.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/rVeEXzxgzuhTCvcB.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/clEUiuIvXnnCrchQ.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "CUSMA SUNSET / 10-YEAR CLOCK / CANADA DAY",
    tagColor: "#b91c1c",
    headline: "BREAKING: U.S. Triggers CUSMA Sunset Clause — 10-Year Countdown to 2036 Expiry Begins Today — Canada Day",
    summary: "On Canada Day 2026, the Trump administration formally declined to extend CUSMA for 16 years, activating the agreement's sunset clause and starting a 10-year countdown to the trade pact's expiry on July 1, 2036. U.S. Trade Representative Jamieson Greer met virtually with Canadian Trade Minister Dominic LeBlanc and Mexican officials on Wednesday to conduct the mandatory review. The U.S. declaration was expected — Trump has repeatedly said he does not want to renew CUSMA, the deal he negotiated in his first term and once called 'a colossal victory.' The sunset mechanism, which was considered controversial when it was enacted in 2020, now gives the U.S. maximum leverage: annual review sessions will run for the next 10 years, and if no agreement is reached, CUSMA expires on July 1, 2036. CUSMA does not disappear today. The agreement remains in force until 2036. The 25% auto tariffs under Section 232 are not affected by the sunset declaration — they are a separate legal instrument. Canada and Mexico have both publicly declared they want the full 16-year extension. Prime Minister Carney said he was not expecting 'any drama' at the meeting and called it 'a constructive exchange.' Canada's chief negotiator Janice Charette and LeBlanc participated in the virtual meeting. The U.S. has scheduled a third round of formal negotiations with Mexico for the week of July 20. No formal negotiating sessions between the U.S. and Canada have been scheduled. The U.S. is demanding 50% U.S.-specific content in all North American-built vehicles — a threshold that would lift total required regional content to 82%. A Mexican official described discussions over a universal 15% global auto tariff, with a preferential rate for Mexico and Canada if they accept tighter rules of origin.",
    whyItMatters: "The 10-year countdown is a negotiating strategy, not a death sentence for North American trade. CUSMA remains in force. Your shop's parts supply chain, your customers' vehicles, and the Canadian automotive industry are not immediately affected by today's declaration. What today does is confirm the medium-term environment: tariff uncertainty will persist for years, not months. The U.S. has maximum leverage to extract concessions from Canada and Mexico over the next decade. For shop owners, the practical implication is the same as it has been since April: plan for a sustained tariff environment. Parts costs will remain elevated. New vehicle prices will stay high. Customers will keep their vehicles longer. The shops that build durable customer relationships — not just transactional repair visits — will be the ones that thrive in a decade-long period of trade uncertainty. The next critical date is July 10: the Unifor-Ford tentative deal deadline. That is the most immediately consequential date for Canadian auto workers and the Windsor-area supply chain.",
    source: "Reuters / CBC News / Global Affairs Canada — July 1, 2026",
    sourceUrl: "https://www.reuters.com/world/americas/us-declaration-exit-usmca-start-decade-long-countdown-pact-2026-06-30/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "HONDA ALLISTON / EV PRODUCTION / CANADA DAY",
    tagColor: "#15803d",
    headline: "Honda Alliston Begins EV Production Today — 1,000 New Jobs — Canada's EV Market Hits 25% of New Vehicle Sales in H1 2026",
    summary: "In a rare piece of good news on Canada Day, Honda's Alliston, Ontario plant began electric vehicle production today, creating 1,000 new jobs. The Alliston facility — which currently produces the CR-V and Civic — has been retooled to add EV production as part of Honda's $15 billion Canadian EV supply chain investment announced in 2023. The timing is significant: Honda is beginning EV production in Canada on the same day the U.S. triggers the CUSMA sunset clause, signalling that Honda's long-term commitment to Canadian manufacturing is not contingent on the current trade environment. The Alliston EV launch coincides with new data showing Canada's EV market surpassed 25% of all new vehicle sales in the first half of 2026 — three years ahead of federal targets. Quebec led at 35% EV share, followed by British Columbia at 31%. Ontario is tracking at approximately 22%. The federal EV rebate program — offering up to $5,000 off eligible vehicles — and the expansion of public charging infrastructure to over 25,000 stations nationally have driven adoption. Canadian Vehicle Manufacturers' Association CEO Brian Kingston: 'Canada is positioned to become a leader in the North American EV market. From critical mineral mining to battery manufacturing, we have the complete supply chain.' The 25% EV market share milestone is a double signal: it confirms that Canadian consumers are adopting EVs faster than expected, and it means the service and maintenance profile of the Canadian vehicle fleet is shifting faster than most shop owners have planned for.",
    whyItMatters: "Honda's Alliston EV production launch and the 25% EV market share milestone are the most important long-term signals for Canadian shop owners in months. Here is what they mean for your business: EVs require significantly different service than ICE vehicles. Battery management, high-voltage systems, regenerative braking, and software diagnostics are not skills that transfer automatically from traditional mechanical training. The shops that are investing in EV training and equipment now — before the service volume arrives — will have a 3–5 year head start on the shops that wait. The 25% market share figure means that roughly 1 in 4 new vehicles sold in Canada in H1 2026 was electric. In 5 years, that number will likely be 40–50%. The vehicles sold today will be in your service bays in 3–7 years. If you are not already EV-capable, the time to invest is now — not when the vehicles show up at your door. Check with your provincial automotive training authority about EV certification programs. Honda Canada's dealer network will be the first to see Alliston EV service volume — but independent shops that are certified and equipped will capture a growing share of out-of-warranty EV service.",
    source: "Honda Canada / Canada24h / CVMA — July 1, 2026",
    sourceUrl: "https://canada24h.com/archives/64008",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "ONTARIO / AUTO INSURANCE / SABS REFORM",
    tagColor: "#7c3aed",
    headline: "Ontario Auto Insurance SABS Reform Takes Effect Today — Most Accident Benefits Now Optional — What Shop Owners Need to Know",
    summary: "Effective July 1, 2026, Ontario's Statutory Accident Benefits Schedule (SABS) has been significantly reformed. Under the new rules, medical, rehabilitation, and attendant care benefits remain mandatory — but all other accident benefits coverage is now optional, giving consumers more flexibility to choose coverage that fits their needs and budgets. The Financial Services Regulatory Authority of Ontario (FSRA) has updated all related policy forms, including the OAP 1 (Ontario Automobile Policy Owner's Policy), the OAF 4 (Ontario Application for Automobile Insurance Garage Form), and the new OPCF 47R (Optional accident benefits coverage and priority of payment). The reform is the most significant change to Ontario auto insurance in over a decade. Insurers, agents, and brokers have been required to complete the '2026 Ontario Auto Reform: Introduction to Accident Benefits Changes' training course. The practical effect for consumers: lower-cost policies are now available, but they may provide significantly less protection in the event of an accident. Consumer advocates have warned that many drivers — particularly lower-income drivers who choose the cheapest available policy — may not fully understand what coverage they have waived. For shop owners operating garage policies (OAP 4), the OEF 47R endorsement for optional accident benefits coverage has been updated and is now in effect.",
    whyItMatters: "The Ontario SABS reform has three direct implications for shop owners. First, if your shop operates a garage policy (OAP 4) — covering customer vehicles in your care, custody, and control — your insurer should have already updated your policy forms to reflect the new OPCF/OEF 47R endorsements. If you have not received updated policy documents, contact your broker today. Do not assume your coverage is current without confirmation. Second, the reform creates a new customer service opportunity. Many of your customers will be confused about what their auto insurance now covers — particularly around accident benefits. A shop that can explain the practical implications of the SABS changes (for example, what happens to their income replacement benefit if they are injured in an accident with a vehicle that has reduced coverage) builds trust and differentiates itself from competitors. Third, watch for an increase in uninsured or underinsured motorist claims as some drivers inadvertently reduce their coverage to save money on premiums. If a customer's vehicle is damaged in an accident and their coverage is inadequate, they may be unable to afford repairs. This is a collections risk for your shop — ensure your payment policies are clear before beginning work.",
    source: "FSRA Ontario / Financial Services Regulatory Authority — July 1, 2026",
    sourceUrl: "https://www.fsrao.ca/industry/auto-insurance/changes-statutory-accident-benefits-coverage-ontario-july-1-2026",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🇨🇦",
    text: "Happy Canada Day — and what a Canada Day it is. The U.S. triggered the CUSMA sunset clause this morning. CUSMA does not expire today — it remains in force until 2036. Annual reviews will now run until a new deal is reached or the pact expires. The 25% auto tariff is not affected. Canada's trade relationship with the U.S. is intact — but under a 10-year countdown clock.",
    sourceUrl: "https://www.reuters.com/world/americas/us-declaration-exit-usmca-start-decade-long-countdown-pact-2026-06-30/",
  },
  {
    icon: "🔧",
    text: "Unifor-Ford bargaining: Day 10 in downtown Toronto. The July 10 tentative deal target is 9 days away. Unifor has demanded production commitments for Windsor Assembly (Bronco Sport, Lincoln Corsair) and Oakville (Super Duty). Ford has not publicly responded. A work stoppage at Windsor Assembly would affect parts availability within days. Watch for a framework agreement announcement this week.",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-opens-negotiations-ford",
  },
  {
    icon: "📊",
    text: "Canada's EV market hit 25% of new vehicle sales in H1 2026 — three years ahead of federal targets. Quebec: 35%. BC: 31%. Ontario: ~22%. The federal $5,000 EV rebate and 25,000+ public charging stations are driving adoption. This is the most important long-term signal for shop owners: 1 in 4 new vehicles sold today will be in your service bay as an EV in 3–7 years.",
    sourceUrl: "https://canada24h.com/archives/64008",
  },
  {
    icon: "📅",
    text: "Section 122 tariff surcharge expires July 24 — 23 days from today. The White House must issue a new proclamation before that date. Options: extend Section 122 at 10%, replace with targeted sector tariffs, or allow it to lapse. Watch for a White House proclamation this week. The 25% Section 232 auto tariff is not affected by Section 122's expiry.",
    sourceUrl: "https://www.cbc.ca/news/politics/cusma-usmca-july-1-canada-us-mexico-trade-trump-tariffs-9.7253789",
  },
];

const tipOfTheDay = {
  title: "EV Service Readiness: The 3-Year Window Is Now",
  text: "Canada's EV market just hit 25% of new vehicle sales. Honda Alliston started EV production today. The vehicles being sold right now will arrive in independent service bays in 3–5 years. The shops that invest in EV training, high-voltage safety certification, and diagnostic equipment today will have a 3–5 year head start on competitors. Contact your provincial automotive training authority about EV certification. The window to get ahead of this is open — but it won't stay open forever.",
};

const quoteOfTheDay = {
  text: "Trade does not stop tomorrow. That is the most important thing to understand. CUSMA remains in force. The clock has started, but the deal is still standing.",
  author: "Ryan Williams",
  title: "Business Council of Quebec — on the CUSMA Sunset Declaration, July 1, 2026",
};

const rideOfTheDay = {
  name: "1967 Ford Mustang Fastback GT — Candy Apple Red, White Racing Stripes, Ontario-Plated",
  description: "There is no more fitting Ride of the Day for Canada Day 2026 than a 1967 Ford Mustang Fastback in Candy Apple Red — a car that was built in North America, sold across North America, and is still running on Ontario roads nearly 60 years later. The 1967 Mustang was the first major redesign of the original pony car, and the fastback body style — with its long, sloping roofline and aggressive rear quarters — is widely considered the most beautiful Mustang ever made. The GT package added the 390 cubic inch FE V8 in 1967, producing 320 horsepower and enough torque to make the rear tires a consumable item. The Mustang fastback was the car that Steve McQueen drove in Bullitt — though that film used a 1968 model, the 1967 is the purer design. In Candy Apple Red with white racing stripes and an Ontario plate, a 1967 Mustang fastback is a rolling declaration of what North American automotive manufacturing can produce when it is at its best. On a day when the future of North American trade is uncertain, the 1967 Mustang is a reminder that the relationship between Canada and the United States — built on shared roads, shared culture, and shared manufacturing — is older and deeper than any trade agreement. Documented GT fastbacks in show condition trade for $70,000–$100,000. The ones in Candy Apple Red go first.",
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
                {["CUSMA SUNSET TRIGGERED", "HONDA ALLISTON EV", "ONTARIO SABS REFORM", "MUSTANG FASTBACK"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Canada Day Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="CUSMA Sunset Clause Triggered on Canada Day — 10-Year Countdown to 2036 — Honda Alliston EV Production Begins — Baywash Daily Briefing Edition No. 55"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#b91c1c] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Canada Day Edition — No. 55 — CUSMA Sunset Triggered</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                U.S. Triggers CUSMA Sunset — 10-Year Clock Starts Today — Honda Alliston Begins EV Production
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — Canada Day Special</span>
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
