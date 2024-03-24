import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Upload = () => {
  const navigate = useNavigate();
  

  const categories=
    ["Fiction",
"Non fiction",
"Poetry",
"Drama/Plays",
"Children",
"Graphic Novels",
"Comics",
"Reference",
"Programming",
"Autobiography",
"Historical",
"self-help",
"Business",
"Financial"]
  const [category,setcategory]=useState(categories[0])

  
const  handlesubmit = (e) => {
  e.preventDefault();
 
 

   const form=e.target;
   
   const bookTitle =form.bookTitle.value;
   const authorName =form.bookAuthor.value;
   const imageURL =form.imageurl.value;
   const description =form.description.value;
   const bookpdfURL =form.booklink.value;
   const category =form.category.value;

   const bookobject ={
    bookTitle,authorName,bookpdfURL,description,imageURL,category
   }

   console.log(bookobject);

//    axios.post('http://localhost:3000/api/books', bookobject, {
//     headers: {'Content-Type': 'application/json'}
// })
// .then(res => {
//     console.log(res);
//     alert('Successfully uploaded book');
//     // navigate("/admin/dashboard/manage"); 
// })
// .catch(err => {
//     consol

fetch('http://localhost:3000/api/books', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  
      Authorization: "Bearer " + localStorage.getItem("token")

  

  },
  body: JSON.stringify(bookobject)
})
.then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Network response was not ok.');
})
.then(data => {
  console.log(data);
  alert('Successfully uploaded book');
  // navigate("/admin/dashboard/manage"); 
})
.catch(error => {
  console.error('There was a problem with your fetch operation:', error);
});



}




   


  return (
    <div className='px-4 my-12'>
         
          <h1 className='mb-8 text-3xl font-bold'>Upload Your Book</h1>
    <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handlesubmit}>
            <div className='flex'>
            <div className='lg:w-1/2'>
       
       <h1 className='font-bold text-xl'>Book Title</h1>
       <input
        name='bookTitle'
         type="text" 
         placeholder="Book name" 
         required 
        //  value={UpldBook.BookTitle}
        //  onChange={handleChange}
          className='border-2 border-teal-400 rounded-md px-4 py-2 w-full' 
          />
        
      
         </div>
         <div className='lg:w-1/2'>
       
       <h1 className='font-bold text-xl'>Book Author</h1>
       <input 
       name='bookAuthor'
       type="text"
        placeholder="Book Author"
         required 
        // value={UpldBook.BookAuthor} 
        //  onChange={handleChange}
         className='border-2 border-teal-400 rounded-md px-4 py-2 w-full' />
        
      
         </div>
            </div>
            <div className='flex'>
            <div className='lg:w-1/2'>
       
       <h1 className='font-bold text-xl'>Imageurl</h1>
       <input 
       name='imageurl'
        type="text"
        placeholder="imageurl" 
        required 
        // value={UpldBook.imageurl}
        // onChange={handleChange}
         className='border-2 border-teal-400 rounded-md px-4 py-2 w-full' />
        
      
         </div>
         <div className='lg:w-1/2'>
       
       <h1 className='font-bold text-xl'>Categories</h1>
          <select 
          name='category'
          className='border-2 border-teal-400 rounded-md px-4 py-2 w-full' 
           onChange={(e)=>{setcategory(e.target.value)}}>
            {categories.map(cat=>{
              return <option value={cat}>{cat}</option>
            })}
          </select>        
      
         </div>
            </div>
            <div className='w-full'>
       
       <h1 className='font-bold text-xl'>Description</h1>
      
       <textarea type="text" 
        placeholder="Write Book description here............"
         required 
        //  value={UpldBook.Description} 
        //  onChange={handleChange}
         name="description" cols="40" rows="5" className='border-2 border-teal-400 rounded-md px-4 py-2 w-full '></textarea>
      
         </div>

         <div className=''>
       
       <h1 className='font-bold text-xl'>Book pdf link</h1>
       <input 
       name='booklink'
       type="text" placeholder="Book pdf link"
        // required
        //  value={UpldBook.Booklink} 
        // onChange={handleChange}
        className='border-2 border-teal-400 rounded-md px-4 py-2 w-full' />
        
      
         </div>
     
       <button type='submit' className='bg-teal-500 rounded-lg py-2 mt-3  flex justify-center text-black font-mono items-center'>Upload</button>
      
    </form>
    </div>
  )
}

export default Upload