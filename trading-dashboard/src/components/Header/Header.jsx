import React from 'react';

const StatBox = ({ label, value, valueColor = "text-white", hasBorder = true }) => (
  <div className={`flex flex-col items-center justify-center px-3 ${hasBorder ? 'border-r border-[#1e3a5f]' : ''}`}>
    <span className="text-[9px] text-gray-400 uppercase tracking-wider mb-0.5">{label}</span>
    <span className={`text-[13px] font-bold ${valueColor}`}>{value}</span>
  </div>
);

const Header = () => {
  return (
    <header className="flex items-center justify-between border border-[#1e3a5f] bg-[#0a1628] rounded p-1 h-12">
      <div className="flex items-center gap-2 px-2">
        <div className="border border-[#10b981] bg-[#051120] w-7 h-7 flex items-center justify-center rounded-sm">
          <span className="text-[#10b981] font-bold text-lg leading-none">S</span>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-white font-bold text-base leading-tight tracking-wide">MORNING BLASTER AI</h1>
          <span className="text-[8px] text-gray-400 tracking-wider">Live Trade Terminal ADM Engine First Call Only</span>
        </div>
      </div>

      <div className="flex items-center gap-8 pr-2 h-full">
        <div className="flex items-center gap-4">
          <span className="text-[#f59e0b] font-bold text-[15px] tracking-wider">BANKNIFTY-I</span>
          <span className="text-[#3b82f6] font-bold text-sm">10-minute</span>
        </div>
        
        <div className="flex h-full border border-[#1e3a5f] bg-[#051120] rounded py-1 px-1">
          <StatBox label="OPEN" value="56,315.00" />
          <StatBox label="HIGH" value="56,399.80" valueColor="text-[#10b981]" />
          <StatBox label="LOW" value="56,310.20" valueColor="text-[#ef4444]" />
          <StatBox label="CLOSE" value="56,345.00" valueColor="text-[#10b981]" />
          <div className="flex flex-col items-center justify-center px-3">
            <span className="text-[9px] text-gray-400 uppercase tracking-wider mb-0.5">CHANGE</span>
            <span className="text-[13px] font-bold text-[#10b981] bg-[#10b981] bg-opacity-20 px-1.5 rounded border border-[#10b981]">
              +330.00 (+0.6%)
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
