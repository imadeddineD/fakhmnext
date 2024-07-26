"use client"
import React, { useState } from 'react'
import axios from "axios"
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });

      const router = useRouter()
    
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
            await axios.post(`/api/contact`, formData, {
                headers: {
                  'Content-Type': 'application/json',
                },
              });
            router.refresh();
            toast.success("تم إرسال الرسالة")
          } catch (error : any) {
            console.log(error.message)
            setStatus('Failed to send message.');
          }
      };
  return (
    <section className="contact container" id="contact">
        <div className="contain">
            <h2>تواصل معنا</h2>
        <div className="contact-wrapper">
            <div className="contact-form">
                <h3>أرسل لنا رسالة</h3>
                <form action=""  onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="اسمك"
                        onChange={handleChange}
                        value={formData.name}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="email" 
                        name="email" 
                        placeholder="بريدك الالكتروني"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <textarea 
                        name="message" 
                        id="" 
                        placeholder="رسالتك"
                        onChange={handleChange}
                        value={formData.message}
                        required
                        ></textarea>
                    </div>
                    <button type="submit">أرسل رسالة</button>
                </form>
            </div>
            <div className="contact-info">
                <h3>معلومات الاتصال</h3>
                <p><i className="fas fa-phone"></i><span className="one">+966 53 837 1230</span></p>
                <p><i className="fas fa-envelope"></i>fkhmalbn@gmail.com</p>
                <p><a href="https://g.page/r/CarQdS7POkAkEBM/review"><i className="fas fa-map-marker-alt"></i>Taymaa, Tayma 45411, Arabie saoudite</a></p>
            </div>
        </div>
        </div>
     </section>

  )
}

export default Contact