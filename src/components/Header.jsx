import React from "react";
import "../App.css";
import logo from "../logo-shopee.png";

class Header extends React.Component {
  render() {
    //this.props.balikan("ini balikan");
    return (
      <div className="Header">
        <img src={logo}></img>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Header;
