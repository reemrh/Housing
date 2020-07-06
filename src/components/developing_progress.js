import React from 'react';
import '../App.css';
import developing_Progress_img from '../includes/imgs/developing-Progress.png';
import dash from '../includes/imgs/dash.png';

function Developing_Progress() {
  return (
    <div className="developing-progress">

        <h1>Developing Progress </h1>
        <div className="developing-progress-wrap">
          
            <img src={developing_Progress_img} alt="developing-Progress img" width="32%"/>
            <div>
                <div className="phase">
                    <p className="phase_no">Phase #1 </p>
                    <p className="phase_title"><img src={dash} alt="dash" width="15"/> Buliding A <span className="completed">completed</span></p>
                    <p className="phase_description">Fusce pretium dui quis est pretium lobortis. Vestibulum eu ex sed nibh condimentum tristique eu finibus lorem. Nullam sed eleifend massa. Morbi nulla turpis, pharetra et nisl eu, pellentesque molestie erat</p>
                </div>
                <div className="phase">
                    <p className="phase_no">Phase #2 </p>
                    <p className="phase_title"><img src={dash} alt="dash" width="15"/> Buliding B <span className="completed">completed</span></p>
                    <p className="phase_description">Vestibulum eu ex sed nibh condimentum tristique eu finibus lorem. Nullam sed eleifend massa. Morbi nulla turpis, pharetra
 et nisl eu, pellentesque molestie erat</p>
                </div>
                <div className="phase">
                    <p className="phase_no">Phase #3 </p>
                    <p className="phase_title"><img src={dash} alt="dash" width="15"/> Buliding C <span className="in-progress">in Progress</span></p>
                    <p className="phase_description">Tristique eu finibus lorem. Nullam sed eleifend massa. Morbi nulla turpis, pharetra et nisl eu, pellentesque molestie erat</p>
                </div>
            </div>
        </div>         
    </div>
  );
}

export default Developing_Progress;
