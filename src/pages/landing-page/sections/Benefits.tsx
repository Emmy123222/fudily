export function Benefits() {
  const benefits = [
    {
      title: "No Code, Full Control",
      description: "Launch with ease and retain complete control over your project."
    },
    {
      title: "All-in-One Platform",
      description: "Tokens, NFTs, presales, liquidity pools, and marketplaces—all under one roof."
    },
    {
      title: "Liquidity-Backed Projects",
      description: "NFTs and tokens with real liquidity from day one, ensuring tradeability."
    },
    {
      title: "Decentralized & Transparent",
      description: "Fully decentralized, on-chain, and transparent operations for trust and security."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Why Creators Choose Fungily
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
              <p className="text-slate-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}