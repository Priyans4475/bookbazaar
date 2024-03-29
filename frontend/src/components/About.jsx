import React from 'react'

const About = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <img src='/R.jpeg' className=' absolute' ></img>
      <div className='relative  '>
            <div className=' bg-black text-white w-[1000px] h-63 opacity-80 rounded-xl animate-bounce '>
              <h1 className='p-3 font-bold'>Dear readers,</h1>
              <h1 className='p-3'>

We offer a huge collection of books from diverse categories of Fiction, Non-fiction, Biographies, History, Religion, Self-Help, etc. We also offer a collection of Investments and Management, Computers, Engineering, Medical, College and School text reference books.

We strive for customer satisfaction by offering a user-friendly search engine. Apart from all this, we also provide great content on our products.

</h1>
<h1 className='p-3'>All the Publishers, Distributors and Authors around the country are welcome to partner with us and grow the Bookbazaar family. We would like to thank our customers for visiting us. You can write to us on our e-mail id to share any suggestions or feedback you might have regarding our website or services.</h1>
            </div>
      </div>

    </div>
  )
}

export default About