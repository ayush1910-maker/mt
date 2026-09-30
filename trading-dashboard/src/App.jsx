import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import TopIndicators from './components/TopIndicators/TopIndicators';
import ChartArea from './components/ChartArea/ChartArea';
import TrendingStocks from './components/TrendingStocks/TrendingStocks';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-[#000814] text-white flex flex-col font-sans p-2 overflow-hidden" style={{ height: '100vh' }}>
      <Header />
      
      <div className="flex flex-1 gap-2 mt-2 min-h-0">
        <Sidebar />
        
        <div className="flex flex-col flex-1 gap-2 min-w-0">
          <TopIndicators />
          <ChartArea />
          <TrendingStocks />
        </div>
      </div>
    </div>
  );
}

export default App;
