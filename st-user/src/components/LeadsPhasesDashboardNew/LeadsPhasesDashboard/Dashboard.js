// // import React, { useState, useEffect, useRef } from 'react';
// // import './Dashboard.css';
// // import { gsap } from 'gsap';
// // import DotIdle from './Buttons/DotIdle';
// // import DotBuy from './Buttons/DotBuy';
// // import DotSellExpected from './Buttons/DotSellExpected';
// // import DotMaxAltitude from './Buttons/DotMaxAltitude';
// // import DotGoodSell from './Buttons/DotGoodSell';
// // import DotLateSell from './Buttons/DotLateSell';
// // import DotMustSell from './Buttons/DotMustSell';

// // const sections = ['idle', 'buy', 'sellExpecting', 'afterburn', 'maxAltitude', 'goodSell', 'lateSell', 'mustSell'];

// // const Dashboard = () => {
// //   const [showPopup, setShowPopup] = useState(false);
// //   const [currentDot, setCurrentDot] = useState(0); // Use index to control sections
// //   const sliderRef = useRef(null);

// //   // GSAP slider animation
// //   useEffect(() => {
// //     if (sliderRef.current) {
// //       gsap.to(sliderRef.current, {
// //         xPercent: -100 * currentDot,
// //         ease: "power3.inOut",
// //         duration: 0.8
// //       });
// //     }
// //   }, [currentDot]);

// //   const handleClosePopup = () => {
// //     setShowPopup(false);
// //   };

// //   const handleDotClick = (index) => {
// //     setShowPopup(true);
// //     setCurrentDot(index);
// //   };

// //   const handleNext = () => {
// //     if (currentDot < sections.length - 1) {
// //       setCurrentDot(currentDot + 1);
// //     }
// //   };

// //   const handlePrev = () => {
// //     if (currentDot > 0) {
// //       setCurrentDot(currentDot - 1);
// //     }
// //   };

// //   return (
// //     <div className="dashboard-container">
// //       <div className="slider-wrapper">
// //         <div className="slider" ref={sliderRef}>
// //           {/* Each card representing a section */}
// //           {sections.map((section, index) => (
// //             <div className={`section ${section}`} key={index}>
// //               <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
// //               {/* Clickable dot inside each card */}
// //               <div className="dot" onClick={() => handleDotClick(index)}></div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Navigation Buttons */}
// //       <button className="prev-button" onClick={handlePrev} disabled={currentDot === 0}>
// //         <img src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-back-icon-png-image_4231989.jpg" alt="Previous" />
// //       </button>
// //       <button className="next-button" onClick={handleNext} disabled={currentDot === sections.length - 1}>
// //         <img src="https://png.pngtree.com/png-clipart/20190903/original/pngtree-right-arrow-png-image_4421150.jpg" alt="Next" />
// //       </button>

// //       {/* Popup Display */}
// //       {showPopup && (
// //         <div className="popup-overlay">
// //           <div className="popup-box">
// //             <button className="close-button" onClick={handleClosePopup}>Close</button>
// //             {/* Render the respective component based on clicked dot */}
// //             {sections[currentDot] === 'idle' && <DotIdle />}
// //             {sections[currentDot] === 'buy' && <DotBuy />}
// //             {sections[currentDot] === 'sellExpecting' && <DotSellExpected />}
// //             {sections[currentDot] === 'afterburn' && <DotMaxAltitude />}
// //             {sections[currentDot] === 'maxAltitude' && <DotMaxAltitude />}
// //             {sections[currentDot] === 'goodSell' && <DotGoodSell />}
// //             {sections[currentDot] === 'lateSell' && <DotLateSell />}
// //             {sections[currentDot] === 'mustSell' && <DotMustSell />}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Dashboard;


// import React, { useState } from 'react';
// import './Dashboard.css';
// import DotIdle from './Buttons/DotIdle';
// import DotBuy from './Buttons/DotBuy';
// import DotSellExpected from './Buttons/DotSellExpected';
// import DotMaxAltitude from './Buttons/DotMaxAltitude';
// import DotGoodSell from './Buttons/DotGoodSell';
// import DotLateSell from './Buttons/DotLateSell';
// import DotMustSell from './Buttons/DotMustSell';

// const sections = ['idle', 'buy', 'sellExpecting', 'afterburn', 'maxAltitude', 'goodSell', 'lateSell', 'mustSell'];

// const Dashboard = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [currentDot, setCurrentDot] = useState(0);

//   const handleDotClick = (index) => {
//     setShowPopup(true);
//     setCurrentDot(index);
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="slider-wrapper">
//         {sections.map((section, index) => (
//           <div className={`section ${section}`} key={index}>
//             <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
//             <div className="dot" onClick={() => handleDotClick(index)}></div>
//           </div>
//         ))}
//       </div>

//       {/* Popup Display */}
//       {showPopup && (
//         <div className="popup-overlay">
//           <div className="popup-box">
//             {/* Conditionally render components */}
//             {sections[currentDot] === 'idle' && <DotIdle />}
//             {sections[currentDot] === 'buy' && <DotBuy />}
//             {sections[currentDot] === 'sellExpecting' && <DotSellExpected />}
//             {sections[currentDot] === 'afterburn' && <DotMaxAltitude />}
//             {sections[currentDot] === 'maxAltitude' && <DotMaxAltitude />}
//             {sections[currentDot] === 'goodSell' && <DotGoodSell />}
//             {sections[currentDot] === 'lateSell' && <DotLateSell />}
//             {sections[currentDot] === 'mustSell' && <DotMustSell />}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

import Header from './Components/Header';
import PyramidSection from './Components/PyramidSection';
import Footer from './Components/Footer';
import './Dashboard.css';

function App() {
  return (
    <div className="App">
      <Header />
      <PyramidSection />
      <Footer />
    </div>
  );
}

export default App;