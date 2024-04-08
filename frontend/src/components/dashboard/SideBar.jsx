import React from 'react'
import { Sidebar } from 'flowbite-react';
import { useNavigate } from "react-router-dom";
import '/logo.png'
import { FaHome } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
const SideBar = () => {

  const navigate = useNavigate();
  function handleLogOut() {
    localStorage.removeItem("token"); // Corrected line
    navigate("/") // Corrected line - typo in "/signin" instead of "/sigin"
  }
  return (
    <div className='bg-gray-300'>
      <Sidebar aria-label="Sidebar with logo branding example">
      <Sidebar.Logo href="/" img="/logo.png" imgAlt="Flowbite logo">
        Bookbazaar
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup className='py-14 '>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className='text-md pr-7'>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiViewBoards}>
            Upload Books
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/userdetails" icon={HiUser} className="mr-12 pr-7">
            Users
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/books" icon={HiShoppingBag} className="mr-12">
            Books
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/register" icon={HiArrowSmRight} className="mr-12 pr-5">
            Sign In
          </Sidebar.Item>
          
          <Sidebar.Item href="/" icon={FaHome} className="mr-12">
            Home
          </Sidebar.Item>
          <Sidebar.Item href="/" icon={IoIosLogOut} className="mr-12" onClick={handleLogOut}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  </div>
  )
}

export default SideBar