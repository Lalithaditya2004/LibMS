import React from 'react'
import Uleft from '../components/Userlefty'
import './Contact.css'

function Contact() {
  return (
    <div className="contact">
        <Uleft/>
        <div className="conmain">
        <h1>Contact Us</h1>
        <hr/>
        <p>For any inquiries or assistance, feel free to flutter a message our way or conjure a pigeon! Our team of dedicated bibliophiles is here to ensure your literary journey is a breeze.</p>

        <div class="librarian">
            <strong>Crescent P:</strong>
            <p>Keeper of all things rare and curious, Crescent is here to help unearth those hidden gems. Reach out at  <a href="mailto:crescent.lib@library.org"> crescent.lib@library.org</a>.</p>
        </div>
        
        <div class="librarian">
            <strong>K. Lalithaditya:</strong>
            <p>Need guidance? Lalithaditya's wisdom knows no bounds—whether it's for a tome or a tale! You can contact him at <a href="mailto:lalithaditya.info@library.org"> lalithaditya.info@library.org</a>.</p>
        </div>
        
        <div class="librarian">
            <strong>G. Ajay Kumar:</strong>
            <p>For catalog insights, digital resources, and the latest in our literary trove, Ajay Kumar is your go-to. Email him at <a href="mailto:ajay.kumar.support@library.org"> ajay.kumar.support@library.org</a>.</p>
        </div>

        <p>For queries or whispers of bookish adventures, you may reach out via our mystic hotline (000-0000), ancient email scrolls, or simply visit us at our cozy corner in the library! We're here to make your reading experience nothing short of magical.</p>
        </div>
    </div>
  )
}

export default Contact