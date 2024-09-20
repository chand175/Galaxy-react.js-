

import "./Header.css"

import spaceImg from "../../assests/spaceImg1.jpg"

const Header = ({heading}) => {

const style={
  backgroundImage : `url(${spaceImg})`,
  backgroundPosition : "fixed",
  backgroundRepeat : "no-repeat",
  backgroundSize : 'cover'

}
 
  return (
    <div>
    

<section className="header" style={style}  >
<h1>{heading}</h1>
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum earum accusamus deserunt nisi explicabo itaque hic dignissimos? .</p>

</section>


    </div>
  )
}

export default Header
