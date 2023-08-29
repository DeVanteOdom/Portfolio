"use client"
import Link from "next/link"
import { Fade as Hamburger } from 'hamburger-react'
import React, { useState, useRef, useEffect} from "react";
import './MobileNav.css';
import { usePageContext } from "../../../Context/PageContext";


const MobileNav = () => {
  const { homeRef, projectsRef, aboutRef, ContactRef } = usePageContext();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navRef = useRef(null)


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
      const y = (homeRef.current as any).getBoundingClientRect().top +  window.scrollY - 80;
      (window as any).scrollTo({top: y, behavior: "smooth"})
    } 
  }

  const handleProjectsClick = () => {
    setNavbarOpen(false)
    if (projectsRef && projectsRef.current) {
      const y = (projectsRef.current as any).getBoundingClientRect().top +  window.scrollY - 80;
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
      const y = (ContactRef.current as any).getBoundingClientRect().top +  window.scrollY - 80;
      (window as any).scrollTo({top: y, behavior: "smooth"})
    } 
  }

  const handleClickR = (url: any) => {
    window.open(url)
  }


  return (
    <nav className="nav" ref={navRef}>
      <Hamburger toggled={navbarOpen} toggle={setNavbarOpen} rounded distance="lg" duration={0.3} size={45} />
      <button className='toggle' onClick={() => setNavbarOpen((prev) => !prev)} />
      <div className="mobName">
            <p onClick={handleHomeClick}>DeVante.Dev</p>
      </div>
      <div className="links">
        <ul className={`menu-nav ${navbarOpen ? 'show-menu' : ''}`}>
          <li onClick={handleHomeClick}>HOME</li>
          <li onClick={handleProjectsClick}>PROJECTS</li>
          <li onClick={handleAboutClick}>ABOUT</li>
          <li onClick={handleContactClick}>CONTACT</li>
          <li onClick={()=>handleClickR("https://docs.google.com/document/d/1SHW4iVU32WuQ8nmy_sLAp9BRKWPSyW7_79Y-UOT661E/edit?usp=sharing")}>RESUME</li>
        </ul>

      </div>
      <Link href="/" className="emoji" onClick={() => setNavbarOpen(false)}>  </Link>
    </nav>
  );
}

export default MobileNav;