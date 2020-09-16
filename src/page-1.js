import React, { Component } from "react";
import pic from "./assets/Bg.png";
import icon from "./assets/Tiffinia_icon_small.png";
import './style.css'
import { Link } from 'react-router-dom';

export default class Page_one extends Component {
  render() {
    return (
      <div>

        <div>
          <img src={pic} alt="mypic" style={{ "width": "100%" }} />
        </div>
        <div>
          <Link to="/page_2"><img src={icon} alt="mypic" className="icon-img"/></Link>
        </div>
      </div>
    );
  }
}