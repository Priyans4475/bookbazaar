
import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import { IoBookSharp } from "react-icons/io5";
 import { ImBooks } from "react-icons/im";
 import { BiCategory } from "react-icons/bi";


 import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

//  import './dashboard.css'
function Dashboard() {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <div className=''>
        <div className=''>
            <h3>DASHBOARD</h3>
        </div>

        <div className='flex p-20 w-full'>
            <div className=' w-[210px] h-[150px] mr-10 rounded-lg bg-blue-500 shadow-xl'>
                <div className='flex justify-evenly mt-4'>
                    <h3 className='text-xl font-serif'>BOOKS</h3>
                    <IoBookSharp className='w-10 h-8'/>
                </div>
                <h1 className='m-10 text-xl font-bold'>300</h1>
            </div>
            <div className=' w-[210px] h-[150px] mr-10 rounded-lg shadow-xl bg-orange-500'>
                <div className='flex justify-evenly mt-4'>
                    <h3  className='text-xl font-serif'>NEW BOOKS</h3>
                    <ImBooks className='w-10 h-8'/>
                </div>
                <h1 className='m-10 text-xl font-bold'>12</h1>
            </div>
            <div className=' w-[210px] h-[150px] shadow-xl mr-10 rounded-lg bg-green-500'>
                <div className='flex justify-evenly mt-4'>
                    <h3  className='text-xl font-serif'>CATEGORIES</h3>
                    <BiCategory className='w-10 h-8'/>
                </div>
                <h1 className='m-10 text-xl font-bold'>33</h1>
            </div>
            <div className=' w-[210px] h-[150px] mr-10 shadow-xl rounded-lg bg-red-500 '>
                <div className='flex justify-evenly mt-4'>
                    <h3  className='text-xl font-serif'>AUTHORS</h3>
                    <BsPeopleFill className='w-10 h-8'/>
                </div>
                <h1 className='m-10 text-xl font-bold'>42</h1>
            </div>
        </div>

        <div className=''>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer> 

        </div> 
    </div>
  )
}

export default Dashboard