
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

import './dashboard.css';
function Dashboard() {
  const [books,setbooks]=useState();
  const [newbooks,setnewbooks]=useState();
  const [category,setcategory]=useState();
  const [authors,setauthors]=useState();

  const getdata =async()=>{
      const data1= await axios.get("https://bookbazaar-01tn.onrender.com/api/books/get/count");
      setbooks(data1.data.bookcount);
      const data2= await axios.get("https://bookbazaar-01tn.onrender.com/api/books/get/countLast24hrs");
      setnewbooks(data2.data.totalCountLast24hrs);
      const data3= await axios.get("https://bookbazaar-01tn.onrender.com/api/books//get/category");
      setcategory(data3.data.totalCategories);
      const data4= await axios.get("https://bookbazaar-01tn.onrender.com/api/books/get/authorCount");
      setauthors(data4.data.totalAuthors);


      
  }
      
  
  useEffect(() =>
  {
      getdata();
  },[])         


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
    <main className='main-container w-full h-screen'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>BOOKS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>{books}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>NEW BOOKS</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>{newbooks}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>{category}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>AUTHORS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>{authors}</h1>
            </div>
        </div>

        <div className='charts'>
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
    </main>
  )
}

export default Dashboard