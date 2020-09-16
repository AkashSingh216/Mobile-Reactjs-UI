import React from 'react';
import pic from "./assets/Bg.png";
import bg2 from './assets/Bg 2.1.png';
import object1 from './assets/object 1.png';
import button_main from './assets/button_main.png';
import secondary_main from './assets/button_secndry.png';
import './style.css'
import { Link } from 'react-router-dom';

const Page_two = () => {
  return (
    <div>
      <div>
        <div>
          <img src={pic} alt="mypic" style={{ "width": "100%" }} />
        </div>
        <div>
          <img src={bg2} alt="" className="bg2-img"/>
        </div>
        <div>
          <img src={object1} alt="" className="object1-img"/>
        </div>
        <div>
          <h3 className="hurry-cls">
            Hurry!!
          </h3>
          <p className="hurry-cls-p">Hunger don't wait</p>
        </div>
        <div>
          <img src={button_main} alt="" className="main-button"/>
          <Link to="/page_3"><p className="get-start">Get Started</p></Link>
          <p className="get-start-sub">Avail best offers & discounts only for you</p>
        </div>
        <div>
          <img src={secondary_main} alt="" className="secondary-button"/>
          <p className="secondary-p">Continue without login</p>
        </div>
        <div>
          <img src={secondary_main} alt="" className="secondary-button2"/>
          <p className="secondary-p2">Already a Tiffina member? <Link to='/page_3'><strong className="secondary-p2-1" >Login</strong></Link></p>
        </div>
      </div>
    </div>
  )
}

export default Page_two