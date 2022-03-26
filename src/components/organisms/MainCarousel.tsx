import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../index.css";

import CarouselType from "../../types/carousel.json"
type CarouselProps = {
  carousels : typeof CarouselType[]
}
const MainCarousel: React.FC<CarouselProps> = (props:CarouselProps) => {
    const {carousels} = props

  return (
    <Carousel 
      autoPlay 
      interval={5000}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      stopOnHover={true}
      swipeable={true}
      animationHandler="fade"
      >
        {
          carousels.map((data,index) => {
          return (   
            <div key={index} className="h-screen w-full">
                <p className="legend">{data.title}</p>
                <picture>
                  {/* 幅1000px以上なら表示 */}
                  <source srcSet={data.image_pc} media="(min-width: 1000px)"/>
                  <img src={data.image_sp} alt={data.alternate_text}/>
                </picture>
            </div>
            )
          })
        }
  </Carousel>
  )
}


export default MainCarousel;