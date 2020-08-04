import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    {/*     <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <img src="https://c4.wallpaperflare.com/wallpaper/528/813/225/books-wizard-the-kingkiller-chronicles-kote-wallpaper-thumb.jpg">
        </img>
          <Button  to="/">
          teste
        </Button>
      </header>
  
      </div>
  );
}

export default App;
