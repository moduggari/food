import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import OrderDashboard from './components/OrderDashboard/OrderDashboard';

const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Dashboard />
      <OrderDashboard />
    </>
  );
}

export default App
