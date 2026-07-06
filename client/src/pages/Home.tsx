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

const BRIEFING_NUMBER = 60;
const BRIEFING_DATE = "July 6, 2026";
const BRIEFING_DAY = "Monday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/lvnvUUudHAcyJPPU.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/YXWRPKSZcsPxDhKh.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/iYHFMYaWnaFUPgAX.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/ncrJFypkTPRBerVT.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/kRqxNZkKLeVWhoUX.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "GM CANADA / H1 2026 / 148,640 VEHICLES / EV +30%",
    tagColor: "#1d4ed8",
    headline: "GM Canada Finishes H1 2026 as Canada's Best-Selling Automaker — 148,640 Vehicles, 15.4% Market Share — EV Sales Up 30% YoY — GM Canada President: CUSMA 'Very Important' for Auto Industry",
    summary: "General Motors Canada has finished the first half of 2026 as Canada's best-selling automaker, with 148,640 vehicle deliveries across Chevrolet, Buick, GMC and Cadillac — a 15.4% market share that leads all manufacturers. The results, announced July 2, were driven by growing electric vehicle sales and sustained SUV demand. GM Canada's EV sales grew more than 30% year-over-year, with gains recorded even in Alberta — historically the province with the lowest EV uptake in Canada. Speaking at the Calgary Stampede on Sunday, Jack Uppal, president and managing director of GM Canada, told Global News that CUSMA is 'very important' for the auto industry. 'CUSMA protects the North American industry against other global players and makes it stronger,' Uppal said. He acknowledged that GM has been monitoring tariffs closely but said the company has so far been able to protect its go-to-market price points. 'We are in an environment that is quite uncertain from a geopolitical perspective; we've got tariff noise, but at the heart of it is affordability,' Uppal said. 'So that's where I would really respond to those challenges. We have to double down and really focus on ensuring that we're delivering value across our product portfolio to our customers to dampen the noise that nobody can really change.' Uppal said he believes the uncertainty surrounding CUSMA will 'sort itself out' as talks continue. GM Canada's H1 performance is notable given that the company has shifted significant production to the United States in recent years. Key Canadian production assets include the Chevrolet Equinox EV at the CAMI Assembly plant in Ingersoll, Ontario, the Chevrolet Silverado at Oshawa Assembly, and the BrightDrop electric delivery van at Ingersoll.",
    whyItMatters: "GM Canada's H1 results are a direct signal for your service bay. 148,640 new GM vehicles on Canadian roads in the first six months of 2026 means a growing population of GM vehicles requiring service. The EV sales surge — up 30% YoY — is particularly relevant. GM's Ultium platform (used in the Equinox EV, Blazer EV, Sierra EV, and Silverado EV) is a proprietary architecture that requires specific tooling and training. If you are not already certified for Ultium platform service, the H1 2026 numbers are your business case for investing in that training now. The CAMI plant in Ingersoll is producing Equinox EVs at scale — these vehicles are already in Ontario driveways and will be coming to your bays. GM's Ultium Drive system uses a different high-voltage architecture than the Chevrolet Bolt EV (which used LG Energy Solution cells). Ultium uses GM-proprietary pouch cells in a modular pack. The diagnostic and repair procedures are different. Contact your provincial apprenticeship board about GM Ultium certification. The 30% EV growth in Alberta — the province most resistant to EV adoption — is also a signal that the EV service market is broader than urban Ontario and BC. If you are in Alberta, Saskatchewan, or Manitoba, the EV service opportunity is arriving faster than the provincial sales data suggested two years ago.",
    source: "Globe and Mail / Global News — July 2–5, 2026",
    sourceUrl: "https://globalnews.ca/news/11953828/general-motors-cusma-auto-industry/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CUSMA / ANNUAL REVIEW / NO DATES SET / CANADA VS MEXICO",
    tagColor: "#b91c1c",
    headline: "Canada Seeks Clarity on CUSMA Annual Review Structure — LeBlanc: 'No More Predictability' — No Canada-U.S. Negotiating Dates Set — Mexico Gets July 20 Round — Canada Gets Nothing",
    summary: "Days after the Trump administration formally declined to extend CUSMA for 16 years and instead triggered an annual review process, Canada's Trade Minister Dominic LeBlanc said significant uncertainty remains about what comes next. 'We don't have any more predictability about the annual review process because this is somewhat uncharted territory. It's not typical for this kind of agreement,' LeBlanc told reporters on July 5. LeBlanc said he asked U.S. Trade Representative Jamieson Greer how he intended to structure discussions as part of the annual review — and received no answer. 'There wasn't an answer at the meeting. It was agreed that we would continue the conversation over the coming weeks,' LeBlanc said of the July 1 meeting. The contrast with Mexico is stark. Mexican Economy Secretary Marcelo Ebrard confirmed that Mexico expects to host a U.S. delegation during the week of July 20 as part of its own bilateral negotiations with the U.S. Canada has not announced a date for a similar meeting. The U.S. decision set in motion a renewable annual review process that could last up to 10 years. At the end of that period, the agreement would expire if no path forward is found to extend it beyond its 2036 expiry date. CUSMA has largely shielded Canada and Mexico from most of the tariffs imposed by the Trump administration — a broad exemption remains in place for goods that comply with the agreement. That protection is not complete: Canada and Mexico are each pursuing bilateral agreements with the United States alongside the three-country negotiations. From Canada's perspective, the bilateral talks could help reduce U.S. tariffs that fall outside CUSMA's protections, including those on steel, aluminum and softwood lumber. Trump has said publicly that he is 'not looking to renew' CUSMA and that he would even prefer to see it 'terminated.' U.S. Ambassador Hoekstra has confirmed that 'all options are on the table,' including termination with six months' formal notice.",
    whyItMatters: "The CUSMA annual review story is the most important long-term structural issue for your shop. Here is what 'no dates set for Canada' means in practical terms. Mexico is at the table with the U.S. on July 20. Canada is not. That asymmetry is not accidental — it reflects the U.S. position that Canada has more to answer for than Mexico on three specific grievances: the China EV deal, forced-labour enforcement failures, and dairy market access. Until Canada addresses those grievances to U.S. satisfaction, Canada will not get a bilateral negotiating date. The practical implication for your shop is that the tariff environment will not improve before November 2026 at the earliest — and may get worse. The Section 122 tariff expires July 24, but it is being replaced by Section 301 forced-labour tariffs of 10–12.5% (hearings tomorrow, July 7). The 25% auto tariff remains in place. CUSMA-compliant goods are exempt from most tariffs, but the definition of 'CUSMA-compliant' is being tested in every product category. The uncertainty itself is the problem. Purolator's most recent survey found that trade uncertainty is proving more disruptive to Canadian supply chains than the tariffs themselves — because uncertainty about future tariff levels is causing companies to hold excess inventory, delay investment decisions, and avoid long-term supplier commitments. Your shop is experiencing this directly in parts pricing volatility and lead time uncertainty.",
    source: "Truck News / Canadian Press / Yahoo Finance — July 5, 2026",
    sourceUrl: "https://www.trucknews.com/transportation/canada-seeks-clarity-after-us-opts-for-annual-usmca-review/1003217912/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "USTR / SECTION 301 / FORCED LABOUR / HEARINGS TODAY",
    tagColor: "#15803d",
    headline: "USTR Section 301 Forced Labour Tariff Hearings Begin Today — Canada Named Target — 10–12.5% Tariff Proposed — Replaces Section 122 on July 24 — 60 Economies Targeted — Written Comments Closed Yesterday",
    summary: "The U.S. Trade Representative's public hearings on proposed Section 301 forced-labour tariffs begin today, July 7, in Washington, D.C. Written comments closed yesterday, July 6, and Canada submitted its formal response arguing against inclusion. The USTR has proposed tariffs of 10% or 12.5% on goods from 60 economies it has accused of failing to enact or enforce laws against forced labour. Canada is a named target. The U.S. government's specific grievance against Canada: the United States barred 6,300 shipments of goods made with forced labour in fiscal year 2025, while Canada barred only 2. The U.S. position is that Canada's Customs Act and the Fighting Against Forced Labour and Child Labour in Supply Chains Act are inadequately enforced. The Section 301 forced-labour tariffs are designed to replace the Section 122 tariff — a 10% surcharge on Canadian goods that expires July 24 — with a more durable legal mechanism. Section 122 was a temporary emergency tariff that required periodic renewal. Section 301 is a permanent trade remedy that does not expire. The proposed rate for Canada is 10% — the same as Section 122. However, the USTR has proposed 12.5% for some economies, and the final rate for Canada will be determined after the hearings. The hearings today will hear testimony from industry groups, NGOs, and government representatives. Canada's delegation is expected to argue that Canada's forced-labour enforcement record has improved significantly in 2026 and that the proposed tariff is disproportionate. The EU, Japan, South Korea, Malaysia, and dozens of other economies are also named targets. The hearing is expected to last two days.",
    whyItMatters: "The Section 301 hearings today are the most immediate tariff risk on your calendar. Here is the timeline and what it means for your shop. July 7 (today): USTR hearings begin. July 24: Section 122 tariff expires. Between July 7 and July 24, the USTR will publish its final determination on Section 301 rates and scope. If Canada is included at 10%, the tariff environment is essentially unchanged from today — Section 301 replaces Section 122 at the same rate. If Canada is included at 12.5%, the tariff on non-CUSMA-compliant Canadian goods rises by 2.5 percentage points. If Canada is excluded from Section 301 (the best-case scenario), there is a brief window between July 24 and the next tariff action where some goods may face lower tariffs. The key word is 'non-CUSMA-compliant.' CUSMA-compliant goods — vehicles and parts that meet the agreement's rules of origin — are exempt from Section 301. The risk is for goods with Chinese content that do not qualify for CUSMA treatment. Auto parts with Chinese-made components (batteries, semiconductors, rare earth magnets) are the most exposed category. If your shop sources parts from suppliers who use Chinese inputs, ask your supplier about their CUSMA compliance status before July 24.",
    source: "USTR / Peacock Tariff Consulting / Facebook/TheStarOnline — July 5–6, 2026",
    sourceUrl: "https://www.peacocktariffconsulting.com/eu-cuts-to-zero/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🤝",
    text: "Unifor-Ford Day 15 — 4 days to July 10 deadline. No tentative agreement announced Monday morning. The final framework typically emerges in the last 72–96 hours before the deadline. Watch for an announcement today or tomorrow (July 6–7). If no framework by Wednesday July 8, strike risk rises sharply. Maintain 30-day Ford parts buffer through July 10.",
    sourceUrl: "https://www.unifor.org/news/all-news",
  },
  {
    icon: "🌉",
    text: "Gordie Howe Bridge: Truck News reports carriers are still awaiting the opening. The Windsor-Detroit corridor handles $350M/day in trade. The bridge remains closed. The Moroun family's US$1M donation to Trump's MAGA Inc. super PAC and the subsequent Trump post about blocking the bridge remain unresolved. U.S. Ambassador Hoekstra: 'All options are on the table' on CUSMA termination — same language used about the bridge.",
    sourceUrl: "https://www.trucknews.com/transportation/carriers-await-gordie-howe-bridge-opening-as-launch-delayed/1003216612/",
  },
  {
    icon: "📦",
    text: "Purolator survey: 'Trade uncertainty proving more disruptive than tariffs.' Canadian supply chains are holding excess inventory and delaying investment because they cannot predict tariff levels 3–6 months out. This is the hidden cost of the CUSMA annual review process — not the tariffs themselves, but the uncertainty about what the tariffs will be. For your shop, this means parts pricing volatility will continue through at least Q3 2026.",
    sourceUrl: "https://www.trucknews.com/supply-chain/trade-uncertainty-proving-more-disruptive-than-tariffs-purolator-finds/1003217108/",
  },
  {
    icon: "🇪🇺",
    text: "EU-U.S. Turnberry trade deal: The EU eliminated its 10% tariff on U.S. passenger vehicles as of July 1 — the same day CUSMA's sunset clause was triggered. U.S.-built vehicles now enter the EU duty-free. This is relevant because it may divert some U.S. production capacity toward Europe and away from Canada. Watch for Ford and GM to announce European allocation increases for U.S.-built models in Q3 2026.",
    sourceUrl: "https://www.peacocktariffconsulting.com/eu-cuts-to-zero/",
  },
];

