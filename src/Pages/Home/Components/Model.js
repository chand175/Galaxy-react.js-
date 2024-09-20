import React from 'react'
import {FaTimes} from "react-icons/fa";
const Model = ({handleClick}) => {
  return (
    <div>
   <div className="overLay">
    <div className="model">
      <div className="close">
      <FaTimes style={{color:'white'}} size={25} onClick={handleClick}/>
      </div>
        <h1> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti porro cupiditate deserunt obcaecati ipsum fuga error exercitationem illo ab? Temporibus!</h1>
    </div>
   </div>




    </div>
  )
}

export default Model
