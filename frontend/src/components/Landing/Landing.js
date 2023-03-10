import React from 'react'
import Footer from '../layout/Footer';
import About from './components/About/About';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import './Landing.css'

const Landing = () => {
  return (
    <div className="App">
        
        <Header /> 
        <About />
        <Services />
       <Footer/>
        
    </div>
  )
}

export default Landing