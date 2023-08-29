"use client"
import React, { useState } from "react";
import localFont from 'next/font/local'
import { CarouselItem } from "./CarouselItem";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { ImRadioUnchecked } from 'react-icons/im';
import { ImRadioChecked2 } from 'react-icons/im';
import { usePageContext } from '../../../../Context/PageContext';
import DuelBlog from '../../assets/images/DuelBlog.png'
import Threads from '../../assets/images/galacticthreads.png'
import Remedy from '../../assets/images/applianceremedy.png'
import Lodge from '../../assets/images/baldridgelodge.png'
import './Carousel.css'
import TrackVisibility from "../../../Utils/Tracker/Tracker";

const SucroseBold = localFont({ src: '../../../../assets/fonts/SucroseBoldThree.ttf' })

 export const Carousel = () => {
    
    const [isVisible, setIsVisible] = useState(false)

    const [activeIndex, setActiveIndex] = useState(0);

    const {projectsRef} = usePageContext();

    const projects = [ {
        glink: "",
        link: "https://galaticthreads.com/", 
        image: Threads.src,
        title: "Galactic Threads",
        techstack: ["React","Typscript","Next JS", "JSON"],
        description: "Galactic Threads is an online store that features A.I. generated spaced themed apparel, as well as other space themed miscellaneous items."
      },  {
        glink: "https://github.com/",
        link: "https://applianceremedy.com/",
        image: Remedy.src,
        title: "Appliance Remedy",
        techstack: ["React","Typscript"],
        description: "Appliance Remedy is a website made to advertise an appliance repair company based in Austin, Texas. The website informs customers what services Appliance Remedy provides and allows them to request appointments in the contact form."
      }, {
        glink: "https://github.com/",
        link: "",
        image: DuelBlog.src,
        title: "Duel Blog",
        techstack: ["React", "JSON"],
        description: "Duel Blog is a website I made for a Content Creator to document their experince playing the card game Yugioh. The website features a decklist section, blog section and links to the content creators Twitch and Youtube."
      }, {
        glink: "",
        link: "https://baldridgelodge.org/",
        image: Lodge.src,
        title: "Bald Ridge Lodge",
        techstack: ["WordPress","HTML","CSS"],
        description: "Bald Ridge Lodge is a charity website I made for a boys home based in Atlanta, Georgia. The website features information about the organization, as well as its programs. It also provides information on how people can volunteer and send in contributions."
      }]
      
    const updateIndex = (newIndex) => {
        if (newIndex < 0 ) {
            newIndex = 0;
        } else if (newIndex >= projects.length) {
            newIndex = projects.length - 1;
        };
         
        setActiveIndex(newIndex);
    };

    return <TrackVisibility threshold={0.1} onVisible={()=> setIsVisible(true)}>
        
        <div className="contentDiv" >

            <h1 className={SucroseBold.className} ref={projectsRef}> Projects </h1>

            <div className={"carousel " + (isVisible ? "fade-in" : '')}>
                <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                    {projects.map((x) => {
                        return <CarouselItem object={x} key={x.title} />
                    })}
                </div>

                <div className="carouselButtons">
                    <button onClick={() => { updateIndex(activeIndex - 1) }} className="buttonArrow">
                        <BsFillArrowLeftCircleFill />
                    </button>

                    <div className="indicators">
                        {projects.map((x, index) => {
                            return (
                                <button key={index+"button unique"} onClick={() => { updateIndex(index) }} className="indicatorButtons">
                                    {index === activeIndex ? <ImRadioChecked2 /> : <ImRadioUnchecked />}
                                </button>
                            )
                        })}
                    </div>

                    <button onClick={() => { updateIndex(activeIndex + 1) }} className="buttonArrow">
                        <BsFillArrowRightCircleFill />
                    </button>
                </div>
            </div>
        </div>
    </TrackVisibility>
};



