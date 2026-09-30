import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import TopIndicators from './components/TopIndicators/TopIndicators';
import ChartArea from './components/ChartArea/ChartArea';
import TrendingStocks from './components/TrendingStocks/TrendingStocks';
import './App.css';

function App() {
  return (
    <div className="w-full h-screen bg-[#050c18] text-white flex flex-col font-sans p-1.5 overflow-hidden box-border">
      <Header />
      
      <div className="flex flex-1 gap-1.5 mt-1.5 min-h-0">
        <Sidebar />
        
        <div className="flex flex-col flex-1 gap-1.5 min-w-0">
          <TopIndicators />
          <ChartArea />
          <TrendingStocks />
        </div>
      </div>
    </div>
  );
}

export default App;
