import React from 'react'
import Banner from './Banner'
import FavBooks from './FavBooks'
import FavBookorg from '../FavBookorg'
import Promobanner from '../Promobanner'
import Other from '../Other'
import AuthorFt from '../Authorft'

const Home = () => {
  return (
    <div className=' '>

      <Banner/>
      <Other/>
      <FavBookorg/>
      <FavBooks/>
      
      <Promobanner/>
      
      <AuthorFt/>
      
      
    </div>
    
  )
}

export default Home