import React from 'react'

const About = () => {
  return (
    <div className='h-screen w-full flex gap-5 flex-col p-3 md:flex-row'>
        <div className='w-full h-1/2 md:h-[60vh] rounded-xl overflow-hidden'>
        <img className='h-full w-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGXmVmKMupNca5NrMEckYMcfWBcf1KI8tRw&s" alt="" /></div>
        <h1 className='text-xl font-bold mt-3'>
        Clothing (also known as clothes, garments, dress, apparel, or attire) is any item worn on the body. Typically, clothing is made of fabrics or textiles, but over time it has included garments made from animal skin and other thin sheets of materials and natural products found in the environment, put together.
        </h1>
    </div>
  )
}

export default About