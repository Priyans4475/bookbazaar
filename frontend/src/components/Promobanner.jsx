import React from 'react'
import { Link } from 'react-router-dom';
import store from '../assets/OIP.jpeg'
const Promobanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24 '>
           <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='md:w-1/2 '>
                <h2 className='text-4xl font-bold mb-6 leanding-snug'> Find Book Stores Near You </h2>
                <Link to='/shop' className='block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 mt-5 rounded transition-all hover:bg-black'>Explore more</button> </Link>

            </div>
            <div>
              <img src={store} className='w-64 h-98 rounded-lg mt-10 ml-10' alt=''/>
            </div>
           </div>
    </div>
  )
}

export default Promobanner