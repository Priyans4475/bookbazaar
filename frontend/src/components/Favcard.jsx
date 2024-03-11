import React from 'react'

const Favcard = ({book}) => {
  return (
    <div className='ml-10'>

        

        <div>

            

<div class="max-w-sm w-[250px] h-[420px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg w-[250px] h-[300px]" src={book.imageURL} alt="" />
    </a>
    <div class=" h-[90px]">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-400  dark:text-white">{book.bookTitle}</h5>
        </a>
        <p class=" font-sm text-gray-700  max-h-20 overflow-y-auto dark:text-gray-400">{book.description}</p>
        
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