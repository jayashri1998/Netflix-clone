
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './pages/Home'
import {Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Navbar from './pages/Navbar';
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' Component={Home}/>
      <Route exact path='/about' Component={About}/>
      <Route exact path='/service' Component={Service}/>
      <Route exact path='/contact' Component={Contact}/>
        </Routes>
    </>
  )
}

export default App
