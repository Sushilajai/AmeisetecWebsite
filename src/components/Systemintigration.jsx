import React from 'react';
import { useEffect, useState } from 'react';

const images = [
  'img/ev-charging-icon.JPG',
  'img/Commercial & Industrial.PNG',
  'img/city-port-color-icon-illustration-vector.JPG',
  //'img/Blog_Image.webp',
];



  

export const SystemIntigration = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000); // 3 seconds per slide
    return () => clearInterval(intervalId);
  }, []);
  return (
     <div id="SystemIntigration" className="text-center" style={{padding: '100px'}}>
     <div className="container">
        <div className="section-title">
          <h2>System Integration</h2>
        </div>
        <div className="row">
             <div class="col-md-6 service-content mt-5 md:mt-0 md:order-1"><p class="mb-2 mt-4">A Battery 2nd Life Solution for Energy Storage refers to reusing electric vehicle (EV) batteries or other lithium-ion battery packs, which are no longer suitable for mobility but still have usable capacity (typically 70–80%), in stationary energy storage systems (ESS). This is a rapidly growing area in the circular economy and clean energy tech.</p></div>
    <div className="col-md-6">
    <div
      style={{
        height: '400px',
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
      }}
      
    />
    </div>
   
    </div>
</div>
</div>
);
};
