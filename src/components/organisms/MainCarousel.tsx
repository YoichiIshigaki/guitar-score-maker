import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import CarouselType from "../../types/carousel.json"
type CarouselProps = {
  carousels : typeof CarouselType[]
}



const MainCarousel: React.FC<CarouselProps> = (props:CarouselProps) => {
    const {carousels} = props

    const test1 = "https://source.unsplash.com/random/1200x800?guitar"
    const test2 = "https://source.unsplash.com/random/1200x801?guitar"
    const test3 = "https://source.unsplash.com/random/1200x802?guitar"
    const test4 = "https://source.unsplash.com/random/1200x803?guitar"

    // const renderCarouselImages = carousels.map((data,index) => {
    //         <div key={index}>
    //           <a href={data.target_url}>
    //             <p className="legend">{data.title}</p>
    //             <img src={data.image_pc} alt={data.title}/>
    //           </a>
    //         </div>
    //       })

    // console.log(renderCarouselImages)
    // console.log(props)
    // console.log(typeof props)

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
            <div key={index}>
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