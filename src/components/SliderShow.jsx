import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Import the CSS file for styling

const slides = [
  {
    image: "https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQOAN22wT1G-5OoEnDkS4GY9kuyRTSsY02tkOANuGb-Ot8XF-jBxYw7IAdC5oOzXx0pXaKGOMA6cpTILnb9sOlEL-SO9wQtOAV5T.webp?r=89d",
    title: "Culinary Class Wars",
    description: "From Michelin-star chefs to amateur cooks,100 contestants don their knives for a culinary war where you won't guess what's coming next--or who'll win."
  },
  {
    image: "https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQEAc2lbnI2eV8_UKNMpEGEuD-FBlKCfwiLFHXup7R2DaY2no1rQOLEl3tBL08KzqnLsnJGvZo2TWYvXQxuHLDkpSkR4v8U7RUxa.webp?r=605",
    title: "JAWAN",
  
  },
  {
    image: "https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcG05LjUna0lLGaqMJu1GhgX8ci7ZlcvP2yn_bUPkHlbNBzSecpufwHhmvQ9ga-nS_m0DqynS5-_q6Q7SuH9TIUzWykIkgDoFHw.webp?r=fda",
    // title: "Movie Title 3",
   
  },
  {
    image: "https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZLmhz0SxEZCkzlmbLUL1Ua7gpJDOi9RQoqaFBOb147HuFA20A9Os2m3XxZ41-kyDpcwCv1qcoKP-pVcfvlmjaq22mqpdZ_YKhntrJ6BkAx6RFZgohVEcSH2P94gbD0EVz1oK3I03bevxN_iCjPmGXPlrAqWfGibVcDdqlBuc8zPVet8ZkckIm0Ikb0EHq5acS365sU5AIP03POOztEd4AzQz78h2hYdhaoIbVzrMT0lT5sDuIji8sbokZlsaZkw0M_2Ptb2dmbQxieeMXRgcCukgCsoGcBMoi_b9RZjTuX05DNWRkIr7U4zkj4WQdrq-BhQK5B_7mzUYMO1DqIxFxg.webp?r=53d",
    // title: "Movie Title 4",

  }
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="slideshow-container">
      <div className="slide">
        <img src={slides[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
        <div className="slide-text">
          <h2>{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].description}</p>
          <div className="buttons">
            <button className="play-btn">▶ Play</button>
            <button className="info-btn">ℹ More Info</button>
          </div>
        </div>
      </div>
      <button onClick={goToPrevious} className="prev">❮</button>
      <button onClick={goToNext} className="next">❯</button>
    </div>
  );
};

export default Slideshow;
