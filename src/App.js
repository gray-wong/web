import React, { useEffect } from 'react'
// import ReactDOM from 'react-dom'
import './App.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dfg from './components/Dfg';
import Progre from './components/Progre';
import Dgallery from './components/Dgallery';
import Ohm from './components/Ohm';
import Accenture from './components/Accenture';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-231666280-1');
// ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  // ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div className="App">
      {/* <HashRouter hashType='slash' basename='/'> */}
      <HashRouter>
        <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/design-gallery" element={<Dgallery />} />
        <Route path="/progre" element={<Progre />} />
        <Route path="/develop-for-good" element={<Dfg />} />
        <Route path="/accenture-interactive" element={<Accenture />} />
      </Routes>
      </div>
      </HashRouter>
    </div>
  );
}

export default App;
