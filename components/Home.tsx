"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import imagee from '../public/hero2.png';
import { FaArrowUp , FaTiktok ,  FaInstagram , FaSnapchatGhost} from "react-icons/fa";
import axios from "axios"
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';


const HomePage = ({data} : any) => {

    useEffect(() => {
        function createPopup(id : any) {
          let popupNode : any = document.querySelector(id);
          let overlay : any = popupNode.querySelector(".overlay");
          let closeBtn : any = popupNode.querySelector(".close-btn");
    
          function openPopup() {
            popupNode.classList.add("active");
          }
          function closePopup() {
            popupNode.classList.remove("active");
          }
    
          overlay.addEventListener("click", closePopup);
          closeBtn.addEventListener("click", closePopup);
          return openPopup;
        }
    
        let popup : any = createPopup('#popup');

        document.querySelector("#open-popup")?.addEventListener("click", popup) ;

        document.querySelector("#open-popup2")?.addEventListener("click", popup);
    
        // Cleanup function to remove event listeners
        return () => {
          document.querySelector("#open-popup")?.removeEventListener("click", popup);
          document.querySelector("#open-popup2")?.removeEventListener("click", popup);
        };
      }, []);

      const [formData, setFormData] = useState({
        name: '',
        number: "",
        message: ''
      });

      const router = useRouter()

      const toastMessage  = "تم إرسال الطلب"
    
      const [status, setStatus] = useState('');
    
      const handleChange = (e : any) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post(`/api/order`, formData, {
                headers: {
                  'Content-Type': 'application/json',
                },
              });
            router.refresh();
            toast.success(toastMessage);
            setFormData({
              name: '',
              number: "",
              message: ''
            })
          } catch (error : any) {
            setStatus('Failed to send message.');
            toast.error("هناك خطأ ما");

          }
      };

  return (
    <section className="home container" id="home">
      <div className="home-text">
        {/* <h1>
          استمتع بمزيج جديد  
          من حبوب البن
        </h1> */}
        <h1>{data[0].label}</h1>
        {/* <p>
          قم بتحضير أو طلب مشروبك المثالي بناءً على حالتك المزاجية في أي مكان وفي أي وقت
        </p> */}
        <p>{data[0].description}</p>
        <div className="linkss">
          <a href="#" className="btn" id="open-popup">
            <span>أطلب الآن</span>
            <FaArrowUp className="bx bx-up-arrow-alt"/>
          </a>
          <a href="https://www.tiktok.com/@_f5m_sa?_t=8nRmX0BhvRB&_r=1">
          <FaTiktok className="bx bxl-tiktok"/>
          </a>
          <a href="https://www.snapchat.com/add/f5m.48?invite_id=SZ--hamd&locale=ar_SA%40calendar%3Dgregorian&share_id=hW2ypsreQNS5ZRqTEyAftA&xp_id=1&sid=c5e121a5145c463fb9617d19623e830a">
            <FaSnapchatGhost className="bx bxl-snapchat"/>
          </a>
          <a href="https://www.instagram.com/_f5m_sa?igsh=Y21oenE0c2x5ZnB3&utm_source=qr">
            <FaInstagram className="bx bxl-instagram"/>
          </a>
        </div>
        <div className="popup" id="popup">
          <div className="overlay"></div>
          <div className="popup-content">
            <h2>للطلب</h2>
            <p>
              للطلب أدخل : إسمك الكامل ، رقم هاتفك بالإنجليزي و طلباتك لتصلك في أسرع وقت ممكن
            </p>
            <form action="" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                type="text" 
                name="name" 
                placeholder="اسمك"
                value={formData.name}
                onChange={handleChange} />
              </div>
              <div className="form-group">
                <input 
                type="text" 
                name="number" 
                placeholder="رقم الهاتف"
                value={formData.number}
                onChange={handleChange}  />
              </div>
              <div className="form-group">
                <textarea 
                name="message" 
                id="" 
                placeholder="طلباتك هنا"
                value={formData.message}
                onChange={handleChange} ></textarea>
              </div>
              <div className="controls">
                <button className="close-btn" type="button">حذف</button>
                <button className="submit-btn" type="submit">أرسل</button>
              </div>
            </form> 
          </div>
        </div>
      </div>
      <Image src={data[0].imageUrl} alt="Home Image" width={100} height={100} style={{"objectFit" : "contain"}} className="home_img" />
    </section>
  );
};

export default HomePage;
