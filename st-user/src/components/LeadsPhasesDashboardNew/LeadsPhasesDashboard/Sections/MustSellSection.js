import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './MustSellSection.css';
import DotMustSell from '../Buttons/DotMustSell';

const MustSellSection = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="must-sell-section-new">
            <div className="must-sell-shaded-area-new"></div>
            {/* <div className="must-sell-sloped-line-new">
            </div> */}

            <span className="red-dot" onClick={togglePopup}></span>

            <div className="must-text-slider">
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


            <p className="section-label-new">Liquidate</p>


            {/* Bottom boxes */}
            {/* <div className="bottom-boxes">
                {[...Array(11)].map((_, index) => (
                    <div key={index} className="msell-box"></div>
                ))}
            </div> */}

            {showPopup && (
                <div class="popup">
                    <DotMustSell />
                    <button onClick={togglePopup}>Close</button>
                </div>
            )}
        </div>
    );
};

export default MustSellSection;
