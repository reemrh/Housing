import React from 'react';
import '../App.css';
import gallery_img1 from '../includes/imgs/gallery1.png';
import gallery_img2 from '../includes/imgs/gallery2.png';
import gallery_img3 from '../includes/imgs/gallery3.png';
import gallery_img4 from '../includes/imgs/gallery4.png';
import gallery_img5 from '../includes/imgs/gallery5.png';

function Gallery() {
  return (
    <div className="gallery">
        <h1>Gallery</h1>
        <div className="gallery-cards-wrap">
            <div className="gallery-card">
                <img src={gallery_img1} alt="gallery img" />               
            </div>
            <div className="gallery-card">
                <img src={gallery_img2} alt="gallery img" />               
            </div>
            <div className="gallery-card">
                <img src={gallery_img3} alt="gallery img" />               
            </div>
            <div className="gallery-card">
                <img src={gallery_img4} alt="gallery img" />               
            </div>
            <div className="gallery-card">
                <img src={gallery_img5} alt="gallery img" />               
            </div>
        </div>
    </div>
  );
}

export default Gallery;
