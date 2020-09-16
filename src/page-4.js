import React from 'react';
import pic from "./assets/Bg.png";
import bg23 from './assets/Bg 2.3.png';
import object3 from './assets/object 3.png';
import button_main1 from './assets/button_main.png';
import './style.css';


const Page_four = () => {
    return (
        <div>
            <div>
                <img src={pic} alt='mypic' style={{ "width": "100" }} />
            </div>
            <div>
                <img src={bg23} alt="" className='bg23-img' />
            </div>
            <div>
                <img src={object3} alt="" className="object3-img" />
            </div>
            <h3 className="login1-cls">LOGIN</h3>
            <p className='enter-number1'>Enter your Mobile Number</p>
            <span className="mob-span">
                <p className="mob-p">+91|<input className="mob-input" type="text" placeholder="9874563210" /></p>
            </span>
            <div>
                <p className='Verify-otp'>Verify OTP</p>
                <input id="partitioned" className="partitioned" type="text" maxlength="6" />
            </div>

            <div>
                <img src={button_main1} alt="" className="button-main1-img" />
                <p className="proceed">PROCEED</p>
            </div>
        </div>
    )
}

export default Page_four
