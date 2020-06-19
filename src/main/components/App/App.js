import React from 'react';
import logo from './logo.png';
import './App.css';
import { Button } from 'plugbox-ui';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
            Este es mi componente de test: {"Button"}
          </h1>
        <span
          className="App-link"
        >
          BUCARES TEAM
        </span>
        <div className="Container-buttons">
          <div className="Container-buttons">
            <Button 
                text={"Click here to go to: plugbox-ui LIBRARY"}
                size={"small"}
                disabled={false}
                onClick={() => {console.log("go to: plugbox-ui LIBRARY")}}
            />
          </div>
          <div className="Container-buttons">
            <Button 
                text={"Click here to go to: plugbox-ui LIBRARY"}
                size={"large"}
                disabled={true}
                onClick={() => {console.log("go to: plugbox-ui LIBRARY")}}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
