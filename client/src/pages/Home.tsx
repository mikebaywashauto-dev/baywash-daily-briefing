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

const BRIEFING_NUMBER = 46;
const BRIEFING_DATE = "June 22, 2026";
const BRIEFING_DAY = "Monday";

// Image URLs
const HERO_BANNER = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/iRgnSymZqaIWTBGx.jpg";
const STORY1_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/QXSnoIlwbNTHSdMx.jpg";
const STORY2_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/uSSrXeSjixoEzutC.jpg";
const STORY3_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/VcxCwbDdXwHdVDyT.jpg";
const HOTROD_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663378653340/GvkuzqDBRjcjQSXx.jpg";

// --- Data ---
const stories = [
  {
    id: 1,
    tag: "UNIFOR / FORD BARGAINING",
    tagColor: "#1d4ed8",
    headline: "Unifor-Ford Bargaining Opens Today — \"Most Consequential Talks of Our Lifetimes\" — 6,500 Jobs Lost, One-Third of Members Laid Off",
    summary: "The union representing nearly 19,000 Canadian autoworkers kicked off contract talks today with Ford Motor Co. in downtown Toronto — the first of the Detroit Three negotiations and the most consequential round of auto bargaining in a generation. Unifor National President Lana Payne, speaking to The Canadian Press before the talks opened, said: 'This is the most consequential round of auto bargaining that we have done in our history.' She compared the current situation to the 2008-2009 financial crisis — when two of the three automakers nearly collapsed — and said this round is 'on a much larger scale.' The union says it is keen to secure protections around job security, with the auto manufacturing sector having lost nearly 6,500 total jobs since February 2025. The breakdown: Ford has 2,714 active workers and 1,942 laid off; GM has 2,715 active and 1,502 laid off; Stellantis has 6,590 active and 2,290 laid off. Unifor's four core demands are: (1) fair economic progress on wages and pensions; (2) product commitments for job security at Canadian plants; (3) no concessions; and (4) protection against Chinese EV market entry undercutting Canadian production. Unifor selected Ford as the primary target because it is the only Detroit Three OEM that kept its Canadian commitments — launching Super Duty production at Oakville despite the 25% tariff. GM idled CAMI (Ingersoll) and Stellantis idled Brampton. Those negotiations will be far harder. Unifor's target: a tentative deal by July 10 — before the CUSMA July 1 meeting changes the political landscape. Labor expert Harley Shaiken: 'Unifor correctly thinks locking in gains now is their best bet.' Labor expert Erik Gordon: 'Ford is in a tough spot. It can't guarantee security for jobs that produce cars that can't be sold in the U.S.' The contract covers workers at Ford's Windsor Assembly (Bronco Sport, Lincoln Corsair), Oakville (retooling for EVs), and engine plants. A work stoppage at Windsor Assembly would affect Bronco Sport and Lincoln Corsair parts supply within days. The contract expires September 20 at 11:59 p.m.",
    whyItMatters: "The Unifor-Ford contract talks are the most immediately consequential event in Canadian auto this week — more so than the July 1 CUSMA meeting. Here is why it matters to shop owners: (1) If Unifor wins production commitments from Ford, it locks in Canadian assembly at Windsor and Oakville for the next three years regardless of the CUSMA outcome. That means the parts supply chain for Bronco Sport, Lincoln Corsair, and Oakville EV products remains stable. (2) If Unifor cannot win production commitments — because Ford cannot guarantee U.S. sales for tariff-affected vehicles — it signals that the 25% auto tariff is already structurally reshaping Canadian assembly. That is the canary in the coal mine for the broader supply chain. (3) The 6,500 jobs lost since February 2025 are upstream of your shop — but they represent the workers who build the vehicles your customers drive. Fewer Canadian-assembled vehicles means a different vehicle mix in your bays over the next 3-5 years. (4) Watch for Unifor's opening demands this week. They will tell you more about the health of Canadian auto production than anything that happens on July 1. If Unifor leads with job security over wages, it means the union is genuinely worried about plant closures.",
    source: "Toronto Star / Detroit Free Press — June 22, 2026",
    sourceUrl: "https://www.thestar.com/business/ford-autoworkers-union-to-meet-today-to-kick-off-contract-talks/article_ee263814-d00b-587f-917a-81cf10a689b7.html",
    image: STORY1_IMG,
  },
  {
    id: 2,
    tag: "OPINION / INDUSTRY DEBATE",
    tagColor: "#7c3aed",
    headline: "Globe and Mail: \"Let Canada Auto Fade Away\" — Carleton Economist's Provocative Case for Letting the Industry Die",
    summary: "In the most provocative Canadian auto industry opinion piece published in years, Carleton University economics professor Christopher Worswick argued in The Globe and Mail this morning that Canada should let its auto sector phase out — as Australia did in 2017 — rather than prop it up with industrial policy, Chinese EV deals, or Korean manufacturing MOUs. Worswick's core argument: Canada's auto sector contributes only 0.73 per cent of Canadian GDP, down roughly 50 per cent since 2000. Direct auto manufacturing employment is only 0.6 per cent of total Canadian employment. 'Even a complete collapse of the industry would be a significant, but manageable, hit to the economy.' The decline predates Trump's tariffs — it started with NAFTA in 1994, which made it easier to shift production to Mexico, where wages remain a fraction of Canadian levels. Over three decades, Canada's share of North American vehicle production fell to roughly 10 per cent from the high teens. Worswick argues that forcing Chinese automakers to build in Canada — as Industry Minister Joly is attempting — would raise prices for Canadian consumers, repeat the failed EV battery subsidy model (Northvolt), and reduce Canada's leverage in U.S.-China competition. 'True free trade in automobiles — letting the sector fade away if it has to, letting the free market and capitalism run their natural course — would reduce the leverage that the two economic superpowers have over Canada.' The piece is already generating significant pushback. Unifor, which opened Ford bargaining this morning, called the argument 'reckless and out of touch.' The CVMA and APMA have not yet responded. The Globe published the piece on the same morning Unifor-Ford talks opened — the timing is not coincidental. The piece reflects a genuine debate within Canadian economic policy circles about whether the auto sector is worth saving at any cost.",
    whyItMatters: "The Worswick piece matters because it represents a view that is gaining traction in Ottawa policy circles — and it will shape the political constraints on what the Carney government is willing to offer in CUSMA negotiations. Here is the practical implication for shop owners: (1) If the 'let it fade' view gains political ground, it reduces the government's urgency to win auto tariff relief in CUSMA. That is bad for Canadian assembly and bad for the parts supply chain. (2) The 0.73% of GDP figure is the number that opponents of auto sector support will use in every policy debate going forward. Know this number. It understates the indirect economic impact — auto sector employment multipliers are among the highest in manufacturing — but it will be used against you. (3) The Australia comparison is instructive: Australia's last car rolled off the line in 2017. Today, Australia imports 100% of its vehicles. Australian consumers pay more for cars than Canadians. Australian independent shops have no domestic OEM relationships. That is the 'fade away' scenario for Canada. (4) The debate will intensify after July 1. If CUSMA produces no auto tariff relief, the 'let it fade' argument will gain momentum. The Unifor-Ford contract talks this week are partly a counter-argument to Worswick — a demonstration that the industry is fighting for its survival, not waiting to be rescued.",
    source: "The Globe and Mail — June 22, 2026",
    sourceUrl: "https://www.theglobeandmail.com/business/commentary/article-canada-auto-industry-china-ev-electric-vehicle/",
    image: STORY2_IMG,
  },
  {
    id: 3,
    tag: "GORDIE HOWE BRIDGE",
    tagColor: "#b91c1c",
    headline: "Gordie Howe Bridge: \"News Reports Suggest It Will Open Shortly\" — The Ambassador Bridge Donor Connection Explained — Ford Fireworks Tonight",
    summary: "The Hill Times published a significant column this morning from former Liberal MP John McKay that explains the political money angle behind the Gordie Howe Bridge delay — and contains the first hint in Canadian media that the bridge may be close to opening. McKay: 'At the 11th hour, U.S. President Donald Trump reportedly suggested that the bridge might not be permitted to open unless certain demands were met. However, news reports subsequently suggested that it will open shortly. Prime Minister Mark Carney was left in the awkward position of reassuring Canadians that no additional concessions or considerations had been given to secure the bridge's opening.' McKay then names the key player: the Moroun family, owners of the competing Ambassador Bridge. 'The political contributions made by the Moroun family to the president and other political actors would make for very interesting reading.' The Moroun family — Detroit billionaires who have owned the Ambassador Bridge since 1979 — have historically been aggressive opponents of any competing crossing. The Ambassador Bridge handles approximately 25% of all Canada-U.S. trade by value. The Gordie Howe Bridge, when open, will provide a second crossing and reduce the Ambassador Bridge's monopoly. Meanwhile, CBC Windsor reported this morning that thousands of Windsorites and Detroiters are gathering tonight for the 68th annual Ford Fireworks — the first since the bridge delay began. Windsor resident Rick Del Col, who attended the very first Ford Fireworks in 1959: '6,000 people crossing to work in Detroit every day. You can't discount that.' The fireworks are set off from barges in the Detroit River and are visible from both sides. The event is taking on a different meaning this year — a cross-border celebration amid a trade war, with a $5.7 billion bridge sitting finished and empty across the river.",
    whyItMatters: "The Hill Times report that the Gordie Howe Bridge 'will open shortly' is the most significant update since the June 12 ribbon-cutting was cancelled. If true, it means the Trump administration has extracted whatever concession it was seeking — or the Moroun family's political leverage has reached its limit. For shop owners in the Windsor-Essex and southwestern Ontario corridor: (1) The Gordie Howe Bridge opening will immediately reduce congestion at the Ambassador Bridge — the only Windsor-Detroit crossing for the past six months. Faster truck crossings mean faster parts delivery from U.S. suppliers. (2) The bridge opening will also reduce the cost premium that carriers have been charging for Windsor-Detroit crossings due to congestion and delays. That premium has been flowing through to parts prices. (3) The Moroun family's political influence over U.S. trade infrastructure is a reminder that Canadian trade policy is not just about government-to-government negotiations — it is also about the private interests that fund U.S. political campaigns. This is the kind of structural reality that does not change with elections. (4) Watch for a formal opening announcement this week. If Carney can announce the bridge opening before July 1, it gives him a political win going into the CUSMA review meeting.",
    source: "The Hill Times / CBC Windsor — June 22, 2026",
    sourceUrl: "https://www.hilltimes.com/2026/06/22/american-midterms/508487/",
    image: STORY3_IMG,
  },
];

