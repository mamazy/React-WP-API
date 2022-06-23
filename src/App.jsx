import React from 'react'
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Services from "./components/services/Services"
import Testimonials from './components/testimonials/Testimonials'
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
   <Header />
   
<Nav />

<Routes>
    <Route path='/#top' element={null} />
    
    <Route path='/about' element={<About />} />
    <Route path='/portfolio' element={<Experience />} />
    <Route path='/services' element={<Services />} />
    <Route path='/testimonials' element={<Testimonials />} />
    <Route path='/contact' element={<Contact />} />
</Routes>
    <Footer />
    </>
  )
}

export default App