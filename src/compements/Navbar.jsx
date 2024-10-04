import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [active, setactive] = useState('home')
  const [menu, setmenu] = useState(false)
  return (
    <div className='w-full flex z-[99] h-[12vh] px-5 bg-[#E6E8F5] relative items-center justify-between'>
      <div
       className={`w-full absolute left-0 h-[50vh] flex flex-col justify-end p-4 items-end transition-all duration-[.5s] bg-black ${menu ? 'top-0': 'top-[-450%]'}`}>
          {
          ['home','collection','about'].map((item,index)=>{
            return <Link to={item === 'home'? '/': `${item}`} key={index} onClick={()=> setmenu(!menu)} className={`md:text-xl text-4xl cursor-pointer capitalize ${active === item? 'border-b-[3px]':''} text-white transition-all border-black font-serif`}>{item}</Link>
          })
        }
       </div>
      <div>
        <img className='w-1/2' src={assets.logo} alt="" />
      </div>
    <div className='md:flex hidden gap-5 px-5'>
        {
          ['home','collection','about'].map((item,index)=>{
            return <Link to={item === 'home'? '/': `${item}`} key={index} onClick={()=> setactive(item)} className={`text-xl cursor-pointer capitalize ${active === item? 'border-b-[3px]':''} transition-all border-black font-serif`}>{item}</Link>
          })
        }
    </div>
        <Link to='/cartitem'>
          <img className='w-[80%]' src={assets.cart_icon} alt="" />
        </Link>
        <div
           onClick={()=> {
            setmenu(!menu)
           }}
         className={`text-2xl relative transition-all md:hidden bloack ${menu ? 'text-white':'text-black'}`}>Menu</div>
        </div>
  )
}

export default Navbar