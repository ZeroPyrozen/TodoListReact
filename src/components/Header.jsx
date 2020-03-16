import React from "react";
import "../App.css";
import logo from "../logo-shopee.png";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    console.log("menampilkan data redux dari header:", this.props.reduxTask);
    //this.props.balikan("ini balikan");
    return (
      <div className="Header">
        <img src={logo}></img>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reduxTask: state.task
  };
};

export default connect(mapStateToProps)(Header);
