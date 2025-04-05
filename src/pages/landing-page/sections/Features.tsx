import {
  Rocket,
  Palette,
  ArrowRightLeft,
  Shuffle,
  Store,
  Droplets,
  Code,
  Search,
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Rocket className="h-8 w-8 text-blue-400" />,
      title: "Token Presale Launchpad",
      description:
        "Easily launch your tokens with fair sales, whitelists, caps, and more—no dev skills required.",
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-400" />,
      title: "NFT Presale Launchpad",
      description:
        "Mint your NFTs and launch presales with custom pricing and direct listing into Fungily's marketplace.",
    },
    {
      icon: <ArrowRightLeft className="h-8 w-8 text-pink-400" />,
      title: "Fungible Token AMM",
      description:
        "Build liquidity pools and swap tokens instantly with Fungily's automated market maker.",
    },
    {
      icon: <Shuffle className="h-8 w-8 text-indigo-400" />,
      title: "NFT AMM (NFT Swap Pools)",
      description:
        "Trade NFTs with real-time liquidity and pricing through Fungily's dynamic NFT AMM pools.",
    },
    {
      icon: <Store className="h-8 w-8 text-blue-400" />,
      title: "NFT Marketplace",
      description:
        "Buy and sell NFTs seamlessly, with a fully integrated marketplace supporting fixed and dynamic pricing.",
    },
    {
      icon: <Droplets className="h-8 w-8 text-purple-400" />,
      title: "Liquidity Pool Creation",
      description:
        "Create liquidity pools for tokens and NFTs, enabling immediate market access and price stability.",
    },
    {
      icon: <Code className="h-8 w-8 text-pink-400" />,
      title: "Zero-Code Launch Flow",
      description:
        "Launch tokens, NFTs, and presales with Fungily's simple, intuitive interface—no coding necessary.",
    },
    {
      icon: <Search className="h-8 w-8 text-indigo-400" />,
      title: "Explorer Integration",
      description:
        "Get your projects verified and listed on blockchain explorers for trust and visibility.",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Features
        </h2>
        {/* <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto">
          Everything you need to launch and manage your blockchain projects in
          one place
        </p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all hover:transform hover:-translate-y-1"
            >
              <div className="mb-4 p-3 rounded-lg bg-slate-700/50 w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
