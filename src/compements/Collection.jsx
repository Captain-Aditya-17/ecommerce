import React, { useContext, useState } from 'react'
import { StoreContext } from '../utils/Context'
import Cart from './Cart'

const Collection = () => {
    const { active, setsubactive, subactive, subsetactive, filteredProducts, Catergoray, subCategory } = useContext(StoreContext)
    return (
        <div className='flex p-2'>
            <div className='h-[90vh] p-2 sticky top-6 rounded-xl flex flex-col gap-y-5 w-[30vw] bg-white'>
                <div>
                    <h1 className='text-2xl text-blue-500 font-semibold'>Catergoray</h1>
                    {
                        ['Men', 'Women', 'Kids'].map((item, index) => {
                            return <h1 className={`cursor-pointer text-xl ${active === item ? 'text-blue-500' : ''} font-semibold`} onClick={() => Catergoray(item)}>{item}</h1>

                        })
                    }
                </div>
                <div>
                    <h1 className='text-2xl text-blue-500 font-semibold'>Sub-Catergoray</h1>
                    {
                        ['Topwear', 'Bottomwear', 'Winterwear'].map((item, index) => {
                            return <h1 className={`cursor-pointer text-xl ${subactive === item ? 'text-blue-500' : ''} font-semibold`} onClick={() => subCategory(item)}>{item}</h1>

                        })
                    }
                </div>
            </div>
            <div className='p-2 w-full flex flex-wrap gap-[2rem] justify-center'>
                {
                    filteredProducts.map((item, index) => {
                        return <Cart id={item._id} key={index} name={item.name} price={item.price} image={item._id === 'aaaab' ? item.image[0] : item.image} />
                    })
                }
            </div>
        </div>
    )
}

export default Collection
