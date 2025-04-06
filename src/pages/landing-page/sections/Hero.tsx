import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Launch Your Tokens and NFTs like never before with Fungily
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-300">
            Create, launch, and manage presales, liquidity pools, and
            marketplaces for both tokens and NFTs—without writing a single line
            of code.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 px-4">
            <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center">
              Start Launching <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-3 bg-slate-700 rounded-lg font-semibold hover:bg-slate-600 transition-colors">
              Explore Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
