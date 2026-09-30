import React from 'react';

const ChartArea = () => {
  return (
    <div className="flex-1 border border-[#1e3a5f] bg-[#051120] rounded relative overflow-hidden flex flex-col">
      {/* Chart content (SVG Mockup) */}
      <div className="flex-1 relative w-full h-full p-4">
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-20">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="border-b border-[#1e3a5f] w-full"></div>
          ))}
        </div>
        <div className="absolute inset-0 flex justify-between p-4 pointer-events-none opacity-20">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-[#1e3a5f] h-full"></div>
          ))}
        </div>

        {/* Labels & Markers overlay */}
        <div className="absolute top-10 left-16 bg-[#ef4444] text-white text-[10px] font-bold px-2 py-1 rounded">
          SELL @ 56,706.00
          {/* Arrow pointing down */}
          <div className="absolute -bottom-1 left-4 w-2 h-2 bg-[#ef4444] transform rotate-45"></div>
        </div>

        <div className="absolute bottom-20 right-48 bg-[#10b981] text-white text-[10px] font-bold px-2 py-1 rounded">
          BUY @ 56,197.80
          {/* Arrow pointing up */}
          <div className="absolute -top-1 left-4 w-2 h-2 bg-[#10b981] transform rotate-45"></div>
        </div>
        
        <div className="absolute bottom-32 right-1/2 bg-[#f59e0b] text-black text-[10px] font-bold px-2 py-1 rounded">
          TSI EXIT @ 56,385.00
        </div>

        {/* Small target hits */}
        <div className="absolute top-1/2 left-32 text-[#10b981] text-[9px] font-bold">T1 HIT</div>
        <div className="absolute top-[60%] left-64 text-[#10b981] text-[9px] font-bold">T2 HIT</div>
        <div className="absolute top-[65%] left-72 text-[#f59e0b] text-[9px] font-bold bg-[#1e293b] px-1 rounded">T3 HIT</div>

        <div className="absolute top-1/2 right-32 text-[#10b981] text-[9px] font-bold">T1 HIT</div>
        <div className="absolute top-1/3 right-16 text-[#10b981] text-[9px] font-bold">T2 HIT</div>

        {/* Resistance Line */}
        <div className="absolute top-[60%] left-0 w-full border-t border-[#ef4444] border-dashed opacity-50"></div>
        <div className="absolute top-[60%] right-12 bg-[#ef4444] text-white text-[9px] font-bold px-2 py-0.5 rounded -translate-y-1/2">
          RESISTANCE 56,364.93
        </div>

        {/* Y Axis Prices */}
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-[#0a1628] border-l border-[#1e3a5f] flex flex-col justify-between py-4 text-[9px] text-gray-400 font-bold items-end pr-1 opacity-70">
           <span>56,800</span>
           <span>56,600</span>
           <span>56,400</span>
           <span>56,200</span>
           <span>56,000</span>
           <span>55,800</span>
        </div>

        {/* SVG for Lines and Candlesticks */}
        <svg className="absolute inset-0 w-[calc(100%-3rem)] h-full" preserveAspectRatio="none" viewBox="0 0 1000 400">
           {/* Moving Averages */}
           <path d="M 0 150 Q 100 120, 200 200 T 400 250 T 600 260 T 800 320 T 1000 260" fill="none" stroke="#3b82f6" strokeWidth="2" />
           <path d="M 0 180 Q 100 170, 200 220 T 400 240 T 600 250 T 800 300 T 1000 220" fill="none" stroke="#f59e0b" strokeWidth="2" />
           
           {/* Candlesticks (Mock) */}
           {/* Group 1: Sell off */}
           <rect x="50" y="130" width="8" height="20" fill="#10b981" />
           <line x1="54" y1="120" x2="54" y2="160" stroke="#10b981" strokeWidth="2" />

           <rect x="70" y="125" width="8" height="25" fill="#10b981" />
           <line x1="74" y1="110" x2="74" y2="160" stroke="#10b981" strokeWidth="2" />

           <rect x="90" y="140" width="8" height="40" fill="#ef4444" />
           <line x1="94" y1="130" x2="94" y2="190" stroke="#ef4444" strokeWidth="2" />
           <circle cx="94" cy="120" r="4" fill="white" /> {/* Sell Signal Dot */}

           <rect x="110" y="180" width="8" height="30" fill="#ef4444" />
           <line x1="114" y1="170" x2="114" y2="220" stroke="#ef4444" strokeWidth="2" />

           <rect x="130" y="200" width="8" height="25" fill="#ef4444" />
           <line x1="134" y1="190" x2="134" y2="240" stroke="#ef4444" strokeWidth="2" />

           <rect x="150" y="225" width="8" height="15" fill="#ef4444" />
           <line x1="154" y1="210" x2="154" y2="250" stroke="#ef4444" strokeWidth="2" />

           {/* Consolidation */}
           <rect x="250" y="240" width="8" height="20" fill="#10b981" />
           <line x1="254" y1="230" x2="254" y2="270" stroke="#10b981" strokeWidth="2" />
           
           <rect x="270" y="235" width="8" height="30" fill="#ef4444" />
           <line x1="274" y1="220" x2="274" y2="275" stroke="#ef4444" strokeWidth="2" />

           <rect x="290" y="250" width="8" height="15" fill="#ef4444" />
           <line x1="294" y1="240" x2="294" y2="280" stroke="#ef4444" strokeWidth="2" />

           {/* Downward trend */}
           <rect x="500" y="260" width="8" height="25" fill="#ef4444" />
           <line x1="504" y1="250" x2="504" y2="290" stroke="#ef4444" strokeWidth="2" />
           
           <rect x="520" y="280" width="8" height="30" fill="#ef4444" />
           <line x1="524" y1="270" x2="524" y2="330" stroke="#ef4444" strokeWidth="2" />
           
           <rect x="540" y="300" width="8" height="25" fill="#ef4444" />
           <line x1="544" y1="290" x2="544" y2="340" stroke="#ef4444" strokeWidth="2" />

           <rect x="560" y="325" width="8" height="20" fill="#ef4444" />
           <line x1="564" y1="310" x2="564" y2="360" stroke="#ef4444" strokeWidth="2" />

           <rect x="580" y="340" width="8" height="15" fill="#ef4444" />
           <line x1="584" y1="330" x2="584" y2="370" stroke="#ef4444" strokeWidth="2" />

           {/* Buy reversal */}
           <rect x="620" y="320" width="8" height="40" fill="#10b981" />
           <line x1="624" y1="310" x2="624" y2="370" stroke="#10b981" strokeWidth="2" />
           
           <rect x="640" y="280" width="8" height="45" fill="#10b981" />
           <line x1="644" y1="270" x2="644" y2="330" stroke="#10b981" strokeWidth="2" />
           <circle cx="644" cy="335" r="4" fill="white" /> {/* Buy Signal Dot */}
           
           <rect x="660" y="290" width="8" height="20" fill="#10b981" />
           <line x1="664" y1="280" x2="664" y2="320" stroke="#10b981" strokeWidth="2" />

           <rect x="680" y="260" width="8" height="35" fill="#10b981" />
           <line x1="684" y1="250" x2="684" y2="300" stroke="#10b981" strokeWidth="2" />

           {/* Trend Up */}
           <rect x="750" y="240" width="8" height="30" fill="#10b981" />
           <line x1="754" y1="230" x2="754" y2="280" stroke="#10b981" strokeWidth="2" />
           
           <rect x="770" y="210" width="8" height="35" fill="#10b981" />
           <line x1="774" y1="200" x2="774" y2="260" stroke="#10b981" strokeWidth="2" />

           <rect x="790" y="225" width="8" height="20" fill="#10b981" />
           <line x1="794" y1="210" x2="794" y2="250" stroke="#10b981" strokeWidth="2" />

           <rect x="810" y="235" width="8" height="15" fill="#10b981" />
           <line x1="814" y1="220" x2="814" y2="260" stroke="#10b981" strokeWidth="2" />

        </svg>
      </div>
    </div>
  );
};

export default ChartArea;
