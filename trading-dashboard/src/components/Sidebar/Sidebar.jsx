import React from 'react';
import { useDashboard } from '../../context/DashboardContext';

const PanelSection = ({ children, className = "" }) => (
  <div className={`border border-[#1e3a5f] bg-[#0a1628] rounded p-2 mb-1.5 last:mb-0 ${className}`}>
    {children}
  </div>
);

const formatNum = (num) => num.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const Sidebar = () => {
  const { orderFlow, livePL, admValue, tradeState, handleBuy, bankNifty } = useDashboard();

  const isBuySignal = tradeState.signal === 'BUY ACTIVE';
  const signalColor = isBuySignal ? 'text-[#10b981]' : 'text-[#ef4444]';
  const plColor = livePL >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]';
  const plBorder = livePL >= 0 ? 'border-[#10b981]' : 'border-[#ef4444]';
  const plBg = livePL >= 0 ? 'bg-[#10b981]' : 'bg-[#ef4444]';

  return (
    <div className="w-[280px] flex flex-col h-full shrink-0">
      {/* Order Flow */}
      <PanelSection>
        <div className="flex justify-between items-center mb-1">
          <div className="text-[#f59e0b] text-[10px] font-bold tracking-widest">ORDER FLOW <span className="text-gray-500 font-normal">|</span> BUYERS / SELLERS</div>
        </div>
        <div className="text-[8px] text-gray-400 mb-1.5 uppercase tracking-wider">LIVE VOLUME STRENGTH</div>
        <div className="flex h-5 rounded overflow-hidden text-[10px] font-bold">
          <div className="bg-[#10b981] flex items-center justify-start px-2 text-black transition-all duration-500" style={{ width: `${orderFlow.buy}%` }}>BUY {orderFlow.buy.toFixed(1)}%</div>
          <div className="bg-[#ef4444] flex items-center justify-end px-2 text-white transition-all duration-500" style={{ width: `${orderFlow.sell}%` }}>SELL {orderFlow.sell.toFixed(1)}%</div>
        </div>
      </PanelSection>

      {/* EMA & SMA Technicals - Keeping static for visuals or slight dynamic? We'll leave bars static, just gauge static as it's complex SVG/CSS */}
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
               <div className="absolute bottom-0 left-1/2 w-0.5 h-7 bg-[#ef4444] transform translate-x-3 rotate-45 origin-bottom transition-transform duration-1000"></div>
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
        <div className="flex-1 border border-[#3b82f6] bg-[#0a1628] rounded flex flex-col items-center justify-center pt-1 pb-2 relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-0 left-0 w-full h-4 bg-[#3b82f6] bg-opacity-20 flex items-center px-2">
            <span className="text-[8px] text-white font-bold tracking-wider">ADM VALUE</span>
          </div>
          <span className="text-xl font-bold text-[#f59e0b] mt-5 transition-all duration-300">{formatNum(admValue)}</span>
        </div>
        <div className={`flex-1 border ${plBorder} bg-[#0a1628] rounded flex flex-col items-center justify-center pt-1 pb-2 relative overflow-hidden transition-colors duration-300`}>
          <div className={`absolute top-0 left-0 w-full h-4 ${plBg} flex items-center px-2 transition-colors duration-300`}>
            <span className="text-[8px] text-black font-bold tracking-wider">LIVE P/L</span>
          </div>
          <span className={`text-xl font-bold ${plColor} mt-5 transition-all duration-300`}>{formatNum(livePL)}</span>
        </div>
      </div>

      {/* Script details */}
      <PanelSection className={`flex-1 flex flex-col mb-0 border-opacity-30 ${isBuySignal ? 'border-[#10b981]' : 'border-[#ef4444]'}`}>
        <div className="flex justify-between items-center mb-2">
          <div className="flex flex-col border border-[#1e3a5f] rounded px-2 py-1 bg-[#051120] w-full mr-2 relative">
            <span className="text-[8px] text-gray-400 absolute -top-2 left-2 bg-[#0a1628] px-1">SCRIPT</span>
            <span className="text-sm font-bold text-[#f59e0b] mt-1 transition-all duration-300">BANKNIFTY-I</span>
          </div>
          <button 
            onClick={handleBuy}
            className="bg-[#10b981] hover:bg-[#0ea5e9] text-black font-bold px-4 py-1.5 rounded-sm text-xs cursor-pointer active:scale-95 transition-all"
          >
            BUY
          </button>
        </div>

        <div className="flex flex-col gap-0 flex-1">
          <div className="flex justify-between items-center border-b border-[#1e3a5f] py-1.5">
            <div className="flex items-center gap-2">
               <div className={`w-1 h-3 ${isBuySignal ? 'bg-[#10b981]' : 'bg-[#ef4444]'}`}></div>
               <span className="text-[10px] text-gray-300 font-bold tracking-wide">SIGNAL</span>
            </div>
            <span className={`text-[10px] font-bold ${signalColor} transition-colors duration-300`}>{tradeState.signal}</span>
          </div>
          <div className="flex justify-between items-center border-b border-[#1e3a5f] py-1.5">
            <div className="flex items-center gap-2">
               <div className="w-1 h-3 bg-white"></div>
               <span className="text-[10px] text-gray-300 font-bold tracking-wide">ENTRY</span>
            </div>
            <span className="text-[10px] text-white font-bold transition-all duration-300">{formatNum(tradeState.entry)}</span>
          </div>
          <div className="flex justify-between items-center border-b border-[#1e3a5f] py-1.5">
            <div className="flex items-center gap-2">
               <div className="w-1 h-3 bg-[#ef4444]"></div>
               <span className="text-[10px] text-gray-300 font-bold tracking-wide">STOPLOSS</span>
            </div>
            <span className="text-[10px] text-[#ef4444] font-bold transition-all duration-300">{formatNum(tradeState.stoploss)}</span>
          </div>
          
          {/* Targets */}
          {[
            { num: 1, val: tradeState.entry + 158.74, stat: tradeState.target1Status },
            { num: 2, val: tradeState.entry + 285.73, stat: tradeState.target2Status },
            { num: 3, val: tradeState.entry + 444.47, stat: tradeState.target3Status }
          ].map((target, idx) => {
            const isHit = target.stat === 'HIT';
            const statusColor = isHit ? 'bg-[#10b981] border-[#10b981] text-[#10b981]' : 'bg-[#f59e0b] border-[#f59e0b] text-black';
            const statText = isHit ? `HIT +${(target.val - tradeState.entry).toFixed(2)} PT` : target.stat;
            return (
              <div key={target.num} className={`flex justify-between items-center py-1.5 ${idx < 2 ? 'border-b border-[#1e3a5f]' : 'pt-1.5'}`}>
                <div className="flex items-center gap-2">
                   <div className="w-1 h-3 bg-[#1e3a5f]"></div>
                   <span className="text-[10px] text-gray-300 font-bold tracking-wide">TARGET {target.num}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-[#f59e0b] font-bold transition-all duration-300">{formatNum(target.val)}</span>
                  <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded border transition-all duration-300 ${isHit ? 'bg-opacity-20' : ''} ${statusColor}`}>
                    {statText}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </PanelSection>
    </div>
  );
};

export default Sidebar;
