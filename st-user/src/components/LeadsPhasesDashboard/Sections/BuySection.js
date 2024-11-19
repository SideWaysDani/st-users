import React, { useState } from 'react';
import './BuySection.css';
import DotBuy from '../Buttons/DotBuy'; // Assuming there's a DotBuy component similar to DotIdle

const BuySection = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="buy-section">
            {/* Shaded area under the dotted sloped line */}
            <div className="buy-shaded-area"></div>

            {/* Dotted sloped line with dots */}
            <div className="buy-sloped-line">
                {/* <span className="dot start-dot"></span>
                <span className="dot end-dot"></span> */}
            </div>

            {/* Red dot in the middle that opens DotBuy component as popup */}
            <span className="red-dot" onClick={togglePopup}></span>

            {/* Section label */}
            <p className="section-label">Buy</p>

            {/* Bottom boxes */}
            <div className="bottom-boxes">
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="box"></div>
                ))}
            </div>

            {/* DotBuy Component Popup */}
            {showPopup && (
                <div className="popup">
                    <DotBuy /> {/* This will display DotBuy component */}
                    <button onClick={togglePopup}>Close</button>
                </div>
            )}
        </div>
    );
};

export default BuySection;
