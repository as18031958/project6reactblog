import React from 'react'
import { Bollywood } from './Bollywood'
import { Hollywood } from './Hollywood'
import { Fitness } from './Fitness'
import { Technology } from './Technology'
import { Home } from './Home'
import { Food } from './Food'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DataComp from '../Store/Store'
import {Navbar} from './Navbar'
import {DyanamicComp} from'./DyanamicComp'
import './Stylehome.css'





export const RouteComp = () => {

  return (
    <div>
        <BrowserRouter>
   
        
     <Navbar/>
        <DataComp>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Bollywood' element={<Bollywood/>}/>
            <Route path='/Hollywood' element={<Hollywood/>}/>
            <Route path='/Food' element={<Food/>}/>
            <Route path='/Fitness' element={<Fitness/>}/>
            <Route path='/Technology' element={<Technology/>}/>
            <Route path='/dynamic/:id' element={<DyanamicComp/>}/>
            </Routes>
         </DataComp>
        </BrowserRouter>
    </div>
  )
}
