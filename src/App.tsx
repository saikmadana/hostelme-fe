import React from 'react';

import './App.css';
import Header from './components/header/Header';

const App = (): JSX.Element => {
  return (
    <div>
      <Header />
      {Array(60)
        .fill(1)
        .map((v, index) => {
          return <div key={index} className="maincontent">This is App component</div>;
        })}
    </div>
  );
};

export default App;
