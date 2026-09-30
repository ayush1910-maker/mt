import React from 'react';
import { useDashboard } from '../../context/DashboardContext';

const formatNum = (num) => num.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const StockItem = ({ name, change, ltp, type }) => (
  <div className="flex-1 flex flex-col justify-center px-3 border-r border-[#1e3a5f] last:border-0 relative h-full transition-colors duration-300">
    <div className="flex justify-between items-center mb-0.5">
      <div className="flex items-center gap-1.5">
        <span className={`text-[8px] font-bold px-1 py-0.5 rounded-sm transition-colors duration-300 ${type === 'UP' ? 'bg-[#10b981] bg-opacity-20 text-[#10b981] border border-[#10b981]' : 'bg-[#ef4444] bg-opacity-20 text-[#ef4444] border border-[#ef4444]'}`}>
          {type}
        </span>
        <span className="text-white text-[10px] font-bold">{name}</span>
      </div>
      <span className={`text-[10px] font-bold transition-colors duration-300 ${type === 'UP' ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
        {type === 'UP' ? '+' : ''}{change.toFixed(2)}%
      </span>
    </div>
    <div className="text-[8px] text-gray-400 font-bold">
      LTP <span className="text-white ml-0.5 transition-all duration-300">{formatNum(ltp)}</span>
    </div>
  </div>
);

const TrendingStocks = () => {
  const { trending } = useDashboard();
  return (
    <div className="border border-[#1e3a5f] bg-[#0a1628] rounded flex flex-col shrink-0">
      <div className="text-[9px] text-[#f59e0b] font-bold px-2 py-1 border-b border-[#1e3a5f]">
        MOST TRENDING STOCKS
      </div>
      <div className="flex h-[38px] items-center">
        {trending.map(stock => (
          <StockItem key={stock.id} {...stock} />
        ))}
      </div>
    </div>
  );
};

export default TrendingStocks;
