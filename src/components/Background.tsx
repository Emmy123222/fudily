export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="floating-shape w-[500px] h-[500px] bg-blue-500/30 left-[-100px] top-[10%]" />
      <div className="floating-shape floating-shape-reverse w-[400px] h-[400px] bg-purple-500/30 right-[-100px] top-[20%]" />
      <div className="floating-shape w-[600px] h-[600px] bg-pink-500/30 left-[20%] top-[40%]" />
      <div className="floating-shape floating-shape-reverse w-[300px] h-[300px] bg-indigo-500/30 right-[10%] bottom-[10%]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0)_0%,#0f172a_100%)]" />
    </div>
  );
}