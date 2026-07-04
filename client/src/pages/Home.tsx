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

const BRIEFING_NUMBER = 58;
const BRIEFING_DATE = "July 4, 2026";
const BRIEFING_DAY = "Saturday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/bfGIXSedFEDkMDnC.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/NdRxAkITXPqwLkJU.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/IEQJFijwpZUIuGCM.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/UFHeyjqhrKPeHCpk.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ZmAGNnWoRIGqUyuw.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "CANADIAN AUTO SALES / JUNE 2026 / +1.9% YOY / H1 DOWN 2.6%",
    tagColor: "#1d4ed8",
    headline: "Canadian Auto Sales June 2026: Up 1.9% to 182,000 Units — But H1 2026 Down 2.6% — Honda CR-V Dethrones F-150 and RAV4 — SAAR 1.84 Million — Tariff Impact Visible in First-Half Numbers",
    summary: "DesRosiers Automotive Consultants reported on July 3 that Canadian new vehicle sales in June 2026 totalled an estimated 182,000 units, up 1.9% from 178,000 units in June 2025. The headline gain looks positive, but context matters: June 2026 had one extra selling day compared to June 2025, which accounts for roughly 4% of the raw year-over-year comparison. On a daily selling rate basis, June 2026 was essentially flat with June 2025 — a sign that the underlying market remains under pressure. The seasonally adjusted annual rate (SAAR) for June came in at 1.84 million, up from 1.78 million in the prior year. The more telling number is the first-half total: Canadian vehicle sales for H1 2026 are down 2.6% compared to H1 2025. The 25% auto tariff, elevated vehicle prices, high household debt, and consumer uncertainty are all visible in that number. The standout story of June was the Honda CR-V dethroning the Ford F-150 and Toyota RAV4 as Canada's best-selling vehicle. Two factors drove this: Toyota is navigating a disruptive model changeover that has constrained RAV4 supply, and Ford's F-150 sales have been affected by tariff uncertainty and buyer hesitation. The CR-V Hybrid is the key driver of Honda's June result — it is the right vehicle at the right time, combining SUV practicality with hybrid fuel economy at a price point that Canadian buyers can justify. The broader market trend is clear: SUVs and crossovers now account for approximately 46% of Canadian new vehicle sales, trucks 28%, and traditional cars 26%. Hybrid vehicles are the fastest-growing segment, up approximately 28% year-over-year in June.",
    whyItMatters: "The H1 2026 decline of 2.6% is the most important number in this report for shop owners. Fewer new vehicle sales means more Canadians are keeping their existing vehicles longer — which is a direct tailwind for your service bay. The average age of vehicles on Canadian roads is now over 12 years, and rising. Every month that a customer delays buying a new vehicle is another month of maintenance and repair work for your shop. The Honda CR-V Hybrid result is also a signal: hybrids are coming to your service bays in volume. If you are not already trained and equipped to service hybrid drivetrains — battery systems, regenerative braking, high-voltage safety protocols — you are falling behind the market. The CR-V Hybrid uses Honda's two-motor hybrid system (i-MMD), which is different from Toyota's THS-II. Both are in your market. The shops that invest in hybrid training now will capture the service work as the fleet ages.",
    source: "DesRosiers Automotive Consultants / MarkLines — July 3–4, 2026",
    sourceUrl: "https://www.marklines.com/en/news/347156",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "SLATE AUTO / CANADA / TARIFF CASUALTY / US$24,950 TRUCK",
    tagColor: "#b91c1c",
    headline: "Slate Auto Refuses to Sell Its US$24,950 Bare-Bones EV Pickup in Canada — 25% Tariff + Exchange Rate Pushes Price to CDN$40,000+ — A Concrete Example of How the Tariff Wall Is Reshaping the Canadian Market",
    summary: "Slate Auto, the Indiana-based electric vehicle startup backed by Amazon founder Jeff Bezos, confirmed this week that it has no plans to sell its bare-bones electric pickup truck in Canada. 'We do not have plans to sell vehicles in Canada,' company spokesperson Jeff Jablansky told Automotive News Canada. No further explanation was offered, but the math tells the story. Slate's all-electric compact pickup starts at US$24,950 — a price point that has generated significant buzz in the U.S. market as the first genuinely affordable electric truck. The truck is minimalist by design: roll-up windows, no infotainment screen, no chrome, a flat bed, and a boxy shape. A 63 kWh battery provides an estimated 328 kilometres of range. Slate also offers the truck in squareback SUV form for US$29,950 and a fastback SUV for US$31,950. The problem for Canada is straightforward: Slate plans to build its vehicles in Indiana. Under Canada's retaliatory tariff framework, U.S.-built vehicles face a 25% surtax when imported into Canada. Add the unfavourable Canadian dollar exchange rate — the loonie is trading at approximately 0.73 USD — and Slate's US$24,950 truck becomes a CDN$42,000+ proposition in Canada. For comparison, Chevrolet Canada is currently offering the Bolt EV for just over CDN$35,000 after rebates. Slate would be uncompetitive at CDN$42,000 with no infotainment and roll-up windows. The company is right to stay out of the Canadian market under current conditions. This is not a business decision — it is a tariff decision. Slate's absence from Canada is a direct, concrete, dollar-figure consequence of the 25% retaliatory tariff on U.S.-built vehicles.",
    whyItMatters: "The Slate story is the clearest illustration yet of how the 25% Canadian retaliatory tariff on U.S.-built vehicles is reshaping the Canadian auto market. This is not an abstract trade policy discussion — it is a US$24,950 truck that Canadians cannot buy because the tariff makes it unaffordable. For your shop, the Slate story has two implications. First, the tariff wall is keeping U.S.-built vehicles out of Canada. That means fewer new vehicles entering the Canadian fleet from U.S. manufacturers who build in the U.S. rather than Canada or Mexico. Fewer new vehicles in the fleet means more pressure on existing vehicles — more maintenance, more repair, more service work for independent shops. Second, the gap in the affordable EV truck market that Slate is not filling will eventually be filled by someone else — likely a Chinese manufacturer. BYD, Chery, and Geely are all preparing Canadian launches. The first Chinese EV trucks could arrive in Canada within 18–24 months. The shops that are ready to service them will capture that work.",
    source: "Driving.ca / Automotive News Canada — June 30 – July 3, 2026",
    sourceUrl: "https://driving.ca/auto-news/news/slate-truck-not-available-in-canada",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "CANADA GAZETTE / REMISSION ORDER / EXTENDED TO JUNE 2027 / AUTO PARTS RELIEF",
    tagColor: "#15803d",
    headline: "Canada Extends Steel and Aluminum Remission Order to June 30, 2027 — Auto and Aerospace Parts Inputs Exempted — Fourth Tranche of Products Added — Steel Producers Association Unhappy",
    summary: "The federal government published Order SOR/2026-154 in the July 1, 2026 edition of the Canada Gazette, extending the United States Surtax Remission Order (2025) for another year to June 30, 2027. The extension covers horizontal relief for aluminum and steel goods used in the manufacturing of motor vehicles, aerospace products, and their related parts — a direct benefit to Canadian auto parts manufacturers and, indirectly, to the shops that buy those parts. The Steel Derivative Goods Surtax Order was also amended simultaneously (SOR/2026-155), extending the exemption for auto and aerospace inputs from July 1, 2026 to July 1, 2027. The remission order was originally created to provide relief to Canadian importers who rely on U.S.-sourced steel and aluminum inputs that cannot be sourced domestically. Without the remission, those importers would pay Canada's retaliatory surtax on their U.S.-sourced inputs — effectively taxing Canadian manufacturers for using American raw materials in their Canadian production. The fourth tranche of remission requests has also been processed, adding a substantial number of new products to the schedules. The Canadian Steel Producers Association has publicly objected to the extensions, arguing that the remission program undermines the protective effect of Canada's retaliatory tariffs and gives U.S. steel producers continued access to the Canadian market. The government's position is that the remission is necessary to protect Canadian manufacturers who have no domestic alternative for certain steel and aluminum inputs. The practical effect for the auto sector is that Canadian auto parts manufacturers — and the shops that buy their parts — continue to receive tariff relief on steel and aluminum inputs through June 2027.",
    whyItMatters: "The remission order extension is good news for your parts supply chain, but it comes with a deadline. Here is what you need to know. First, the relief expires June 30, 2027 — not indefinitely. If the government does not extend it again, Canadian auto parts manufacturers will face higher input costs starting July 1, 2027, which will flow through to parts prices. Mark that date. Second, the extension signals that the government recognizes the Canadian auto manufacturing sector cannot absorb the full cost of retaliatory tariffs on its own inputs without significant damage. This is a pragmatic acknowledgement that the tariff war has costs on both sides of the border. Third, the steel producers association's objection is a political signal: there is domestic pressure to let the remission expire and force manufacturers to source Canadian steel. If that pressure wins out in 2027, parts prices will rise. For your shop, the practical action is to review your parts sourcing and understand which of your suppliers are benefiting from the remission order. Parts made with U.S.-sourced steel and aluminum inputs are currently priced with the remission factored in. If the remission expires in June 2027, those prices will likely increase.",
    source: "Canada Gazette / McMillan LLP / Willson International — July 1–3, 2026",
    sourceUrl: "https://mcmillan.ca/insights/following-july-1st-review-cusma-remains-in-effect-until-2036-on-going-negotiations-as-part-of-annual-reviews-to-agree-on-north-american-free-trade-will-continue/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🇺🇸",
    text: "Happy Independence Day to our American friends and neighbours. U.S. markets are closed today. U.S. government offices are closed. No new tariff announcements are expected. The USTR Section 301 forced-labour tariff hearings — at which Canada is a named target for 10–12.5% tariffs replacing the expiring Section 122 tariff on July 24 — resume Monday, July 7. Three days from today.",
    sourceUrl: "https://apcoworldwide.com/blog/qa-july-is-a-big-month-for-trade-whats-coming-next/",
  },
  {
    icon: "🔧",
    text: "Unifor-Ford bargaining: Day 13 — 6 days to the July 10 deadline. No announcement of a tentative agreement as of press time. The final push in Detroit Three bargaining typically happens in the last 72–96 hours before the deadline. Watch for a framework announcement Sunday or Monday. If you service Ford vehicles, the 30-day parts buffer recommendation from Edition No. 57 still stands.",
    sourceUrl: "https://refdesk.ca/blog/unifor-ford-detroit-three-auto-bargaining-july-10-2026-deadline-canadian-autoworkers-cusma-tariffs-guide",
  },
  {
    icon: "🚗",
    text: "Geely is shipping the first batch of Lotus EVs to Canada, according to a Facebook post from the Guangdong Today account. Three Chinese automakers — BYD, Chery, and Geely — are preparing Canadian EV launches. The first shipments could arrive in Canada within weeks. Lotus is the premium entry point; BYD and Chery will follow at mass-market price points. Chinese EVs are coming to your service bays.",
    sourceUrl: "https://www.facebook.com/guangdongtoday/posts/china-canada-opens-a-narrow-door-for-chinese-evsbut-with-conditions-in-mid-june-/1498407552328281/",
  },
  {
    icon: "📉",
    text: "Auto loans are lengthening across Canada. 84-month (7-year) terms are becoming common at Canadian dealerships, raising concerns about negative equity — buyers owing more on their vehicle than it is worth. Longer loans mean customers keep vehicles longer, which means more maintenance and repair work for independent shops. The average Canadian auto loan term is now 72 months, up from 60 months in 2020.",
    sourceUrl: "https://www.autonews.com/retail/anc-canadian-auto-news-week-june-29-2026/",
  },
];

