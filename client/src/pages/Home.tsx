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

const BRIEFING_NUMBER = 45;
const BRIEFING_DATE = "June 21, 2026";
const BRIEFING_DAY = "Sunday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/BLlaFfIqgtBwrLJx.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/PixhaYitgfCKqJvf.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/OsiwpeDjAiEumPll.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/jYTACShKdBPBtsYb.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/jXdbSvxiinTcxZoI.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "EV SALES / GAS PRICES",
    tagColor: "#15803d",
    headline: "Canadian EV Sales Up 20.8% — Gas at $1.63/L, Iran War Keeps Prices High, Chinese EVs Loom — The New Math for Shop Owners",
    summary: "CBC News Sunday morning lead story: electric vehicle sales in Canada have climbed sharply since January, driven by two forces — the Liberal government's restored EV incentives and elevated fuel prices caused by the U.S.-Iran war and Strait of Hormuz disruption. According to Statistics Canada data, Canadians bought 8,672 new EVs in January. That rose to 12,547 in February and 21,574 in March, before settling at 17,795 in April. Taken together, EV sales in the first four months of 2026 were up 20.8 per cent compared to the same period in 2025. The government reintroduced incentives in February, offering up to $5,000 off the price of a fully electric vehicle and up to $2,500 off a hybrid, as long as the vehicles are made in Canada or in a country with which Canada has a free trade agreement. The national average gas price was $1.63 per litre as of Friday — 24.1 cents higher than last year's average, according to GasBuddy. J.D. Power Canada managing director J.D. Ney: 'I think for the most part, Canadians were just simply doing the math.' The J.D. Power annual survey found that 34 per cent of new-car shoppers were somewhat or very likely to buy an EV as their next vehicle — up from 28 per cent the year before. Nearly one-third of all new-car shoppers said they would consider a Chinese brand; that figure rose to more than half among shoppers interested in buying an EV. The 2,910 Chinese EVs that arrived in May appear to have been mostly Teslas, per Prime Minister Carney. Chery has officially announced plans to sell in Canada by late 2026. BYD is hiring in Toronto for its Flash Charging network. CADA chief economist Charles Bernard: 'In a world where everything is more expensive, it was tough for consumers to say, yeah, I'll pay a premium because I love that EV technology.' But with incentives and high gas prices, the math has changed. The caveat: if gas prices fall, the trend reverses. The Middle East situation remains unresolved.",
    whyItMatters: "The 20.8% EV sales increase is the most important consumer trend story of the week for shop owners. Here is what it means in practice: (1) The mix of vehicles coming into your shop is shifting — more hybrids and EVs, fewer pure ICE vehicles. Plan your training and tooling accordingly. (2) The $1.63/L gas price is driving customers to keep their existing vehicles longer and drive them more carefully — which means more maintenance demand, not less. (3) The Chinese EV threat is no longer theoretical. Chery is confirmed for late 2026. BYD is building charging infrastructure. These are vehicles that will be on Canadian roads within 12-18 months, and they will need service. If your shop is not positioned to service Chinese-brand EVs, you will lose that business to dealers. (4) The J.D. Power finding that 34% of shoppers are considering an EV is a leading indicator of your future vehicle mix. Start planning now for the tooling, training, and bay space you will need in 2027-2028. The shops that thrive in the EV transition will be those that prepared 18 months before the wave arrived.",
    source: "CBC News — June 21, 2026",
    sourceUrl: "https://www.cbc.ca/news/business/ev-sales-increasing-canada-9.7241391",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "BYD / CHARGING NETWORK",
    tagColor: "#1d4ed8",
    headline: "BYD's 5-Minute Flash Charging Is Coming to Canada — 1,500 kW, -30°C Capable, 250 km in 5 Minutes — And the U.S. Is Locked Out",
    summary: "BYD has confirmed its Canadian expansion plans through a Toronto-based job posting for a Flash Charging Business Development Manager — making Canada the Chinese automaker's first North American market for both vehicles and charging infrastructure. The specs are extraordinary: up to 1,500 kW of charging power (compared to Tesla Supercharger V4 at 500 kW and most public fast chargers at 350 kW). BYD claims compatible vehicles can add approximately 250 miles (400 kilometres) of range in as little as five minutes under ideal conditions. More significantly for Canadian drivers: the system can charge from 10% to 70% in roughly five minutes even at -30°C — directly addressing the winter charging anxiety that has been the single biggest barrier to EV adoption in Canada. The technology uses battery-buffered charging stations that store energy on-site, bypassing grid capacity limits without overstressing local power networks. BYD has 4,239 Flash Chargers deployed in China and is targeting 20,000 by end of 2026 before a global rollout. The job posting responsibilities include developing charging station locations, coordinating grid upgrades, managing construction projects, and creating business plans for the charging network across Canada. BYD is also posting more than 10 management positions in Canada while pursuing plans for approximately 20 dealerships. Canada's 6.1% tariff on 49,000 Chinese EVs per year has created the opening. The United States remains firmly locked out — trade restrictions and national security concerns make large-scale BYD deployment in the U.S. highly unlikely in the near future. The catch: Flash Charging only delivers its full 1,500 kW speed with BYD's own vehicles built on the 1,000-volt Super e-Platform. Other EVs can plug in but will not achieve the same speeds. Chery has confirmed a late 2026 Canadian launch. Manufacturer-plated Chinese EVs have been spotted around Toronto. The Chinese EV invasion is no longer theoretical — it is a hiring campaign.",
    whyItMatters: "BYD building charging infrastructure in Canada before it even sells a single car here is a significant strategic move. It means BYD is planning for a multi-year Canadian market presence, not a test run. The 1,500 kW Flash Charging spec is genuinely disruptive — if it works as advertised at -30°C, it eliminates the single biggest objection to EV ownership in Canada. For shop owners, the implications are: (1) Chinese-brand EVs will be on Canadian roads within 12-18 months. Your technicians need to be trained to service them. BYD, Chery, and Geely use different architectures than Japanese and North American OEMs. (2) The charging infrastructure BYD is building will accelerate EV adoption beyond what government incentives alone would drive. More EVs on the road means more EV service demand. (3) The U.S. being locked out of BYD charging creates a Canada-specific competitive advantage for EV ownership — which will accelerate the Canadian EV transition faster than the U.S. transition. Plan your shop's EV capability timeline accordingly. The shops that are EV-ready in 2027 will capture the Chinese-brand service business that dealers cannot handle at volume.",
    source: "Yahoo Autos / Jalopnik — June 20, 2026",
    sourceUrl: "https://autos.yahoo.com/ev-and-future-tech/articles/byd-flash-charging-expansion-reaches-173037222.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "CUSMA / JULY 1 COUNTDOWN",
    tagColor: "#b91c1c",
    headline: "July 1 CUSMA Countdown: 10 Days Out — Tensions Growing, Canada Still Has No Bilateral Talks with U.S. — Three Outcomes on the Table",
    summary: "CTV National News Saturday night lead: 'Tensions grow as leaders prepare for CUSMA negotiations on July 1.' CP24 confirmed Saturday that Canada-U.S. Trade Minister LeBlanc's office has confirmed the first trilateral meeting is set for July 1, 'as prescribed in the Canada-United States-Mexico Agreement.' LeBlanc's spokesperson: 'This will be an opportunity to build on the positive, constructive bilateral discussions he has had with both countries in recent weeks.' The three outcomes on the table as of today: (1) 16-year renewal — Canada and Mexico want this; Trump has signalled he does not. (2) U.S. withdrawal — legally requires 6 months written notice; CUSMA runs to 2036; Trump cannot unilaterally terminate. (3) Annual rolling review — the 'zombie CUSMA' scenario identified by KPMG's Joy Nott on Friday; technically the deal stays alive but requires annual renegotiation. The critical context: the U.S. and Mexico have already started formal bilateral negotiations. Canada and the U.S. have NOT. LeBlanc met U.S. Trade Representative Greer on the G7 sidelines in France last week — but that was informal. There is no formal Canada-U.S. negotiating framework in place with 10 days to go. Canada formally asked the U.S. and Mexico to renew the agreement for another 16 years on June 1, 2026 — the mandatory 30-day notice period before July 1. Mexico's Economy Secretary Ebrard confirmed the July 1 virtual meeting and indicated another meeting is scheduled for later in July. The Asia Pacific Foundation's Vina Nadjibulla published a detailed analysis warning that Canada's Chinese EV strategy must be aligned with U.S. connected-vehicle rules — or vehicles assembled in Canada could be barred from the American market. Industry Minister Joly returned from Japan Saturday. Per Joly's statement: Honda 'remains fully committed to EV investments' — but the $15B project remains suspended. No formal joint statement from Honda or Toyota.",
    whyItMatters: "Ten days to July 1 and Canada still has no formal bilateral negotiating framework with the U.S. This is the most important fact in the CUSMA story today. The July 1 trilateral meeting is virtual and procedural — it is the beginning of the formal review process, not a deadline for a deal. The most likely outcome remains the zombie CUSMA: annual rolling reviews that keep the deal technically alive while creating year-over-year uncertainty. For shop owners, the practical planning horizon is: assume the 25% auto tariff remains in place through at least 2027. The tariff is not going away on July 1. The Unifor-Ford talks opening tomorrow (June 22) are actually more immediately consequential for Canadian auto production than the July 1 CUSMA meeting — because the contract will lock in production commitments for the next three years regardless of the trade outcome. Watch for Unifor's opening demands tomorrow morning. They will tell you more about the health of Canadian auto production than anything that happens on July 1.",
    source: "CP24 / CTV National News — June 20–21, 2026",
    sourceUrl: "https://www.cp24.com/news/canada/2026/06/20/canada-to-meet-with-us-and-mexico-on-july-1-for-cusma-review/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🇯🇵",
    text: "Industry Minister Joly returned from Japan Saturday after meeting Honda and Toyota executives. Joly's statement: Honda 'remains fully committed to EV investments' despite the $15B project suspension. No formal joint statement from Honda or Toyota. Toyota's Cambridge EV SUV timeline remains under review. The Asia Pacific Foundation warned that any Chinese EV manufacturing deal in Canada must be compatible with U.S. connected-vehicle software rules — or Canadian-assembled vehicles could be barred from the U.S. market.",
    sourceUrl: "https://www.asiapacific.ca/publication/beyond-jolys-four-conditions-canada-needs-strategy-chinese",
  },
  {
    icon: "🔋",
    text: "Chery has officially confirmed plans to launch in Canada by late 2026 under the Omoda and Jaecoo brands. Manufacturer-plated Chinese EVs have been spotted around Toronto. BYD is hiring for 10+ management positions in Canada and pursuing approximately 20 dealerships. Geely has posted Canadian jobs. The Chinese EV market entry is no longer a question of if — it is a question of which brands, which models, and which price points.",
    sourceUrl: "https://autos.yahoo.com/ev-and-future-tech/articles/byd-flash-charging-expansion-reaches-173037222.html",
  },
  {
    icon: "🤝",
    text: "Unifor-Ford bargaining opens tomorrow, Monday June 22, in downtown Toronto. One-third of Unifor's 18,900 Detroit Three members are currently laid off. Ford: 2,714 active / 1,942 laid off. GM: 2,715 / 1,502. Stellantis: 6,590 / 2,290. Unifor's target: a tentative deal by July 10 — before the CUSMA July 1 meeting changes the political landscape. Watch for Unifor's opening demands tomorrow morning.",
    sourceUrl: "https://www.aol.com/articles/unifor-ford-head-bargaining-heres-133455968.html",
  },
  {
    icon: "⛽",
    text: "National average gas price: $1.63/L as of Friday — 24.1 cents higher than last year's average. The Iran war and Strait of Hormuz disruption are keeping wholesale oil prices elevated. Canadian pump prices have eased from recent highs but remain well above 2025 averages. The elevated fuel prices are the single biggest driver of the 20.8% EV sales increase — and they are expected to persist as long as the Middle East situation remains unresolved.",
    sourceUrl: "https://www.cbc.ca/news/business/ev-sales-increasing-canada-9.7241391",
  },
];

