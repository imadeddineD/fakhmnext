import Image from 'next/image'
import React from 'react'
import logo from "../public/logo.png"
import { FaArrowUp , FaTiktok ,  FaInstagram , FaSnapchatGhost} from "react-icons/fa";


const Footer = () => {
  return (
    <section className="footer">
    <div className="container">
        <div>
            <a href="#" className="logo">
             <Image src={logo} alt="logo"/>
            </a>
        </div>
        <div className="social">
            <a href="https://www.tiktok.com/@_f5m_sa?_t=8nRmX0BhvRB&_r=1"><FaTiktok className="bx bxl-tiktok"/></a>
            <a href="https://www.snapchat.com/add/f5m.48?invite_id=SZ--hamd&locale=ar_SA%40calendar%3Dgregorian&share_id=hW2ypsreQNS5ZRqTEyAftA&xp_id=1&sid=c5e121a5145c463fb9617d19623e830a"><FaSnapchatGhost className="bx bxl-snapchat"/></a>
            <a href="https://www.instagram.com/_f5m_sa?igsh=Y21oenE0c2x5ZnB3&utm_source=qr"><FaInstagram className="bx bxl-instagram"/></a>
        </div>
        <p className="copyright">Copyright &#169; 2024<Image src={logo} className="logo" alt=""/></p>
    </div>
</section>
  )
}

export default Footer