const quickHits = [
  {
    icon: "🤝",
    text: "Unifor-Ford bargaining opened this morning in downtown Toronto. The union is leading with job security demands — a signal that Unifor is genuinely worried about plant closures, not just wages. Watch for Ford's response to the production commitment demand. If Ford refuses to guarantee Canadian production volumes, it will set the tone for a difficult negotiation. Target: tentative deal by July 10.",
    sourceUrl: "https://www.thestar.com/business/ford-autoworkers-union-to-meet-today-to-kick-off-contract-talks/article_ee263814-d00b-587f-917a-81cf10a689b7.html",
  },
  {
    icon: "🌉",
    text: "The Hill Times reports that the Gordie Howe Bridge 'will open shortly' — the first positive signal in Canadian media since the June 12 ribbon-cutting was cancelled. No official date confirmed. The Windsor-Detroit Bridge Authority has not issued a statement. Watch for a formal announcement this week. If the bridge opens before July 1, it gives Carney a political win going into the CUSMA review meeting.",
    sourceUrl: "https://www.hilltimes.com/2026/06/22/american-midterms/508487/",
  },
  {
    icon: "📉",
    text: "The Globe and Mail's 'let it fade away' piece by Carleton economist Christopher Worswick is already generating pushback from Unifor and industry groups. The 0.73% of GDP figure is the key number — it understates indirect economic impact but will be used in every policy debate going forward. The Australia comparison: last car rolled off the line in 2017, now imports 100% of vehicles, consumers pay more, independent shops have no domestic OEM relationships.",
    sourceUrl: "https://www.theglobeandmail.com/business/commentary/article-canada-auto-industry-china-ev-electric-vehicle/",
  },
  {
    icon: "🇨🇳",
    text: "BYD is hiring for 10+ management positions in Canada and pursuing approximately 20 dealerships. Chery confirmed late 2026 Canadian launch under Omoda and Jaecoo brands. Manufacturer-plated Chinese EVs have been spotted around Toronto. The Asia Pacific Foundation warned that any Chinese EV manufacturing deal in Canada must be compatible with U.S. connected-vehicle software rules — or Canadian-assembled vehicles could be barred from the U.S. market.",
    sourceUrl: "https://autos.yahoo.com/ev-and-future-tech/articles/byd-flash-charging-expansion-reaches-173037222.html",
  },
];

