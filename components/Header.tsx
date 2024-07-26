import logo from "../public/logo.png"

import Image from 'next/image'
import React from 'react'
import { FaUser } from "react-icons/fa"

const Header = () => {
  return (
    <header>
        <div className="nav container">
             <a href="#">
                <Image src={logo} alt="logo" className="logo"/>
             </a>
            <div className="nav-icons">
                <a href="#"><FaUser className=" text-[20px] text-[#8d6db0]" /></a>
            </div>
        </div>
    </header>
  )
}

export default Header