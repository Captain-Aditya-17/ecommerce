import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [active, setactive] = useState('home')
  return (
    <div className='w-full  z-[99] h-[12vh] px-5 bg-[#E6E8F5] items-center flex justify-between'>
      <div>
        <img className='w-1/2' src={assets.logo} alt="" />
      </div>
    <div className='flex gap-5 px-5'>
        {
          ['home','collection','about','contact us'].map((item,index)=>{
            return <Link to={item === 'home'? '/': `${item}`} key={index} onClick={()=> setactive(item)} className={`text-xl cursor-pointer capitalize ${active === item? 'border-b-[3px]':''} transition-all border-black font-serif`}>{item}</Link>
          })
        }
    </div>
        <Link to='/cartitem'>
          <img className='w-[80%]' src={assets.cart_icon} alt="" />
        </Link>
        </div>
  )
}

export default Navbar