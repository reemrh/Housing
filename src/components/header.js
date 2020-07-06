import React from 'react';
import '../App.css';

// imgs
import header_img from '../includes/imgs/header.png';

function Header() {
    return (
        <div className="header">
            <div className="header_img_div">
                <img src={header_img} alt="header-img" />                
            </div>

            <div className="header_box_div">
                <div>
                    <div ><p className="box-title">Greenfield</p><small>Residence</small></div>
                </div>
                <form>
                    <label for="">Subscribe for lastest news!</label>
                    <input type="text" placeholder="Your Email" />
                    <hr />
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet lorem lobortis est rutrum ullamcorper.
 Praesent id lectus feugiat justo aliquam faucibus </p>
                    <br />
                    <a href="#">more <span> {'>'} </span></a>
                </form>

            </div>
            <div className="slider_arrows">
                <div> {`<`} </div>

                <div> &gt; </div>
            </div>

        </div>

    );
}

export default Header;
