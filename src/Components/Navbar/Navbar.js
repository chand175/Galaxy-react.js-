import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars ,FaTimes} from "react-icons/fa";
import { useState } from 'react';

import './Navbar.css';
const Navbar = () => {

  const [Click , setClick] = useState(false)

  const handleClick =()=>{
    setClick(!Click)
  };

  const [color , setColor] =  useState(false)

  const handleColor = () => {
    if(window.scrollY >= 120){
      setColor(true)
    }else{
      setColor(false)
    }

  }

    window.addEventListener('scroll' ,  handleColor)

  return (
    <nav className= {color ? "color" : ""}> 
        <div className="logo">
            <h1> GLX TRVL</h1>
        </div>
<div className={Click ? "menu active" : "menu"}>
    <Link to ='/'> Home </Link>
   <Link to="/price">Pricing </Link>
   <Link to='/training'> Training</Link>
   <Link to='/contact'> Contact</Link>
</div>
<div className="hambarger" onClick={handleClick}>
{
Click ? (<FaTimes style={{color:'white'}} size={25}/>) : <FaBars style={{color:'white'}} size={25}/>
}
</div>

    </nav>
  )
}

export default Navbar
