import React from 'react';

const PanelSection = ({ children, className = "" }) => (
  <div className={`border border-[#1e3a5f] bg-[#0a1628] rounded-md p-3 mb-2 last:mb-0 ${className}`}>
    {children}
  </div>
);

const Sidebar = () => {
  return (
    <div className="w-[320px] flex flex-col h-full overflow-y-auto">
      {/* Order Flow */}
      <PanelSection>
        <div className="flex justify-between items-center mb-2">
          <div className="text-[#f59e0b] text-xs font-bold tracking-widest">ORDER FLOW <span className="text-gray-500">|</span> BUYERS / SELLERS</div>
        </div>
        <div className="text-[10px] text-gray-400 mb-2">LIVE VOLUME STRENGTH</div>
        <div className="flex h-6 rounded overflow-hidden text-xs font-bold">
          <div className="bg-[#10b981] w-[54%] flex items-center justify-start px-2">BUY 54.0%</div>
          <div className="bg-[#ef4444] w-[46%] flex items-center justify-end px-2">SELL 46.0%</div>
        </div>
      </PanelSection>

      {/* EMA & SMA Technicals */}
      <PanelSection className="relative">
        <div className="flex justify-between">
          <div className="text-xs font-bold text-gray-300">EMA & SMA TECHNICALS</div>
          <div className="text-xs font-bold text-[#ef4444]">BEARISH</div>
        </div>
        <div className="flex justify-between items-end mt-4">
          <div className="flex flex-col gap-2">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#10b981]"></div>
                <span className="text-xs text-gray-300">Bullish MA</span>
                <span className="text-xs border border-[#1e3a5f] bg-[#051120] px-2 py-0.5 rounded text-[#10b981]">1</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ef4444]"></div>
                <span className="text-xs text-gray-300">Bearish MA</span>
                <span className="text-xs border border-[#1e3a5f] bg-[#051120] px-2 py-0.5 rounded text-[#ef4444]">13</span>
             </div>
          </div>
          <div className="flex flex-col items-center">
            {/* Simple representation of the gauge */}
            <div className="w-16 h-10 border-t-2 border-l-2 border-r-2 border-[#1e3a5f] rounded-t-full relative flex items-end justify-center pb-1">
               <div className="absolute bottom-0 left-1/2 w-0.5 h-6 bg-[#ef4444] transform -translate-x-1/2 rotate-45 origin-bottom"></div>
            </div>
            <span className="text-[10px] font-bold text-[#ef4444] border border-[#ef4444] px-1 mt-1 rounded">STRONG BEARISH</span>
          </div>
        </div>
        {/* Fake bar chart */}
        <div className="absolute top-8 left-3 flex gap-1 items-end h-8">
           {[...Array(12)].map((_, i) => (
             <div key={i} className={`w-1 ${i < 3 ? 'bg-[#10b981]' : 'bg-[#ef4444]'} ${i === 8 ? 'h-6' : i === 9 ? 'h-7' : 'h-4'}`}></div>
           ))}
        </div>
      </PanelSection>

      {/* Values */}
      <div className="flex gap-2 mb-2">
        <div className="flex-1 border border-[#1e3a5f] bg-[#0a1628] rounded-md p-2 flex flex-col items-center justify-center">
          <span className="text-[10px] text-gray-400 font-bold mb-1 w-full border-b border-[#1e3a5f] pb-1">ADM VALUE</span>
          <span className="text-2xl font-bold text-[#f59e0b]">634.96</span>
        </div>
        <div className="flex-1 border border-[#1e3a5f] bg-[#051120] rounded-md p-2 flex flex-col items-center justify-center border-t-4 border-t-[#10b981]">
          <span className="text-[10px] text-gray-400 font-bold mb-1 w-full text-center border-b border-[#1e3a5f] pb-1">LIVE P/L</span>
          <span className="text-2xl font-bold text-[#10b981]">147.20</span>
        </div>
      </div>

      {/* Script details */}
      <PanelSection className="flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400">SCRIPT</span>
            <span className="text-lg font-bold text-[#f59e0b]">BANKNIFTY-I</span>
          </div>
          <button className="bg-[#10b981] text-black font-bold px-4 py-1 rounded text-sm">BUY</button>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between border-b border-[#1e3a5f] pb-1">
            <span className="text-xs text-gray-400 font-bold">SIGNAL</span>
            <span className="text-xs text-[#10b981] font-bold">BUY ACTIVE</span>
          </div>
          <div className="flex justify-between border-b border-[#1e3a5f] pb-1">
            <span className="text-xs text-gray-400 font-bold">ENTRY</span>
            <span className="text-xs text-white font-bold">56,197.80</span>
          </div>
          <div className="flex justify-between border-b border-[#1e3a5f] pb-1">
            <span className="text-xs text-gray-400 font-bold">STOPLOSS</span>
            <span className="text-xs text-[#ef4444] font-bold">56,039.06</span>
          </div>
          <div className="flex justify-between border-b border-[#1e3a5f] pb-1 items-center">
            <span className="text-xs text-gray-400 font-bold">TARGET 1</span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#f59e0b] font-bold">56,356.54</span>
              <span className="text-[10px] bg-[#10b981] bg-opacity-20 text-[#10b981] px-1 rounded border border-[#10b981]">HIT +158.74 PT</span>
            </div>
          </div>
          <div className="flex justify-between border-b border-[#1e3a5f] pb-1 items-center">
            <span className="text-xs text-gray-400 font-bold">TARGET 2</span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#f59e0b] font-bold">56,483.53</span>
              <span className="text-[10px] bg-[#10b981] bg-opacity-20 text-[#10b981] px-1 rounded border border-[#10b981]">HIT +285.73 PT</span>
            </div>
          </div>
          <div className="flex justify-between items-center pt-1">
            <span className="text-xs text-gray-400 font-bold">TARGET 3</span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#f59e0b] font-bold">56,642.27</span>
              <span className="text-[10px] bg-[#f59e0b] text-black font-bold px-2 rounded">PENDING</span>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
};

export default Sidebar;
