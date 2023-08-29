"use client"
import React, { useState } from "react";
import Image from 'next/image';
import localFont from 'next/font/local'
import { ProjectType } from "../types/ProjectType";
import './ProjectTemplate.css'
import TrackVisibility from "../../Utils/Tracker/Tracker";


//Imported Fonts
const SucroseBold = localFont({ src: '../../../assets/fonts/SucroseBoldThree.ttf' })
const Raleway = localFont({ src: '../../../assets/fonts/Raleway.ttf' })

type ProjectTemplateProps = {
  object: ProjectType
}

const ProjectTemplate = ({ object }: ProjectTemplateProps) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = (url: any) => {
    window.open(url)
  }


  return <TrackVisibility threshold={0.5} onVisible={()=> setIsVisible(true)}>
    <div className={"Projectdiv " + (isVisible ? "fade-in" : '')}>
      <h1 className={SucroseBold.className}>{object.title}</h1>
      <div className="Projectimgdiv">
        <Image className='Projectimg' src={object.image} alt='breath1' width={310} height={200} />
      </div>
      <div className="techstack">
        <p>{object.techstack.join(" ")}</p>
      </div>
      <p className={Raleway.className}>{object.description}</p>
      <div className="projectButton">
        {object.glink && <button onClick={() => handleClick(object.glink)}> Github </button>} <button onClick={() => handleClick(object.link)}> Website </button>
      </div>
    </div>
  </TrackVisibility>
}

export default ProjectTemplate;