import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Favcard from '../Favcard';

const FavBooks = () => {
    const [books,setbooks]=useState([]);
    const getdata =async()=>{
        const data= await axios.get("http://localhost:3000/api/books/");
        setbooks(data.data);
        
    }
        
    
    useEffect(() =>
    {
        getdata();
    },[])
  return (
    <div className='z-index:1'>
        <div className='text-4xl font-mono w-full mb-5 text-black justify-center items-center flex mt-2'>International Best Sellers Books</div>
        
        <div class="w-full overflow-x-auto ">
  <div class="w-full inline-flex flex-nowrap">
    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
      {Array.isArray(books) && books.map((book, index) => (
        <Favcard 
          book={book}
        />
      ))}
    </ul>   
    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
      {Array.isArray(books) && books.map((book, index) => (
        <Favcard 
          book={book}
        />
      ))}
    </ul>   
  </div>
</div>


        
        
        
        </div>
  )
}

export default FavBooks