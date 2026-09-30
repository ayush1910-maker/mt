import React from 'react';

const IndicatorBox = ({ title, value, subtext, icon, valueColor, subtextColor }) => (
  <div className="flex-1 border border-[#1e3a5f] bg-[#0a1628] rounded flex items-center p-2 gap-3">
    <div className="border border-[#f59e0b] text-[#f59e0b] w-6 h-6 flex items-center justify-center rounded text-xs font-bold">
      {icon}
    </div>
    <div className="flex flex-col items-center flex-1">
      <span className="text-[10px] text-[#f59e0b] tracking-wider font-bold mb-0.5">{title}</span>
      <span className={`text-lg font-bold leading-none mb-1 ${valueColor}`}>{value}</span>
      <span className={`text-[9px] font-bold ${subtextColor}`}>{subtext}</span>
    </div>
  </div>
);

const TopIndicators = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* Top 5 Boxes */}
      <div className="flex gap-2">
        <IndicatorBox 
          icon="P" 
          title="PIVOT POINTS" 
          value="56,364.93" 
          valueColor="text-[#ef4444]" 
          subtext="BEARISH BIAS" 
          subtextColor="text-[#ef4444]" 
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
          value="55,640.07" 
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
      <div className="border border-[#1e3a5f] bg-[#051120] rounded flex items-center px-4 py-1.5 gap-8">
        <div className="flex items-center gap-4 flex-1">
          <span className="text-white font-bold text-sm">BANKNIFTY-I</span>
          <span className="text-[#10b981] font-bold text-sm">56,345.00</span>
          <span className="text-[#10b981] font-bold text-sm">+0.59%</span>
        </div>
        <div className="flex items-center gap-4 flex-1 border-l border-[#1e3a5f] pl-8">
          <span className="text-white font-bold text-sm">NIFTY 50</span>
          <span className="text-[#10b981] font-bold text-sm">23,224.05</span>
          <span className="text-[#10b981] font-bold text-sm">+0.46%</span>
        </div>
        <div className="flex items-center gap-4 flex-1 border-l border-[#1e3a5f] pl-8">
          <span className="text-white font-bold text-sm">BANKNIFTY</span>
          <span className="text-[#10b981] font-bold text-sm">56,129.05</span>
          <span className="text-[#10b981] font-bold text-sm">+0.60%</span>
        </div>
      </div>
    </div>
  );
};

export default TopIndicators;
