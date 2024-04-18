import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './pages/Header'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Slider from './pages/Carousel'


function App() {


  return (
    <>
      <Header />
      <div id='base'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Contact />} />
          <Route path='/slider' element={<Slider />} />
        </Routes>
      </div>
    </>
  )
}

export default App
