import React from 'react'
import Left from '../components/lefty'
import './Search.css'
function Search() {
  return (
    <div className="search">
      <Left/>
      <div className="search-area">
        <input type="text" />
        <button>Search</button>  
      </div>
    </div>
  )
}

export default Search