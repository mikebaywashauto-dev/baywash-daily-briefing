// 2026-05-24
/*
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 17;
const BRIEFING_DATE = "May 24, 2026";
const BRIEFING_DAY = "Saturday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ktkaFkuadXHNxfra.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/NGhTIwtClwSbdEif.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/HfJhhUVXgzVIiamw.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/BpmuBNIffOHbOOWl.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/gfsofVFxhapMuOmr.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "SUPPLY CHAIN",
    tagColor: "#e05a1a",
    headline: "Synthetic Motor Oil Shortage Hits Canadian Shops — Strait of Hormuz Disruption Drives 20%+ Price Hikes and Rationing at Major Suppliers",
    summary: "The Strait of Hormuz closure, triggered by the ongoing Iran conflict that began February 28, 2026, has created a cascading supply chain crisis for the automotive service industry in Canada. Group III base oils — the primary feedstock for synthetic and semi-synthetic motor oils — are largely produced in Middle Eastern refineries and shipped through the Strait, and the disruption has now reached Canadian repair shops in the form of price increases of 20% or more on motor oils, with availability issues emerging on manufacturer-specific blends and low-viscosity grades. Patrick de Haan, petroleum analyst at GasBuddy, confirmed that AutoZone has already issued internal communications to store managers warning of price adjustments and availability challenges on select motor oils and lubricants that flow through the Strait. Toyota and Nissan have both issued bulletins to their dealer networks advising that 'a supplier-driven price adjustment is expected in the near term' and authorizing technicians to 'occasionally substitute heavier oil grades for certain service intervals' as a short-term measure to preserve dwindling supplies of low-viscosity synthetic grades like 0W-8 and 0W-16. Behrouz Bakhtiari, assistant professor of operations management at McMaster University, told Global News that Canada is 'absolutely vulnerable to higher price and lower availability of high-end motor oil,' and warned that the full impact on Canadian shops will become evident 'six months to a year from now.' Dr. Sohrab Zendehboudi of Memorial University noted that while major shortages of commonly-used grades are not expected immediately, the disruption will likely accelerate efforts to diversify supply sources, expand domestic re-refining capacity, and explore bio-based lubricant alternatives. Statistics Canada data released in April 2026 showed that vehicle maintenance and repair costs had already climbed 4.2% year-over-year before the current oil shortage began to bite — meaning the pressure on shop customers is compounding.",
    whyItMatters: "This is a direct, immediate cost-of-business issue for every shop in Canada that performs oil changes — which is to say, every shop in Canada. The practical implications are threefold. First, your oil change pricing needs to be reviewed now, before your supplier invoices reflect the full increase. If you are locked into service package pricing that was set before the shortage, you are absorbing a margin hit that will compound over the next six months. Second, you need to audit your current oil inventory and determine your exposure on low-viscosity grades (0W-16, 0W-20) — these are the grades most likely to see availability constraints, and they are the grades required by the fastest-growing segment of your customer base: newer hybrids and fuel-efficient vehicles. Third, the substitution guidance from Toyota and Nissan creates a liability question: if you substitute a heavier grade without explicit customer consent and documentation, you are exposed. Create a written substitution consent form now, before you need it.",
    source: "Global News / GasBuddy / McMaster University / Statistics Canada",
    sourceUrl: "https://globalnews.ca/news/11855210/motor-oil-market-canada-strait-of-hormuz/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "USED VEHICLE MARKET",
    tagColor: "#16a34a",
    headline: "Canadian Used Vehicle Prices Continue Softening — Tariff-Driven Repair Cost Surge Creates a New Service Opportunity as Customers Hold Their Vehicles Longer",
    summary: "Canadian used vehicle wholesale prices have now declined for seven consecutive weeks, with the most recent Canadian Black Book data showing continued softening across truck and SUV segments — the categories that dominate repair volume in most Canadian independent shops. The sustained decline is being driven by a confluence of factors: tariff-driven new vehicle price increases have pushed more buyers into the used market, but the same tariffs have also increased the cost of parts and repairs, reducing the equity cushion that customers expected when they purchased used vehicles at elevated 2022-2023 prices. Automotive News reported on May 22 that repair shops and dealerships across North America have absorbed higher costs over the past year of tariffs, with customers now confronting 'bigger bills' for routine service. An independent repair garage owner in Ferndale, Michigan, told Automotive News that the tariff impact on his business has been significant and ongoing, with parts costs rising across virtually every category. The same dynamic is playing out in Canadian shops, where the combination of U.S. Section 232 tariffs on steel and aluminum, counter-tariffs on U.S. goods, and CUSMA-related uncertainty has created a complex parts-sourcing environment. Meanwhile, the average retail listing price for used vehicles in Canada remains elevated at approximately $37,750, reflecting the fact that while wholesale prices are softening, retail sellers are resisting price reductions. The gap between wholesale and retail is widening — a signal that auction sale rates are declining and that the market is in a transitional phase.",
    whyItMatters: "Falling used vehicle values combined with rising repair costs create a specific customer psychology that is directly relevant to your service advisor conversations. Customers who are underwater on their vehicle — owing more than it is worth — are your most captive service customers. They cannot afford to trade out, and they cannot afford to let the vehicle deteriorate. But they are also under financial pressure, which means they will push back harder on repair estimates and are more likely to defer non-urgent work. The practical response is to segment your customer base by vehicle age and value, identify the customers most likely to be in this position, and develop a proactive maintenance communication strategy that emphasizes the cost of deferred maintenance versus the cost of a current repair. A customer who understands that a $400 repair today prevents a $2,000 repair in six months is a customer who authorizes the work. A customer who only hears '$400' is a customer who defers.",
    source: "Canadian Black Book / Automotive News / Canadian Auto Dealer",
    sourceUrl: "https://canadianautodealer.ca/2026/05/canadian-used-vehicle-prices-fall-0-32-for-the-week/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "TRADE POLICY",
    tagColor: "#2563eb",
    headline: "CUSMA Review Countdown: 38 Days to July 1 — Three Scenarios That Will Reshape Parts Sourcing, Tariff Exposure, and Shop Operating Costs for the Next Decade",
    summary: "On July 1, 2026, Canada, the United States, and Mexico will begin the first mandatory joint review of the Canada-United States-Mexico Agreement (CUSMA/USMCA), and the outcome will have direct, material consequences for every Canadian automotive shop that sources parts from U.S. suppliers — which is to say, virtually every shop in the country. CPA Ontario published a detailed analysis on May 22 outlining three possible scenarios: extension with amendments (the base case), annual review limbo (the 'zombie USMCA'), and outright withdrawal. The base case — extension with amendments — is the scenario that major Canadian forecasters including the Bank of Canada and Scotiabank have built their 2026 economic outlooks on, and it projects Canadian GDP growth of 1.1% in 2026 under the assumption that CUSMA tariff exemptions remain intact. The U.S. Trade Representative has publicly stated that U.S.-Mexico talks are progressing faster than U.S.-Canada talks, and characterized Canada as 'doubling down on globalization when we're trying to correct for the problems of globalization.' Formal review talks between Washington and Ottawa have yet to officially launch as of this week. The automotive rules of origin provisions are among the most contested elements of the review: CUSMA currently requires 75% regional value content for passenger vehicles and light trucks, with additional labor value-content and steel-and-aluminum purchase requirements. U.S. manufacturers are pushing for higher thresholds, and any tightening will ripple through the Canadian parts supply chain. Separately, the U.S. Supreme Court's ruling on Section 122 tariffs and Trump's subsequent announcement of a new 15% global duty — with exemptions for vehicles and parts — has created additional complexity for shops that source from non-CUSMA suppliers.",
    whyItMatters: "The CUSMA review is not an abstract trade policy issue — it is a parts-pricing event that will land directly on your shop floor. Here is the specific exposure: if CUSMA enters annual review limbo or if the U.S. moves toward withdrawal, the tariff exemptions that currently protect roughly 89% of Canadian exports from U.S. duties will be at risk. For shops, the most immediate impact would be on U.S.-sourced parts — filters, brakes, belts, sensors, and the thousands of other components that flow across the border daily under CUSMA preference. The canflow-global analysis published this week is particularly useful for shops that do their own parts ordering: if you are claiming CUSMA preference on recurring parts shipments, your documentation needs to be current and your supplier affidavits need to reflect the actual production process. CBSA has a four-year lookback window on origin claims, and any rule tightening in the review will trigger increased verification activity. The practical action item: call your primary parts distributor this week and ask them directly what their CUSMA exposure is and what their contingency plan is if the review produces tighter origin rules.",
    source: "CPA Ontario / canflow-global / Bank of Canada / USTR",
    sourceUrl: "https://www.cpaontario.ca/insights/blog/cusma-review-2026-scenarios",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🛢️",
    text: "AutoZone has issued internal communications to store managers warning of price adjustments and availability challenges on select motor oils that flow through the Strait of Hormuz. The bulletin specifically calls out 'challenges on select motor oils and lubes' and states that 'price adjustments are coming for most products.' If you have not already locked in oil pricing with your supplier, do it this week — the retail price increases are coming regardless of what your supplier has told you.",
    sourceUrl: "https://globalnews.ca/news/11855210/motor-oil-market-canada-strait-of-hormuz/",
  },
  {
    icon: "⚖️",
    text: "The U.S. Supreme Court struck down the Section 122 tariff surcharge on May 7, 2026, in a 2-1 decision — but Trump immediately announced a replacement 15% global duty. Vehicles and auto parts were specifically exempted from the new 15% duty, meaning CUSMA-compliant parts continue to flow under existing tariff treatment. However, the legal and policy uncertainty around tariffs remains high, and shops that source from non-CUSMA suppliers (e.g., European or Asian specialty parts) should expect continued pricing volatility.",
    sourceUrl: "https://www.pwc.com/ca/en/services/tax/publications/tax-insights/us-court-strike-down-section-122-tariffs-2026.html",
  },
  {
    icon: "🔋",
    text: "A Midas franchisee in Barrie, Ontario — Anil Kumar — has built what he calls a 'wall of love' inside his shop: stacks of diapers, paper towels, and non-perishable food destined for the local food bank. The initiative has generated significant community goodwill and local media coverage. In a market where customer acquisition costs are rising and loyalty is harder to earn, community-facing initiatives like this are a measurable differentiator. Worth noting for any shop owner thinking about how to build local brand equity.",
    sourceUrl: "https://www.tirebusiness.com/retail/tb-midas-barrie-charity-kumar/",
  },
  {
    icon: "🤖",
    text: "Raise a Hood, an AI-powered tire and repair diagnostic platform, has launched a new model that matches customers — armed with a likely diagnosis from the AI — directly to area shops. The platform is designed to reduce the friction between a customer's first symptom search and their first service appointment. For independent shops, this represents both an opportunity (new customer acquisition channel) and a threat (customers arriving with AI-generated diagnoses that may or may not be accurate). Worth evaluating whether your shop is listed on the platform.",
    sourceUrl: "https://www.tirebusiness.com/opinion/column/tb-detore-column-raise-a-hood-tire-diagnostic/",
  },
];

const tipOfTheDay = {
  title: "Lock In Your Oil Pricing and Review Your Oil Change Package Rates This Weekend",
  text: "The synthetic motor oil shortage driven by the Strait of Hormuz disruption is not a future risk — it is a present-tense pricing event. Petroleum analyst Patrick de Haan has confirmed that price adjustments are already in motion at major distributors. If your shop offers oil change packages, service bundles, or pre-paid maintenance plans with fixed pricing, you are exposed to a margin squeeze that will compound over the next six months. This weekend's action item: call your primary oil supplier on Monday morning and ask for their current pricing on your top five oil grades, ask whether they have supply commitments they can lock in, and then review your service pricing accordingly. If you need to adjust your oil change pricing, do it proactively with a clear customer communication — 'due to global supply chain disruptions affecting synthetic oil production' — rather than reactively after your margins have been compressed.",
};

const quoteOfTheDay = {
  text: "Canada is absolutely vulnerable to higher price and lower availability of high-end motor oil. Maintenance is going to become more expensive.",
  author: "Behrouz Bakhtiari",
  title: "Assistant Professor, Operations Management, McMaster University — May 19, 2026",
};

const rideOfTheDay = {
  name: "1969 Dodge Charger Daytona — The Winged Warrior That Won NASCAR's Aero Wars",
  description: "The 1969 Dodge Charger Daytona is one of the most audacious engineering decisions in American automotive history. Built for a single purpose — winning NASCAR's superspeedways — the Daytona was fitted with a pointed nose cone that extended 18 inches beyond the standard Charger body, and a towering rear wing that stood 23 inches above the decklid to keep the rear tires planted at speeds that no production car had ever reached. Only 503 street-legal Daytonas were built — the minimum required by NASCAR homologation rules — and the car became the first production vehicle to exceed 200 miles per hour in competition when Charlie Glotzbach ran 243.256 mph at Talladega in testing. The street version was available with either the 440 Magnum or the 426 Hemi, and both versions were deliberately underrated at the factory — the 426 Hemi was listed at 425 horsepower, but actual output was closer to 500 hp. Today, a numbers-matching Hemi Daytona in documented condition commands prices well above $500,000 at auction, and the handful of surviving examples in top condition are among the most sought-after American muscle cars in the world. The Daytona was built for one season only — NASCAR banned the aerodynamic wings for 1971 — making every surviving example a one-year-only piece of American racing history.",
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
              alt="Automotive Workshop"
              className="w-full h-[500px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
              <span className="inline-block bg-[#e05a1a] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
                Top Intelligence
              </span>
              <h3 className="font-['Oswald'] text-4xl md:text-5xl font-bold text-white leading-tight uppercase mb-4">
                Motor Oil Shortage Hits Canadian Shops, Used Vehicle Values Keep Sliding, and the CUSMA Clock Is Ticking
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Three stories with direct, immediate consequences for your shop floor, your parts pricing, and your customer conversations.
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
