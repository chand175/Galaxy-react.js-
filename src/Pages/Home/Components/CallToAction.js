import React from 'react'
import { useState } from 'react'
import Model from './Model'

const CallToAction = () => {

    const [model , setModel]= useState(false)

    const handleClick=()=>{
        setModel(!model)
    }
  return (
    <div>
        <div className="call-to-action">

        <h1> Hurry Up Book Your Tickets ! </h1>
        <button onClick={handleClick}> Know More!</button>
      
        </div>
        {
            model && <Model handleClick={handleClick}/>
        }
     
    </div>
  )
}

export default CallToAction
