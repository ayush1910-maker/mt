import React from 'react';
import { useDashboard } from '../../context/DashboardContext';

const formatNum = (num) => num.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const StatBox = ({ label, value, valueColor = "text-white", hasBorder = true }) => (
  <div className={`flex flex-col items-center justify-center px-3 ${hasBorder ? 'border-r border-[#1e3a5f]' : ''} transition-colors duration-300`}>
    <span className="text-[9px] text-gray-400 uppercase tracking-wider mb-0.5">{label}</span>
    <span className={`text-[13px] font-bold ${valueColor} transition-all duration-300`}>{value}</span>
  </div>
);

const Header = () => {
  const { bankNifty } = useDashboard();
  
  const changeColor = bankNifty.change >= 0 ? "text-[#10b981]" : "text-[#ef4444]";
  const changeBg = bankNifty.change >= 0 ? "bg-[#10b981]" : "bg-[#ef4444]";
  const changeBorder = bankNifty.change >= 0 ? "border-[#10b981]" : "border-[#ef4444]";
  const changeSign = bankNifty.change > 0 ? '+' : '';

  return (
    <header className="flex items-center justify-between border border-[#1e3a5f] bg-[#0a1628] rounded p-1 h-12 shrink-0">
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
          <StatBox label="OPEN" value={formatNum(bankNifty.open)} />
          <StatBox label="HIGH" value={formatNum(bankNifty.high)} valueColor="text-[#10b981]" />
          <StatBox label="LOW" value={formatNum(bankNifty.low)} valueColor="text-[#ef4444]" />
          <StatBox label="CLOSE" value={formatNum(bankNifty.price)} valueColor={bankNifty.price >= bankNifty.open ? "text-[#10b981]" : "text-[#ef4444]"} />
          <div className="flex flex-col items-center justify-center px-3">
            <span className="text-[9px] text-gray-400 uppercase tracking-wider mb-0.5">CHANGE</span>
            <span className={`text-[13px] font-bold ${changeColor} ${changeBg} bg-opacity-20 px-1.5 rounded border ${changeBorder} transition-all duration-300`}>
              {changeSign}{formatNum(bankNifty.change)} ({changeSign}{formatNum(bankNifty.changePercent)}%)
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
