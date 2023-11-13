import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import Rooms from './components/Room/Rooms';

const App = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
