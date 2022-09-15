import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <div className='search-container'>
        <input type="text" placeholder='Search ..' />
        <input type="text" placeholder='Get Movie By Word ..' />
    </div>
  )
}

export default Search