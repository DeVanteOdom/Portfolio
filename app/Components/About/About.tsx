"use client"
import React, { useState } from "react";
import localFont from 'next/font/local'
import Link from 'next/link';
import './About.css';
import { usePageContext } from '../../Context/PageContext';
import TrackVisibility from "../Utils/Tracker/Tracker";

const SucroseBold = localFont({ src: '../../assets/fonts/SucroseBoldThree.ttf' })
const Raleway = localFont({ src: '../../assets/fonts/Raleway.ttf' })

const About = () => {

  const {aboutRef} = usePageContext();
  const [isVisible, setIsVisible] = useState(false);

    return <TrackVisibility threshold={0.1} onVisible={()=> setIsVisible(true)}>
    <div className="aboutDiv">
      <div className={"aboutContent " + (isVisible ? "fade-in" : '')} ref={aboutRef}>
        <h1 className={SucroseBold.className }> About </h1>
        <p>I’m an ambitious Front-End Developer based in Austin, TX. I work with the React framework to make sure my apps are fast, modern, Intuitive and most importantly representive of your vision.</p>
        </div>
        <p className={'quote ' + (isVisible ? "slide" : '')}>“If you can dream it, I can build it.” </p>
        <div className={"aboutContent " + (isVisible ? "fade-in" : '')} >
        <p>My goal as a developer is to provide my clients and employers with a professional, painless and positive experience.</p>
        </div>
    </div>
    </TrackVisibility>
    
  }
  
  export default About;