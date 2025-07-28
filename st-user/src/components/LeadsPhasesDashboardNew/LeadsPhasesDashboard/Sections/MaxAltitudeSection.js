import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './MaxAltitudeSection.css';
import DotMaxAltitude from '../Buttons/DotMaxAltitude';

const MaxAltitudeSection = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="max-altitude-section-new">
            {/* Pointy Top with shading */}
            <div className="pointy-top-shaded-new"></div>

            {/* Dashed Lines */}
            <div className="top-dashed-line-new"></div>
            {/* <div className="altitude-text-slider altitude-text-slider-top"></div> */}
            <div className="altitude-text-slider altitude-text-slider-top">
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

            <div className="middle-dashed-line-new"></div>
            <div className="altitude-text-slider altitude-text-slider-middle" >
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

            <div className="bottom-dashed-line-new"></div>
            <div className="altitude-text-slider altitude-text-slider-bottom" >
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

            {/* Labels and Orange Dots */}
            <div className="label-dot-container label-dot-top">
                <span className="red-dot"></span>
                {/* <p className="label-text">Interplatform</p> */}
            </div>
            <div className="label-dot-container label-dot-middle">
                <span className="red-dot"></span>
                {/* <p className="label-text">Stellar</p> */}
            </div>
            <div className="label-dot-container label-dot-bottom">
                <span className="red-dot" onClick={togglePopup}></span>
                {/* <p className="label-text">Alpha</p> */}
            </div>

            {/* Bottom Label */}
            <p className="section-label-new">Max Altitude</p>

            {/* Bottom Boxes */}
            {/* <div className="bottom-boxes">
                {[...Array(11)].map((_, index) => (
                    <div key={index} className="max-altitude-box"></div>
                ))}
            </div> */}

            {/* DotMaxAltitude Component Popup */}
            {showPopup && (
                <div className="popup">
                    <DotMaxAltitude />
                    <button onClick={togglePopup}>Close</button>
                </div>
            )}
        </div>
    );
};

export default MaxAltitudeSection;
