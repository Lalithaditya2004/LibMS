import React from 'react'
import Left from '../components/lefty'
import './Bookmain.css'
import BB from '../components/BB'

function Bookmain() {
  return (
    <div className="bookmain">
        <Left/>
        <div className="bookmainright">
            <h1>What do you want to do today?</h1>
            <BB ll={'/admin/books/addbook'}>Add Book</BB>
            <BB ll={'/admin/search'}>Search Book</BB>
            <BB ll={'/admin/books/view'}>All Books</BB>
            <BB ll={'/admin/books/delete'}>Delete Book</BB>

        </div>
    </div>
  )
}

export default Bookmain