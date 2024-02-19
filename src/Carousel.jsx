import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {shortList, list, longList} from './data';
import { FaQuoteRight } from "react-icons/fa";

const Carousel = () => {
    const [carousel, setCarousel] = useState(longList);
    var settings = {
        autoplay: true,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <Slider className='slick-container' {...settings}>
            {carousel.map((item) => {
                const {id, image, name, title, quote} = item;
                return <div className="slick-slide" key={id}>
                    <img src={image} alt={name} className='img'/>
                    <h2 className='name'>{name}</h2>
                    <h3 className='title'>{title}</h3>
                    <p className='text'>{quote}</p>
                    <FaQuoteRight className='icon'/>
                </div>
            })}
        </Slider>
    )
}

export default Carousel
