import React from 'react'
import video from '../../../assests/video.mp4'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
      <video src={video} autoPlay loop muted></video>

<div className="container">
    <h1> Travel. Galaxy.</h1>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nesciunt!</p>


    <div className="buttons">
   <Link to='/training'> Try now! </Link>
   <Link to='/contact'> Lounch! </Link>

</div>
</div>



    </div>
  )
}

export default Hero
