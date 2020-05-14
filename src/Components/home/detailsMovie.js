import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";





class Detail extends Component {
  constructor() {
    super();
  
    };
  
  render() {
   
    return (
        <div className="detail">
            <h1>Detail DE FILM</h1> 

<h2>{this.props.el.id}</h2> <br/>
<h2>{this.props.el.name}</h2> <br/>
<h2>{this.props.el.descrition}</h2> <br/>
<h2>{this.props.el.rating}</h2> <br/>
<h2>{this.props.el.image}</h2> <br/>
            </div>
        );
    }
  }
  export default Detail;
  