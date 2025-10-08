import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gem, Landmark, Orbit, Banknote, Wallet } from "lucide-react";

const utilities = [
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: "Staking Rewards",
    description: "Earn passive income by staking your $TRAD tokens.",
    comingSoon: false,
  },
  {
    icon: <Banknote className="h-8 w-8 text-primary" />,
    title: "Payments & Discounts",
    description: "Use $TRAD for seamless payments and get exclusive discounts.",
    comingSoon: false,
  },
  {
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: "Governance Rights",
    description: "Shape the future of the ecosystem by voting on proposals.",
    comingSoon: false,
  },
  {
    icon: <Orbit className="h-8 w-8 text-primary" />,
    title: "Ecosystem Access",
    description: "Unlock premium features and services within Tradinta.",
    comingSoon: false,
  },
  {
    icon: <Wallet className="h-8 w-8 text-muted-foreground" />,
    title: "Wallet Integration",
    description: "Securely store and manage your assets in our native wallet.",
    comingSoon: true,
  },
];

export default function TokenUtilitySection() {
  return (
    <section id="token" className="py-24 sm:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            $TRAD Token Utility
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
            A versatile token designed for real-world application.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {utilities.map((utility) => (
            <Card
              key={utility.title}
              className={`flex flex-col text-center transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg ${utility.comingSoon ? "opacity-50 cursor-not-allowed" : "hover:-translate-y-2"}`}
            >
              <CardHeader className="items-center">
                {utility.icon}
                <CardTitle className="mt-4 font-headline text-xl">
                  {utility.title}
                </CardTitle>
                 {utility.comingSoon && (
                  <Badge variant="secondary" className="mt-2 bg-amber-400 text-black">Coming Soon</Badge>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{utility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
