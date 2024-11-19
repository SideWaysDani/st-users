import React, { useState } from 'react';
import './MaxAltitudeSection.css';
import DotMaxAltitude from '../Buttons/DotMaxAltitude';

const MaxAltitudeSection = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="max-altitude-section">
            {/* Pointy Top with shading */}
            <div className="pointy-top-shaded"></div>

            {/* Dashed Lines */}
            <div className="top-dashed-line"></div>
            <div className="middle-dashed-line"></div>
            <div className="bottom-dashed-line"></div>

            {/* Labels and Orange Dots */}
            <div className="label-dot-container" style={{ top: '60px' }}>
                <span className="orange-dot"></span>
                <p className="label-text">Interplatform</p>
            </div>

            <div className="label-dot-container" style={{ top: '160px' }}>
                <span className="orange-dot"></span>
                <p className="label-text">Stellar</p>
            </div>

            <div className="label-dot-container" style={{ top: '260px' }}>
                <span className="orange-dot" onClick={togglePopup}></span>
                <p className="label-text">alpha</p>
            </div>

            {/* Bottom Label */}
            <p className="section-label">Max altitude</p>

            {/* Bottom Boxes */}
            <div className="bottom-boxes">
                {[...Array(10)].map((_, index) => (
                    <div key={index} className="max-altitude-box"></div>
                ))}
            </div>

            {/* DotMaxAltitude Component Popup */}
            {showPopup && (
                <div className="popup">
                    <DotMaxAltitude /> {/* This will display DotMaxAltitude component */}
                    <button onClick={togglePopup}>Close</button>
                </div>
            )}
        </div>
    );
};

export default MaxAltitudeSection;
