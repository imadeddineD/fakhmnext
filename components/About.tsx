import Image from 'next/image'
import React from 'react'
import abouut from "../public/about.jpg"

const About = ({data} : any) => {
  return (
    <section className="about container" id="about">
        <div className="about-text">
            <h2>من نحن</h2>
            <p>{data[0].description}</p>
            
        </div>
        <div className="about-img">
            <Image src={data[0].imageUrl} alt="About Image" width={100} height={100} style={{"objectFit" : "contain"}}/>
        </div>
    </section>
  )
}

export default About