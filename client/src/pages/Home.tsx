// 2026-05-29
/*
 * DESIGN: Industrial Broadsheet
 * - Asymmetric newspaper grid: 60/40 split
 * - Charcoal (#1a1a1a) + warm off-white (#f5f0e8) + burnt orange (#e05a1a)
 * - Oswald 700 headlines, Source Sans 3 body, Source Code Pro metadata
 * - Edition stripe, shop tags, pull-quote blocks
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const BRIEFING_NUMBER = 22;
const BRIEFING_DATE = "May 29, 2026";
const BRIEFING_DAY = "Thursday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/OFzcVaWcynIZzEvZ.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/VBYcFHHJDhnvHiUz.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/eZNCybnGSuFQtiEQ.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/mnxkzpmRSvxQlXzh.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/roeCxdGXirJYJhsB.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "DIPLOMACY",
    tagColor: "#2563eb",
    headline: "Carney Tells New York Business Leaders 'Canada Strong Will Help Make America Great Again' — U.S. Ambassador Says It's 'Worth Repeating' in the First Sign of a Potential Thaw in Canada-U.S. Relations",
    summary: "Prime Minister Mark Carney delivered a landmark speech at the Economic Club of New York on May 28, 2026, making the case for Canada as a premier investment destination and calling for a renewed Canada-U.S. economic partnership. In the speech's most striking moment, Carney deliberately invoked President Trump's signature slogan: 'Canada strong will help make America great again.' The line landed with immediate effect: U.S. Ambassador to Canada Pete Hoekstra reposted a video of the remark on X, writing 'PM Carney said something worth repeating today: A Canada strong will help make America great again. I think a lot of Americans can get behind that kind of positive message.' Carney told the room of financial and industry heavyweights that 70 per cent of Canadian exports are inputs to American cars, homes, aircraft, machinery, and finished goods — 'creating hundreds and hundreds of billions of dollars of U.S. value-add.' He noted that Canada is America's largest customer, buying more goods from the U.S. than China, Japan, and Germany combined. On the trade file, Carney said his government has made 'specific, practical proposals to the U.S. administration' to move past the current era of tension, though he declined to offer specifics. He argued that a North American auto, steel, and aluminum 'fortress' would be 'in everyone's interest.' The Business Council of Canada CEO Goldy Hyder said Carney was 'pitch perfect,' while Conservative Leader Pierre Poilievre accused him of a 'rhetorical chicken dance' on integration. The speech comes as CUSMA review talks proceed in Mexico City without Canada — and as the July 1 deadline for a clean extension looms.",
    whyItMatters: "The Carney-Hoekstra exchange is the most positive signal in Canada-U.S. trade relations since the tariff war began. For shop owners, the diplomatic temperature matters because it directly affects the probability of a CUSMA resolution before July 1 — and a CUSMA resolution is the single most important variable in whether parts costs stabilize or escalate further. The ambassador's public endorsement of Carney's framing suggests that Washington is not entirely closed to a deal, even if the formal negotiating track has been slow. The practical implication: do not make irreversible supply chain decisions based on the assumption that tariffs will remain at current levels indefinitely. Build optionality into your sourcing — maintain relationships with both U.S. and non-U.S. suppliers — so that you can respond quickly if the trade environment improves. The speech also reinforced a key data point every shop owner should internalize: 70% of Canadian exports are inputs to American manufacturing. That interdependence is leverage, and Carney is now actively using it.",
    source: "BNN Bloomberg / CTV News / The Canadian Press / Economic Club of New York",
    sourceUrl: "https://www.bnnbloomberg.ca/business/politics/2026/05/28/carney-set-to-deliver-remarks-pitch-canada-as-investment-hub-in-new-york/",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "TRADE POLICY",
    tagColor: "#e05a1a",
    headline: "U.S. Demands U.S.-Specific Auto Content Minimums in USMCA Renegotiation — A Direct Threat to Canadian Parts Suppliers and the 40% Higher-Wage Content Rule That Currently Protects Canadian Manufacturing",
    summary: "Reuters confirmed on May 28 that U.S. negotiators in Mexico City have tabled proposed texts to modify USMCA that include a new U.S.-specific minimum level of automotive content for cars and trucks built in Mexico — a demand that goes significantly beyond the existing USMCA's North American content requirements. Under the current USMCA, 75% of a vehicle's value must be sourced from North America, with a separate requirement that 40% of North American-built passenger car content (45% for pickup trucks) come from higher-wage facilities — effectively in the U.S. or Canada. The new U.S. demand would add a U.S.-specific content floor on top of or in place of the existing North American content framework. The specific percentage sought by USTR was not disclosed, but the direction is clear: Washington wants more of the value in North American-built vehicles to originate in the United States specifically, not just in North America broadly. The significance for Canada is profound. The existing 40-45% higher-wage content requirement is the primary mechanism that protects Canadian parts manufacturing from being entirely displaced by lower-cost Mexican production. If the U.S. replaces the higher-wage content requirement with a U.S.-specific content floor, Canadian parts suppliers could lose their structural advantage in the USMCA framework. USTR Jamieson Greer said he wanted to 'strengthen North American rules of origin to boost manufacturing in the United States.' The U.S. is also pushing for a requirement that Mexican and Canadian steel receiving preferential U.S. tariff treatment be melted and poured in North America — closing what steelmakers describe as a loophole that allows Chinese steel components into Mexican manufacturing operations.",
    whyItMatters: "The rules-of-origin fight is the most technically complex but practically important element of the USMCA renegotiation for Canadian shops. Here is why it matters directly: the parts you buy from Canadian distributors are often manufactured in Canadian plants that exist because of the higher-wage content rules in USMCA. If those rules are weakened or replaced with a U.S.-specific content floor, Canadian parts manufacturing becomes less competitive relative to both U.S. and Mexican production. Over time, that could mean fewer Canadian-made parts available through your existing supply chain, and more reliance on U.S. or offshore sources — with the tariff exposure that entails. The near-term action for shops is not to panic, but to understand your supply chain at one level deeper than you currently do. For your top 20 parts by spend, do you know where they are manufactured? Not just which distributor you buy from, but which country and which plant? That knowledge will be essential if the rules-of-origin framework shifts materially in the USMCA renegotiation.",
    source: "Reuters / AOL News / USTR",
    sourceUrl: "https://www.aol.com/articles/us-mexico-launch-formal-trade-100256000.html",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "INDUSTRY OUTLOOK",
    tagColor: "#16a34a",
    headline: "RBC Outlines Four Possible Futures for Canada's Auto Sector Through 2040 — From 2 Million Vehicles Annually to Zero Assembly Plants, Depending on Trade Policy, EV Adoption, and the Software Transition",
    summary: "RBC Thought Leadership released a major new report this week as part of its Growth Project initiative, outlining four possible scenarios for Canada's automotive industry through 2040. The scenarios range from a 'Fast Lane' outcome — where North American integration strengthens, EV adoption accelerates, and Canadian production rises to two million vehicles annually — to an 'Off-Ramp' scenario where domestic assembly plants close entirely. The two middle scenarios are a 'Slow Lane' (integration holds but EV adoption lags, leaving Canada in a weakened but viable position) and a 'Detour' (Canada successfully diversifies away from U.S. dependence but at significant transition cost). RBC's analysis identifies five key variables that will determine which scenario plays out: the outcome of CUSMA negotiations; the pace of EV adoption in Canada; the ability of Canadian manufacturers to attract higher-value software and engineering mandates; the development of critical mineral supply chains; and the expansion of clean energy infrastructure. The report notes that Chinese automakers surpassed Japanese rivals as the world's largest vehicle sellers in 2025, expanding global market share to roughly 35% over the past 25 years — a competitive threat that is reshaping where automotive value is created globally. RBC warns that focusing only on assembly volumes could leave Canada vulnerable as automation and software increasingly determine automotive value creation. The report notes that Canada's auto sector currently employs about 125,000 workers and represents roughly 10% of the country's exports. Meanwhile, CADA's pre-budget testimony this week highlighted the industry-wide shortage of automotive technicians and called for greater flexibility in Canada's temporary foreign worker programs — noting that technicians are essential to maintaining service for consumers, businesses, and emergency vehicles across the country.",
    whyItMatters: "The RBC four-scenario framework is a useful tool for shop owners thinking about medium-term business planning. The 'Fast Lane' scenario — stronger North American integration, rising EV adoption, growing Canadian production — is the best case for your service business: more vehicles on Canadian roads, more service work, a stable parts supply chain, and a growing EV fleet that creates new service opportunities. The 'Off-Ramp' scenario — assembly plants closing, production shifting to the U.S. or Mexico — is the worst case: fewer vehicles manufactured in Canada, a weakened domestic parts supply chain, and potentially higher costs for the vehicles your customers drive. The practical implication for shop planning: the RBC analysis suggests that the next 12 to 18 months of trade negotiations will be the most consequential period for determining which scenario Canada is on track for. That is the window in which to make decisions about capital investment, staffing, and service mix. The CADA technician shortage point is also directly relevant: if you are struggling to find qualified technicians, you are not alone — it is a national crisis, and the federal government is now being asked to address it through immigration policy. Shops that invest in apprenticeship programs and technician retention now will be better positioned regardless of which macro scenario plays out.",
    source: "Canadian Auto Dealer / RBC Growth Project / CADA",
    sourceUrl: "https://canadianautodealer.ca/2026/05/rbc-outlines-four-possible-futures-for-canadas-auto-sector/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "⛽",
    text: "High gas prices are driving a surge in hybrid vehicle sales across Canada. Honda Canada reports hybrids now represent nearly one-third of its brand sales year-to-date — the highest hybrid share in Honda's Canadian history. American Honda sales chief Lance Woelfer cited 'industry-leading fuel economy and rapidly growing hybrid sales' as key drivers, with the Civic Hybrid, CR-V Hybrid, and Accord Hybrid all seeing strong demand. For shops: the growing hybrid fleet means more hybrid-specific service work is coming to your bays. Hybrid battery health assessments, regenerative brake system service, and the unique cooling system requirements of hybrid powertrains are all growth areas. CARS training has hybrid-specific modules — now is the time to invest in your team's hybrid capability.",
    sourceUrl: "https://www.autonews.com/honda/an-honda-tftt-lance-woelfer-0527/",
  },
  {
    icon: "🔧",
    text: "CADA raised four key concerns in pre-budget testimony before the House of Commons Standing Committee on Finance this week: removal of the federal luxury vehicle tax, EV policy reform, heavy-duty truck regulatory alignment, and the automotive technician shortage. CADA's Huw Williams told MPs that 'we will not be able to sell any heavy-duty trucks in Canada' without regulatory changes — and called for greater flexibility in temporary foreign worker programs to address the technician shortage. 'We need a pathway for those temporary foreign workers to stay longer than their original contracts and a pathway to immigration,' he said. For shops: the technician shortage is a national crisis, and the federal government is now being asked to address it. If you have qualified foreign-trained technicians on temporary work permits, now is the time to explore permanent residency pathways with an immigration consultant.",
    sourceUrl: "https://www.cada.ca/CADA/News1/Newsline_Stories/2026-06-June/FINA.aspx",
  },
  {
    icon: "📊",
    text: "Consumer sentiment in Canada and the U.S. remains deeply depressed. The University of Michigan's consumer sentiment index fell to 47.6 in April 2026 — its lowest level in 74 years. CDK Global's Ease of Purchase Scorecard shows that 41% of Canadian buyers visited only one dealership before purchasing in 2025, up from 34% in 2024, suggesting that inventory availability and digital tools are increasingly driving one-stop shopping behaviour. For shops: depressed consumer sentiment means customers are holding their existing vehicles longer — which is a direct tailwind for service revenue. The vehicles that would have been traded in for new ones are staying on the road and coming to your bays instead.",
    sourceUrl: "https://canadianautodealer.ca/2026/05/one-stop-shopping-drives-buyer-satisfaction-cdk/",
  },
  {
    icon: "🌐",
    text: "Chinese Foreign Minister Wang Yi's visit to Canada (May 28-30) is focused on trade, investment, and the 49,000-unit annual quota for Chinese-built EVs at the reduced 6.1% tariff rate. The visit is the most senior Chinese diplomatic engagement with Canada in years and signals that Carney's January trip to Beijing is producing concrete follow-through. For shops: the geopolitical context matters because Canada's China relationship is directly linked to the CUSMA outcome. Washington's cooler tone toward Ottawa is partly driven by the China EV deal. If the Wang Yi visit produces visible progress on trade diversification, it may paradoxically improve Canada's leverage in CUSMA talks — or it may further irritate Washington. Watch this space.",
    sourceUrl: "https://canadachinabrief.substack.com/p/special-edition-wang-yi-in-canada",
  },
];

const tipOfTheDay = {
  title: "Know Your Supply Chain One Level Deeper — Map Where Your Top 20 Parts Are Actually Manufactured",
  text: "The USMCA rules-of-origin fight is not abstract — it will directly affect which parts are available through your existing supply chain and at what cost. Most shop owners know which distributor they buy from, but not which country or plant their top parts are manufactured in. This week's action: pull your top 20 parts by annual spend from your DMS. For each one, call your distributor and ask: where is this part manufactured? Is it made in Canada, the U.S., Mexico, or overseas? This is not about changing your sourcing today — it is about building the intelligence you will need to make fast decisions if the USMCA renegotiation shifts the rules-of-origin framework. Shops that have this map will be able to respond in days; shops that do not will spend weeks scrambling. The investment is one phone call per part.",
};

const quoteOfTheDay = {
  text: "Canada strong will help make America great again.",
  author: "Prime Minister Mark Carney",
  title: "Economic Club of New York — May 28, 2026 (a line the U.S. Ambassador to Canada called 'worth repeating')",
};

const rideOfTheDay = {
  name: "1969 Pontiac GTO Judge — 'Here Comes the Judge,' the Most Flamboyant Muscle Car of the Era",
  description: "The 1969 Pontiac GTO Judge was Pontiac's answer to the question of how to sell performance in an era when the muscle car market was becoming crowded and price-sensitive. The Judge was conceived as a budget performance package — a stripped-down, visually aggressive GTO that would compete with the Plymouth Road Runner on price while still delivering genuine performance. The name came from a popular Laugh-In catchphrase of the era: 'Here comes the Judge.' The standard Judge was powered by Pontiac's 400 cubic inch Ram Air III V8, rated at 366 horsepower, with the optional Ram Air IV producing 370 horsepower in a more aggressive state of tune. The visual package was deliberately outrageous: bold 'The Judge' decals on the front fenders and rear spoiler, a large rear wing, and the iconic Carousel Red paint that became synonymous with the model. The Judge was available in other colours, but Carousel Red — a bright, almost fluorescent orange-red — is the colour that defines the car in the collective memory. The 1969 Judge was a commercial success, with 6,725 units produced in its first year. It continued through 1971, by which point emissions regulations and insurance surcharges had begun to strangle the muscle car era. The Judge represents the last gasp of unrestrained American performance before the industry was forced to reckon with the consequences of its own excess — making it one of the most culturally significant muscle cars ever built.",
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
              alt="Carney at Economic Club of New York — Canada Strong Will Help Make America Great Again"
              className="w-full h-[500px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
              <span className="inline-block bg-[#e05a1a] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
                Top Intelligence
              </span>
              <h3 className="font-['Oswald'] text-4xl md:text-5xl font-bold text-white leading-tight uppercase mb-4">
                Carney Invokes MAGA in New York, U.S. Rules-of-Origin Demands Threaten Canadian Parts, and RBC Maps Four Futures for Canada's Auto Sector
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                A potential diplomatic thaw, a structural threat to Canadian parts manufacturing, and a strategic framework for thinking about where Canada's auto industry is headed — all in today's edition.
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
