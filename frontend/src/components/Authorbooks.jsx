import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Favcard from './Favcard';


const Authorbooks = () => {
  const [books,setbooks]=useState([]);
  const getdata =async()=>{
      const data= await axios.get("https://bookbazaar-01tn.onrender.com/api/books/");
      setbooks(data.data);
      
  }
      
  
  useEffect(() =>
  {
      getdata();
  },[])
return (
  <div className='z-index:1 mt-20  bg-black p-10'>
      <div className='text-4xl font-mono w-full mb-5 text-white justify-center items-center flex mt-2'>You can see All Books here !!</div>
      
      <div class="w-full  ">
<div class="w-full grid grid-cols-4  ">
 
    {Array.isArray(books) && books.map((book, index) => (
      <Favcard 
        book={book}
      />
    ))}

   
</div>
</div>


      
      
      
      </div>
)
}


export default Authorbooks