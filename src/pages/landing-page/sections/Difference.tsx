export function Difference() {
  return (
    <section className="py-24 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Why We're Different</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Unique Approach</h3>
            <p className="text-slate-300">Our innovative platform sets new standards in the digital marketplace.</p>
          </div>
          <div className="bg-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Community First</h3>
            <p className="text-slate-300">Built with and for our community, ensuring the best experience for all users.</p>
          </div>
          <div className="bg-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Advanced Technology</h3>
            <p className="text-slate-300">Leveraging cutting-edge technology to provide seamless transactions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}