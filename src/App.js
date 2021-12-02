import './App.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';



function App() {
  const { t, i18n } = useTranslation();
  const [culture, setCulture] = useState("uk");
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ padding: '90px' }}>{t("title-" + culture)}</h1>
        <button class="cybr-btn" onClick={() => { i18n.changeLanguage("fr"); setCulture("fr") }}>
          Français<span aria-hidden>_</span>
          <span aria-hidden class="cybr-btn__glitch">Cyber_</span>
          <span aria-hidden class="cybr-btn__tag">i18n</span>
        </button>
        <button class="cybr-btn" onClick={() => { i18n.changeLanguage("fr"); setCulture("ca") }}>
          Français CA<span aria-hidden>_</span>
          <span aria-hidden class="cybr-btn__glitch">Cyber_</span>
          <span aria-hidden class="cybr-btn__tag">i18n</span>
        </button>
        <button class="cybr-btn" onClick={() => { i18n.changeLanguage("en"); setCulture("uk") }}>
          Anglais UK<span aria-hidden>_</span>
          <span aria-hidden class="cybr-btn__glitch">Cyber_</span>
          <span aria-hidden class="cybr-btn__tag">i18n</span>
        </button>
        <button class="cybr-btn" onClick={() => { i18n.changeLanguage("en"); setCulture("usa") }}>
          Anglais USA<span aria-hidden>_</span>
          <span aria-hidden class="cybr-btn__glitch">Cyber_</span>
          <span aria-hidden class="cybr-btn__tag">i18n</span>
        </button>
        <button class="cybr-btn" onClick={() => { i18n.changeLanguage("en"); setCulture("aus") }}>
          Anglais AUS<span aria-hidden>_</span>
          <span aria-hidden class="cybr-btn__glitch">Cyber_</span>
          <span aria-hidden class="cybr-btn__tag">i18n</span>
        </button>
      </header>
    </div>
  );
}

export default App;