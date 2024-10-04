import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { StoreContext } from '../utils/Context' // Assuming this contains your products data

const Shop = () => {
  const { id } = useParams()
  const { products,CartValue,sizeChanges,selectSize } = useContext(StoreContext)

  const product = products.find((item) => item._id === id)
  const [customImage, setcustomImage] = useState(product._id === 'aaaab' ? product.image[0] : product.image)
 
  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className='p-4 w-full flex md:flex-row flex-col gap-5 items-start h-[90vh]'>
      <div className='md:w-[80%] w-full gap-3 h-full flex'>
        <div className='md:w-[10vw] p-2 h-full gap-y-3 flex flex-col justify-start'>
          {
            product.image.length > 0 ? product.image.map((item, index) => {
              return <div key={index}
              onClick={()=> setcustomImage(item)}
               className='w-full h-[8vw]'>
                <img className='w-full h-full object-cover' src={item} alt="" />
              </div>
            })
              :
                <div className='w-full h-[8vw]'>
                   <img className='w-full h-full object-cover' src={product.image} alt="" />
              </div>

          }
        </div>
        <div className='w-full md:h-[38vw] rounded-md overflow-hidden'>
          <img className='w-full h-full object-cover' src={customImage} />
        </div>
      </div>
      <div className='w-full h-full items-start flex flex-col gap-4'>
        <h1 className='text-4xl font-bold'>{product.name}</h1>
        <h1 className='text-3xl text-[#ff9721] font-bold'>${product.price}</h1>
        <h1 className='text-2xl'>Sizes -</h1>
        <div className='flex gap-5'>
          {
            product.sizes.map((item,index)=>{
              return (
                <div
                  onClick={() => sizeChanges(item, product._id)}
                  className={`border-2 cursor-pointer transition-all border-black py-3 px-6 ${
                    selectSize[product._id] === item ? 'bg-black text-white' : ''
                  }`}
                  key={index}
                >
                  <h1 className="text-2xl">{item}</h1>
                </div>
              );
            })
          }
        </div>
        <button
        onClick={()=> CartValue(product)}
         className='mt-5 bg-black text-white py-2 px-[5vw] text-xl font-semibold rounded-md hover:bg-zinc-800'>Add to cart</button>
        <div className='flex flex-col py-2'>
          <h1 className='text-2xl font-semibold text-zinc-500'>Product details</h1>
          <p className='md:w-1/2 w-full text-xl font-semibold text-zinc-500'>{product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Shop
