import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Button, Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
const Manage = () => {

  const [allbooks,setallbooks]=useState([]);
  useEffect(() => {
    const getdata = async () => {
      const data = await axios.get("http://localhost:3000/api/books/admin",{
        
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")}
        }
      );
      setallbooks(data.data);
     
    };
    getdata();
  
   
  }, [])
  
const handleDelete = (id) => {
  axios.delete(`http://localhost:3000/api/books/${id}`,
  {
    
  })
 .then(res => {
      console.log(res);
      alert('Successfully deleted book');
    })
 .catch(err => {
      console.log(err);
    });
};

  return (
    <div className='px-4 my-12 lg:px-24'>
       <h1 className='mb-8 text-3xl font-bold'>Manage Your Book</h1>
       <Table className='lg:w-[1180px]'>
        <Table.Head>
        <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Edit or manage</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>

        {
          allbooks.map((book, index) =>   <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>{index+1}</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {book.bookTitle}
              </Table.Cell>
              <Table.Cell>{book.authorName}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>1000</Table.Cell>
              <Table.Cell>
                <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Edit
                </Link>
                <button className='bg-red-500 texts-sm px-4 py-1 rounded-lg ml-5 font-semibold text-white hover:bg-blue-950' onClick={()=>handleDelete(book._id)}>
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>)
        }
        {/* <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell>1</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-700">
          <Table.Cell>2</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </Table.Cell>
            <Table.Cell>White</Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell>3</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>Accessories</Table.Cell>
            <Table.Cell>$99</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body> */}
      </Table>
       {/* Table  */}


    </div>
  )
}

export default Manage