import React,{useState} from 'react'

const Upload = () => {

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

  
  return (
    <div className='px-4 my-12'>
         
          <h1 className='mb-8 text-3xl font-bold'>Upload Your Book</h1>
          <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
            <div className='flex'>
            <div className='lg:w-1/2'>
       
       <h1 className='font-bold text-xl'>Book Title</h1>
       <input id="email1" type="text" placeholder="Book name" required  className='border-2 border-teal-400 rounded-md px-4 py-2 w-full' />
        
      
         </div>
         <div className='lg:w-1/2'>
       
       <h1 className='font-bold text-xl'>Book Author</h1>
       <input id="email1" type="text" placeholder="Book Author" required  className='border-2 border-teal-400 rounded-md px-4 py-2 w-full' />
        
      
         </div>
            </div>
            <div className='flex'>
            <div className='lg:w-1/2'>
       
       <h1 className='font-bold text-xl'>Imageurl</h1>
       <input id="email1" type="text" placeholder="Imageurl" required  className='border-2 border-teal-400 rounded-md px-4 py-2 w-full' />
        
      
         </div>
         <div className='lg:w-1/2'>
       
       <h1 className='font-bold text-xl'>Categories</h1>
          <select className='border-2 border-teal-400 rounded-md px-4 py-2 w-full' onChange={(e)=>{setcategory(e.target.value)}}>
            {categories.map(cat=>{
              return <option value={cat}>{cat}</option>
            })}
          </select>        
      
         </div>
            </div>
            <div className='w-full'>
       
       <h1 className='font-bold text-xl'>Description</h1>
      
       <textarea type="text"  placeholder="Write Book description here............" required  name="Text1" cols="40" rows="5" className='border-2 border-teal-400 rounded-md px-4 py-2 w-full '></textarea>
      
         </div>

         <div className=''>
       
       <h1 className='font-bold text-xl'>Book pdf link</h1>
       <input id="email1" type="text" placeholder="Book pdf link" required  className='border-2 border-teal-400 rounded-md px-4 py-2 w-full' />
        
      
         </div>
     
       <button type='submit' className='bg-teal-500 rounded-lg py-2 mt-3  flex justify-center text-black font-mono items-center'>Upload</button>
      
    </form>
    </div>
  )
}

export default Upload