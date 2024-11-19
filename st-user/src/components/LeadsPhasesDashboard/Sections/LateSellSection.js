import React, { useState } from 'react';
import './LateSellSection.css';
import DotLateSell from '../Buttons/DotLateSell';

const LateSellSection = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="late-sell-section">
            {/* Sloped area with shaded color and dotted line */}
            <div className="late-sell-shaded-area"></div>
            <div className="late-sloped-line">
                {/* Start and end dots */}
            </div>

            {/* Orange dots */}
            {/* <div className="orange-dot orange-dot-top"></div>
            <div className="orange-dot orange-dot-bottom"></div> */}

            {/* Middle red dot that opens the DotLateSell component as a popup */}
            <span className="red-dot" onClick={togglePopup}></span>

            {/* Section label */}
            <p className="section-label">Late Sell</p>

            {/* Bottom boxes */}
            <div className="bottom-boxes">
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="lsell-box"></div>
                ))}
            </div>

            {/* DotLateSell Component Popup */}
            {showPopup && (
                <div className="popup">
                    <DotLateSell /> {/* This will display DotLateSell component */}
                    <button onClick={togglePopup}>Close</button>
                </div>
            )}
        </div>
    );
};

export default LateSellSection;
