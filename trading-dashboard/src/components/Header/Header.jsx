import React from 'react';

const StatBox = ({ label, value, colorClass = "text-white" }) => (
  <div className="flex flex-col items-center justify-center border border-[#1e3a5f] bg-[#051120] px-3 py-1 rounded">
    <span className="text-[10px] text-gray-400 uppercase tracking-wider">{label}</span>
    <span className={`text-sm font-bold ${colorClass}`}>{value}</span>
  </div>
);

const Header = () => {
  return (
    <header className="flex items-center justify-between border border-[#1e3a5f] bg-[#0a1628] rounded-md p-2 h-16">
      <div className="flex items-center gap-3">
        <div className="bg-[#051120] border border-[#10b981] p-1.5 rounded flex items-center justify-center">
          <span className="text-[#10b981] font-bold text-xl">S</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-lg leading-tight">MORNING BLASTER AI</h1>
          <span className="text-[10px] text-gray-400">Live Trade Terminal | ADM Engine | First Call Only</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 mr-4">
          <span className="text-[#f59e0b] font-bold text-lg">BANKNIFTY-I</span>
          <span className="text-[#3b82f6] font-semibold text-sm">10-minute</span>
        </div>
        
        <div className="flex gap-2">
          <StatBox label="OPEN" value="56,315.00" />
          <StatBox label="HIGH" value="56,399.80" colorClass="text-[#10b981]" />
          <StatBox label="LOW" value="56,310.20" colorClass="text-[#ef4444]" />
          <StatBox label="CLOSE" value="56,345.00" colorClass="text-[#10b981]" />
          <div className="flex flex-col items-center justify-center border border-[#1e3a5f] bg-[#051120] px-3 py-1 rounded">
            <span className="text-[10px] text-gray-400 uppercase tracking-wider">CHANGE</span>
            <span className="text-sm font-bold text-[#10b981]">+330.00 (+0.6%)</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
