import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Logo from "./logoMovieApp.png";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      
      <nav className="navbar navbar-expand-lg navbar-dark color_navbar">
        <img className="logo_movieapp" src={Logo} alt="Log of the movie app" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
             <Link to="/">
                Home <span class="sr-only"></span>
                </Link>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Movies
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="https://www.netflix.com/tn-en/">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="https://forja.tn/home/">
                  Something else here
                </a>
              </div>
            </li>

            <li className="nav-item">
             
              <Link to="/favourite">
              
                Favourite
              
              </Link>
             
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
          <input
              style={{ background: "transparent " }}
              className="form-control mr-sm-2 "
              type="search"
              onChange={this.props.SearchBar}
              placeholder="Search...."
              aria-label="Search"
            />
          </form>
         
             <Link to={"/signup"} >     <button
              style={{ background: "#00c4cc " }}
              type="button"
              className="btn btn-secondary but"
            >
              Sign In
            </button></Link> 
         
        </div>
      </nav>
    );
  }
}
export default Navbar;
