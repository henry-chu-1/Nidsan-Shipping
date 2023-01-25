import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'

import NavBar from './components/NavBar'
import Home from './pages/Home'

import FAQ from './pages/FAQ'

import Services from './pages/Services'
import Network from './pages/Network'
import Containers from './pages/Containers'
import Contact from './pages/Contact'
import Tracking from './pages/Tracking'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  // const [currentCarrier, setCurrentCarrier] = useState(null)

  // function carrierClicked (carrier)  {
  //   setCurrentPage('tracking')
  //   setCurrentCarrier(carrier)
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <div className = 'pages'>
          <Routes>
          <Route path = '/' element = {<Home />}/>
          {/* <Route path = '/tracking' element = {<Tracking />}/> */}
          <Route path = '/services' element = {<Services />}/>
          {/* <Route path = 'policies' element = {<Policies />}/> */}
          <Route path = '/contact' element = {<Contact />}/>
          <Route path = 'FAQ' element = {<FAQ />}/>
          {/* <Route path = '/about' element = {<About />}/> */}
          <Route path = '*' element = {<Navigate to='/' />}/>
          </Routes>
        </div> 
      </BrowserRouter>
    </div>
  );
}

export default App;
