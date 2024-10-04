import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = ({name,price,image,id}) => {
  const onNavigate = useNavigate()
  return (
    <div onClick={()=> onNavigate(`/shop/${id}`)} className='md:w-[20vw] w-[42vw] flex cursor-pointer transition-all hover:opacity-75 flex-col overflow-hidden bg-white md:h-[26vw]'>
        <div className='w-full h-full overflow-hidden'>
            <img className='w-full h-full object-cover' src={image} alt="" />
        </div>
        <div className='p-1'>
            <h1>{name}</h1>
            <h1 className='text-xl font-bold'>$ {price}</h1>
        </div>
    </div>
  )
}

export default Cart