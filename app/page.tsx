"use client"
import * as React from "react"
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Project';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import { Carousel } from './Components/Projects/Components/Carousel/Carousel'
import useIsMobile from "./Components/Navigation/MobileNav/useIsMobile";

export default function Page() {
  const isDesktop = !useIsMobile()

  return <>
  
    <section className="App">
      <Home/>
    </section>

    <section>
      {isDesktop ? <Carousel /> : <Projects/>}
    </section>

    <section>
      <About/>
    </section>

    <section>
      <Contact/>
    </section>
    </>
}
