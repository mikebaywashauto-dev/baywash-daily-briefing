// 2026-05-25
/*
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 18;
const BRIEFING_DATE = "May 25, 2026";
const BRIEFING_DAY = "Sunday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/rjfFbIzvGsJXnYlA.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/lMHUyojAtXWxRisi.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ZJOOkhorJrFpxcgQ.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/rALnVEauwIjuIeUU.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/hViUxiFevEwTvcNF.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "SUPPLY CHAIN",
    tagColor: "#e05a1a",
    headline: "Motor Oil Shortage Escalates: Nissan Rationing 5W-30 and 0W-20 as Strait of Hormuz Disruption Deepens — The Shortage Is No Longer Limited to Exotic Low-Viscosity Grades",
    summary: "The motor oil shortage driven by the Strait of Hormuz closure has escalated significantly this week, with Nissan confirming it has begun rationing 5W-30 and 0W-20 Nissan Genuine Motor Oils after stock levels dropped 30% year-on-year. This is a material escalation from the situation reported earlier in the week: the shortage has moved beyond the exotic low-viscosity grades (0W-8, 0W-16) used in high-end hybrids and into the mainstream viscosity grades that are required for the vast majority of passenger cars, SUVs, and light trucks on Canadian roads. Automotive News reported on May 22 that the shortage 'threatens dealership service lanes and new-vehicle production,' with the U.S. war with Iran having disrupted Group III base oil imports needed to make synthetic motor oil. Toyota and Nissan are rationing supplies to dealerships while others are stockpiling inventory. CNN reported on May 19 that wholesale motor oil prices are rising rapidly, with industry executives warning of imminent shortages — and that the Strait of Hormuz closure has created 'a perfect storm in this tiny but critical corner of the oil market.' The shortage is now projected to last until at least mid-2027, according to industry association statements cited by Automotive News. The Autoblog report on the Nissan rationing memo is particularly significant for independent shops: Nissan's internal bulletin specifically covers 5W-30 — one of the most widely used grades across virtually every vehicle category — meaning the shortage is now a mainstream service problem, not a niche one.",
    whyItMatters: "If you have not already acted on the oil pricing and inventory guidance from yesterday's briefing, act today. The escalation to 5W-30 rationing changes the calculus entirely. 5W-30 is the recommended grade for a substantial portion of the vehicles in your service bays — it is not a specialty product. The practical implications are immediate: first, call your primary oil supplier today and ask specifically about 5W-30 availability and pricing trajectory. Second, if you have the storage capacity, consider building a 30-to-60-day buffer stock of your highest-volume grades now, before the retail price increases fully materialize. Third, review your service pricing on any package that includes an oil change — if your package pricing was set before this week, it is already underwater on margin. Fourth, create a customer communication template now that explains the shortage and the pricing adjustment in plain language. Customers who understand why prices are rising are far less likely to push back than customers who are surprised by a higher invoice.",
    source: "Automotive News / Autoblog / CNN / Global News",
    sourceUrl: "https://www.autoblog.com/news/nissan-oil-changes-could-get-harder-as-dealers-ration-motor-oil",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "MARKET CONDITIONS",
    tagColor: "#16a34a",
    headline: "Canadian New Vehicle Sales Fall 3.9% in April — Breadth of Provincial Declines 'Certainly Concerning' as Consumer Retrenchment Deepens Across All But One Province",
    summary: "Provincial sales estimates released by DesRosiers Automotive Consultants (DAC) this week confirmed that Canadian new light vehicle sales declined across all but one province in April 2026, with total vehicle sales of approximately 178,000 units representing a 3.9% decrease compared to the 186,000 units sold in April 2025. Year-to-date sales through April are down 4.2% compared to 2025, totalling approximately 584,000 units. Andrew King, managing partner at DAC, described the breadth of the sales decreases as 'certainly concerning,' noting that the decline reflects 'periods of inherent economic weakness and consumer retrenchment.' Nova Scotia was the only province with a year-over-year increase, growing by 3.4%, while Newfoundland and Labrador had the sharpest decline at 12.0%. By volume, Quebec had the greatest decrease — nearly 2,000 units year-over-year — with Alberta and British Columbia each down nearly 1,500 units. The YTD data shows Quebec slightly ahead on a year-to-date basis with a 0.1% increase, while all other provinces remain below last year's rate through the first four months of 2026. Separately, the focus2move Canada auto sales tracker shows that YTD sales through April fell 2.2%, with most top-10 brands reporting losses or minimal growth. The data paints a consistent picture: Canadian consumers are pulling back on major purchases, and the combination of tariff-driven price increases on new vehicles, elevated interest rates, and economic uncertainty is suppressing demand across the country.",
    whyItMatters: "Falling new vehicle sales are unambiguously good news for the independent repair and service sector, but the mechanism matters. When consumers defer new vehicle purchases, they keep their existing vehicles longer — and older vehicles require more maintenance and repair. The 2015-2019 model year cohort, which represents the peak of the last strong sales cycle, is now entering the 7-to-11-year age range where repair frequency and repair value both increase significantly. The Canadian automotive aftermarket grew in 2025 precisely because these vehicles were moving into peak repair cycles, and that trend will accelerate as the 2026 sales slump extends the average age of the Canadian vehicle fleet. The practical implication for your shop: your customer base is becoming more valuable, not less. A customer who is holding a 2017 or 2018 vehicle because they cannot afford or choose not to buy new is a customer who will need brakes, suspension, timing components, and other high-value repairs over the next two to three years. The shops that will capture this value are the ones that are proactively communicating with their existing customers about what is coming — not waiting for the customer to notice a problem.",
    source: "DesRosiers Automotive Consultants / Collision Repair Magazine / focus2move",
    sourceUrl: "https://www.collisionrepairmag.com/news/collision-repair/market-trends/article/15825882/sales-slump-light-vehicle-sales-down-in-most-provinces",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "REGULATORY RISK",
    tagColor: "#2563eb",
    headline: "Canada Faces Potential 95% Heavy Truck Supply Cutoff by January 1, 2027 — Dealers Warn Ottawa That Pre-Order Season Begins in August and the Window to Fix the Paperwork Problem Is Closing",
    summary: "Canada's truck dealers escalated their warnings to the federal government this week, appearing at a press conference on Parliament Hill to warn that a regulatory misalignment between Canadian and U.S. emissions certification requirements could effectively cut off 95% of Canada's heavy truck supply beginning January 1, 2027. The Canadian Truck Dealers Association (CTD), a division of CADA, told reporters that the issue stems from changes in the United States to how trucks are certified for EPA27 emissions standards — changes that have left Canada's recognition framework out of step with the new U.S. process. Because Canada currently only recognizes EPA certifications done under the previous process, and because U.S. manufacturers are building their 2027 model year trucks to the new EPA27 standards, Canadian dealers face the prospect of being unable to import any U.S.-made models beginning with the 2027 model year. Kevin Disher, executive director of CTD, told reporters: 'Without timely action and regulatory certainty from Canadian officials, there is a risk that the availability and the importation of new trucks in Canada could face significant disruptions as early as Jan. 1, 2027.' The urgency is compounded by the fact that fleet pre-order discussions for the 2027 model year begin in August 2026 — meaning the window for a regulatory fix that allows normal commercial planning is measured in weeks, not months. Approximately 30,000 Class 8 trucks are sold in Canada annually, representing more than $8 billion in economic activity. CTD represents more than 700 heavy truck dealerships employing roughly 40,000 people. Huw Williams of CADA told reporters: 'The government may be operating under the impression that this is a 2027 problem. This is a yesterday problem.' CTD said it has had productive discussions with Transport Canada, Environment and Climate Change Canada, and the office of Minister Dominic LeBlanc, but as of the press conference, no formal solution pathway had been confirmed.",
    whyItMatters: "For independent shops that service commercial vehicles, fleets, or heavy-duty trucks, this is a direct business risk. A disruption in new truck supply does not reduce the number of trucks on the road — it increases the average age of the working fleet, which increases repair and maintenance demand. But it also creates a specific parts and service challenge: if fleets cannot replace aging trucks, they will be operating vehicles well past their normal replacement cycles, which means more breakdowns, more emergency repairs, and more demand for parts that may themselves be subject to supply constraints. The secondary implication is for shops that service light commercial vehicles and vans: the same economic pressure that is keeping consumers in older passenger vehicles is keeping small business owners in older work trucks and vans. The repair opportunity is real, but it requires proactive outreach to your commercial customer base — not waiting for them to call when something breaks.",
    source: "Truck News / Canadian Auto Dealer / CADA / MSN Canada",
    sourceUrl: "https://www.trucknews.com/sustainability/truck-dealers-warn-of-looming-supply-crisis-over-2027-emissions-rules/1003215447/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🔋",
    text: "EVolveSkills, a free Electric Vehicle upskilling program for automotive service and body repair technicians, truck and coach technicians, and apprentices, is actively recruiting participants across Canada. The program is designed to address the skills gap that is emerging as EVs move into the peak repair and maintenance phase of their ownership cycle. For shop owners: this is a no-cost way to begin building EV service capability in your team. For technicians: this is a credential that will become increasingly valuable as the EV service market matures.",
    sourceUrl: "https://www.instagram.com/p/DYm7uXFmbg1/",
  },
  {
    icon: "📊",
    text: "Advance Auto Parts reported Q1 2026 comparable sales growth of 3.5% — the strongest performance in five years — with adjusted operating income margin expanding 410 basis points year-over-year to 3.8%. The company reaffirmed its full-year 2026 guidance. For Canadian shops, the Advance Auto Parts results are a useful proxy for aftermarket demand trends: 3.5% comparable sales growth in a quarter marked by tariff uncertainty and consumer retrenchment suggests that repair and maintenance demand remains resilient even as new vehicle sales fall.",
    sourceUrl: "https://ir.advanceautoparts.com/investors/news-and-events/press-releases/press-release-details/2026/Advance-Auto-Parts-Reports-First-Quarter-2026-Results-Reaffirms-Full-Year-2026-Guidance/default.aspx",
  },
  {
    icon: "🛠️",
    text: "Circana released data this week showing that consumers are accelerating a shift toward DIY vehicle maintenance amid economic pressures, with measurable growth across the automotive aftermarket as do-it-yourself activity increases. For shops, this is a double-edged signal: some customers who would previously have brought their vehicles in for routine maintenance are now attempting it themselves. The countermeasure is to position your shop as the resource for the jobs that DIY customers cannot or should not attempt — diagnostics, safety-critical systems, and anything requiring specialized tools.",
    sourceUrl: "https://www.circana.com/post/consumers-accelerate-shift-toward-diy-vehicle-maintenance-amid-economic-pressures",
  },
  {
    icon: "🚛",
    text: "Volvo unveiled its next-generation D13 engine for EPA 2027 emissions standards this week, with the new engine available across all Volvo truck models when the standards take effect January 1, 2027. The D13 announcement is relevant context for the Canadian truck supply crisis: manufacturers are ready with compliant product — the problem is entirely on the Canadian regulatory recognition side. The fix is a paperwork and certification alignment issue, not a technology issue, which means it is solvable quickly if Ottawa moves with urgency.",
    sourceUrl: "https://www.freightwaves.com/news/new-volvo-d13-engine-2027",
  },
];

const tipOfTheDay = {
  title: "Build a 30-to-60-Day Motor Oil Buffer Stock This Week — Before the Retail Price Increases Fully Materialize",
  text: "The escalation of the motor oil shortage to include 5W-30 — the most widely used viscosity grade in the Canadian passenger car fleet — changes the urgency calculus for every shop in the country. The shortage is no longer a niche problem affecting a small subset of your oil change volume; it is now a mainstream supply challenge. The practical action this week: contact your primary oil supplier and ask for their current pricing and availability on your top three volume grades (likely 5W-30, 5W-20, and 0W-20). If you have storage capacity, negotiate a forward purchase of 30 to 60 days of inventory at current pricing. The wholesale price increases are already in motion — the question is whether you absorb them reactively or get ahead of them. If your supplier cannot commit to pricing, ask them to put their current pricing in writing so you have a baseline for the inevitable conversation with your customers about service price adjustments.",
};

const quoteOfTheDay = {
  text: "The government may be operating under the impression that this is a 2027 problem. This is a yesterday problem.",
  author: "Huw Williams",
  title: "Public Affairs, Canadian Automobile Dealers Association — Parliament Hill, Ottawa, May 21, 2026",
};

const rideOfTheDay = {
  name: "1969 Chevrolet Camaro ZL1 — The All-Aluminum Drag Strip Legend Built for the Street",
  description: "The 1969 Chevrolet Camaro ZL1 is one of the rarest and most consequential muscle cars ever built, and its story begins with a loophole. Fred Gibb, a Chevrolet dealer in LaHarpe, Illinois, discovered that COPO (Central Office Production Order) could be used to order vehicles with equipment not available through normal channels — including the all-aluminum 427 cubic inch ZL1 engine that Chevrolet had developed for Can-Am racing. The ZL1 engine was essentially a race engine installed in a street car: all-aluminum block and heads, open chamber combustion, solid lifter camshaft, and a factory rating of 430 horsepower that was widely understood to be a significant understatement — actual output was closer to 500 to 550 horsepower. Only 69 ZL1 Camaros were built for the 1969 model year, at a price of approximately $4,160 over the base Camaro — nearly doubling the cost of the car. Many dealers refused to accept delivery because the cars were so expensive relative to the market. Today, a documented ZL1 Camaro in original condition is among the most valuable American muscle cars in existence, with auction results regularly exceeding $500,000 for well-documented examples. The ZL1 ran the quarter mile in the low 13-second range in factory trim — remarkable for a street-legal production car in 1969 — and its all-aluminum engine made it lighter than a small-block car despite the displacement advantage. It remains the definitive example of what happens when a manufacturer decides that the rules are merely a starting point.",
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
      className={`transition-all duration-700 ${
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
              <h2 className="font-['Oswald'] text-6xl md:text-8xl font-bold leading-[0.9] uppercase">
                The Daily <br />
                <span className="text-[#e05a1a]">Briefing.</span>
              </h2>
            </div>
            <div className="md:w-1/3 text-right">
              <p className="text-sm text-gray-600 leading-relaxed italic">
                "The essential morning intelligence for the Canadian automotive professional.
                Curated daily for shop owners, technicians, and industry leaders."
              </p>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <AnimatedSection className="mb-16">
          <div className="relative group overflow-hidden bg-[#1a1a1a]">
            <img
              src={HERO_BANNER}
              alt="Canadian Automotive Workshop"
              className="w-full h-[500px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
              <span className="inline-block bg-[#e05a1a] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
                Top Intelligence
              </span>
              <h3 className="font-['Oswald'] text-4xl md:text-5xl font-bold text-white leading-tight uppercase mb-4">
                5W-30 Rationing Begins, New Vehicle Sales Slump Deepens, and Canada's Truck Supply Clock Is Ticking
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                The motor oil shortage escalates to mainstream grades, consumer retrenchment accelerates, and Ottawa has weeks to prevent a heavy truck supply crisis.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Lead Stories */}
          <div className="lg:col-span-8 space-y-16">
            {stories.map((story, index) => (
              <AnimatedSection key={story.id} delay={index * 100}>
                <article className="group">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="relative overflow-hidden aspect-[4/5]">
                        <img
                          src={story.image}
                          alt={story.headline}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div
                          className="absolute top-0 left-0 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-widest"
                          style={{ backgroundColor: story.tagColor }}
                        >
                          {story.tag}
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="font-['Oswald'] text-3xl font-bold leading-tight uppercase mb-4 group-hover:text-[#e05a1a] transition-colors">
                        {story.headline}
                      </h4>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {story.summary}
                      </p>
                      <div className="bg-[#f0ebe0] border-l-4 border-[#e05a1a] p-4 mb-6">
                        <h5 className="font-bold text-xs uppercase tracking-widest mb-2">Why it matters for your shop:</h5>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {story.whyItMatters}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-['Source_Code_Pro'] text-[10px] text-gray-400 uppercase tracking-widest">
                          Source: {story.source}
                        </span>
                        <a
                          href={story.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold uppercase tracking-widest text-[#e05a1a] hover:underline"
                        >
                          Read Full Report →
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          {/* Right Column: Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            {/* Quick Hits */}
            <AnimatedSection className="bg-[#1a1a1a] text-white p-8">
              <h4 className="font-['Oswald'] text-2xl font-bold uppercase tracking-tight mb-8 border-b border-gray-700 pb-4">
                Quick Hits
              </h4>
              <div className="space-y-8">
                {quickHits.map((hit, i) => (
                  <div key={i} className="group">
                    <div className="flex gap-4 mb-2">
                      <span className="text-xl">{hit.icon}</span>
                      <p className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                        {hit.text}
                      </p>
                    </div>
                    <a
                      href={hit.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-['Source_Code_Pro'] text-gray-500 uppercase tracking-widest hover:text-[#e05a1a]"
                    >
                      View Source
                    </a>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Tip of the Day */}
            <AnimatedSection className="border-2 border-[#e05a1a] p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#e05a1a] flex items-center justify-center text-white font-bold">!</div>
                <h4 className="font-['Oswald'] text-xl font-bold uppercase tracking-tight">Tip of the Day</h4>
              </div>
              <h5 className="font-bold text-lg mb-3">{tipOfTheDay.title}</h5>
              <p className="text-sm text-gray-600 leading-relaxed">
                {tipOfTheDay.text}
              </p>
            </AnimatedSection>

            {/* Quote of the Day */}
            <AnimatedSection className="bg-[#f5f0e8] border border-gray-200 p-8 relative">
              <span className="absolute top-4 left-4 text-6xl text-gray-200 font-serif leading-none">"</span>
              <div className="relative z-10">
                <p className="text-lg italic text-gray-700 leading-relaxed mb-6">
                  {quoteOfTheDay.text}
                </p>
                <div>
                  <p className="font-bold text-sm uppercase tracking-widest">{quoteOfTheDay.author}</p>
                  <p className="text-xs text-gray-500">{quoteOfTheDay.title}</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Ride of the Day */}
            <AnimatedSection className="group">
              <h4 className="font-['Oswald'] text-2xl font-bold uppercase tracking-tight mb-6">Ride of the Day</h4>
              <div className="overflow-hidden bg-[#1a1a1a] mb-4">
                <img
                  src={rideOfTheDay.image}
                  alt={rideOfTheDay.name}
                  className="w-full aspect-video object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h5 className="font-bold text-xl mb-2">{rideOfTheDay.name}</h5>
              <p className="text-sm text-gray-600 leading-relaxed">
                {rideOfTheDay.description}
              </p>
            </AnimatedSection>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-16 px-6 mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-gray-800 pb-12">
            <div>
              <h4 className="font-['Oswald'] text-xl font-bold uppercase mb-6">About the Briefing</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Baywash Daily Briefing is a premium intelligence service for the Canadian automotive aftermarket.
                We provide daily updates on trade, technology, and labor trends that matter to your business.
              </p>
            </div>
            <div>
              <h4 className="font-['Oswald'] text-xl font-bold uppercase mb-6">Quick Links</h4>
              <ul className="text-sm text-gray-400 space-y-3">
                <li><Link href="/" className="hover:text-[#e05a1a] transition-colors">Today's Edition</Link></li>
                <li><Link href="/archive" className="hover:text-[#e05a1a] transition-colors">Archive</Link></li>
                <li><a href="#" className="hover:text-[#e05a1a] transition-colors">Shop Portal</a></li>
                <li><a href="#" className="hover:text-[#e05a1a] transition-colors">Industry Reports</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Oswald'] text-xl font-bold uppercase mb-6">Connect</h4>
              <p className="text-sm text-gray-400 mb-4">Stay updated with the latest industry news.</p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-[#e05a1a] transition-colors cursor-pointer">In</div>
                <div className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-[#e05a1a] transition-colors cursor-pointer">X</div>
                <div className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-[#e05a1a] transition-colors cursor-pointer">Fb</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-['Source_Code_Pro'] text-gray-500 uppercase tracking-[0.2em]">
            <p>© 2026 Baywash Daily Briefing. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
