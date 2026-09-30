import React, { useState, useEffect } from 'react';
import { useDashboard } from '../../context/DashboardContext';

const ChartArea = () => {
  const { bankNifty, tradeState } = useDashboard();
  
  // Simulate the last candle moving
  const [lastCandle, setLastCandle] = useState({ y: 235, height: 20, isUp: true });

  useEffect(() => {
    // Map the current price (around 56345) to a Y value (around 220-260)
    // 56000 -> 300, 56800 -> 100 roughly
    const basePrice = 56345;
    const priceDiff = bankNifty.price - basePrice;
    const mappedY = 235 - (priceDiff * 0.1); 
    const clampedY = Math.max(100, Math.min(300, mappedY));
    
    setLastCandle(prev => {
      const height = Math.abs(clampedY - prev.y) + 5; // Fake some body
      const isUp = bankNifty.price >= bankNifty.open;
      return { y: clampedY, height, isUp };
    });
  }, [bankNifty.price, bankNifty.open]);

  return (
    <div className="flex-1 border border-[#1e3a5f] bg-[#051120] rounded relative overflow-hidden flex flex-col min-h-0">
      {/* Grid lines */}
      <div className="absolute inset-0 flex flex-col justify-between pt-2 pb-6 px-0 pointer-events-none opacity-20">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="border-b border-[#1e3a5f] w-full"></div>
        ))}
      </div>
      <div className="absolute inset-0 flex justify-between pt-0 pb-0 px-2 pointer-events-none opacity-20">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-r border-[#1e3a5f] h-full"></div>
        ))}
      </div>

      {/* Y Axis Prices */}
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-[#051120] border-l border-[#1e3a5f] flex flex-col justify-between py-2 text-[8px] text-gray-400 font-bold items-end pr-1 opacity-80 z-10">
         <span>56,800</span>
         <span>56,600</span>
         <span>56,400</span>
         <span>56,200</span>
         <span>56,000</span>
         <span>55,800</span>
         <span>55,600</span>
      </div>
      
      {/* Time axis on bottom */}
      <div className="absolute bottom-0 left-0 right-12 h-4 border-t border-[#1e3a5f] flex justify-between items-center px-4 text-[7px] text-[#3b82f6] font-bold opacity-80 z-10 bg-[#051120]">
        <span>10:00</span>
        <span>10:30</span>
        <span>11:00</span>
        <span>11:30</span>
        <span>12:00</span>
        <span>12:30</span>
        <span>13:00</span>
        <span>13:30</span>
        <span>14:00</span>
      </div>

      {/* Annotations */}
      <div className="absolute top-[18%] left-[8%] bg-[#ef4444] text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm z-20 flex items-center gap-1">
        SELL @ {tradeState.stoploss.toLocaleString('en-IN', {minimumFractionDigits:2})}
        <div className="absolute -left-1 top-1.5 w-1.5 h-1.5 bg-[#ef4444] transform rotate-45"></div>
      </div>

      <div className="absolute bottom-[20%] right-[32%] bg-[#10b981] text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm z-20 flex items-center gap-1">
        BUY @ {tradeState.entry.toLocaleString('en-IN', {minimumFractionDigits:2})}
        <div className="absolute -top-1 left-2 w-1.5 h-1.5 bg-[#10b981] transform rotate-45"></div>
      </div>
      
      <div className="absolute bottom-[35%] right-[55%] bg-[#f59e0b] text-black text-[7px] font-bold px-1 py-0.5 rounded z-20 border border-[#f59e0b]">
        TSI EXIT @ {(tradeState.entry + 187.2).toLocaleString('en-IN', {minimumFractionDigits:2})}
      </div>

      {/* Target hits */}
      <div className="absolute top-[48%] left-[12%] text-[#10b981] text-[7px] font-bold bg-[#051120] px-1 rounded z-20 transition-opacity">{tradeState.target1Status === 'HIT' ? 'T1 HIT' : ''}</div>
      <div className="absolute top-[60%] left-[22%] text-[#10b981] text-[7px] font-bold bg-[#051120] px-1 rounded z-20 transition-opacity">{tradeState.target2Status === 'HIT' ? 'T2 HIT' : ''}</div>
      <div className="absolute top-[68%] left-[28%] text-[#f59e0b] text-[7px] font-bold bg-[#051120] px-1 rounded z-20 transition-opacity">{tradeState.target3Status === 'HIT' ? 'T3 HIT' : 'T3 PENDING'}</div>

      <div className="absolute top-[45%] right-[22%] text-[#10b981] text-[7px] font-bold bg-[#051120] px-1 rounded z-20 transition-opacity">{tradeState.target1Status === 'HIT' ? 'T1 HIT' : ''}</div>
      <div className="absolute top-[32%] right-[15%] text-[#10b981] text-[7px] font-bold bg-[#051120] px-1 rounded z-20 transition-opacity">{tradeState.target2Status === 'HIT' ? 'T2 HIT' : ''}</div>

      {/* Resistance Line & Tag */}
      <div className="absolute top-[40%] left-0 right-12 border-t border-[#ef4444] border-dashed opacity-70 z-10"></div>
      <div className="absolute top-[40%] right-12 bg-[#ef4444] text-white text-[7px] font-bold px-1 py-0.5 -translate-y-1/2 z-20 flex gap-2 border border-[#ef4444]">
        <span>RESISTANCE 56,364.93</span>
        <div className="bg-[#10b981] text-black px-1 ml-2 transition-all duration-300">{bankNifty.price.toLocaleString('en-IN')}</div>
        <div className="bg-[#f59e0b] text-black px-1 transition-all duration-300">{(bankNifty.price - 10).toLocaleString('en-IN')}</div>
        <div className="bg-[#f59e0b] text-black px-1 transition-all duration-300">{(bankNifty.price - 25).toLocaleString('en-IN')}</div>
      </div>

      {/* SVG Canvas for Chart Elements */}
      <svg className="absolute inset-0 w-[calc(100%-3rem)] h-[calc(100%-1rem)]" preserveAspectRatio="none" viewBox="0 0 1000 400">
         {/* Moving Averages */}
         <path d="M 0 120 Q 50 100, 100 130 T 200 180 T 300 230 T 400 250 T 500 270 T 600 290 T 700 320 T 800 280 T 900 260 T 1000 240" fill="none" stroke="#3b82f6" strokeWidth="2" className="opacity-90" />
         <path d="M 0 150 Q 50 140, 100 160 T 200 190 T 300 220 T 400 250 T 500 275 T 600 290 T 700 340 T 800 310 T 900 290 T 1000 260" fill="none" stroke="#f59e0b" strokeWidth="2" className="opacity-90" />
         
         {/* Candlesticks (Highly dense, matching screenshot) */}
         <g strokeWidth="1.5">
           {/* Section 1: Peak & drop */}
           <line x1="20" y1="120" x2="20" y2="150" stroke="#10b981" />
           <rect x="18" y="130" width="4" height="15" fill="#10b981" />
           <line x1="40" y1="110" x2="40" y2="140" stroke="#10b981" />
           <rect x="38" y="115" width="4" height="20" fill="#10b981" />
           <circle cx="40" cy="115" r="3" fill="white" />
           <line x1="60" y1="110" x2="60" y2="160" stroke="#ef4444" />
           <rect x="58" y="115" width="4" height="40" fill="#ef4444" />
           <circle cx="60" cy="115" r="3" fill="white" />
           <circle cx="60" cy="165" r="3" fill="#ef4444" />
           <line x1="80" y1="140" x2="80" y2="190" stroke="#ef4444" />
           <rect x="78" y="150" width="4" height="35" fill="#ef4444" />
           <line x1="100" y1="170" x2="100" y2="210" stroke="#ef4444" />
           <rect x="98" y="180" width="4" height="25" fill="#ef4444" />
           <line x1="120" y1="200" x2="120" y2="230" stroke="#ef4444" />
           <rect x="118" y="210" width="4" height="15" fill="#ef4444" />

           {/* Section 2: Consolidation */}
           <line x1="160" y1="220" x2="160" y2="240" stroke="#10b981" />
           <rect x="158" y="225" width="4" height="10" fill="#10b981" />
           <line x1="180" y1="225" x2="180" y2="250" stroke="#ef4444" />
           <rect x="178" y="230" width="4" height="15" fill="#ef4444" />
           <line x1="200" y1="240" x2="200" y2="260" stroke="#ef4444" />
           <rect x="198" y="245" width="4" height="10" fill="#ef4444" />
           <line x1="220" y1="235" x2="220" y2="255" stroke="#10b981" />
           <rect x="218" y="240" width="4" height="10" fill="#10b981" />
           <line x1="240" y1="240" x2="240" y2="265" stroke="#ef4444" />
           <rect x="238" y="245" width="4" height="15" fill="#ef4444" />
           <line x1="260" y1="235" x2="260" y2="260" stroke="#10b981" />
           <rect x="258" y="240" width="4" height="15" fill="#10b981" />
           
           {/* Section 3: Consolidation cont. */}
           <line x1="320" y1="240" x2="320" y2="265" stroke="#ef4444" />
           <rect x="318" y="245" width="4" height="15" fill="#ef4444" />
           <line x1="340" y1="245" x2="340" y2="270" stroke="#ef4444" />
           <rect x="338" y="250" width="4" height="15" fill="#ef4444" />
           <line x1="360" y1="240" x2="360" y2="260" stroke="#10b981" />
           <rect x="358" y="245" width="4" height="10" fill="#10b981" />
           <line x1="380" y1="250" x2="380" y2="280" stroke="#ef4444" />
           <rect x="378" y="255" width="4" height="20" fill="#ef4444" />
           
           {/* Section 4: Deep drop */}
           <line x1="420" y1="260" x2="420" y2="300" stroke="#ef4444" />
           <rect x="418" y="265" width="4" height="30" fill="#ef4444" />
           <line x1="440" y1="280" x2="440" y2="330" stroke="#ef4444" />
           <rect x="438" y="290" width="4" height="35" fill="#ef4444" />
           <line x1="460" y1="310" x2="460" y2="360" stroke="#ef4444" />
           <rect x="458" y="320" width="4" height="35" fill="#ef4444" />
           <line x1="480" y1="340" x2="480" y2="380" stroke="#ef4444" />
           <rect x="478" y="350" width="4" height="25" fill="#ef4444" />

           {/* Section 5: Reversal Buy */}
           <line x1="520" y1="320" x2="520" y2="370" stroke="#10b981" />
           <rect x="518" y="330" width="4" height="40" fill="#10b981" />
           <line x1="540" y1="290" x2="540" y2="340" stroke="#10b981" />
           <rect x="538" y="300" width="4" height="35" fill="#10b981" />
           <circle cx="540" cy="345" r="3" fill="white" />
           <circle cx="540" cy="285" r="3" fill="#10b981" />
           <line x1="560" y1="300" x2="560" y2="320" stroke="#ef4444" />
           <rect x="558" y="305" width="4" height="10" fill="#ef4444" />
           <line x1="580" y1="290" x2="580" y2="310" stroke="#10b981" />
           <rect x="578" y="295" width="4" height="10" fill="#10b981" />
           
           {/* Section 6: Rally to T1, T2 */}
           <line x1="620" y1="270" x2="620" y2="300" stroke="#10b981" />
           <rect x="618" y="275" width="4" height="20" fill="#10b981" />
           <line x1="640" y1="250" x2="640" y2="280" stroke="#10b981" />
           <rect x="638" y="255" width="4" height="20" fill="#10b981" />
           <line x1="660" y1="220" x2="660" y2="260" stroke="#10b981" />
           <rect x="658" y="225" width="4" height="30" fill="#10b981" />
           <line x1="680" y1="230" x2="680" y2="250" stroke="#ef4444" />
           <rect x="678" y="235" width="4" height="10" fill="#ef4444" />
           <line x1="700" y1="240" x2="700" y2="260" stroke="#ef4444" />
           <rect x="698" y="245" width="4" height="10" fill="#ef4444" />
           <line x1="720" y1="220" x2="720" y2="250" stroke="#10b981" />
           <rect x="718" y="225" width="4" height="20" fill="#10b981" />
           
           {/* Dynamic Final Candle */}
           <line x1="740" y1={lastCandle.y - 10} x2="740" y2={lastCandle.y + lastCandle.height + 10} stroke={lastCandle.isUp ? "#10b981" : "#ef4444"} className="transition-all duration-1000" />
           <rect x="738" y={lastCandle.y} width="4" height={lastCandle.height} fill={lastCandle.isUp ? "#10b981" : "#ef4444"} className="transition-all duration-1000" />
         </g>
      </svg>
    </div>
  );
};

export default ChartArea;
