// import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Open from './Pages/Open.jsx'
import Search from './Pages/Search.jsx'
function App() {

  return (
    <div className="app">

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Open" element={<Open/>}/>
        <Route path='/open/search' element={<Search/>}/>
      </Routes>
      
      </BrowserRouter>
      
      
      

    </div>
    
  )
}

export default App
