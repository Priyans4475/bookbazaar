import React from 'react'
import Bannercard from './Bannercard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex z-0 items-center'>
     <div className='w-full flex flex-col md:flex-row justify-between items-center gap-12 py-40'>
        <div className='md:w-1/2 space-y-8 h-full'> 
            <h2 className='text-black leading-snug text-5xl font-bold  h-full'>Buy and Sell Your Books <span className='text-blue-700'>for the best Prices</span></h2>
            <p className='md:w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quisquam alias aliquid excepturi unde, nemo sint, ad tempore, illo inventore cumque quidem. Impedit ipsa quasi, mollitia sint nemo culpa laborum.</p>
            
            <input placeholder='Search a book' className='font-bold py-2 px-4 rounded'/>
            <button className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded'>Search</button>
             </div>
        <div><Bannercard/> </div>
     </div>
     
    </div>
  )
}

export default Banner