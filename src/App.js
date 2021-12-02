import './App.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';



function App() {
  const { t, i18n } = useTranslation();
  const [culture, setCulture] = useState("uk");
  return (
    <div className="App">
      <header className="App-header">
      <h1>{t("title-"+culture)}</h1>
      <button onClick={() => {i18n.changeLanguage("fr");setCulture("fr")}}>fr</button>
      <button onClick={() => {i18n.changeLanguage("fr");setCulture("ca")}}>fr-ca</button>
      <button onClick={() => {i18n.changeLanguage("en");setCulture("uk")}}>en-uk</button>
      <button onClick={() => {i18n.changeLanguage("en");setCulture("usa")}}>en-usa</button>
      <button onClick={() => {i18n.changeLanguage("en");setCulture("aus")}}>en-aus</button>
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
