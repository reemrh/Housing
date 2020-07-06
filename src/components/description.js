import React from 'react';
import '../App.css';
import dots_bg from '../includes/imgs/dot_bk.png';
import description from '../includes/imgs/description_img.png';

function Description() {
  return (
    <div className="description">
        <img src={dots_bg} alt="dots-backgroud" className="dots_bg"/>
        <div className="description_wrap">
            <div>
                <h1>New Living for Your Dreaming</h1>
                <p>
                    Fusce pretium dui quis est pretium lobortis. Vestibulum eu ex sed nibh condimentum tristique eu finibus lorem. Nullam sed eleifend massa. Morbi nulla turpis, pharetra et nisl eu, pellentesque molestie erat
                </p>
                <button> Contact Us </button>
            </div>
            <img src={description} alt="description img" />
        </div>         
    </div>
  );
}

export default Description;
