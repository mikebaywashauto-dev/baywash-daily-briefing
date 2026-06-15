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

const BRIEFING_NUMBER = 39;
const BRIEFING_DATE = "June 15, 2026";
const BRIEFING_DAY = "Monday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/VCcVOuVuDhGjkYCm.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/pgeAvIuUjgSPZFiN.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/HQNEBAkpmXCxDyWR.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/uNbiYZggYixvuavG.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/KfLqxrTMKPRXIlmD.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "CUSMA",
    tagColor: "#b91c1c",
    headline: "Trump Says He's 'Not Looking to Renew' CUSMA — Trade Lawyers Say Don't Panic Yet",
    summary: "Speaking in the Oval Office on Wednesday, June 10, U.S. President Donald Trump said he is 'not looking to renew' the Canada-U.S.-Mexico Agreement when it comes up for review on July 1 — a statement that sent a ripple of alarm through Canadian trade circles and landed on every front page in the country. The context matters enormously. CUSMA does not expire on July 1. The agreement runs until 2036. What happens on July 1 is a mandatory joint review — a mechanism built into the deal that allows any party to either extend it for 16 years or trigger a series of annual reviews. To actually withdraw from CUSMA, any country must give six months' notice. Trump did not threaten to give that notice. What he said was: 'I don't know that I'm going to renew it.' Trade lawyers were quick to interpret this as Trump signalling he prefers annual reviews over a 16-year extension — a position that keeps maximum pressure on Canada and Mexico without actually blowing up the deal. 'Trump likes to up the ante and get people riled as part of a negotiating tactic,' said Mark Warner, a Canadian and U.S. international trade lawyer at MAAW Law in Toronto. 'That's probably all that Trump was saying today.' William Pellerin, an international trade lawyer with McMillan LLP in Ottawa, was equally measured: 'Fundamentally, there are 10 years left to this trade agreement unless the U.S. president triggers the escape clause.' The timing of Trump's comments was notable: they came as U.S. House agriculture committee members were simultaneously praising CUSMA and urging the administration to extend it. The American Soybean Association, the single largest U.S. export crop sector, explicitly called for full renewal. Canada-U.S. Trade Minister Dominic LeBlanc, who met with U.S. Trade Representative Jamieson Greer in Washington last week, said he 'feels better' about negotiations. Canada and Mexico have both formally declared they want a 16-year extension. The U.S. has not made its position public. U.S.-Mexico Round 2 talks are scheduled for June 16-17 in Washington — today and tomorrow.",
    whyItMatters: "For Canadian shop owners, CUSMA is the invisible infrastructure that keeps your parts supply chain functioning. Roughly 90 per cent of Canada's exports to the U.S. are shielded from Trump's tariffs by CUSMA. The auto sector is the most exposed: the 25 per cent Section 232 tariffs on Canadian vehicles are already in effect and are separate from CUSMA — but the content rules, rules of origin, and duty-free access for auto parts that Canadian shops depend on are all CUSMA provisions. If the U.S. moves to annual reviews rather than a 16-year extension, that means 12 months of uncertainty, followed by 12 more, indefinitely. Every investment decision — whether to buy a new lift, expand a bay, take on a new service line — gets made in the shadow of that uncertainty. The practical advice: watch the June 16-17 U.S.-Mexico talks closely. If Canada is included as a full trilateral partner, the July 1 review is likely to land in a manageable place. If Canada is treated as a secondary concern, the annual review scenario becomes more likely — and with it, a sustained period of trade policy instability that will affect parts pricing, OEM investment, and shop economics for years.",
    source: "CBC News / Mike Crawley — June 10, 2026",
    sourceUrl: "https://www.cbc.ca/news/politics/trump-cusma-usmca-trade-renew-9.7230164",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "CHINESE EVS",
    tagColor: "#1d4ed8",
    headline: "Joly Flies to Shanghai to Court BYD, Geely, Chery — Then Heads to Tokyo to Meet Honda and Toyota",
    summary: "Industry Minister Mélanie Joly arrived in Shanghai on Monday for a four-day visit that represents the most direct engagement yet between the Carney government and Chinese automakers — and the most diplomatically fraught. Joly will visit BYD's manufacturing base in Changzhou, Shanghai Launch Automotive Technology's Wuxi facility, Chery's operations, and Geely's Shanghai research and development centre. The four companies — BYD, Chery, Geely, and Shanghai Launch — have been examining possible investments in Canadian auto manufacturing. Joly's pitch is specific: she wants to see Canadian companies engaged in contract manufacturing for Chinese EV makers in Canadian factories, using Canadian parts, in majority Canadian-owned joint ventures, with secure software that protects user data. She cited a Magna International subsidiary that is doing contract manufacturing for China's Xpeng in Austria as the model. In April, Joly rejected Stellantis's proposal to assemble Leapmotor vehicles from Chinese knock-down kits at its idled Brampton plant, saying the investment 'needs to support the local supply chain.' Her four conditions for Chinese EV investment in Canada remain unchanged: majority Canadian-owned JV, Canadian labour standards, Canadian parts content, and secure software. After Shanghai, Joly heads to Beijing for meetings with senior Chinese government officials — including possible meetings with Vice-President Han Zheng and the chairman of China's National Development and Reform Commission — accompanied by a major delegation of Canadian business leaders including Dominic Barton, Canada Goose CEO Dani Reiss, and executives from Cameco, Teck, CPP Investments, and Sun Life. On Friday, Joly flies to Japan to meet with executives at Honda and Toyota — who together represent approximately 77 per cent of auto assembly in Canada. The Globe and Mail noted the obvious tension: 'The move risks further irritating the U.S. during sensitive CUSMA negotiations.' U.S. Trade Representative Jamieson Greer called Canada's January 2026 Chinese EV deal 'problematic' in January. The Trump administration has made clear that Chinese-connected vehicles and technology entering North America through Canada is a national security concern.",
    whyItMatters: "Joly's Shanghai trip is the clearest signal yet that the Carney government is pursuing a dual-track auto strategy: maintain CUSMA and the North American supply chain as the primary pillar, while simultaneously developing a Chinese EV manufacturing option as insurance against CUSMA failure. For Canadian shop owners, this dual-track strategy has direct service bay implications. If Chinese automakers establish Canadian assembly operations — even under Joly's strict conditions — the volume of Chinese-brand vehicles on Canadian roads will grow significantly faster than it would through imports alone. That means more vehicles with unfamiliar diagnostic protocols, proprietary software platforms, and offshore parts supply chains arriving in your service bay sooner than you might expect. The Friday Tokyo meetings are equally important. Honda and Toyota together represent 77 per cent of Canadian auto assembly. If Joly can give those executives a credible signal that Canada's policy environment is stabilizing — that the Chinese EV conditions are genuine, that CUSMA renewal is on track, that the $15 billion Honda EV investment suspension is temporary — the downstream effect on parts supply, employment, and shop economics is positive. If she cannot, the investment freeze that Honda announced at the APMA Summit will deepen.",
    source: "The Globe and Mail / Steven Chase — June 15, 2026",
    sourceUrl: "https://www.theglobeandmail.com/politics/article-joly-chinese-ev-makers-shanghai-auto-industry-investment/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "RECALL ALERT",
    tagColor: "#d97706",
    headline: "Stellantis Tells 106,000 Canadian Jeep Owners to Park Outside — Fire Risk Recall on Wranglers and Gladiators",
    summary: "Stellantis issued a recall on June 9, 2026 covering more than 1.3 million Jeep Wrangler and Gladiator vehicles worldwide — including 106,000 in Canada — over a fire risk that the company says can occur even when the vehicle is parked with the ignition off. The recall covers 2021 through 2025 model year Jeep Wrangler SUVs and Jeep Gladiator trucks. The issue is a loose electrical connection in the electric hydraulic power steering pump wiring that can cause the connection to melt, overheat combustible materials, and ultimately lead to a vehicle fire. Stellantis confirmed it is aware of at least 72 fires that may be tied to the issue, and one injury. The company is urging owners to park outside and away from structures or other vehicles until a fix is completed. The recall involves inspecting and possibly repairing or replacing the wiring harness or electric hydraulic power steering pump. Stellantis says it anticipates a recall fix no later than July 2026. The National Highway Traffic Safety Administration opened an investigation in September 2024 into nearly 800,000 Wrangler and Gladiator vehicles from the 2021-2023 model years over the same concern. Stellantis initially investigated and closed the issue in 2023-2024 due to a low rate of fires, then re-opened the investigation in August 2024 after an increase in incidents. The recall is the second major Stellantis fire-risk recall in Canada in recent weeks — a separate recall affecting thousands of Jeep and Chrysler vehicles was issued in early June. Transport Canada also reported recalls on more than 130,000 Honda and Acura vehicles between June 6-12 over a rear subframe component that could rust and fail. The Honda recall covers multiple MDX, Passport, and Pilot model years. Affected owners are being notified by mail.",
    whyItMatters: "The Jeep Wrangler and Gladiator are among the most popular vehicles in Canada — particularly in Ontario, Alberta, and British Columbia. If you have not already, check your customer database for 2021-2025 Wrangler and Gladiator owners and flag them for outreach. This is a direct service opportunity: the recall repair involves inspecting and potentially replacing the wiring harness or electric hydraulic power steering pump — work that Stellantis dealers will be handling under warranty, but that creates a service touchpoint for any shop that has these customers in their database. More importantly, this recall is a reminder that fire-risk recalls require a different conversation with customers than a typical safety recall. Owners are being told to park outside and away from structures. That is an unusual and alarming instruction. When these customers call your shop, they will be anxious. Having a clear, calm, informed response — including the specific VIN lookup process at Transport Canada's recall database and the Stellantis dealer appointment process — will build trust and differentiate your shop from competitors who are not tracking this. The Honda subframe recall is a separate but equally important flag: 130,000 vehicles with a rear subframe that could rust and fail is a significant safety issue, and shops that identify affected vehicles during routine service and flag them for recall completion will be providing genuine value to their customers.",
    source: "Reuters / David Shepardson — June 9, 2026",
    sourceUrl: "https://www.reuters.com/world/stellantis-recalling-more-than-13-million-jeep-vehicles-over-fire-concerns-2026-06-09/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🌉",
    text: "Gordie Howe Bridge — still no opening date as of Monday morning. Trump is demanding a share of toll revenue before signing off on the opening, despite Canada funding the entire $6.4 billion construction cost. PM Carney: 'There is no big drama. If it takes a little longer it will take a little bit longer.' The Ambassador Bridge remains the only Windsor-Detroit crossing. Every day of delay is a day of unnecessary congestion on the busiest trade corridor in North America.",
    sourceUrl: "https://ontarioconstructionnews.com/gordie-howe-international-bridge-opening-delayed-again-no-date-in-site",
  },
  {
    icon: "🤝",
    text: "U.S.-Mexico CUSMA Round 2 talks begin today in Washington (June 16-17). Canada's inclusion or exclusion from these talks is the most important near-term signal for the auto sector. Canada has formally requested a full 16-year CUSMA renewal. Canada-U.S. Trade Minister LeBlanc met with U.S. Trade Representative Greer last week and expressed cautious optimism. Watch for any statement from Greer's office on Canada's status in the trilateral process.",
    sourceUrl: "https://www.cbc.ca/news/world/trump-tariffs-trade-canada-cusma-usmca-negotiations-9.7228645",
  },
  {
    icon: "🔧",
    text: "Unifor-Ford contract talks open Sunday, June 22. The union represents 18,000 workers at Ford, GM, and Stellantis plants across Canada. Unifor president Lana Payne has signalled the union is entering talks from a position of principle, not accommodation. Any work stoppage at Windsor Assembly (Ford Bronco Sport, Lincoln Corsair) or Oakville Assembly (Ford Edge, Lincoln Nautilus) would directly affect parts availability for Canadian shops within days.",
    sourceUrl: "https://www.facebook.com/unifor1285/posts/auto-talks-2026-message-from-lana-payne-bargaining-begins-june-22/1648170097314998/",
  },
  {
    icon: "📋",
    text: "Transport Canada recall watch: Check your customer database for 2021-2025 Jeep Wrangler and Gladiator owners (106,000 affected in Canada — fire risk, park outside advisory) and 2014-2020 Acura MDX, 2019-2023 Honda Passport, and 2016-2022 Honda Pilot owners (130,000 affected — rear subframe rust risk). Both recalls are active. Proactive customer outreach on safety recalls is one of the highest-ROI touchpoints in the service business.",
    sourceUrl: "https://tc.canada.ca/en/recall-alerts-safety-advisories/recalls-safety-advisories/2026",
  },
];

