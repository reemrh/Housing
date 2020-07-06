import React from 'react';
import '../App.css';
import line from '../includes/imgs/line.png';

function Blockquote() {
  return (
    <div className="blockquotes">
        <p className="blockquote">“</p>
        <p className="blockquote-text">Cras nisl lacus, tincidunt vitae neque vitae, interdum iaculis tortor. Orci varius natoque penatibus et magnis dis parturient montes
 nascetur ridiculus mus. Integer sit amet justo sed leo facilisis condimentum sit amet ac quam</p>
        <div><img src={line} alt="line"/> John Doe</div>

    </div>
  );
}

export default Blockquote;
