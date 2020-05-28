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
            <span
              variant="primary"
              style={{ cursor: "pointer" }}
              onClick={() => this.props.getrate(el)}
            >
              {" "}
              {<i style={{ color: "#f1ee0f" }} class="fas fa-star"></i>}
            </span>
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
