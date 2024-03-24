import React,{useState,useEffect} from 'react'
import axios from 'axios';
import pic from '../assets/banner-books/book7.png'
const Books = () => {

    const [books,setbooks]=useState([]);
    const getdata =async()=>{
        const data= await axios.get("http://localhost:3000/api/books/admin",
        {headers: {
            Authorization: "Bearer " + localStorage.getItem("token")}
        
          });
        setbooks(data.data);
        console.log(data.data);
    }
    useEffect(()=>{
        getdata();
    },[])
  return (
    <div>
  {books.map((book, index) => {
    return (
      <div key={index}> {/* Ensure to provide a unique key for each element in the list */}
         <div class="w-full h-[260px] lg:flex p-3">
            <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Woman holding a mug">
              <img class="h-[260px] w-full object-cover object-center" src={book.imageURL} alt="Woman holding a mug" />
            </div>
            <div class="border-r w-full h-[260px] border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div class="mb-8">
                <p class="text-sm text-gray-600 flex items-center">
                  
                 {book.category}
                </p>
                <div class="text-gray-900 font-bold text-xl mb-2">{book.bookTitle}</div>
                <p class="text-gray-700 text-base ">{book.description}</p>
                <div class="flex items-center">
                <img class="w-10 h-10 rounded-full mr-4" src={book.imageURL} alt="Avatar of Jonathan Reinink"/>
                <div class="text-sm">
                  <p class="text-gray-900 leading-none">{book.authorName}</p>
              
                </div>
              </div>
              </div>
              
            </div>
          </div>
      </div>
    );
  })}
</div>

  )
}

export default Books