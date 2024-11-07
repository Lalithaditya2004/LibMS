// import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Open from './Pages/Open.jsx'
import Search from './Pages/Search.jsx'
import Book from './Pages/Book.jsx'
import Fine from './Pages/Fines.jsx'
import Books from './Pages/Bookmain.jsx'
import UHome from './UserPages/Userhome.jsx'
import Usearch from './UserPages/Usersearch.jsx'
import Contact from './Pages/Contact.jsx'
import Rules from './UserPages/Rules.jsx'
import Request from './UserPages/Request.jsx'
import Ufines from './UserPages/Ufines.jsx'
import Users from './Pages/Users.jsx'
import AUsers from './Pages/AUsers.jsx'
import Author from './Pages/Author.jsx'
import SAuthor from './Pages/SAuthor.jsx'
import Mauthor from './Pages/Mauthor.jsx'
import Dbook from './Pages/Dbook.jsx'
import Vauthor from './Pages/Vauthor.jsx'
import Vbook from './Pages/Vbook.jsx'
import Issues from './Pages/Issues.jsx'
import VIssues from './Pages/VIssues.jsx'
import Requests from './Pages/Request.jsx'
import VUsers from './Pages/VUsers.jsx'
import DUser from './Pages/Duser.jsx'

function App() {

  return (
    <div className="app">

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Admin" element={<Open/>}/>
        <Route path='/Admin/search' element={<Search/>}/>
        <Route path='/Admin/books/addbook' element={<Book/>}/>
        <Route path='/Admin/addfines' element={<Fine/>}/>
        <Route path='/Admin/books' element={<Books/>}/>
        <Route path='/home' element={<UHome/>}/>
        <Route path='/home/search' element={<Usearch/>}/>
        <Route path='/home/contact' element={<Contact/>}/>
        <Route path='/home/rules' element={<Rules/>}/>
        <Route path='/home/request' element={<Request/>}/>
        <Route path='/home/fines' element={<Ufines/>}/>
        <Route path='/Admin/users' element={<Users/>}/>
        <Route path='/Admin/users/adduser' element={<AUsers/>}/>
        <Route path='/admin/author/addauthor' element={<Author/>}/>
        <Route path='/admin/author/searchauthor' element={<SAuthor/>}/>
        <Route path='/admin/author' element={<Mauthor/>}/>
        <Route path='/admin/books/delete' element={<Dbook/>}/>
        <Route path='/admin/author/authors' element={<Vauthor/>}/>
        <Route path='/admin/books/view' element={<Vbook/>}/>
        <Route path='/admin/issues' element={<Issues/>}/>
        <Route path='/admin/viewissues' element={<VIssues/>}/>
        <Route path='/admin/requests' element={<Requests/>}/>
        <Route path='/admin/viewusers' element={<VUsers/>}/>\
        <Route path='/admin/user/delusers' element={<DUser/>}/>

      </Routes>
      
      </BrowserRouter>
      
      
      

    </div>
    
  )
}

export default App
