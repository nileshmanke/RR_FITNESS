import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../components/Home'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from "../components/About";
import Contact from "../components/Contact";
import MaleWeightLoss from '../components/MaleWeightLoss';
import MaleWeightGain from '../components/MaleWeightGain';
import MaleFatLoss from '../components/MaleFatLoss';
import FemaleWeightLoss from '../components/FemaleweightLoss';
import FemaleWeightGain from '../components/FemaleweightGain';
import FemaleFatLoss from '../components/FemaleweightLoss';





function App() {
  

  return (
    <>
      
      <Router>
      <Header />



    
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
            <Route path="/weightlossmale" element={<MaleWeightLoss/>} />
            <Route path="/maleweightgain" element={<MaleWeightGain/>} />
            <Route path="/fatlossmale" element={<MaleFatLoss/>} />
            <Route path='femaleweightloss' element={<FemaleWeightLoss/>}/>
             <Route path='femaleweightgain' element={<FemaleWeightGain/>}/>
              <Route path='femalefatloss' element={<FemaleFatLoss/>}/>

          

          
          
         
        </Routes>
     

     









      <Footer />
    </Router>
    
    </>
  )
}

export default App
