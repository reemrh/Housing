import React from 'react';
import '../App.css';
import card1 from '../includes/imgs/card3.png';
import card2 from '../includes/imgs/card1.png';
import card3 from '../includes/imgs/card2.png';

function Services() {
  return (
    <div className="services">
      <p>What You'll Get</p>
      <div className="service-cards">
          <div className="service-card">
            <img src={card1} />
            <p>Beautiful Interiors</p>
          </div>
         
         <div className="service-card">
            <img src={card2} />
            <p>Parking and Shopping</p>
         </div>
         <div className="service-card">
            <img src={card3} />
            <p>Wellness and Relax Places</p>
         </div>        
      </div>    
    </div>
  );
}

export default Services;
