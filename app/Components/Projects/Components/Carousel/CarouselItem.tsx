"use client"
import React from "react";
import './CarouselItem.css'
import Image from 'next/image';


export const CarouselItem = ({ object }) => {

   

    const handleClick = (url) => {
      window.open(url)
    }

    return (
        <div className="carouselItem">
            <div className="Carouseldiv">
                <h1 >{object.title}</h1>
                <div className="Projectimgdiv">
                <Image className='Projectimg' src={object.image} alt='breath1' width={310} height={200} />
                </div>
                <div className="techstackc">
                    <p>{object.techstack.join(" ")}</p>
                </div>
                <p >{object.description}</p>
                <div className="projectButton">
                    {object.glink && <button onClick={() => handleClick(object.glink)}> Github </button>} <button onClick={() => handleClick(object.link)}> Website </button>
                </div>
            </div>
        </div>
 )
}
