import React from 'react';

const IndicatorBox = ({ title, value, subtext, icon, valueColor, subtextColor, borderColor = "border-[#1e3a5f]", titleColor = "text-[#f59e0b]" }) => (
  <div className={`flex-1 border ${borderColor} bg-[#0a1628] rounded flex items-center p-1.5 gap-2`}>
    <div className={`border ${borderColor} text-[#f59e0b] w-6 h-6 flex items-center justify-center rounded-sm text-[10px] font-bold shrink-0 bg-[#051120]`}>
      {icon}
    </div>
    <div className="flex flex-col items-center flex-1 justify-center">
      <span className={`text-[8px] ${titleColor} tracking-wider font-bold mb-0.5`}>{title}</span>
      <span className={`text-[13px] font-bold leading-none mb-0.5 ${valueColor}`}>{value}</span>
      <span className={`text-[7px] font-bold uppercase tracking-wide ${subtextColor}`}>{subtext}</span>
    </div>
  </div>
);

const TopIndicators = () => {
  return (
    <div className="flex flex-col gap-1.5 shrink-0">
      {/* Top 5 Boxes */}
      <div className="flex gap-1.5">
        <IndicatorBox 
          icon="P" 
          title="PIVOT POINTS" 
          value="56,364.93" 
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
      <div className="border border-[#1e3a5f] bg-[#051120] rounded flex items-center px-2 py-1 gap-2 h-7">
        <div className="flex items-center gap-4 flex-1 justify-center relative">
          <span className="text-white font-bold text-[10px]">BANKNIFTY-I</span>
          <span className="text-[#10b981] font-bold text-[10px]">56,345.00</span>
          <span className="text-[#10b981] font-bold text-[10px]">+0.59%</span>
          <div className="absolute right-0 h-4 w-px bg-[#1e3a5f]"></div>
        </div>
        <div className="flex items-center gap-4 flex-1 justify-center relative">
          <span className="text-white font-bold text-[10px]">NIFTY 50</span>
          <span className="text-[#10b981] font-bold text-[10px]">23,224.05</span>
          <span className="text-[#10b981] font-bold text-[10px]">+0.46%</span>
          <div className="absolute right-0 h-4 w-px bg-[#1e3a5f]"></div>
        </div>
        <div className="flex items-center gap-4 flex-1 justify-center">
          <span className="text-white font-bold text-[10px]">BANKNIFTY</span>
          <span className="text-[#10b981] font-bold text-[10px]">56,129.05</span>
          <span className="text-[#10b981] font-bold text-[10px]">+0.60%</span>
        </div>
      </div>
    </div>
  );
};

export default TopIndicators;
