import React, { Component } from "react";
import "./home.css";

import Movies from "./movieList";
import Footer from "./footer";
class Home extends Component {
  state = {
    rate: [1, 2, 3, 4, 5],
  };
  render() {
    return (
      <div className="listMovie">
        <div className="rating">
          {this.state.rate.map((el) => (
            <button
              variant="primary"
              className="etoile1"
              onClick={() => this.props.getrate(el)}
            >
              {" "}
              nejma{" "}
            </button>
          ))}
        </div>
        <Movies
          movies={this.props.movies}
          SearchBar={this.props.SearchBar}
          addFavoris={this.props.addFavoris}
        />
        <Footer />
      </div>
    );
  }
}
export default Home;
