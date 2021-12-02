import './App.css';
import React from 'react';
import { useTranslation } from 'react-i18next';



function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
      <h1>{t("title")}</h1>
        <button onClick={() => {i18n.changeLanguage("fr");}}>fr</button>
        <button onClick={() => {i18n.changeLanguage("en");}}>en</button>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
}

export default App;
