import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const Dashboardlayout = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4'>
        <SideBar/>
        <Outlet/>

    </div>
  )
}

export default Dashboardlayout