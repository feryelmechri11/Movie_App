import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./detailMovie.css"




class Detail extends Component {
  constructor() {
    super();
  
    };
  
  render() {
   
    return (
        <div className="detail">
            
<div>
            <img src={this.props.el.image}  className="imgDetail" alt=""/> <br/>
            </div>
            <div className="detailDescription">
<h2>{this.props.el.name}</h2> <br/>
<h2 className="rateDetail">{this.props.el.rating}</h2> <br/>
<p className="PDescription">{this.props.el.description}</p> <br/>

</div>
            </div>
        );
    }
  }
  export default Detail;
  