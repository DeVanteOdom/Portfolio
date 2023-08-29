"use client"
import React, { FormEventHandler, useState } from "react";
import localFont from 'next/font/local'
import './Contact.css';
import { usePageContext } from '../../Context/PageContext';
import TrackVisibility from "../Utils/Tracker/Tracker";


const SucroseBold = localFont({ src: '../../assets/fonts/SucroseBoldThree.ttf' })

const Contact = () => {

  const {ContactRef} = usePageContext();
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [body, setBody] = useState("")
  const [error, setError] = useState("")

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formObject = {name, email, body}
    if(name === ""){
      setError("Name NOT entered.")
    }
    else if(email === ""){
      setError("Email NOT entered")
    }
    else if(body === ""){
      setError("Body NOT entered")
    } else {
      setName("")
      setEmail("")
      setBody("")
      setError("")

      
    fetch('/api/contact', {
      method: "POST",
      body: JSON.stringify(formObject)
    })
  }
}
return <TrackVisibility threshold={0.1} onVisible={()=> setIsVisible(true)}>

      <div className="ContactDiv" ref={ContactRef}>
        <h1 className={SucroseBold.className}> Contact </h1>
         <form onSubmit={handleSubmit}>
           <label className={"nameLabel " + (isVisible ? "slide" : '')} > Name : 
             <input type='text' className='name' value={name}  onChange={(e) => setName(e.target.value)}/>
           </label>
           <label className={"emailLabel " + (isVisible ? "slide2" : '')} > Email : 
             <input type='text' className='email'value={email} onChange={(e) => setEmail(e.target.value )}/>
           </label>
           <label className={"subjectLabel " + (isVisible ? "slide" : '')}> Body:
             <textarea  className='subject' value={body} onChange={(e) => setBody(e.target.value)}/>
           </label>
           {error && <p>{error}</p>}
           <input type="submit" className='submit'/>
         </form>

       </div>
       </TrackVisibility>
  }
  
  export default Contact;
