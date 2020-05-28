import React, { Component } from "react";
import "./favourite.css"
import { Label } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./footer";

export default class Favoris extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
      <div className="favourite">
        
        {this.props.favourites.map((el) => (
          <div className="fav">
             <div className="fav2">
            <img src={el.image} className="imgFav" />
            </div>
            <div className="fav1">
             <h1 className="h2Fav">{el.name}</h1>
             <h3 className="h3Fav">{el.rating}</h3>
             <span
              variant="primary"
              style={{ cursor: "pointer" }}
             
            >
              {el.rating}
              {<i style={{ color: "#f1ee0f" }} class="fas fa-star"></i>}
            </span>
             <p className="pFav">{el.description}</p>
             </div>
             <div className="btnFav">
            <button   style={{ color: "#D58910" }} class="fas fa-box" onClick={() => this.props.removeMovie(el)}>Remove</button>
            </div>
          </div>
        ))}
       
      </div>
      <Footer />
      </div>
    );
  }
}
