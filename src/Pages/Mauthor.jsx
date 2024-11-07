import React from 'react'
import './Mauthor.css'
import Left from '../components/lefty'
import BB from '../components/BB'

function Mauthor() {
  return (
    <div className="mauthor">
      <Left/>
      <div className="mauthor-right">
        <BB ll='/admin/author/addauthor'>Add Author</BB>
        <BB ll='/admin/author/searchauthor'>Get Author</BB>
        <BB ll='/admin/author/authors'>All Authors</BB>
      
      </div>

    </div>
  )
}

export default Mauthor