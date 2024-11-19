import React, { useState } from 'react';
import './AfterburnSection.css'; // Make sure to add your custom CSS file for Afterburn
import DotAfterburn from '../Buttons/DotAfterBurn'; // If you have a specific button component for Afterburn

const AfterburnSection = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="afterburn-section">
            {/* Sloped area with shaded color and dotted line */}
            <div className="afterburn-shaded-area"></div>
            <div className="sloped-line">
                {/* Dotted line */}
            </div>

            {/* Orange dot */}
            <div className="orange-dot"></div>

            {/* Red dot that opens the DotAfterburn component as a popup */}
            <span className="red-dot" onClick={togglePopup}></span>

            {/* Section label */}
            <p className="asection-label">Afterburn</p>

            {/* Bottom boxes (can be customized based on your layout) */}
            <div className="bottom-boxes">
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="afterburn-box"></div>
                ))}
            </div>

            {/* DotAfterburn Component Popup */}
            {showPopup && (
                <div className="popup">
                    <DotAfterburn /> {/* This will display DotAfterburn component */}
                    <button onClick={togglePopup}>Close</button>
                </div>
            )}
        </div>
    );
};

export default AfterburnSection;
