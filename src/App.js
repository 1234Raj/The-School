import React from 'react';
import Home from './component/Home';
import OurTeams from './component/OurTeams';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {  HashRouter, Route, Routes  } from 'react-router-dom';
import './App.css';
import AboutUs from './component/AboutUs';
import OurPortfolio from './component/OurPortfolio';
import OurService from './component/OurService';
import Contact from './component/Contact';

function App() {
  return (
    
      <HashRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<AboutUs/>}/>
        <Route path="/Portfolio" element={<OurPortfolio/>}/>
         <Route path="/OurTeam" element={<OurTeams/>}/>
         <Route path="/Service" element={<OurService/>}/>
         <Route path="/Contact" element={<Contact/>}/>
         </Routes>
      </HashRouter>
     
  );
}

export default App;
