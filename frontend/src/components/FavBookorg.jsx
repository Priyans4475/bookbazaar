import React  from 'react';
import { Link } from 'react-router-dom';

import pic from '../assets/favoritebook.jpg';

const FavBookorg = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row gap-10 justify-between items-center'>
      <div className='md:w-1/2'>
            <img src={pic} alt='img' className='rounded md:w-10/12'/>
      </div>


      <div className='md:w-1/2 space-y-6'>
           <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug '>Find your favorite <span className='text-blue-700'> Book here</span></h2>
           <p className='mb-10 text:lg md:w-5/6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatem, labore repellat expedita ratione sunt iure quidem in minima aspernatur mollitia provident, quam earum distinctio dolorum facilis nesciunt eveniet odio.</p>
           <div className='flex flex-col sm:flex-row justify-between gap-6 my-14 md:w-3/4'>
              <div>
                 <h3 className='font-bold text-3xl '> 800+ </h3>
                 <p className='text-base'>Listing books</p>
                </div>
        <div>
          <h3 className='font-bold text-3xl '> 800+ </h3>
          <p className='text-base'>Listing books</p>
        </div>
        <div>
          <h3 className='font-bold text-3xl '> 800+ </h3>
          <p className='text-base'>Listing books</p>
        </div>
        </div>

        <Link to='/shop'><button className='bg-blue-700 text-white font-semibold px-5 py-2 mt-5 rounded transition-all hover:bg-black'>Explore more</button> </Link>
      </div>
    
       
    </div>
  )
}

export default FavBookorg