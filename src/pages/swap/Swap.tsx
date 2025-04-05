import { useState } from 'react';
import { Settings, ChevronDown, ArrowDownUp } from 'lucide-react';

export function Swap() {
  const [inputAmount, setInputAmount] = useState('');
  const [outputAmount, setOutputAmount] = useState('');

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-slate-800 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Swap</h2>
          <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
            <Settings className="h-5 w-5 text-slate-400" />
          </button>
        </div>

        {/* Input Token */}
        <div className="bg-slate-700 rounded-xl p-4 mb-2">
          <div className="flex justify-between mb-2">
            <input
              type="number"
              value={inputAmount}
              onChange={(e) => setInputAmount(e.target.value)}
              placeholder="0.0"
              className="bg-transparent text-2xl text-white outline-none w-full"
            />
            <button className="flex items-center gap-2 bg-slate-600 hover:bg-slate-500 rounded-xl px-3 py-1">
              <img src="https://cryptologos.cc/logos/ethereum-eth-logo.svg" alt="ETH" className="h-6 w-6" />
              <span className="text-white font-medium">ETH</span>
              <ChevronDown className="h-4 w-4 text-slate-300" />
            </button>
          </div>
          <p className="text-slate-400 text-sm">Balance: 0.0 ETH</p>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center -my-2 z-10 relative">
          <button className="bg-slate-700 p-2 rounded-xl hover:bg-slate-600 transition-colors">
            <ArrowDownUp className="h-5 w-5 text-slate-300" />
          </button>
        </div>

        {/* Output Token */}
        <div className="bg-slate-700 rounded-xl p-4 mt-2">
          <div className="flex justify-between mb-2">
            <input
              type="number"
              value={outputAmount}
              onChange={(e) => setOutputAmount(e.target.value)}
              placeholder="0.0"
              className="bg-transparent text-2xl text-white outline-none w-full"
            />
            <button className="flex items-center gap-2 bg-slate-600 hover:bg-slate-500 rounded-xl px-3 py-1">
              <span className="text-white font-medium">Select token</span>
              <ChevronDown className="h-4 w-4 text-slate-300" />
            </button>
          </div>
          <p className="text-slate-400 text-sm">Balance: 0.0</p>
        </div>

        {/* Swap Button */}
        <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}