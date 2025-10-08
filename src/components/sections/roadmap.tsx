const milestones = [
  {
    quarter: "Q4 2025",
    title: "TGE Launch",
    description: "The official Token Generation Event for $TRAD, marking our public launch."
  },
  {
    quarter: "Q1 2026",
    title: "Wallet Connection",
    description: "Integration with leading web3 wallets for seamless token management."
  },
  {
    quarter: "Q2 2026",
    title: "Staking & Governance",
    description: "Launch of staking protocols and the first governance proposals."
  },
  {
    quarter: "Q3 2026",
    title: "Exchange Listings",
    description: "Securing listings on major centralized and decentralized exchanges."
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Our Roadmap
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
            A clear path to building the future of finance.
          </p>
        </div>
        <div className="mt-20">
          <div className="relative">
            {/* The line */}
            <div className="hidden md:block absolute top-5 left-0 w-full h-0.5 bg-border"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="group relative flex flex-col items-center text-center">
                  {/* Dot */}
                  <div className="hidden md:block absolute top-5 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background border-2 border-primary transition-colors group-hover:bg-primary"></div>
                  
                  {/* Vertical line for mobile */}
                  {index < milestones.length - 1 && <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 h-full w-0.5 bg-border -z-10"></div>}
                  
                  <div className="md:mt-12 w-full p-4 rounded-lg bg-card md:bg-transparent">
                     <p className="text-sm font-bold text-primary">{milestone.quarter}</p>
                    <h3 className="mt-2 font-headline text-xl font-semibold">{milestone.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
