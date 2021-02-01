import React, {useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import logo from './logo.svg';
import './App.css';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

const alanKey = '4e4ed9007e922d13c3d02c19a3ca08282e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({command}) => {
        if (command === 'testCommand') {
          alert('This code was executed');
        }
      }
    })
  }, [])
}

export default App;
