import React from 'react'
import Home from './compements/Home'
import Navbar from './compements/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Collection from './compements/Collection'
import Shop from './compements/Shop'
import CartItem from './compements/CartItem'
import Selected from './compements/Selected'

const App = () => {
  return (
    <div className='bg-[#E6E8F5] display'>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/shop/:id' element={<Shop/>}/>
      <Route path='/cartitem' element={<CartItem/>}/>
      <Route path='/selected/:id' element={<Selected/>}/>
     </Routes>
    </div>
  )
}

export default App