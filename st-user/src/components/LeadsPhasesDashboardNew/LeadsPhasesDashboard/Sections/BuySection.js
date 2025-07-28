import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './BuySection.css';
import DotBuy from '../Buttons/DotBuy';

const BuySection = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="buy-section-new">
            <div className="buy-shaded-area-new"></div>

            {/* <div className="buy-sloped-line-new"></div> */}

            <span className="red-dot" onClick={togglePopup}></span>

            <div className="buy-text-slider">
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

            <p className="section-label-new">Buy</p>

            {/* <div className="bottom-boxes">
                {[...Array(11)].map((_, index) => (
                    <div key={index} className="box"></div>
                ))}
            </div> */}

            {showPopup && (
                <div className="popup">
                    <DotBuy />
                    <button onClick={togglePopup}>Close</button>
                </div>
            )}
        </div>
    );
};

export default BuySection;
