import React, { useContext } from 'react'
import { StoreContext } from '../utils/Context'
import Cart from './Cart'

const Home = () => {
  const { products } = useContext(StoreContext)

  return (
    <>
      <div className='display'>
        <div className='md:w-full md:h-screen gap-y-5 py-2 flex md:flex-row flex-col justify-center  items-center'>
          <div className='md:w-1/2 w-full md:h-full h-1/3 flex justify-center items-start pl-[4vw] flex-col'>
            {
              ['Crafted to', 'seamlessly', 'blend fashion', 'with function'].map((item, index) => {
                return <h1 key={index} className='md:text-6xl text-2xl font-serif'>{item}</h1>
              })
            }
            <button className='mt-8 bg-black text-white font-semibold text-xl py-3 rounded-md px-[5vw]'>Explore Now</button>
          </div>
          <div className='md:w-1/2 md:h-full h-1/3 w-full relative overflow-hidden md:p-0 p-2'>
            <img className='w-full h-full object-cover rounded-xl' src="https://i.pinimg.com/564x/96/21/8d/96218dff74953124dcac79f17ca7af2a.jpg" alt="" />
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
