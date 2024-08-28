import React, { useContext } from 'react'
import { StoreContext } from '../utils/Context'
import Cart from './Cart'

const Home = () => {
  const { products } = useContext(StoreContext)

  return (
    <>
      <div className='display'>
        <div className='w-full h-screen flex justify-center bg-[#E6E8F5] items-center'>
          <div className='w-1/2 h-full flex justify-center items-start pl-[4vw] flex-col'>
            {
              ['Crafted to', 'seamlessly', 'blend fashion', 'with function'].map((item, index) => {
                return <h1 key={index} className='text-6xl font-serif'>{item}</h1>
              })
            }
            <button className='mt-8 bg-black text-white font-semibold text-xl py-3 rounded-md px-[5vw]'>Explore Now</button>
          </div>
          <div className='w-1/2 h-full relative overflow-hidden'>
            <img className='w-full h-full object-cover' src="https://i.pinimg.com/564x/96/21/8d/96218dff74953124dcac79f17ca7af2a.jpg" alt="" />
          </div>
        </div>
        <div className='w-full p-2 flex flex-col gap-y-5 items-center'>
          <h1 className='font-serif text-4xl'>New <span className='font-bold'>Collections</span></h1>
          <div className='w-full flex gap-[2rem] justify-center flex-wrap'>
            {
              products.slice(0, 8).map((item, index) => {
                return  <Cart key={index} id={item._id} name={item.name} price={item.price} image={item._id === 'aaaab' ? item.image[0]: item.image}/>
              })
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default Home
