import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Dashboard.css';
import DotIdle from './Buttons/DotIdle';
import DotBuy from './Buttons/DotBuy';
import DotSellExpected from './Buttons/DotSellExpected';
import DotMaxAltitude from './Buttons/DotMaxAltitude';
import DotGoodSell from './Buttons/DotGoodSell';
import DotLateSell from './Buttons/DotLateSell';
import DotMustSell from './Buttons/DotMustSell';

const Dashboard = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [currentDot, setCurrentDot] = useState(null);
    const dashboardRef = useRef(null);

    const handleClosePopup = () => {
        setShowPopup(false);
        setCurrentDot(null);
    };

    useEffect(() => {
        const sections = dashboardRef.current.querySelectorAll('.section');
        gsap.fromTo(sections, 
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.inOut' }
        );
    }, []);

    return (
        <div className="dashboard-container">
            <div className="dashboard-wrapper">
                <div className="dashboard" ref={dashboardRef}>
                    <div className="section idle" onClick={() => { setShowPopup(true); setCurrentDot('idle'); }}>
                        <span>Idle</span>
                        <div className="dot"></div>
                    </div>
                    <div className="section buy" onClick={() => { setShowPopup(true); setCurrentDot('buy'); }}>
                        <span>Buy</span>
                        <div className="dot"></div>
                    </div>
                    <div className="section sell-expecting" onClick={() => { setShowPopup(true); setCurrentDot('sellExpecting'); }}>
                        <span>Sell Expecting</span>
                        <div className="dot"></div>
                    </div>
                    <div className="section afterburn" onClick={() => { setShowPopup(true); setCurrentDot('afterburn'); }}>
                        <span>Afterburn</span>
                        <div className="dot"></div>
                    </div>
                    <div className="section max-altitude" onClick={() => { setShowPopup(true); setCurrentDot('maxAltitude'); }}>
                        <span>Max Altitude</span>
                        <div className="dot"></div>
                    </div>
                    <div className="section good-sell" onClick={() => { setShowPopup(true); setCurrentDot('goodSell'); }}>
                        <span>Good Sell</span>
                        <div className="dot"></div>
                    </div>
                    <div className="section late-sell" onClick={() => { setShowPopup(true); setCurrentDot('lateSell'); }}>
                        <span>Late Sell</span>
                        <div className="dot"></div>
                    </div>
                    <div className="section must-sell" onClick={() => { setShowPopup(true); setCurrentDot('mustSell'); }}>
                        <span>Must Sell</span>
                        <div className="dot"></div>
                    </div>
                </div>
            </div>

            {/* Popup Overlay */}
            {showPopup && (
                <div className="popup-overlay" onClick={handleClosePopup}>
                    <div className="popup-box" onClick={(e) => e.stopPropagation()}>
                        {/* Rendering respective dot content */}
                        {currentDot === 'idle' && <DotIdle handleClosePopup={handleClosePopup} />}
                        {currentDot === 'buy' && <DotBuy handleClosePopup={handleClosePopup} />}
                        {currentDot === 'sellExpecting' && <DotSellExpected handleClosePopup={handleClosePopup} />}
                        {currentDot === 'afterburn' && <DotMaxAltitude handleClosePopup={handleClosePopup} />}
                        {currentDot === 'maxAltitude' && <DotMaxAltitude handleClosePopup={handleClosePopup} />}
                        {currentDot === 'goodSell' && <DotGoodSell handleClosePopup={handleClosePopup} />}
                        {currentDot === 'lateSell' && <DotLateSell handleClosePopup={handleClosePopup} />}
                        {currentDot === 'mustSell' && <DotMustSell handleClosePopup={handleClosePopup} />}

                        {/* Close Button inside the popup */}
                        {/* <button className="close-button" onClick={handleClosePopup}>Close</button> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
