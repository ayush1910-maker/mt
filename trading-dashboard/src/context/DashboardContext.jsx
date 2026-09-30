import React, { createContext, useContext, useState, useEffect } from 'react';

const DashboardContext = createContext();

export const useDashboard = () => useContext(DashboardContext);

const fluctuate = (value, maxChange, isPercent = false) => {
  const change = (Math.random() - 0.5) * maxChange * 2;
  return isPercent 
    ? +(value + change).toFixed(2)
    : +(value + change).toFixed(2);
};

export const DashboardProvider = ({ children }) => {
  const [bankNifty, setBankNifty] = useState({
    price: 56345.00,
    open: 56315.00,
    high: 56399.80,
    low: 56310.20,
    change: 330.00,
    changePercent: 0.6,
  });

  const [nifty50, setNifty50] = useState({ price: 23224.05, changePercent: 0.46 });
  const [bankNiftyIndex, setBankNiftyIndex] = useState({ price: 56129.05, changePercent: 0.60 });

  const [orderFlow, setOrderFlow] = useState({ buy: 54.0, sell: 46.0 });
  const [livePL, setLivePL] = useState(147.20);
  const [admValue, setAdmValue] = useState(634.96);

  const [trending, setTrending] = useState([
    { id: 1, name: 'TATACONSUM', change: 2.18, ltp: 1087.60, type: 'UP' },
    { id: 2, name: 'ITC', change: 1.94, ltp: 263.00, type: 'UP' },
    { id: 3, name: 'AXISBANK', change: 1.93, ltp: 1246.50, type: 'UP' },
    { id: 4, name: 'M_M', change: 1.88, ltp: 3086.40, type: 'UP' },
    { id: 5, name: 'HDFCLIFE', change: 1.82, ltp: 525.50, type: 'UP' }
  ]);

  const [tradeState, setTradeState] = useState({
    signal: 'BUY ACTIVE',
    entry: 56197.80,
    stoploss: 56039.06,
    target1Status: 'HIT',
    target2Status: 'HIT',
    target3Status: 'PENDING'
  });

  const handleBuy = () => {
    setTradeState(prev => ({
      ...prev,
      signal: 'BUY ACTIVE',
      entry: bankNifty.price,
      stoploss: bankNifty.price - 150,
      target1Status: 'PENDING',
      target2Status: 'PENDING',
      target3Status: 'PENDING'
    }));
    setLivePL(0); 
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBankNifty(prev => {
        const newPrice = fluctuate(prev.price, 15);
        const newHigh = Math.max(prev.high, newPrice);
        const newLow = Math.min(prev.low, newPrice);
        const newChange = newPrice - prev.open;
        const newChangePercent = (newChange / prev.open) * 100;
        return {
          ...prev,
          price: newPrice,
          high: newHigh,
          low: newLow,
          change: newChange,
          changePercent: newChangePercent
        };
      });

      setNifty50(prev => ({ ...prev, price: fluctuate(prev.price, 8), changePercent: fluctuate(prev.changePercent, 0.05, true) }));
      setBankNiftyIndex(prev => ({ ...prev, price: fluctuate(prev.price, 12), changePercent: fluctuate(prev.changePercent, 0.05, true) }));

      setOrderFlow(prev => {
        const newBuy = Math.min(Math.max(fluctuate(prev.buy, 2), 10), 90);
        return { buy: newBuy, sell: +(100 - newBuy).toFixed(2) };
      });

      setLivePL(prev => fluctuate(prev, 25));
      setAdmValue(prev => fluctuate(prev, 3));

      setTrending(prev => prev.map(stock => {
        const newLtp = fluctuate(stock.ltp, stock.ltp * 0.002);
        const newChange = fluctuate(stock.change, 0.08, true);
        const type = newChange >= 0 ? 'UP' : 'DOWN';
        return { ...stock, ltp: newLtp, change: newChange, type };
      }));
    }, 1500); 

    return () => clearInterval(interval);
  }, []);

  // Update targets based on current price relative to entry
  useEffect(() => {
    if (tradeState.signal === 'BUY ACTIVE') {
      const t1 = tradeState.entry + 158.74;
      const t2 = tradeState.entry + 285.73;
      const t3 = tradeState.entry + 444.47;

      setTradeState(prev => ({
        ...prev,
        target1Status: bankNifty.price >= t1 ? 'HIT' : 'PENDING',
        target2Status: bankNifty.price >= t2 ? 'HIT' : 'PENDING',
        target3Status: bankNifty.price >= t3 ? 'HIT' : 'PENDING',
      }));
    }
  }, [bankNifty.price, tradeState.entry, tradeState.signal]);

  return (
    <DashboardContext.Provider value={{
      bankNifty, nifty50, bankNiftyIndex,
      orderFlow, livePL, admValue, trending,
      tradeState, handleBuy
    }}>
      {children}
    </DashboardContext.Provider>
  );
};
