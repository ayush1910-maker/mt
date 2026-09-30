import React from 'react';

const StockItem = ({ name, change, ltp, type = "UP" }) => (
  <div className="flex-1 flex flex-col justify-center px-3 border-r border-[#1e3a5f] last:border-0 relative h-full">
    <div className="flex justify-between items-center mb-0.5">
      <div className="flex items-center gap-1.5">
        <span className={`text-[8px] font-bold px-1 py-0.5 rounded-sm ${type === 'UP' ? 'bg-[#10b981] bg-opacity-20 text-[#10b981] border border-[#10b981]' : 'bg-[#ef4444] bg-opacity-20 text-[#ef4444] border border-[#ef4444]'}`}>
          {type}
        </span>
        <span className="text-white text-[10px] font-bold">{name}</span>
      </div>
      <span className={`text-[10px] font-bold ${type === 'UP' ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
        {change}
      </span>
    </div>
    <div className="text-[8px] text-gray-400 font-bold">
      LTP <span className="text-white ml-0.5">{ltp}</span>
    </div>
  </div>
);

const TrendingStocks = () => {
  return (
    <div className="border border-[#1e3a5f] bg-[#0a1628] rounded flex flex-col shrink-0">
      <div className="text-[9px] text-[#f59e0b] font-bold px-2 py-1 border-b border-[#1e3a5f]">
        MOST TRENDING STOCKS
      </div>
      <div className="flex h-[38px] items-center">
        <StockItem name="TATACONSUM" change="+2.18%" ltp="1,087.60" />
        <StockItem name="ITC" change="+1.94%" ltp="263.00" />
        <StockItem name="AXISBANK" change="+1.93%" ltp="1,246.50" />
        <StockItem name="M_M" change="+1.88%" ltp="3,086.40" />
        <StockItem name="HDFCLIFE" change="+1.82%" ltp="525.50" />
      </div>
    </div>
  );
};

export default TrendingStocks;
