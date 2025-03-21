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
            <div className="altitude-text-slider" style={{ top: '160px' }}>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    slidesPerView={1}
                    className="mySwiper"
                >
                    <SwiperSlide><p className="slider-text">Apple</p></SwiperSlide>
                    <SwiperSlide><p className="slider-text">Technology</p></SwiperSlide>
                    <SwiperSlide><p className="slider-text">+15</p></SwiperSlide>
                </Swiper>
            </div>

            <div className="middle-dashed-line-new"></div>
            <div className="altitude-text-slider" style={{ top: '200px' }}>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    slidesPerView={1}
                    className="mySwiper"
                >
                    <SwiperSlide><p className="slider-text">Apple</p></SwiperSlide>
                    <SwiperSlide><p className="slider-text">Technology</p></SwiperSlide>
                    <SwiperSlide><p className="slider-text">+15</p></SwiperSlide>
                </Swiper>
            </div>

            <div className="bottom-dashed-line-new"></div>
            <div className="altitude-text-slider" style={{ top: '240px' }}>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    slidesPerView={1}
                    className="mySwiper"
                >
                    <SwiperSlide><p className="slider-text">Apple</p></SwiperSlide>
                    <SwiperSlide><p className="slider-text">Technology</p></SwiperSlide>
                    <SwiperSlide><p className="slider-text">+15</p></SwiperSlide>
                </Swiper>
            </div>

            {/* Labels and Orange Dots */}
            <div className="label-dot-container" style={{ top: '150px' }}>
                <span className="red-dot"></span>
                {/* <p className="label-text">Interplatform</p> */}
            </div>

            <div className="label-dot-container" style={{ top: '250px' }}>
                <span className="red-dot"></span>
                {/* <p className="label-text">Stellar</p> */}
            </div>

            <div className="label-dot-container" style={{ top: '350px' }}>
                <span className="red-dot" onClick={togglePopup}></span>
                {/* <p className="label-text">Alpha</p> */}
            </div>

            {/* Bottom Label */}
            <p className="section-label">Max Altitude</p>

            {/* Bottom Boxes */}
            <div className="bottom-boxes">
                {[...Array(11)].map((_, index) => (
                    <div key={index} className="max-altitude-box"></div>
                ))}
            </div>

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