const tipOfTheDay = {
  title: "How to Turn a Recall Into a Relationship",
  text: "The Stellantis Jeep fire recall and the Honda subframe recall together affect more than 230,000 vehicles in Canada. Most of those owners will receive a recall notice in the mail and either ignore it, forget it, or call a dealer. Here is how your shop can turn this into a relationship-building moment. First, pull your customer database and identify every 2021-2025 Jeep Wrangler and Gladiator owner and every 2014-2020 Acura MDX, 2019-2023 Honda Passport, and 2016-2022 Honda Pilot owner. Second, send them a brief, professional message — text, email, or postcard — that says: 'We noticed your vehicle may be affected by a recent safety recall. We wanted to make sure you knew. Here is the Transport Canada recall lookup link and the dealer contact for the free repair.' Third, do not try to sell them anything in that message. The value is in the information and the care. Fourth, follow up two weeks later with a service reminder. The customers who feel looked after are the ones who come back. The recall is the reason to reach out. The relationship is the reason they stay.",
};

const quoteOfTheDay = {
  text: "We don't need anything that Canada has. It was a great deal for one reason: it gave the right to terminate.",
  author: "Donald Trump",
  title: "U.S. President — Oval Office, June 10, 2026",
};

const rideOfTheDay = {
  name: "1969 Pontiac GTO Judge — 'Here Comes the Judge'",
  description: "The 1969 Pontiac GTO Judge was born as a budget muscle car and became an icon. Pontiac's marketing team named it after a Rowan and Martin's Laugh-In catchphrase — 'Here comes the Judge' — and backed it up with a standard 366 horsepower Ram Air III 400 cubic inch V8, functional hood scoops, bold body stripes, and a rear spoiler that was pure theatre. The Judge was Pontiac's answer to the Plymouth Road Runner: a no-nonsense, high-performance package at a price that working people could actually afford. The base price in 1969 was $3,161 — about $27,000 in today's dollars. The optional Ram Air IV engine pushed output to 370 horsepower and transformed the Judge into a legitimate quarter-mile weapon. Carousel Red — the colour shown here — was the signature Judge colour for 1969, though the car was available in any GTO colour. Approximately 6,725 Judges were built for the 1969 model year, making them relatively common by muscle car standards but no less desirable. The Judge continued through 1971 before being discontinued as insurance costs and emissions regulations strangled the muscle car era. A numbers-matching 1969 GTO Judge with the Ram Air IV option in Carousel Red is worth $80,000 to $120,000 today depending on condition. On a Monday when CUSMA's future is uncertain and the border bridge is still closed, the Judge is the right car for the moment: loud, unambiguous, and impossible to ignore — a machine that made its point without apology.",
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
                {["CUSMA", "CHINESE EVS", "RECALL ALERT", "GTO JUDGE"].map((tag) => (
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
              alt="Windsor-Detroit border crossing — Ambassador Bridge and Gordie Howe International Bridge — Baywash Daily Briefing Edition No. 39"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#e05a1a] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Today's Edition</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Trump Threatens CUSMA — Joly Courts BYD in Shanghai — 106,000 Jeeps: Park Outside
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
