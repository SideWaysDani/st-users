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
import BuySection from '../Sections/BuySection';
import MaxAltitudeSection from '../Sections/MaxAltitudeSection';
import GoodSellSection from '../Sections/GoodSellSection';
import MustSellSection from '../Sections/MustSellSection';

  
function PyramidSection() {
    const [showPopup, setShowPopup] = useState(false);
    const [currentSection, setCurrentSection] = useState(null);

    return (
        <div className="pyramid-container">
            {/* <IdleSection/> */}
            <BuySection/>
            {/* <SellExpectingSection/> */}
            {/* <AfterburnSection/> */}
            <MaxAltitudeSection/>
            <GoodSellSection/>
            {/* <LateSellSection/> */}
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


