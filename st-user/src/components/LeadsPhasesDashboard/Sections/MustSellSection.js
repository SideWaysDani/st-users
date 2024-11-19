import React, { useState } from 'react';
import './MustSellSection.css';
import DotMustSell from '../Buttons/DotMustSell';

const MustSellSection = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="must-sell-section">
            {/* Sloped shaded area */}
            <div className="must-sell-shaded-area"></div>
            <div className="must-sell-sloped-line">
                {/* Start and end dots */}
            </div>

            {/* Orange dot */}
            <div className="orange-dot must-sell-dot"></div>

            {/* Middle dot for opening popup */}
            <span className="red-dot" onClick={togglePopup}></span>

            {/* Section label */}
            <p className="section-label">Must Sell</p>

            {/* Bottom boxes */}
            <div className="bottom-boxes">
                {[...Array(9)].map((_, index) => (
                    <div key={index} className="msell-box"></div>
                ))}
            </div>

            {/* Popup */}
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
