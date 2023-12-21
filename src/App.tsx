import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// Components
import Dashboard from './components/dashboard/Dashboard';
import Rooms from './components/Room/Rooms';
import Tenants from './components/Tenant/Tenants';
import Header from './components/header/Header';

// Assets
import './App.scss';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/tenants" element={<Tenants />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
    </Provider>
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
