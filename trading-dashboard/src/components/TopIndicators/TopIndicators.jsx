import React from 'react';
import { useDashboard } from '../../context/DashboardContext';

const formatNum = (num) => num.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const IndicatorBox = ({ title, value, subtext, icon, valueColor, subtextColor, borderColor = "border-[#1e3a5f]", titleColor = "text-[#f59e0b]" }) => (
  <div className={`flex-1 border ${borderColor} bg-[#0a1628] rounded flex items-center p-1.5 gap-2 transition-colors duration-500`}>
    <div className={`border ${borderColor} text-[#f59e0b] w-6 h-6 flex items-center justify-center rounded-sm text-[10px] font-bold shrink-0 bg-[#051120] transition-colors duration-500`}>
      {icon}
    </div>
    <div className="flex flex-col items-center flex-1 justify-center">
      <span className={`text-[8px] ${titleColor} tracking-wider font-bold mb-0.5`}>{title}</span>
      <span className={`text-[13px] font-bold leading-none mb-0.5 ${valueColor} transition-all duration-300`}>{value}</span>
      <span className={`text-[7px] font-bold uppercase tracking-wide ${subtextColor} transition-colors duration-300`}>{subtext}</span>
    </div>
  </div>
);

const TickerItem = ({ label, price, changePercent }) => {
  const isUp = changePercent >= 0;
  const colorClass = isUp ? "text-[#10b981]" : "text-[#ef4444]";
  const sign = isUp ? "+" : "";
  return (
    <div className="flex items-center gap-4 flex-1 justify-center relative">
      <span className="text-white font-bold text-[10px]">{label}</span>
      <span className={`${colorClass} font-bold text-[10px] transition-colors duration-300`}>{formatNum(price)}</span>
      <span className={`${colorClass} font-bold text-[10px] transition-colors duration-300`}>{sign}{changePercent.toFixed(2)}%</span>
    </div>
  );
};

const TopIndicators = () => {
  const { bankNifty, nifty50, bankNiftyIndex } = useDashboard();

  // Static for now, as indicators usually come from specific calculations, but we can slightly dynamically change Pivot based on BankNifty
  const pivotPoint = bankNifty.price + 19.93;
  const support = bankNifty.price - 704.93;

  return (
    <div className="flex flex-col gap-1.5 shrink-0">
      {/* Top 5 Boxes */}
      <div className="flex gap-1.5">
        <IndicatorBox 
          icon="P" 
          title="PIVOT POINTS" 
          value={formatNum(pivotPoint)} 
          valueColor="text-[#ef4444]" 
          subtext="BEARISH BIAS" 
          subtextColor="text-[#ef4444]"
          borderColor="border-[#10b981] border-opacity-50"
        />
        <IndicatorBox 
          icon="%" 
          title="FIBONACCI" 
          value="32.3%" 
          valueColor="text-[#ef4444]" 
          subtext="SELL ZONE" 
          subtextColor="text-[#ef4444]" 
        />
        <IndicatorBox 
          icon="S" 
          title="SUPPORT ZONE" 
          value={formatNum(support)} 
          valueColor="text-[#10b981]" 
          subtext="NEAREST SUPPORT" 
          subtextColor="text-gray-400" 
        />
        <IndicatorBox 
          icon="R" 
          title="RESISTANCE ZONE" 
          value="56,364.93" 
          valueColor="text-[#ef4444]" 
          subtext="NEAREST RESISTANCE" 
          subtextColor="text-gray-400" 
        />
        <IndicatorBox 
          icon="PA" 
          title="PRICE ACTION" 
          value="BULLISH" 
          valueColor="text-[#10b981]" 
          subtext="HH HL STRUCTURE" 
          subtextColor="text-[#10b981]" 
        />
      </div>

      {/* Ticker Tape */}
      <div className="border border-[#1e3a5f] bg-[#051120] rounded flex items-center px-2 py-1 gap-2 h-7">
        <TickerItem label="BANKNIFTY-I" price={bankNifty.price} changePercent={bankNifty.changePercent} />
        <div className="h-4 w-px bg-[#1e3a5f]"></div>
        <TickerItem label="NIFTY 50" price={nifty50.price} changePercent={nifty50.changePercent} />
        <div className="h-4 w-px bg-[#1e3a5f]"></div>
        <TickerItem label="BANKNIFTY" price={bankNiftyIndex.price} changePercent={bankNiftyIndex.changePercent} />
      </div>
    </div>
  );
};

export default TopIndicators;
