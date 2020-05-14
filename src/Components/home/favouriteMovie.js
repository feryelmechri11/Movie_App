import React, { Component } from "react";
import "./favourite.css"
import { Label } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Favoris extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="favourite">
        <h2>My Favourite Movies a3333333333333</h2>
        {this.props.favourites.map((el) => (
          <div>
            {el.name}
            <img src={el.img} />
            <button onClick={() => this.props.removeMovie(el)}>Remove</button>
          </div>
        ))}
      </div>
    );
  }
}
