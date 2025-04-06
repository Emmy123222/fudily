export function CTA() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Ready to Launch? Start Your Project with Fungily Today!
        </h2>
        <div className="flex justify-center gap-3">
          <button className="px-4 sm:px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-sm sm:text-base font-semibold text-white hover:opacity-90 transition-opacity">
            Apply To Launch
          </button>
          <button className="px-4 sm:px-6 py-2.5 bg-slate-700 text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-slate-600 transition-colors">
            Explore Our Docs
          </button>
        </div>
      </div>
    </section>
  );
}
