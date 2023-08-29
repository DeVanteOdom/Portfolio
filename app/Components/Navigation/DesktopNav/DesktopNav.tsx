"use client"
import React, { useState, useRef, useEffect} from "react";
import { usePageContext } from "../../../Context/PageContext";
import "./DesktopNav.css";

const DesktopNav = () => {

  const { homeRef, projectsRef, aboutRef, ContactRef } = usePageContext();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handler = (event: { target: any; }) => {
      if (
        navbarOpen &&
        navRef.current &&
        !(navRef.current as any).contains(event.target)
      ) {
        setNavbarOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
    };
  }, [navbarOpen]);

  const handleHomeClick = () => {
    setNavbarOpen(false)
    if (homeRef && homeRef.current) {
      const y = (homeRef.current as any).getBoundingClientRect().top +  window.scrollY - 0;
      (window as any).scrollTo({top: y, behavior: "smooth"})
    } 
  }

  const handleProjectsClick = () => {
    setNavbarOpen(false)
    if (projectsRef && projectsRef.current) {
      const y = (projectsRef.current as any).getBoundingClientRect().top +  window.scrollY - 64;
      (window as any).scrollTo({top: y, behavior: "smooth"})
    } 
  }

  const handleAboutClick = () => {
    setNavbarOpen(false)
    if (aboutRef && aboutRef.current) {
      const y = (aboutRef.current as any).getBoundingClientRect().top +  window.scrollY - 80;
      (window as any).scrollTo({top: y, behavior: "smooth"})
    } 
  }

  const handleContactClick = () => {
    setNavbarOpen(false)
    if (ContactRef && ContactRef.current) {
      (ContactRef.current as any).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start"
      });
    } 
  }

  const handleClickR = (url: any) => {
    window.open(url)
  }

    return (

          <nav className="deskNav" ref={navRef}>

            <div className="navName">
            <p onClick={handleHomeClick}>DeVante.Dev</p>
            </div>
            <div className="navLinks">
            <button onClick={handleHomeClick} className="hoBut">HOME</button>
            <button onClick={handleProjectsClick}>PROJECTS</button>
            <button onClick={handleAboutClick}>ABOUT</button>
            <button onClick={handleContactClick}>CONTACT</button>
            <button onClick={()=>handleClickR("https://docs.google.com/document/d/1SHW4iVU32WuQ8nmy_sLAp9BRKWPSyW7_79Y-UOT661E/edit?usp=sharing")} className="resBut">RESUME</button>
            </div>

          </nav>
      
    )
}

export default DesktopNav