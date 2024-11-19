import React, { useState } from 'react';
import './SellExpectingSection.css';
import DotSell from '../Buttons/DotSellExpected';

const SellExpectingSection = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="sell-section">
            {/* Sloped area with shaded color and dotted line */}
            <div className="sell-shaded-area"></div>
            <div className="ssloped-line">
                {/* Start and end dots */}
            </div>

            {/* Orange dots */}
            <div className="orange-dot orange-dot-top"></div>
            <div className="orange-dot orange-dot-bottom"></div>

            {/* Middle red dot that opens the DotSell component as a popup */}
            <span className="red-dot" onClick={togglePopup}></span>

            {/* Section label */}
            <p className="ssection-label">Sell expecting</p>

            {/* Bottom boxes */}
            <div className="bottom-boxes">
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="sell-box"></div>
                ))}
            </div>

            {/* DotSell Component Popup */}
            {showPopup && (
                <div className="popup">
                    <DotSell /> {/* This will display DotSell component */}
                    <button onClick={togglePopup}>Close</button>
                </div>
            )}
        </div>
    );
};

export default SellExpectingSection;
