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

const BRIEFING_NUMBER = 54;
const BRIEFING_DATE = "June 30, 2026";
const BRIEFING_DAY = "Tuesday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ZToevxyuBybPIQis.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/QzmXyyNWVxUxEVHM.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/rZillXOhBEybDcDK.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/SsLNxNDHStXkNrSo.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/fWrBthteuhHzpskK.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "CUSMA REVIEW / TARIFF CLIFF / TRADE",
    tagColor: "#1d4ed8",
    headline: "Canada's Former Trade Chief: No Tariff Deal Before U.S. Midterms — CUSMA Review Kicks Off Today — July 24 Tariff Cliff Looms",
    summary: "Steve Verheul, Canada's former chief CUSMA negotiator and now a senior advisor at BMO Capital Markets, told a client event Monday that a comprehensive Canada-U.S. tariff deal is unlikely before the November 2026 U.S. midterm elections. Verheul's assessment: the Trump administration does not have the political bandwidth to close a complex trade deal while managing a midterm campaign, and U.S. domestic politics will dominate the agenda through November. The CUSMA formal review process kicked off today — the first trilateral Free Trade Commission meeting since the agreement came into force in 2020. Most analysts now expect the 'zombie CUSMA' outcome: annual rolling reviews with no comprehensive resolution. The Section 122 temporary tariff surcharge — the 10% blanket tariff applied to most Canadian goods — expires July 24. The White House must issue a new proclamation before that date. Options include: extending Section 122 at 10%, replacing it with targeted sector tariffs, or allowing it to lapse (which would revert to pre-Section 122 tariff rates). U.S. first-half 2026 auto sales came in at -3.6% year-over-year, the weakest H1 since 2020. Analysts attribute the decline to tariff-inflated new vehicle prices and consumer uncertainty. The weak U.S. sales data gives Canada a negotiating argument — tariffs are hurting American consumers and dealers — but Verheul's assessment suggests the political will to act on that argument does not exist before November.",
    whyItMatters: "Verheul's assessment is the most authoritative public statement yet that the tariff environment will not change materially before November 2026. For shop owners, this means four more months of the current environment: elevated new vehicle prices, consumers holding onto older vehicles longer, and repair-vs-replace decisions tilting toward repair. The July 24 Section 122 expiry is the next critical date. Watch for a White House proclamation in the next 24 days. If Section 122 is extended or replaced with targeted tariffs, the parts cost environment for your shop stays elevated. If it lapses, some imported parts costs may ease — but the 25% auto tariff under Section 232 remains in place regardless. Plan your parts inventory and pricing strategy for a tariff environment that persists through at least Q4 2026. The shops that are thriving right now are the ones that have already adjusted their value proposition: repair and maintain is the financially rational choice for most Canadian vehicle owners, and your shop is the place that makes that possible.",
    source: "BMO Capital Markets / Reuters / Automotive News — June 29–30, 2026",
    sourceUrl: "https://www.reuters.com/world/americas/canada-us-trade-deal-unlikely-before-midterms-verheul-2026-06-29/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "HONDA / ELEMENT REVIVAL / HYBRID",
    tagColor: "#15803d",
    headline: "Honda Is Reportedly Reviving the Element as a Hybrid for 2029 — Built in Ohio, $30K–$35K, 100,000 Units/Year",
    summary: "Automotive News broke the story Sunday evening: Honda is planning to revive the Element nameplate as a hybrid SUV for the 2029 model year. According to sources familiar with the program, the new Element will be built at Honda's East Liberty, Ohio plant — not at the Alliston, Ontario facility — with a target production volume of 100,000 units per year. The price point is expected to be $30,000–$35,000 USD, positioning it below the CR-V Hybrid and above the HR-V. The original Element, sold from 2003 to 2011, was a cult favourite for its boxy utility, wipe-clean interior, and clamshell rear doors. It was discontinued after sales declined, but the nameplate has maintained a devoted following. The revival signals Honda's continued investment in hybrid technology as the company recalibrates its electrification strategy. Honda announced earlier this year that it was slowing its all-electric transition and extending hybrid production timelines. The Ohio build location — rather than Alliston — is notable. Honda's Alliston plant currently produces the CR-V and Civic. Adding a third model to Alliston would require significant retooling. The Ohio decision also reflects the political reality of the current U.S.-Canada trade environment: building in Ohio avoids the 25% Section 232 auto tariff on Canadian-assembled vehicles sold in the U.S. market.",
    whyItMatters: "The Honda Element revival matters to Canadian shop owners on two levels. First, the Ohio build decision is a direct consequence of the 25% auto tariff — Honda is routing production to avoid tariff exposure on U.S. sales. This is the same calculus that has led other OEMs to shift production away from Canadian plants. Every vehicle that is not built in Canada is a vehicle that does not generate Canadian assembly jobs, Canadian parts demand, or Canadian dealer service revenue. Second, the hybrid powertrain signals what the next generation of service work looks like. The 2029 Element will likely use Honda's two-motor hybrid system — the same architecture used in the CR-V Hybrid and Accord Hybrid. If you are not already trained and equipped for Honda hybrid service, the window to get ahead of this is now. The Element's target customer — outdoorsy, practical, budget-conscious — is exactly the kind of customer who will keep a vehicle for 10–15 years and spend money on maintenance. Get familiar with Honda hybrid service before 2029.",
    source: "Automotive News / Honda Canada — June 29, 2026",
    sourceUrl: "https://www.autonews.com/vehicles/honda-element-revival-hybrid-2029",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "CONSUMER BEHAVIOUR / REPAIR VS REPLACE / MARKET DATA",
    tagColor: "#7c3aed",
    headline: "79% of Independent Car Buyers Say a Car Is a Need, Not a Want — What This Means for Shop Owners",
    summary: "A new study published by CBT News surveyed independent used car buyers across North America and found that 79% describe their vehicle purchase as a necessity rather than a discretionary choice. The data skews heavily toward lower-income buyers: 67% of respondents earn under $75,000 annually. The study found that the average independent used car buyer is not shopping for a vehicle they want — they are shopping for a vehicle they need to get to work, take their kids to school, and manage their daily life. The implications for the repair-vs-replace decision are significant. When a vehicle is a necessity and the buyer is financially stretched, the calculus changes: a $2,500 repair on a vehicle you own outright is almost always cheaper than a $500/month payment on a replacement. The study found that 61% of respondents had delayed a major vehicle repair in the past 12 months due to cost concerns — but 74% said they ultimately had the repair done rather than replacing the vehicle. The data aligns with what Canadian Black Book has been tracking: used vehicle values have been softening (-0.35% last week), but transaction volumes remain elevated. Canadians are buying used vehicles and keeping them longer. The tariff-inflated new vehicle market — where the average new vehicle now costs over $50,000 in Canada — is pushing buyers down-market and extending vehicle lifespans.",
    whyItMatters: "This data is a direct tailwind for independent repair shops. When 79% of your potential customers view their vehicle as a necessity — not a luxury — they will find a way to pay for repairs. The 61% who delayed a repair and then had it done anyway are your customers. They are not walking away from their vehicles. They are managing cash flow, looking for payment options, and ultimately choosing repair over replacement. Three things you can do with this data today: (1) Make sure your shop offers a payment plan or financing option. Customers who are financially stretched will choose the shop that gives them a path to 'yes.' (2) Communicate the repair-vs-replace math explicitly. A $2,500 repair versus $6,000/year in new payments is a compelling argument — and most customers have not done that math. Do it for them. (3) Build relationships with the independent used car dealers in your area. The buyers who just purchased a $15,000 used vehicle need a trusted shop immediately. A referral relationship with a dealer puts you in front of those customers at the exact moment they are looking for a shop.",
    source: "CBT News / Canadian Black Book — June 2026",
    sourceUrl: "https://www.cbtnews.com/study-79-percent-car-buyers-necessity-not-want/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "📅",
    text: "CUSMA Review Day: The formal trilateral review process kicked off today. Most analysts expect the 'zombie CUSMA' outcome — annual rolling reviews with no comprehensive resolution. The Section 122 tariff surcharge expires July 24. Watch for a White House proclamation in the next 24 days. The 25% Section 232 auto tariff is not affected by the CUSMA review.",
    sourceUrl: "https://www.reuters.com/world/americas/canada-us-trade-deal-unlikely-before-midterms-verheul-2026-06-29/",
  },
  {
    icon: "🚗",
    text: "U.S. H1 2026 auto sales came in at -3.6% year-over-year — the weakest first half since 2020. Tariff-inflated new vehicle prices and consumer uncertainty are the primary drivers. Canadian H1 data is due this week. Watch for OEM-by-OEM breakdowns — Honda Canada (Alliston impact), Stellantis Canada (Brampton idle), GM Canada (CAMI idle), Ford Canada (Super Duty Oakville launch).",
    sourceUrl: "https://www.autonews.com/sales/us-auto-sales-h1-2026-tariff-impact",
  },
  {
    icon: "🔧",
    text: "Unifor-Ford bargaining: Day 9 in downtown Toronto. The July 10 tentative deal target is 10 days away. Ford has not publicly responded to Unifor's production commitment demand for Windsor Assembly and Oakville. A work stoppage at Windsor Assembly would affect Bronco Sport and Lincoln Corsair parts availability within days.",
    sourceUrl: "https://www.unifor.org/news/all-news/unifor-launches-negotiations-ford-motor-company",
  },
  {
    icon: "🏭",
    text: "Honda's Ohio build decision for the 2029 Element Hybrid is a direct consequence of the 25% Section 232 auto tariff. Building in Ohio avoids tariff exposure on U.S. sales. This is the same calculus driving production shifts away from Canadian plants at Stellantis (Brampton), GM (CAMI), and now Honda. Each shift reduces Canadian assembly employment and parts demand.",
    sourceUrl: "https://www.autonews.com/vehicles/honda-element-revival-hybrid-2029",
  },
];

