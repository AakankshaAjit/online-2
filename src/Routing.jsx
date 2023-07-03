import React from 'react'
import Header from './components/header/Header'
import Maincard from './components/card section/Maincard'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'
import NotFound from './components/NotFOund/NotFound'

const Routing = () => {
  return (
   <BrowserRouter>
   
   <Header/>


<Routes>

<Route path='/' element={<Maincard/>}/>
<Route path='/services' element={<Services/>}/>
<Route path='*' element={<NotFound/>}/>

</Routes>


<Footer/>
   
   </BrowserRouter>
  )
}

export default Routing