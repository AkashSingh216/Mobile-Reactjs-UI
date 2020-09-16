import React from 'react';
import pic from "./assets/Bg.png";
import bg22 from "./assets/Bg 2.2.png";
import object2 from "./assets/object 2.png"
import secondary_main from "./assets/button_secndry.png";
import icon_mobile from "./assets/icon _mobile.png";
import icon_fb from "./assets/icon _fb.png";
import icon_google from "./assets/icon _google.png";
import icon_mail from "./assets/icon _mail.png";
import './style.css';
import { Link } from 'react-router-dom';

const Page_three = () => {
    return (
        <div>
            <div>
                <img src={pic} alt='mypic' style={{ "width": "100" }} />
            </div>
            <div>
                <img src={bg22} alt="" className="bg22-img" />
            </div>
            <img src={object2} alt="" className="object2-img" />
            <div>
            <h3 className="login-cls">LOGIN</h3>
            </div>
            <div>
            <Link to='/page_4'>
            <img src={secondary_main} alt="" className="secondary-button"/>
            <p className='enter-number' style={{"color":"black"}}>Enter Your Mobile Number</p>
            <img src={icon_mobile} alt="" className="icon-mobile-img" />
            </Link>
            <div>
            <img src={secondary_main} alt="" className="secondary-button3"/>
            <p className='continue-with-fb'>Continue with facebook</p>
            <img src={icon_fb} alt="" className="icon-fb-img"/>
            <div>
            <img src={secondary_main} alt="" className="secondary-button4"/>
            <p className="continue-with-google">Continue with Google</p>
            <img src={icon_google} alt="" className="icon-google-img"/>
            <div>
            <img src={secondary_main} alt="" className="secondary-button5"/>
            <p className="continue-with-Email">Continue with Email</p>
            <img src={icon_mail} alt="" className="icon-mail-img"/>
            <div>
                <h4 className='continuing-cls'>By Continuing, You Agree To Our</h4>
                <p className="T-c">Terms of  Service & Privacy Policy</p>
            </div>


            </div>

            </div>
            </div>
            </div>
        </div>
    )
}

export default Page_three