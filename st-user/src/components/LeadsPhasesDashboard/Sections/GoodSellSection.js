import React, { useState } from 'react';
import './GoodSellSection.css';
import DotGoodSell from '../Buttons/DotGoodSell';

const GoodSellSection = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="good-sell-section">
            {/* Sloped area with shaded color and dotted line */}
            <div className="good-sell-shaded-area"></div>
            <div className="good-sloped-line">
                {/* Start and end dots */}
            </div>

            {/* Orange dots */}
            <div className="orange-dot orange-dot-top"></div>
            <div className="orange-dot orange-dot-bottom"></div>

            {/* Middle red dot that opens the DotGoodSell component as a popup */}
            <span className="red-dot" onClick={togglePopup}></span>

            {/* Section label */}
            <p className="section-label">Good Sell</p>

            {/* Bottom boxes */}
            <div className="bottom-boxes">
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="gsell-box"></div>
                ))}
            </div>

            {/* DotGoodSell Component Popup */}
            {showPopup && (
                <div className="popup">
                    <DotGoodSell /> {/* This will display DotGoodSell component */}
                    <button onClick={togglePopup}>Close</button>
                </div>
            )}
        </div>
    );
};

export default GoodSellSection;
