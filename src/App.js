import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'

import NavBar from './components/NavBar'
import Home from './pages/Home'

import About from './pages/About'

import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './components/Footer'
// import Tracking from './pages/Tracking'

function App() {
  const [logoColor, setLogoColor] = useState(() => {
    if(window.location.pathname == '/services'){
      return 'white'
    }
    else{
      return 'main'
    }
  });

  return (
    <div className="App">
      {console.log(logoColor)}
      <BrowserRouter>
        <div id = 'navBarPageStack'>
          <NavBar logoColor = {logoColor} setLogoColor = {setLogoColor}/>
          <div className = 'pages'>
            <Routes>
              <Route path = '/' element = {<Home />}/>
              {/* <Route path = '/tracking' element = {<Tracking />}/> */}
              <Route path = '/services' element = {<Services />}/>
              {/* <Route path = 'policies' element = {<Policies />}/> */}
              <Route path = '/contact' element = {<Contact />}/>
              <Route path = '/about' element = {<About />}/>
              {/* <Route path = '/about' element = {<About />}/> */}
              <Route path = '*' element = {<Navigate to='/' />}/>
            </Routes>
          </div>
          <Footer footerClass = 'footer' setLogoColor = {setLogoColor}/> 
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
