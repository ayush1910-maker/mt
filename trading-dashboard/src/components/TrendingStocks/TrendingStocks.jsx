import React from 'react';

const StockItem = ({ name, change, ltp, type = "UP" }) => (
  <div className="flex-1 flex flex-col gap-1 pr-4 border-r border-[#1e3a5f] last:border-0 last:pr-0 pl-4 first:pl-0">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className={`text-[10px] font-bold px-1.5 rounded ${type === 'UP' ? 'bg-[#10b981] bg-opacity-20 text-[#10b981] border border-[#10b981]' : 'bg-[#ef4444] bg-opacity-20 text-[#ef4444] border border-[#ef4444]'}`}>
          {type}
        </span>
        <span className="text-white text-xs font-bold">{name}</span>
      </div>
      <span className={`text-xs font-bold ${type === 'UP' ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
        {change}
      </span>
    </div>
    <div className="text-[10px] text-gray-400 font-bold">
      LTP <span className="text-white ml-1">{ltp}</span>
    </div>
  </div>
);

const TrendingStocks = () => {
  return (
    <div className="border border-[#1e3a5f] bg-[#0a1628] rounded-md p-3">
      <div className="text-[10px] text-gray-400 font-bold mb-3 border-b border-[#1e3a5f] pb-1">
        MOST TRENDING STOCKS
      </div>
      <div className="flex justify-between">
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
