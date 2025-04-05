export function FAQ() {
  const faqs = [
    {
      question: "How does Fungily work?",
      answer: "Fungily lets creators launch tokens and NFTs with built-in presales, liquidity pools, and AMMs—all with zero code required."
    },
    {
      question: "Is Fungily fully decentralized?",
      answer: "Yes, Fungily is built on blockchain technology to ensure your projects are 100% decentralized and transparent."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">{faq.question}</h3>
              <p className="text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}