import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {

    const [ismenuopen,setmenuopen] =useState(false);
    const [issticky,setissticky] =useState(false);
    const tooglemenu=() =>{
        setmenuopen(!ismenuopen)
    }
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setissticky(true);
          } 
          else {
            setissticky(false);
          }
        }
      
        window.addEventListener("scroll", handleScroll);
      
       
        return () => {
          window.addEventListener("scroll", handleScroll);
        };
      }, []);
      
    
  const navItems =[
    
    {link:'Home',path:'/'},
    {link:'Shop',path:'/shop'},
    {link:'About',path:'/about'},
    {link:'Blog',path:'/blog'},
    {link:'sell Your Book',path:'/admin/dashboard'},
    
  ]
  return (
   <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-50'>
<nav className={`py-4 lg:px-24 px-4 ${issticky ? "sticky top-0 left-0 right-0 bg-pink-300 z-999" : "z-1"}`}>
        <div className='flex justify-between'>
            {/* logo */}
            
                <Link to={'/'} className='font-bold text-blue-700 text-2xl'>BookBazaar</Link>
                {/* nav item for large device */}
           <ul className='space-x-10 md:flex hidden'>
            {navItems.map((item,index)=>
                
                        <Link to={item.path} className='cursor-pointer uppercase hover:text-blue-700'>{item.link}</Link>
                  
                )
            }
           </ul>

           {/* btn for small devices */}

           <div className='space-x-12 hidden lg:flex items-center'>
            <button onClick={tooglemenu} className='w-5 hover:text-blue-900'>
                <FiMenu />
            </button>
           </div>
           {/* menu btn for mobile devices */}
           <div className='md:hidden'
           >
          <button onClick={tooglemenu} className='text-black focus:outline-none'>
            {
                ismenuopen?<IoCloseSharp className='h-5 w-5'/>:<FiMenu className='h-5 w-5'/>
               
            }
          </button>
           </div>

           <div className={`space-y-3 px-4 mt-16 py-5 bg-blue-700 ${ismenuopen? "block fixed left-0 right-0 top-0 " : 'hidden'}`}>
            {
                navItems.map((item,index)=>
                
                <Link to={item.path} className='block text-base text-white cursor-pointer uppercase hover:text-blue-700'>{item.link}</Link>
          
        )
            }
           </div>
        </div>
    </nav>
   </header>
  )
}

export default Navbar