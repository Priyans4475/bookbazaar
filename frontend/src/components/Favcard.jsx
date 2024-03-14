import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
const Favcard = ({book}) => {
  return (
    <div className='ml-10'>

        

        <div className='relative'>

            

<div class="max-w-sm w-[250px] h-[420px]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
    <img class="rounded-t-lg w-[250px] h-[300px] relative" src={book.imageURL} alt="" />
    <div className='absolute top-3 right-1 p-2 rounded '>
    <FaCartShopping  className='h-8 w-8 text-white rounded-lg bg-black'/>
    <FaEye className='h-8 w-8 bg-gray-200 rounded-full '/>


    </div>  
   
    <div class=" h-[120px] text-center bg-teal-500 rounded-lg">
       
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-400  dark:text-white">{book.bookTitle}</h5>
            <div className='text-white'>
                {book.authorName}
            </div>
            <button onClick={() => window.open(book.bookpdfURL, '_blank')} className='bg-blue-400 hover:bg-blue-600 rounded-lg px-3 py-1 '>View more</button>
       
        {/* <p class=" font-sm text-gray-700  max-h-20 overflow-y-auto dark:text-gray-400">{book.description}</p> */}
        
    </div>
</div>

        </div>
        {/* <img src={book.imageURL} alt={book.title} />
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <p>{book.category}</p>
        <p>{book.description}</p> */}
    </div>
  )
}

export default Favcard