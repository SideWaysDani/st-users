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

const sections = [
    { name: 'Idle', component: <DotIdle /> },
    { name: 'Buy', component: <DotBuy /> },
    { name: 'Sell expecting', component: <DotSellExpected /> },
    { name: 'Afterburn', component: <DotAfterburn /> },
    { name: 'Max altitude', component: <DotMaxAltitude /> },
    { name: 'Good sell', component: <DotGoodSell /> },
    { name: 'Late sell', component: <DotLateSell /> },
    { name: 'Must cell', component: <DotMustSell /> },
  ];
  
  function PyramidSection() {
    const [showPopup, setShowPopup] = useState(false);
    const [currentSection, setCurrentSection] = useState(null);
  
    const handleDotClick = (index) => {
      setCurrentSection(sections[index]);
      setShowPopup(true);
    };
  
    const handleClosePopup = () => {
      setShowPopup(false);
    };
  
    return (
      <div className="pyramid-container">
        {sections.map((section, index) => (
          <div key={index} className={`pyramid-section section-${index}`}>
            <span>{section.name}</span>
            <div className="dot" onClick={() => handleDotClick(index)}></div>
          </div>
        ))}
  
        {showPopup && (
          <div className="popup-overlay" onClick={handleClosePopup}>
            <div className="popup-box" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={handleClosePopup}>×</button>
              {currentSection && currentSection.component}
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default PyramidSection;