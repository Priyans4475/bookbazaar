import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Shop = () => {
      const [books,setbooks]=useState([]);
      const [search,setsearch]=useState("javacript");
      const [fill,setfill]=useState(false)
      // const getdata =async()=>{
         
      //   const data= await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCubntZWq9UFRa1N7--zPRLqf7hOWubqH4`);
          
      //   // Passing the title to the setbooks function
      //   console.log(data.data.items)
      //   setbooks(data.data.items);
        
      //   // console.log(books)

      //     // async function fetchData() {
      //       // try {
      //       //     const response = await fetch('');
      //       //     const data = await response.json();
      //       //     // Access your data here and call the function
      //       //     setbooks(data.data);
      //       //     console.log(data.data);
      //       // } catch (error) {
      //       //     console.error('Error fetching data:', error);
      //       // }
        
          
      // }
      async function  handlesubmit(e){
        setfill(true)
        e.preventDefault();
       try {
        const data= await axios.get(` https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=newest&key=AIzaSyCubntZWq9UFRa1N7--zPRLqf7hOWubqH4&maxResults=32`);
        // https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCubntZWq9UFRa1N7--zPRLqf7hOWubqH4&maxResults=30
          
        // Passing the title to the setbooks function
        console.log(data.data.items)
        setbooks(data.data.items);
       } catch (error) {
        console.error('Error fetching data:', error);
       }
   
     
    }
    // useEffect(() =>
    // {
    //   handlesubmit();
    // },[])
     
  return (
    <div>
     <div className='mt-20'>
      
<form class="max-w-md mx-auto" onSubmit={handlesubmit}>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" onChange={(e)=>{
      setsearch(e.target.value)}} class="block w-full p-4 ps-10 text-sm border text-black border-gray-700 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Books, Categories..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
    </div>
</form>
      {fill ? ( 
       
        <div className='grid md:grid-cols-4 sm:grid-cols-2  px-4 md:px-24'>
          {
          books.map(book =>(
//             <div>
// <img className='ml-10' src={book.volumeInfo.imageLinks.thumbnail}/>
//           <div>
//           {book.volumeInfo.authors}
//             </div>
//               </div>

<>

<div class="antialiased h-100 text-gray-900 m-5">
  <div class="bg-white h-100 rounded-lg flex items-center justify-center ">
    <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
     
       <div class="h-100"></div>
      <img class="h-48 ml-9 px-10 object-cover object-end cursor-pointer" onClick={() => window.open(book.volumeInfo.previewLink, '_blank')} src={book.volumeInfo.imageLinks.thumbnail} alt="Home in Countryside" />
      <div class="p-6">
        <div class="flex items-baseline">
          <span class="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">New</span>
          <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide truncate">
          {book.volumeInfo.authors} 
          </div>
        </div>
        <h4 class="mt-2 font-semibold text-lg leading-tight truncate">{book.volumeInfo.title} </h4>

        <div class="mt-1 truncate'">
          <span className=''>{book.volumeInfo.publisher}</span>
          <span class="text-gray-600 text-sm">-- {book.volumeInfo.publishedDate} </span>
        </div>
        {book.saleInfo.retailPrice ? (
  <div class="mt-2 flex items-center">
    <span
      class="ml-2 text-white font-bold text-sm cursor-pointer hover:bg-teal-900 bg-teal-400 p-2 rounded-lg"
      onClick={() => window.open(book.saleInfo.buyLink, '_blank')}
    >
      Buy Now
    </span>
    <span class="ml-10 text-gray-600 font-sans text-sm bg-teal-400 p-2 rounded-lg ">
      {book.saleInfo.retailPrice.currencyCode}{' '}
      {book.saleInfo.retailPrice.amount}
    </span>
  </div>
) : (
  <div>
    {/* Handle the case where retailPrice is not present */}
  </div>
)}


        
      </div>
    </div>
  </div>
</div>
  </>  ))}
        </div>):(
        
          <div className='flex justify-center items-center '>
            <div className='mt-10 text-6xl w-[900px] py-10 font-semibold leading-normal'>
           <span className='text-blue-800'>Search</span>  Your favourite Books or Categories  <span className='text-blue-800'> in the search bar  <span className='text-black'>to explore new and best books</span></span> 
            </div>
            </div>


        
        )}
    
     

</div>
    </div>
  )
}

export default Shop