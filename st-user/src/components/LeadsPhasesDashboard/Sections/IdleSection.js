import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './IdleSection.css';
import DotIdle from '../Buttons/DotIdle';

const IdleSection = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="idle-section">

            {/* Sloped area with shaded color and dotted line */}
            <div className="idle-shaded-area"></div>
            <div className="idle-sloped-line"></div>

            {/* Middle red dot that opens the DotIdle component as popup */}
            <span className="red-dot" onClick={togglePopup}></span>

            {/* Section label */}
            <p className="section-label">Idle</p>

            {/* Bottom boxes */}
            <div className="bottom-boxes">
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="box"></div>
                ))}
            </div>

            {/* DotIdle Component Popup */}
            {showPopup && (
                <div className="popup">
                    <DotIdle />
                    <button onClick={togglePopup}>Close</button>
                </div>
            )}
        </div>
    );
};

export default IdleSection;
