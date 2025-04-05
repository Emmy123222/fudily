export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Create Your Project",
      description: "Choose your token or NFT type. Customize tokenomics or collection details."
    },
    {
      number: 2,
      title: "Set Up Presale and Launch",
      description: "Define pricing, whitelist access, and launch details—no code needed."
    },
    {
      number: 3,
      title: "Manage Liquidity & Marketplace",
      description: "Automatically add liquidity to your pools, trade tokens or NFTs, and manage marketplace listings."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          How Fungily Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-slate-300">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-[32px] left-[50%] w-full h-[2px] bg-gradient-to-r from-blue-500/50 to-purple-500/50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}