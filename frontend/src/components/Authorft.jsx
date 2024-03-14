import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import Slider from './Slider'

const AuthorFt = () => {
 
      const [author,setauthor]=useState([]);
    const getdata =async()=>{
        const data= await axios.get("http://localhost:3000/api/getauthor");
        setauthor(data.data);
        console.log(data);
    }
        
    
    useEffect(() =>
    {
        getdata();
    },[])
  return (
    <div  className='my-16 px-4 lg:px-24'>
        <div className='text-4xl font-bold w-full mb-5 text-black justify-center items-center flex mt-2 '>Featured Author</div>
     
        <div class="w-full inline-flex flex-nowrap">
        <ul class="flex items-center justify-center md:justify-start gap-12  ">
    {author.map((auth, index) => (
        <div>
       <li>
       <img className='w-[200px] h-[200px] rounded-full cursor-pointer' onClick={() => window.open(auth.authorlink, '_blank')} src={auth.authorimage} alt="book image" />
       <div className='text-black font-extrabold text-center'>
        {auth.authorName}
       </div>
       </li>

       </div>

    ))}
      
    </ul>   

      
    


</div>
   
             </div>

   
   
  )
}

export default AuthorFt