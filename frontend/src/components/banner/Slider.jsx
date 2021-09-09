import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {
    Autoplay, Pagination
} from 'swiper/core';

const Slider = () => {

    SwiperCore.use([Pagination, Autoplay]);
    
    return (
        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
        }} pagination={{
            "clickable": true
        }} className="mySwiper">
            <SwiperSlide>
                <a href="#" className="w-full block h-80">
                    <img alt="covid 19" src="https://daily-news.gbjsolution.com/content/images/2015/09/warrior-pose.jpg" className="w-full object-cover" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#" className="w-full block h-80">
                    <img alt="covid 19" src="https://daily-news.gbjsolution.com/content/images/2015/09/oia-416136_1920.jpg" className="w-full object-cover" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#" className="w-full block h-80">
                    <img alt="covid 19" src="https://daily-news.gbjsolution.com/content/images/2015/09/ship.jpg" className="w-full object-cover" />
                </a>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider;
