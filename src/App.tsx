import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import Rooms from './components/Room/Rooms';

const App = (): JSX.Element => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
    </>
  );
};
