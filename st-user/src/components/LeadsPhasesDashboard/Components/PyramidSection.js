// import './PyramidSection.css';

// function PyramidSection() {
//   const sections = ['Idle', 'Buy', 'Sell expecting', 'Afterburn', 'Max altitude', 'Good sell', 'Late sell', 'Must cell'];

//   return (
//     <div className="pyramid-container">
//       {sections.map((section, index) => (
//         <div key={index} className={`pyramid-section section-${index}`}>
//           <span>{section}</span>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PyramidSection;

import React, { useState } from 'react';
import './PyramidSection.css';
import DotIdle from '../Buttons/DotIdle';
import DotBuy from '../Buttons/DotBuy';
import DotSellExpected from '../Buttons/DotSellExpected';
import DotAfterburn from '../Buttons/DotAfterBurn';
import DotMaxAltitude from '../Buttons/DotMaxAltitude';
import DotGoodSell from '../Buttons/DotGoodSell';
import DotLateSell from '../Buttons/DotLateSell';
import DotMustSell from '../Buttons/DotMustSell';
import IdleSection from '../Sections/IdleSection';
import BuySection from '../Sections/BuySection';
import SellExpectingSection from '../Sections/SellExpectingSection';
import AfterburnSection from '../Sections/AfterburnSection';
import MaxAltitudeSection from '../Sections/MaxAltitudeSection';
import GoodSellSection from '../Sections/GoodSellSection';
import LateSellSection from '../Sections/LateSellSection';
import MustSellSection from '../Sections/MustSellSection';

// Array of sections with their corresponding components and image file paths
const sections = [
    { name: 'Idle', component: <DotIdle />, image: require('./../Assets/idle.png') },
    { name: 'Buy', component: <DotBuy />, image: require('./../Assets/buy.png') },
    { name: 'Sell expecting', component: <DotSellExpected />, image: require('./../Assets/sell expecting.png') },
    { name: 'Afterburn', component: <DotAfterburn />, image: require('./../Assets/afterburn.png') },
    { name: 'Max altitude', component: <DotMaxAltitude />, image: require('./../Assets/maxAlt.png') },
    { name: 'Good sell', component: <DotGoodSell />, image: require('./../Assets/goodsell.png') },
    { name: 'Late sell', component: <DotLateSell />, image: require('./../Assets/latesell.png') },
    { name: 'Must cell', component: <DotMustSell />, image: require('./../Assets/mustsell.png') },
];
  
function PyramidSection() {
    const [showPopup, setShowPopup] = useState(false);
    const [currentSection, setCurrentSection] = useState(null);

    const handleSectionClick = (index) => {
        setCurrentSection(sections[index]);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="pyramid-container">
            <IdleSection/>
            <BuySection/>
            <SellExpectingSection/>
            <AfterburnSection/>
            <MaxAltitudeSection/>
            <GoodSellSection/>
            <LateSellSection/>
            <MustSellSection/>
{/*             
            {sections.map((section, index) => (
                <div
                    key={index}
                    className={`pyramid-section section-${index}`}
                    onClick={() => handleSectionClick(index)}
                >
                    <img src={section.image} alt={section.name} className="section-image" />
                    <span className="section-name">{section.name}</span>
                </div>
            ))}

            {showPopup && (
                <div className="popup-overlay" onClick={handleClosePopup}>
                    <div className="popup-box" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={handleClosePopup}>×</button>
                        {currentSection && currentSection.component}
                    </div>
                </div>
            )} */}
        </div>
    );
}

export default PyramidSection;