const tipOfTheDay = {
  title: "Ask Your Parts Supplier About CUSMA Compliance Before July 24",
  text: "The Section 301 forced-labour tariff hearings begin today. The final determination will be published before July 24 — the day Section 122 expires. If your parts supplier sources components from China (batteries, semiconductors, rare earth magnets), ask them now whether their products qualify for CUSMA treatment. CUSMA-compliant parts are exempt from Section 301. Non-compliant parts may face a 10–12.5% tariff increase on July 24. You need to know before the deadline, not after.",
};

const quoteOfTheDay = {
  text: "We don't have any more predictability about the annual review process because this is somewhat uncharted territory. It's not typical for this kind of agreement.",
  author: "Dominic LeBlanc",
  title: "Canada-U.S. Trade Minister — July 5, 2026",
};

const rideOfTheDay = {
  name: "1969 Chevrolet Camaro Z/28 — Fathom Green, White Racing Stripes, DZ 302 V8, 290 hp, Ontario-Plated",
  description: "Monday morning, and the 1969 Camaro Z/28 in Fathom Green is the car that gets you through the week. The Z/28 was built for one purpose: to win the SCCA Trans-Am Series. Chevrolet had to build 1,000 road cars to homologate the racing version, and the result was one of the most focused performance cars of the muscle car era. The DZ 302 V8 — 302 cubic inches, 290 horsepower from the factory, closer to 360 in reality — was a high-revving, solid-lifter engine that sounded like nothing else on the road. Fathom Green is a rare 1969-only colour, a deep forest green that photographs differently in every light. White racing stripes down the hood and trunk lid, a cowl induction hood, and Muncie 4-speed close-ratio gearbox. Ontario-plated, documented, show-quality restoration: $65,000–$95,000 at auction. The Z/28 is the Monday morning car — the car that reminds you that the week ahead is worth showing up for. The shop is open. The bays are full. The trade war is complicated. The Z/28 is not. Fire it up.",
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
                {["GM CANADA H1 #1", "CUSMA NO DATES", "SECTION 301 TODAY", "'69 Z/28"].map((tag) => (
                  <span key={tag} className="bg-[#1a1a1a] text-white px-2 py-1 text-xs font-bold tracking-widest uppercase">{tag}</span>
                ))}
              </div>
              <p className="font-['Source_Code_Pro'] text-xs text-gray-400 uppercase tracking-widest">For Canadian Shop Owners — Monday Edition</p>
            </div>
          </div>
        </header>

        {/* Hero Banner */}
        <AnimatedSection className="mb-16">
          <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
            <img
              src={HERO_BANNER}
              alt="GM Canada H1 2026 Best-Selling Automaker — CUSMA No Dates Set — Section 301 Hearings Today — Baywash Daily Briefing Edition No. 60"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#1d4ed8] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Edition No. 60 — Monday, July 6, 2026</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                GM Canada #1 in H1 — CUSMA: No Dates Set for Canada — Section 301 Hearings Begin Today
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
              <span className="font-['Source_Code_Pro'] text-xs text-gray-500 uppercase tracking-widest">Classic Iron — '69 Camaro Z/28</span>
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
