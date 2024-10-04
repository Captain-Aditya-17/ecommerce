import React from 'react'
import Home from './compements/Home'
import Navbar from './compements/Navbar'
import './App.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Collection from './compements/Collection'
import Shop from './compements/Shop'
import CartItem from './compements/CartItem'
import Selected from './compements/Selected'
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import About from './compements/About'

const App = () => {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className='bg-[#E6E8F5] display w-full'>
      <Navbar/>
      <div className={`${location.pathname === '/'? 'hidden':'block'} md:flex md:top-3 md:left-[7vw] flex top-[13%] left-3 gap-3 items-center fixed z-[90]  px-3 text-white`}>
      <div 
      onClick={()=> navigate(-1)}
       className="text-3xl bg-black p-3 opacity-[.8] rounded-full">
        <GrFormPrevious />
      </div>
      <div 
      onClick={()=> navigate(+1)}
       className="text-3xl bg-black p-3 opacity-[.8] rounded-full">
        <GrFormNext />
      </div>
    </div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/shop/:id' element={<Shop/>}/>
      <Route path='/cartitem' element={<CartItem/>}/>
      <Route path='/selected/:id' element={<Selected/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
    </div>
  )
}

export default App