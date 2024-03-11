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
    <div className=''>
        <div className='text-2xl font-bold mb-3 text-blue-700 justify-start items-start flex'>Your favourite Books</div>
        <div className='text-4xl font-bold mb-3 text-blue-700 justify-center items-center flex'>International Best Sellers Books</div>
        <div className='flex flex-no-wrap overflow-x-auto'>
           
    {Array.isArray(books) && books.map((book, index) => (
        <Favcard 
           book={book}
         
        />
    ))}
</div>

        
        
        
        </div>
  )
}

export default FavBooks