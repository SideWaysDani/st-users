import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './GoodSellSection.css';
import DotGoodSell from '../Buttons/DotGoodSell';

const GoodSellSection = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="good-sell-section-new">
            <div className="good-sell-shaded-area-new"></div>
            {/* <div className="good-sloped-line-new">
            </div> */}

            <span className="red-dot" onClick={togglePopup}></span>

            <div className="sell-text-slider">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    slidesPerView={1}
                    className="mySwiper"
                >
                    <SwiperSlide><p className="slider-text-new">Apple</p></SwiperSlide>
                    <SwiperSlide><p className="slider-text-new">Technology</p></SwiperSlide>
                    <SwiperSlide><p className="slider-text-new">+15</p></SwiperSlide>
                </Swiper>
            </div>

            <p className="section-label-new">Sell</p>

            {/* Bottom boxes */}
            {/* <div className="bottom-boxes">
                {[...Array(11)].map((_, index) => (
                    <div key={index} className="gsell-box"></div>
                ))}
            </div> */}

            {showPopup && (
                <div className="popup">
                    <DotGoodSell /> 
                    <button onClick={togglePopup}>Close</button>
                </div>
            )}
        </div>
    );
};

export default GoodSellSection;
