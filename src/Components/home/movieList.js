import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./movieList.css";

import { Button, ButtonToolbar } from "react-bootstrap";
import FormAddMovie from "../AddMovie/formAddMovie";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Caractere: "",
      movies: this.props.movies,
      addModalShow: false,
    };
  }
  handleChangeName = (value) => {
    this.setState({
      name: value,
    });
  };
  handleChangeDescription = (value) => {
    this.setState({
      description: value,
    });
  };
  handleChangeRate = (value) => {
    this.setState({
      rating: value,
    });
  };
  handleChangeImage = (value) => {
    this.setState({
      image: value,
    });
  };
  addObjectMovie = (e) => {
    this.props.movies.push({
      name: this.state.name,
      description: this.state.description,
      rating: this.state.rating,
      image: this.state.image,
    });
    //console.log(movies);
    this.setState({ description: "", name: "", rating: "" });
  };
  /****************************************************Filter Movie By Name ******************************************************** */

  render() {
    let addModalClose = () => this.setState({ addModalShow: false });
    return ( 
      <div className="MovieCardButton">
      <div className="displays">
        {this.props.movies.map((el) => (
          <div className="card">
            <div>
              <img src={el.image} className="image11" alt="Jocker film" />
            </div>
            <div>
              <h4>{el.name}</h4>
            </div>
            <div>
              {" "}
              <h6 className="DesignRate">{el.rating}</h6>{" "}
            </div>
            
            <div>
              {" "}
              <p>{el.description} </p>
              </div>
              <div className="btnCard">
                {" "}
                
                <span
                  className="favoris"
                  onClick={() => this.props.addFavoris(el)}
                >
                  {" "}
                  <i style={{ color: "red" }} className="fas fa-heart"></i>{" "}
                </span>
              
            

            <div className="btn-card">
              <Router>
                <Link to={"/detail/" + el.id}>
                  {" "}
                  <span className="btn_detail"> <i style={{ color: "white" }} className="fas fa-chevron-circle-right"></i> </span>
                </Link>
              </Router>
            </div>
            </div>
          </div>
        ))}

       
      </div>
        <div className="btnA">
        <button
      
        className="addmovie"  onClick={() => this.setState({ addModalShow: true })}
        ><i class="fas fa-plus-square"></i>
          Add Movie
        </button>
        <FormAddMovie
          addfilmName={this.handleChangeName}
          addfilmDescription={this.handleChangeDescription}
          addfilmRate={this.handleChangeRate}
          addfilmImage={this.handleChangeImage}
          addObjectMovie={this.addObjectMovie}
          state={this.state}
          show={this.state.addModalShow}
          onHide={addModalClose}
        />
    </div>
    </div>
    );
  }
}
export default Movies;
