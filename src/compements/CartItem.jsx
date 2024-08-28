import React, { useContext } from 'react'
import { StoreContext } from '../utils/Context'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const CartItem = () => {
  const { cart, remove } = useContext(StoreContext)
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const navigate = useNavigate()

  return (
    <div className='w-full p-2 flex flex-col items-center'>
      <div className='w-[90%] p-2 flex flex-col gap-3'>
        <div className='grid gap-5 table-system px-3'>
          <h1>product</h1>
          <h1>Product name</h1>
          <h1>total</h1>
        </div>
        {
          cart.map((item, index) => {
            return (
              <div key={index} className='w-full rounded-md bg-white p-3 grid table-system gap-5 items-center'>
                <div className='w-[5vw] cursor-pointer h-[5vw] rounded overflow-hidden'>
                  <img
                    onClick={() => navigate(`/shop/${item._id}`)}
                    className='w-full h-full object-cover'
                    src={item._id === 'aaaab' ? item.image[0] : item.image}
                    alt={item.name}
                  />
                </div>
                <h1 className='text-xl font-semibold'>{item.name}</h1>
                <h1 className='text-xl font-semibold'>${item.price}</h1>
                <div className='flex gap-5'>
                  <img onClick={() => remove(index)} className='w-[5%] cursor-pointer' src={assets.bin_icon} alt="" />
                </div>
              </div>

            )
          })
        }
        <div className='w-[40vw] py-4 flex gap-3 flex-col items-start'>
          <h1 className='text-3xl font-bold'>Billing</h1>
          <div className='w-full justify-between flex'>
            <h1 className='text-xl capitalize font-semibold'>subtotal</h1>
            <h1 className='text-xl capitalize font-semibold'>${total}</h1>
          </div>
          <div className='w-full border-b-2 pb-5 border-black justify-between flex'>
            <h1 className='text-xl capitalize font-semibold'>diliveryTask</h1>
            <h1 className='text-xl capitalize font-semibold'>${2}</h1>
          </div>
          <div className='w-full justify-between flex'>
            <h1 className='text-4xl capitalize font-bold'>Total</h1>
            <h1 className='text-4xl capitalize font-bold'>${total + 2}</h1>
          </div>
          <div className='mt-5'>
            <button className='text-2xl font-bold text-white py-2 px-8 rounded-md bg-black'>Proceed to pay</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem