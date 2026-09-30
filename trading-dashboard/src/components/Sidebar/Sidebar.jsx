import React from 'react';

const PanelSection = ({ children, className = "" }) => (
  <div className={`border border-[#1e3a5f] bg-[#0a1628] rounded p-2 mb-1.5 last:mb-0 ${className}`}>
    {children}
  </div>
);

const Sidebar = () => {
  return (
    <div className="w-[280px] flex flex-col h-full shrink-0">
      {/* Order Flow */}
      <PanelSection>
        <div className="flex justify-between items-center mb-1">
          <div className="text-[#f59e0b] text-[10px] font-bold tracking-widest">ORDER FLOW <span className="text-gray-500 font-normal">|</span> BUYERS / SELLERS</div>
        </div>
        <div className="text-[8px] text-gray-400 mb-1.5 uppercase tracking-wider">LIVE VOLUME STRENGTH</div>
        <div className="flex h-5 rounded overflow-hidden text-[10px] font-bold">
          <div className="bg-[#10b981] w-[54%] flex items-center justify-start px-2 text-black">BUY 54.0%</div>
          <div className="bg-[#ef4444] w-[46%] flex items-center justify-end px-2 text-white">SELL 46.0%</div>
        </div>
      </PanelSection>

      {/* EMA & SMA Technicals */}
      <PanelSection className="relative border-[#ef4444] border-opacity-50">
        <div className="flex justify-between items-center mb-2">
          <div className="text-[10px] font-bold text-gray-300">EMA & SMA TECHNICALS</div>
          <div className="text-[10px] font-bold text-[#ef4444] bg-[#ef4444] bg-opacity-10 px-1.5 py-0.5 rounded">BEARISH</div>
        </div>
        <div className="flex justify-between items-end mt-2 h-20">
          <div className="flex flex-col gap-1.5">
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full"></div>
                <span className="text-[10px] text-gray-300">Bullish MA</span>
                <span className="text-[10px] border border-[#10b981] bg-[#10b981] bg-opacity-20 px-1.5 rounded text-[#10b981]">1</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#ef4444] rounded-full"></div>
                <span className="text-[10px] text-gray-300">Bearish MA</span>
                <span className="text-[10px] border border-[#ef4444] bg-[#ef4444] bg-opacity-20 px-1.5 rounded text-[#ef4444]">13</span>
             </div>
          </div>
          <div className="flex flex-col items-center relative">
            <div className="text-[8px] text-gray-400 mb-1 absolute -top-4">TREND STRENGTH</div>
            {/* Gauge */}
            <div className="w-16 h-8 border-t-4 border-l-4 border-r-4 border-[#1e3a5f] rounded-t-full relative flex items-end justify-center">
               <div className="absolute bottom-0 left-1/2 w-0.5 h-7 bg-[#ef4444] transform translate-x-3 rotate-45 origin-bottom"></div>
               <div className="absolute bottom-0 w-2 h-2 bg-white rounded-full translate-y-1"></div>
            </div>
            <span className="text-[9px] font-bold text-[#ef4444] border border-[#ef4444] px-1 mt-2 rounded bg-[#051120]">STRONG BEARISH</span>
          </div>
        </div>
        
        {/* Histogram fake lines */}
        <div className="absolute left-3 top-10 flex gap-0.5 items-end h-8 opacity-70">
           <div className="w-0.5 h-3 bg-[#10b981]"></div>
           <div className="w-0.5 h-4 bg-[#10b981]"></div>
           <div className="w-0.5 h-3 bg-[#10b981]"></div>
           <div className="w-0.5 h-5 bg-[#ef4444]"></div>
           <div className="w-0.5 h-6 bg-[#ef4444]"></div>
           <div className="w-0.5 h-7 bg-[#ef4444]"></div>
           <div className="w-0.5 h-8 bg-[#ef4444]"></div>
           <div className="w-0.5 h-7 bg-[#ef4444]"></div>
           <div className="w-0.5 h-5 bg-[#ef4444]"></div>
           <div className="w-0.5 h-4 bg-[#ef4444]"></div>
        </div>
      </PanelSection>

      {/* Values */}
      <div className="flex gap-1.5 mb-1.5">
        <div className="flex-1 border border-[#3b82f6] bg-[#0a1628] rounded flex flex-col items-center justify-center pt-1 pb-2 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-[#3b82f6] bg-opacity-20 flex items-center px-2">
            <span className="text-[8px] text-white font-bold tracking-wider">ADM VALUE</span>
          </div>
          <span className="text-xl font-bold text-[#f59e0b] mt-5">634.96</span>
        </div>
        <div className="flex-1 border border-[#10b981] bg-[#0a1628] rounded flex flex-col items-center justify-center pt-1 pb-2 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-[#10b981] flex items-center px-2">
            <span className="text-[8px] text-black font-bold tracking-wider">LIVE P/L</span>
          </div>
          <span className="text-xl font-bold text-[#10b981] mt-5">147.20</span>
        </div>
      </div>

      {/* Script details */}
      <PanelSection className="flex-1 flex flex-col mb-0 border-[#10b981] border-opacity-30">
        <div className="flex justify-between items-center mb-2">
          <div className="flex flex-col border border-[#1e3a5f] rounded px-2 py-1 bg-[#051120] w-full mr-2 relative">
            <span className="text-[8px] text-gray-400 absolute -top-2 left-2 bg-[#0a1628] px-1">SCRIPT</span>
            <span className="text-sm font-bold text-[#f59e0b] mt-1">BANKNIFTY-I</span>
          </div>
          <button className="bg-[#10b981] text-black font-bold px-4 py-1.5 rounded-sm text-xs">BUY</button>
        </div>

        <div className="flex flex-col gap-0 flex-1">
          <div className="flex justify-between items-center border-b border-[#1e3a5f] py-1.5">
            <div className="flex items-center gap-2">
               <div className="w-1 h-3 bg-[#10b981]"></div>
               <span className="text-[10px] text-gray-300 font-bold tracking-wide">SIGNAL</span>
            </div>
            <span className="text-[10px] text-[#10b981] font-bold">BUY ACTIVE</span>
          </div>
          <div className="flex justify-between items-center border-b border-[#1e3a5f] py-1.5">
            <div className="flex items-center gap-2">
               <div className="w-1 h-3 bg-white"></div>
               <span className="text-[10px] text-gray-300 font-bold tracking-wide">ENTRY</span>
            </div>
            <span className="text-[10px] text-white font-bold">56,197.80</span>
          </div>
          <div className="flex justify-between items-center border-b border-[#1e3a5f] py-1.5">
            <div className="flex items-center gap-2">
               <div className="w-1 h-3 bg-[#ef4444]"></div>
               <span className="text-[10px] text-gray-300 font-bold tracking-wide">STOPLOSS</span>
            </div>
            <span className="text-[10px] text-[#ef4444] font-bold">56,039.06</span>
          </div>
          <div className="flex justify-between items-center border-b border-[#1e3a5f] py-1.5">
            <div className="flex items-center gap-2">
               <div className="w-1 h-3 bg-[#1e3a5f]"></div>
               <span className="text-[10px] text-gray-300 font-bold tracking-wide">TARGET 1</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[#f59e0b] font-bold">56,356.54</span>
              <span className="text-[8px] bg-[#10b981] bg-opacity-20 text-[#10b981] px-1.5 py-0.5 rounded border border-[#10b981]">HIT +158.74 PT</span>
            </div>
          </div>
          <div className="flex justify-between items-center border-b border-[#1e3a5f] py-1.5">
            <div className="flex items-center gap-2">
               <div className="w-1 h-3 bg-[#1e3a5f]"></div>
               <span className="text-[10px] text-gray-300 font-bold tracking-wide">TARGET 2</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[#f59e0b] font-bold">56,483.53</span>
              <span className="text-[8px] bg-[#10b981] bg-opacity-20 text-[#10b981] px-1.5 py-0.5 rounded border border-[#10b981]">HIT +285.73 PT</span>
            </div>
          </div>
          <div className="flex justify-between items-center pt-1.5">
            <div className="flex items-center gap-2">
               <div className="w-1 h-3 bg-[#1e3a5f]"></div>
               <span className="text-[10px] text-gray-300 font-bold tracking-wide">TARGET 3</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-[#f59e0b] font-bold">56,642.27</span>
              <span className="text-[9px] bg-[#f59e0b] border border-[#f59e0b] text-black font-bold px-3 py-0.5 rounded-sm">PENDING</span>
            </div>
          </div>
        </div>
      </PanelSection>
    </div>
  );
};

export default Sidebar;