const tipOfTheDay = {
  title: "The Repair-vs-Replace Math Is Your Most Powerful Sales Tool Right Now",
  text: "With new vehicle prices averaging over $50,000 in Canada and used vehicle financing rates still elevated, the repair-vs-replace calculation has never been more compelling. A $3,000 repair on a paid-off vehicle versus $550/month for 60 months on a replacement is a $30,000 difference over five years. Most customers have not done this math. Do it for them — put it on paper, show it on your service advisor screen, explain it at the counter. The shop that helps customers make the financially rational decision builds loyalty that lasts a decade.",
};

const quoteOfTheDay = {
  text: "A comprehensive tariff deal before the U.S. midterms is not realistic. The political bandwidth simply isn't there.",
  author: "Steve Verheul",
  title: "Former Canadian Chief CUSMA Negotiator, BMO Capital Markets — June 29, 2026",
};

const rideOfTheDay = {
  name: "1970 Chevrolet Camaro Z28 — Hugger Orange, White Racing Stripes, Ontario-Plated",
  description: "The 1970 Camaro Z28 is the car that made Chevrolet's engineers forget they were supposed to be building a pony car. The second-generation Camaro arrived in 1970 with a body that was wider, lower, and more aggressive than anything Detroit had produced in the segment — and the Z28 package put the most serious engine in it. The 350 cubic inch LT-1 V8 was a high-revving, solid-lifter screamer that produced 360 horsepower officially — a number that every dyno operator in the country knew was understated. The LT-1 was the same engine used in the Corvette, detuned slightly for the Camaro's drivetrain. In Hugger Orange with white racing stripes, the 1970 Z28 was not a car you could ignore. The colour — officially Chevrolet Orange — was one of the defining shades of the muscle car era, and the Z28 wore it with authority. The white stripes ran the length of the hood and trunk lid, framing the bodywork like a racing livery. An Ontario-plated example at a show today stops traffic the same way it did on the 401 in 1970. The 1970 Z28 is increasingly recognized as one of the finest driver's cars of the muscle car era — not just fast in a straight line, but genuinely capable in corners. Production was 8,733 units in 1970. Documented LT-1 examples in show condition now trade for $60,000–$90,000. The ones in Hugger Orange go first.",
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
                {["NO TARIFF DEAL BEFORE MIDTERMS", "HONDA ELEMENT REVIVAL", "REPAIR VS REPLACE", "CAMARO Z28"].map((tag) => (
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
              alt="CUSMA Review Kicks Off — No Tariff Deal Before Midterms — Honda Element Revival — Baywash Daily Briefing Edition No. 54"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#1d4ed8] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Tuesday Edition — No. 54 — CUSMA Review Day</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                No Tariff Deal Before Midterms — CUSMA Review Kicks Off — July 24 Cliff Looms
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