const tipOfTheDay = {
  title: "The Unifor-Ford Contract: What Shop Owners Should Watch For This Week",
  text: "Unifor-Ford bargaining opened today. Here is what to watch: (1) Does Unifor lead with job security or wages? If job security is the priority, it signals genuine plant closure risk. (2) Does Ford offer production volume guarantees for Windsor Assembly and Oakville? If not, it signals the 25% tariff is already reshaping Canadian assembly. (3) Watch the July 10 target date — if talks drag past July 10, it means the CUSMA July 1 meeting has complicated the bargaining. (4) A work stoppage at Windsor Assembly would affect Bronco Sport and Lincoln Corsair parts within days. If you service these vehicles, check your parts inventory now.",
};

const quoteOfTheDay = {
  text: "Going out of our way to prop up a declining industry is not the answer.",
  author: "Christopher Worswick, Professor of Economics, Carleton University",
  title: "The Globe and Mail — June 22, 2026",
};

const rideOfTheDay = {
  name: "1970 Plymouth 'Cuda 440 Six Pack Convertible — Plum Crazy Purple, Ontario-Plated",
  description: "The 1970 Plymouth 'Cuda convertible is one of the rarest and most valuable muscle cars ever built — and this one is wearing Plum Crazy purple with an Ontario plate, which makes it genuinely extraordinary. Chrysler built only 374 'Cuda convertibles in 1970, across all engine options. The 440 Six Pack — three two-barrel Holley carburetors on a single intake manifold — produced 390 horsepower officially, though the real number was closer to 430. The Six Pack setup was cheaper than the 426 Hemi but nearly as fast in a straight line, and far more streetable. The Plum Crazy paint code (FC7) was one of Chrysler's High Impact colours introduced in 1970 — a purple so vivid it bordered on offensive. It was designed to be seen from a quarter mile away. The 440 Six Pack hood featured a flat-black fiberglass lift-off panel with a functional cold-air scoop. The convertible top was available in white, black, or beige. The Ontario plate on this example suggests it spent its life in Canada — which means it survived the salt seasons, which is remarkable for a convertible. A 1970 'Cuda 440 Six Pack convertible in Plum Crazy with documentation is worth $500,000 to $1,000,000 today. A Hemi convertible is worth $3,000,000 to $4,000,000. Three carburetors because one was never enough. A convertible top because sometimes you need to hear the engine properly.",
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
                {["UNIFOR-FORD DAY 1", "LET IT FADE?", "GORDIE HOWE SOON?", "'CUDA 440"].map((tag) => (
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
              alt="Unifor-Ford Bargaining Opens + Ford Fireworks Over Gordie Howe Bridge — Baywash Daily Briefing Edition No. 46"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-[#1d4ed8] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 inline-block">Monday Edition</span>
              <h3 className="font-['Oswald'] text-white text-3xl md:text-4xl font-bold leading-tight max-w-3xl uppercase">
                Unifor-Ford Bargaining Opens — Gordie Howe Bridge "Opening Shortly" — Globe Says Let It Fade
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
