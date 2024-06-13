import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ["https://www.w3schools.com/css/paris.jpg", "https://assets.imgix.net/docs/road-sm.jpg",
   "https://www.w3schools.com/css/paris.jpg", "https://assets.imgix.net/docs/road-sm.jpg"];

  const previos = () => {
    setCurrentSlide((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  const next = () => {
    setCurrentSlide((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  
  useEffect(() => {
        setInterval(next, 5000);
//     const slideInterval =  
//     return () => clearInterval(slideInterval);
  }, []);
  return (
    <>
    <div className="mb-5">
        <button onClick={previos}>Previous</button>
        <img src={images[currentSlide]} className="slider_img"/>
        <button onClick={next}>Next</button>
    </div>
    </>
  );
};
export default Slider;