import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




import img1 from '../../../assests/sliderImgs/img1.jpg'
import img2 from '../../../assests/sliderImgs/img2.jpg'
import img3 from '../../../assests/sliderImgs/img3.jpg'
import img4 from '../../../assests/sliderImgs/img4.jpg'
import img5 from "../../../assests/sliderImgs/img5.jpg"


const Services = () => {

  const images= [img1,img2,img3,img4,img5,img1,img2,img3,img4,img5];


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <div>
      <h1 className='heading'> Services</h1>
<section className='services'>
<Slider {...settings}>



  {
 
 images.map((image)=>{
return(
  <div key={image}>

  <img src={image} alt="" />

  </div>
)
 })

  }

    </Slider>



</section>
    </div>
  )
}

export default Services
