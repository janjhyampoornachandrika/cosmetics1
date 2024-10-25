// // // // import React, { useState, useEffect } from 'react';
// // // // import './ImageSlider.css';
// // // // import ImageSlider from './Components/Homepage/ImageSlider';


// // // // const ImageSlider = () => {
// // // //     const images = [
// // // //         "/S1.jpeg",
// // // //         "/S2.jpeg",
// // // //         "/S3.jpeg",
// // // //         "/S4.jpeg",
// // // //     ];

// // // //     const [currentIndex, setCurrentIndex] = useState(0);

// // // //     useEffect(() => {
// // // //         const interval = setInterval(() => {
// // // //             setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
// // // //         }, 5000); // 5 seconds

// // // //         return () => clearInterval(interval); // Cleanup the interval on component unmount
// // // //     }, [images.length]);

// // // //     return (
// // // //         <div className="slider">
// // // //             <img src={images[currentIndex]} alt="Slider Image" className="slider-image" />
// // // //         </div>
// // // //     );
// // // // };

// // // // export default ImageSlider;


// // // import React from 'react';

// // // const ImageSlider = () => {
// // //   const images = [
// // //     "/S1.jpeg",
// // //     "/S2.jpeg",
// // //     "/S3.jpeg",
// // //     "/S4.jpeg"
// // //   ];

// // //   // Your slider code here
// // //   return (
// // //     <div className="image-slider">
// // //       {images.map((image, index) => (
// // //         <img key={index} src={image} alt={`Slide ${index + 1}`} />
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default ImageSlider;





// // import React, { useState, useEffect } from 'react';
// // import './ImageSlider.css';

// // const ImageSlider = () => {
// //   const images = [
// //     "/S1.jpeg",
// //     "/S2.jpeg",
// //     "/S3.jpeg",
// //     "/S4.jpeg"
// //   ];

// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   // Function to go to the next slide
// //   const nextSlide = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
// //   };

// //   // Function to go to the previous slide
// //   const prevSlide = () => {
// //     setCurrentIndex((prevIndex) => 
// //       prevIndex === 0 ? images.length - 1 : prevIndex - 1
// //     );
// //   };

// //   // Automatically change the image every 5 seconds
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       nextSlide();
// //     }, 5000); // 5 seconds interval
// //     return () => clearInterval(interval); // Clean up on unmount
// //   }, []);

// //   return (
// //     <div className="image-slider">
// //       <button className="prev" onClick={prevSlide}>
// //         &#10094; {/* Left Arrow */}
// //       </button>
      
// //       <img 
// //         src={images[currentIndex]} 
// //         alt={`Slide ${currentIndex + 1}`} 
// //         className="slide-image" 
// //       />

// //       <button className="next" onClick={nextSlide}>
// //         &#10095; {/* Right Arrow */}
// //       </button>
// //     </div>
// //   );
// // };

// // export default ImageSlider;




// import React, { useState, useEffect, useCallback } from 'react';

// const ImageSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const images = ["/S1.jpeg", "/S2.jpeg", "/S3.jpeg", "/S4.jpeg"];

//   // Memoize the nextSlide function using useCallback
//   const nextSlide = useCallback(() => {
//     setCurrentSlide((prev) => (prev + 1) % images.length);
//   }, [images.length]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();  // This function is now in the dependency array
//     }, 5000);

//     // Cleanup function to clear the interval on unmount
//     return () => clearInterval(interval);
//   }, [nextSlide]);  // Add nextSlide to the dependency array

//   return (
//     <div className="image-slider">
//       <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} />
//       {/* Add buttons or additional controls here */}
//     </div>
//   );
// };

// export default ImageSlider;


import React, { useState, useEffect, useCallback } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ["/S1.jpeg", "/S2.jpeg", "/S3.jpeg", "/S4.jpeg"];

  // Memoize the nextSlide function using useCallback
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();  // Auto-slide every 5 seconds
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [nextSlide]);

  return (
    <div className="image-slider">
      <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} className="slide-image" />

      {/* Previous Button */}
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>

      {/* Next Button */}
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
