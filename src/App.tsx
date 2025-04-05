import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Background } from "./components/Background";
import { Home } from "./pages/landing-page/Home";
import { Swap } from "./pages/swap/Swap";
import { Sales } from "./pages/sales/Sales";
import { LaunchPad } from "./pages/launchpad/LaunchPad";
import { Marketplace } from "./pages/marketplace/Marketplace";

function App() {
  return (
    <Router>
      <div className="min-h-screen ">
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/launchpad" element={<LaunchPad />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
