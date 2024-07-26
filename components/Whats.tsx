import React from 'react'
import { FaWhatsapp} from "react-icons/fa";


const Whats = () => {
  return (
    <>
    <div className="whatsapp-btn-container">
        <a className="whatsapp-btn" href="https://wa.me/966538371230"><FaWhatsapp className="fab fa-whatsapp"/></a>
        <span>تواصل معنا</span>
    </div> 
    <div className="fixed-button">
        <a href="#" className="btn" id="open-popup2">
            <span>أطلب الآن</span>
        </a>
    </div>
    </>
  )
}

export default Whats