const tipOfTheDay = {
  title: "Preparing Your Shop for Chinese-Brand EVs: What You Need to Know Now",
  text: "BYD Flash Charging is coming to Canada. Chery launches late 2026. Geely is hiring. Here is what to do now: (1) Contact your tool supplier about Chinese-brand EV diagnostic software — BYD, Chery, and Geely use proprietary systems that are not covered by standard OBD-II tools. (2) Check your lift capacity — some Chinese EV platforms use different jacking points than North American vehicles. (3) Talk to your parts suppliers about Chinese-brand parts availability — the supply chain is not yet established in Canada. (4) Consider a training investment in EV high-voltage safety — Chinese EVs use 800V+ architectures that require different handling than 400V North American EVs. The shops that prepare now will capture the Chinese-brand service business when dealers are overwhelmed.",
};

const quoteOfTheDay = {
  text: "People come in claiming gas prices as the reason why they're trying to get out of their big Dodge Ram diesel truck that costs them a thousand bucks a month on gas.",
  author: "Max Maurice, Sales Manager, Shift Electric Vehicles",
  title: "CBC News — June 21, 2026",
};

const rideOfTheDay = {
  name: "1969 Ford Mustang Boss 429 — Raven Black, Ontario-Plated",
  description: "The Boss 429 is one of the most significant Mustangs ever built — and one of the most impractical. Ford needed to homologate the 429 cubic inch NASCAR engine for racing, which required installing it in 500 street cars. The problem: the 429 was too wide for the standard Mustang engine bay. Ford contracted Kar Kraft Engineering in Brighton, Michigan to modify each car individually — moving the shock towers, widening the engine bay, and relocating the battery. The result was a car that cost more to build than it sold for. The 429 produced 375 horsepower officially — widely understood to be understated. The engine featured a semi-hemispherical combustion chamber, dry-sump lubrication, and a cross-ram intake that made it one of the most sophisticated production engines of the era. Only 859 Boss 429s were built in 1969. A Raven Black example with an Ontario plate is a rare find — most survivors are in the U.S. Sunroof delete, close-ratio 4-speed, 3.91 Traction-Lok rear. Worth $150,000–$250,000 today. The Boss 429 was built to go racing. It just happened to be street legal.",
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
                {["EV +20.8%", "BYD FLASH", "JULY 1 COUNTDOWN", "BOSS 429"].map((tag) => (
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
              alt="BYD Flash Charging vs Gas Prices — Baywash Daily Briefing Edition No. 45"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#15803d] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Sunday Edition</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                EV Sales Up 20.8% — BYD Flash Charging Coming to Canada — 10 Days to July 1
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
