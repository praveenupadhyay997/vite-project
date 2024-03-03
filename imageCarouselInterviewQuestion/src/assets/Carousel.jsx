import React, { useState } from "react";
import { imageConstants } from "./imageConstants";

const images = imageConstants;

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const nextImageTrack = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };
  const prevImageIndex = () => {
    setImageIndex((prev) => {
      if (prev - 1 < 0) {
        return images.length - 1;
      } else {
        return prev - 1;
      }
    });
  };
  return (
    <div className="imageCar">
      <button onClick={prevImageIndex}>Previous</button>
      {images.map((image, index) => {
        return (
          <img
            src={image}
            alt="image"
            key={index + "vwer" + image}
            className={index === imageIndex ? "show" : "hide"}
          />
        );
      })}
      <button onClick={nextImageTrack}>Next</button>
    </div>
  );
};

export default Carousel;
