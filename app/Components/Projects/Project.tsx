"use client"
import React from 'react';
import localFont from 'next/font/local'
import { ProjectType } from './types/ProjectType.js';
import ProjectTemplate from './ProjectTemplate/ProjectTemplate';
import './Project.css'
import { usePageContext } from '../../Context/PageContext';


//Imported Images
import DuelBlog from './assets/images/DuelBlog.png'
import Threads from './assets/images/galacticthreads.png'
import Remedy from './assets/images/applianceremedy.png'
import Lodge from './assets/images/baldridgelodge.png'


 
//Imported Fonts
const SucroseBold = localFont({ src: '../../assets/fonts/SucroseBoldThree.ttf' })
const Raleway = localFont({ src: '../../assets/fonts/Raleway.ttf' })

const Projects = () => {

  const {projectsRef} = usePageContext();

  const projects: ProjectType[] = [{
    glink: "",
    link: "https://galaticthreads.com/", 
    image: Threads.src,
    title: "Galactic Threads",
    techstack: ["React","Typscript","Next JS", "JSON"],
    description: "Galactic Threads is an online store that features A.I. generated spaced themed apparel, as well as other space themed miscellaneous items."
  }, {
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


  return (
    <div className="contentDiv" >
      <h1 className={SucroseBold.className} ref={projectsRef}> Projects </h1>
      <div className="body">
        {projects.map((x) => <ProjectTemplate object={x} key={x.title} />)}
      </div>
    </div>
  )
}

export default Projects;
