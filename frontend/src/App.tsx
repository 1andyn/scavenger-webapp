import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="columns-3">
          <img src={logo} className="App-logo w-full" alt="logo" />
          <img src={logo} className="App-logo w-full" alt="logo" />
          <img src={logo} className="App-logo w-full" alt="logo" />
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
