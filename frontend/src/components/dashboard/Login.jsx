import React, { useState } from 'react'
import Heading from '../Heading'
import Subheading from '../Subheading'
import Inputbox from '../Inputbox'
import Buttonscompo from '../Buttonscompo'
import Buttondown from '../Buttondown'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username,setusername]=useState('')
  const [password,setpassword]=useState('')
  const navigate = useNavigate();
  return (
    <div className='bg-white h-screen flex justify-center items-center  ml-80'>
    <div className='w-[500px]  rounded-lg  shadow-lg  flex flex-col justify-center items-center'>
    <Heading label={'Sign In'}/>
    <Subheading content={'Enter your credentials to access your account'}/>
    <div className='p-5'>
    <Inputbox onchange={(e)=>{
      setusername(e.target.value)
    }
    }
    inputheader={'Email'} type={'email'} placeholder={'user@gmail.com'}/>
    <Inputbox 
    onchange={(e)=>{
      setpassword(e.target.value)
    }
    }
    inputheader={'Password'} type={'password'} placeholder={'*******'}/>
    
    <Buttonscompo label={'Sign In'} onClick={async () => {
  const response = await axios.post("http://localhost:3000/api/user/signin", {
    username,
    password
  });
  localStorage.setItem("token", response.data.token)
  alert('You are now signed in')
  navigate("/admin/dashboard")
}}/>
    </div>
    {/* <Buttondown label={'Dont have an account ?'} buttontext={'Sign Up'} to={"/signup"}/> */}
    
    </div>
    </div>
  )
}

export default Login