
import React, { useState } from 'react'

const Faq = () => {
    const Data=[   {Question : ' Question1',
        Answer :'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, inventore minima! Laudantium provident, suscipit maiores nihil accusamus quasi rerum adipisci omnis dolores totam aliquid ducimus, asperiores soluta quidem delectus doloribus'
    }  ,
    {Question : 'Question2',
        Answer :'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, inventore minima! Laudantium provident, suscipit maiores nihil accusamus quasi rerum adipisci omnis dolores totam aliquid ducimus, asperiores soluta quidem delectus doloribus'
    },
    {Question : 'Question3',
        Answer :'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, inventore minima! Laudantium provident, suscipit maiores nihil accusamus quasi rerum adipisci omnis dolores totam aliquid ducimus, asperiores soluta quidem delectus doloribus'
    },
    {Question : 'Question4',
        Answer :'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, inventore minima! Laudantium provident, suscipit maiores nihil accusamus quasi rerum adipisci omnis dolores totam aliquid ducimus, asperiores soluta quidem delectus doloribus'
    }, {Question : 'Question5',
        Answer :'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, inventore minima! Laudantium provident, suscipit maiores nihil accusamus quasi rerum adipisci omnis dolores totam aliquid ducimus, asperiores soluta quidem delectus doloribus'
    } ]

    const [selected , setSelected]= useState(null)

    const handleSelected = (index)=>{
        if(selected=== index ){
            return setSelected(null)
        }
        setSelected(index);
    }

  return (
    <div>
  <h1 className='heading'>FAQs</h1>

  <section className="faq">
    <div className="items">
        {
            Data.map((item,index)=>{
                return (
                    <>
                    <div className="wrapper" key={index} onClick={()=>handleSelected(index) }>

                    <div className="question" >
                    <h3>{item.Question} </h3>
                    <img src={require("../../../assests/arrow.png")} alt="" className= {selected === index ? "rotate" : ""} />
                        
                    </div>
                    


                    <div className={ selected === index ? "answer show" : "answer"}>
                        <p>{item.Answer} </p>
                    </div>

                    </div>
                    </>
                )

            })
        }
    </div>
  </section>
      
    </div>
  ) 
}

export default Faq
