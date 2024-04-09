import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
const Favcard = ({book}) => {
  return (
    <div className='m-10 shadow-lg w-[250px] rounded-lg'>

        

        <div className='relative'>

            

<div class="max-w-sm w-[250px] h-[420px]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
    <img class="rounded-t-lg w-[250px] h-[300px] relative" src={book.imageURL} alt="" />
   
   
    <div class=" h-[120px] text-center bg-white rounded-lg mt-2">
       
            <h5 class="mb-2 text-xl font-bold tracking-tight text-black-400  dark:text-white font-serif truncate">{book.bookTitle}</h5>
            <div className='text-black'>
                By <span className='font-bold'>{book.authorName}</span>
            </div>
            <button onClick={() => window.open(book.bookpdfURL, '_blank')} className='"bg-transparent hover:bg-black text-black font-sans hover:text-white py-1 px-1 border border-black hover:border-transparent rounded mr-1 mt-1 '>View more</button>
            {/* <button  className='bg-blue-400 hover:bg-blue-600 rounded-lg px-1 m-2 h-8 text-sm py-1 '>Add to read list</button> */}
            <button  className='"bg-transparent hover:bg-black text-black font-sans hover:text-white py-1 px-1 border border-black hover:border-transparent rounded ml-1 '>Add to Readlist</button>
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