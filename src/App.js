import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'

import NavBar from './components/NavBar'
import Home from './pages/Home'

import About from './pages/About'

import Services from './pages/Services'
import Contact from './pages/Contact'
// import Tracking from './pages/Tracking'

function App() {
  // const [currentPage, setCurrentPage] = useState('home')
  // const [currentCarrier, setCurrentCarrier] = useState(null)

  // function carrierClicked (carrier)  {
  //   setCurrentPage('tracking')
  //   setCurrentCarrier(carrier)
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <div id = 'navBarPageStack'>
          <NavBar/>
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
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
