import React from 'react';
import { useEffect, useState } from 'react';

const images = [
  'img/OIP.webp',
  'img/Smart_City_hero5.webp',
  'img/OIP1.webp',
  //'img/Blog_Image.webp',
];



  

export const Consultingservices = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000); // 3 seconds per slide
    return () => clearInterval(intervalId);
  }, []);
  return (
     <div id="Consultingservices" className="text-center" style={{padding: '100px'}}>
     <div className="container">
        <div className="section-title">
          <h2>Consulting Services</h2>
        </div>
        <div className="row">
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
    <div class="service-content mt-5 md:mt-0 md:order-1"><h4 class="font-bold leading-[40px]">It is the most advanced digital marketing and it company.</h4><p class="mb-2 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p></div>
    </div>
</div>
</div>
);
};
