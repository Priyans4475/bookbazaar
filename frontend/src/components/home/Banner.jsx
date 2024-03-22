import React from 'react'
import Bannercard from './Bannercard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-gray-100 flex z-0 items-center'>
     <div className='w-full flex flex-col md:flex-row justify-between items-center gap-12 py-40'>
        <div className='md:w-2/3 space-y-8 h-full'> 
            <h2 className='text-black leading-snug text-5xl font-bold  h-full'>Where Every Page Holds Possibility<span className='text-blue-700'> Discover, Explore, Enjoy </span></h2>
            <p className='md:w-4/5 font-serif'>Welcome to our literary haven where every page holds the promise of possibility. Embark on a journey through the vast realms of imagination, where stories become more than just words on paper—they become portals to new worlds, experiences, and emotions.</p>
            
            
            <button className='bg-teal-500 hover:bg-teal-700 rounded-lg text-white font-bold py-2 px-4  ml-20 '>Search and Explore </button>
             </div>
        <div><Bannercard/> </div>
     </div>
     
    </div>
  )
}

export default Banner