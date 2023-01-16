import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import OrderDashboard from './components/OrderDashboard/OrderDashboard';
import JoinModal from './components/Modal/JoinModal';

const App = () => {
  const [joinModal, setJoinModal] = useState(false);
  const toggleJoinModal = () => {
    setJoinModal(!joinModal);
  }
  return (
    <>
      <Header />
      <Sidebar toggleJoinModal={toggleJoinModal}/>
      <Dashboard />
      <OrderDashboard />
      {
        joinModal && <JoinModal toggleJoinModal={toggleJoinModal} />
      }
    </>
  );
}

export default App