const tipOfTheDay = {
  title: "Mark June 30, 2027 in Your Calendar — Remission Order Expiry",
  text: "The steel and aluminum remission order that keeps auto parts prices from rising expires June 30, 2027. That is 12 months from now. Talk to your parts suppliers this month about which of their products rely on U.S.-sourced steel and aluminum inputs covered by the remission. If the order is not extended, those parts prices will rise in July 2027. Knowing your exposure now gives you 12 months to plan.",
};

const quoteOfTheDay = {
  text: "We do not have plans to sell vehicles in Canada.",
  author: "Jeff Jablansky, Slate Auto Spokesperson",
  title: "On why the US$24,950 EV pickup will not come to Canada — June 30, 2026",
};

const rideOfTheDay = {
  name: "1971 Plymouth 'Cuda 440 Six Pack — Plum Crazy Purple, Black Hockey Stick Stripes, Ontario-Plated",
  description: "On U.S. Independence Day, the Ride of the Day is the most American car ever owned by a Canadian: the 1971 Plymouth 'Cuda 440 Six Pack in Plum Crazy Purple. The 'Cuda is the car that defined the muscle car era — a Hamtramck, Michigan-built machine that found its way into Canadian driveways and has never left. The 440 Six Pack engine is one of the great powerplants of the muscle car era: three two-barrel Holley carburetors mounted on an Edelbrock intake manifold, 390 horsepower, 490 lb-ft of torque, and a sound that announces itself two blocks before the car arrives. Plum Crazy Purple — officially Violet — is the most memorable factory colour of the era. It is not subtle. It is not trying to be. Black hockey stick stripes along the lower body, a black shaker hood scoop, and an Ontario licence plate. The 'Cuda was built in America and sold in Canada at a time when the two countries shared a free trade agreement in automobiles — the 1965 Auto Pact, the predecessor to CUSMA. Today, on Independence Day 2026, that free trade agreement is under its most serious threat in 60 years. The 'Cuda is a reminder of what the Canada-U.S. automotive relationship built. Happy Independence Day.",
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
                {["CANADA SALES H1 -2.6%", "SLATE TARIFF CASUALTY", "REMISSION EXTENDED", "PLUM CRAZY 'CUDA"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — U.S. Independence Day Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="Canadian Auto Sales June 2026 — Slate Auto Tariff Casualty — Remission Order Extended — Baywash Daily Briefing Edition No. 58"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#1d4ed8] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 58 — Saturday, July 4, 2026 — U.S. Independence Day</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Canada H1 Sales Down 2.6% — Slate Tariff Casualty — Remission Extended to 2027
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — 'Cuda 440 Six Pack</span>
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
