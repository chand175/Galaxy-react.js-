import React from 'react'

import {Link} from "react-router-dom"
import fb from '../../assests/mediaIcons/fb.png'
import insta from '../../assests/mediaIcons/insta.png'
import twitter from '../../assests/mediaIcons/twitter.png'

import "../Footer/Footer.css"

const Footer = () => {

  const mediaIcons = [fb, insta, twitter]
  return (
    <footer>
<h1 > GLX TRVL</h1>

<div className="links">
  <h3> Usefull links</h3>

  <div className="t-links">
    <Link to='/'> Home </Link>
    <Link to="/price">Pricing </Link>
   <Link to='/training'> Training</Link>
   <Link to='/contact'> Contact</Link>

  </div>

</div>

<div className="media-icons">
{
 mediaIcons.map((item)=>{
  return (
   
      <img src= {item} alt=""  key={item}/>
    
  )
 })
}

</div>


    </footer>
  )
}

export default Footer
