import React from 'react'
// import ReactDOM from 'react-dom'
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dfg from './components/Dfg';
import Progre from './components/Progre';
import Dgallery from './components/Dgallery';
import Ohm from './components/Ohm';
import Accenture from './components/Accenture';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="design-gallery" element={<Dgallery />} />
        <Route path="progre" element={<Progre />} />
        <Route path="develop-for-good" element={<Dfg />} />
        <Route path="old-hastings-manor" element={<Ohm />} />
        <Route path="accenture-interactive" element={<Accenture />} />
      </Routes>
    </div>
  );
}

export default App;
