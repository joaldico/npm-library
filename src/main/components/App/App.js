import React from 'react';
import logo from './logo.png';
import './App.css';
import { ComponentTest } from 'plugbox-ui';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <ComponentTest 
            name={"plugbox-ui"}
        />
        <span
          className="App-link"
        >
          BUCARES TEAM
        </span>
      </header>
    </div>
  );
}

export default App;
