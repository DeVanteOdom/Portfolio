"use client"
import './Home.css';
import localFont from 'next/font/local'
import Image from 'next/image';
import { usePageContext } from '../../Context/PageContext';
// import resume from '../../assets/Resume.pdf';


//Images
import breath1 from '../Home/assets/images/breath1.png';
import breath2 from '../Home/assets/images/breath2.png';
import breath3 from '../Home/assets/images/breath3.png';
import breath4 from '../Home/assets/images/breath4.png';

//Icons
import { FaReact } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {GiNotebook} from "react-icons/gi";



// Font files can be colocated inside of `pages`
const SucroseBold = localFont({ src: '../../assets/fonts/SucroseBoldThree.ttf' })
const Raleway = localFont({ src: '../../assets/fonts/Raleway.ttf' })


const Home = () => {

  const {homeRef} = usePageContext();
  
  const handleClick = (url: any) => {
    window.open(url)
  }


  return (
    <div className="div" ref={homeRef}>
      <h1 className={SucroseBold.className} > Front-End React Developer </h1>
      <p className={Raleway.className}> Hi, I&apos;m Devante Odom. A self-taught Front-End Developer Based in Austin, TX. </p>
      <div className="breath">
      <Image className='breath1' src={breath1} alt='breath1' width={70} height={0}/>
      <Image className='breath2' src={breath2} alt='breath1' width={70} height={0}/>
      <Image className='breath3' src={breath3} alt='breath1' width={70} height={0}/>
      <Image className='breath4' src={breath4} alt='breath1' width={70} height={0}/>
      </div>
      <div className='hometechStack'>
      <p className={Raleway.className} >Tech Stack | <FaReact/> <BiLogoJavascript/> <FaCss3Alt/> <FaHtml5/> <BiLogoTypescript/> </p>
      </div>
      <button> <FaGithub onClick={()=>handleClick("https://github.com/DeVanteOdom")}/> 
      <GiNotebook onClick={()=>handleClick("https://docs.google.com/document/d/1SHW4iVU32WuQ8nmy_sLAp9BRKWPSyW7_79Y-UOT661E/edit?usp=sharing")}> 
      </GiNotebook> 
      {/* <a href={resume} target="_blank" rel="noreferrer"></a>   */}
      </button>
    </div>
  )
}

export default Home;


