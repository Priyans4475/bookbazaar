import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import Slider from './Slider'

const Other = () => {
 
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
    <div  className='my-16 px-4 lg:px-24'>
        <div className='text-4xl font-mono w-full mb-5 text-black justify-center items-center flex mt-2 '>Trending Books</div>
     
        <div class="w-full inline-flex flex-nowrap">
        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
    {books.map((book, index) => (
       <li>
       <img className='w-[240px] h-[400px]' src={book.imageURL} alt="book image" />
       </li>
    ))}
      
    </ul>   

    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
    {books.map((book, index) => (
       <li>
       <img className='w-[240px] h-[400px]' src={book.imageURL} alt="book image" />
       </li>
    ))}
      
    </ul>   
    


</div>
   
             </div>

   
   
  )
}

export default Other