import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/home/home";
import SignIn from "./Components/signIn/signin";
import Detail from "./Components/home/detailsMovie";
import Favoris from "./Components/home/favouriteMovie";
import SignInValiationForm from "./Components/signUp/signup";
import "bootstrap/dist/css/bootstrap.min.css";
import Movie1 from "./Components/home/movie1.jpg";
import Movie2 from "./Components/home/movie2.jpg";
import Movie3 from "./Components/home/movie3.jpg";
import Movie4 from "./Components/home/movie4.jpg";
import Movie5 from "./Components/home/movie5.jpg";
import Movie6 from "./Components/home/movie6.jpg";
import Movie7 from "./Components/home/movie7.jpg";
import Movie8 from "./Components/home/movie8.jpg";
import Spinner from "./spinner"

class App extends Component {
  movies = [
    {
      name: "Jocker",
      description:
        "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated",
      rating: "*****",
      image: Movie1,
      id: "000",
    },
    {
      name: "Before we go ",
      description:
        "Two strangers stuck in Manhattan for the night grow into each other's most trusted c",
      rating: "***",
      image: Movie3,
      id: "001",
    },
    {
      name: "L'accusée",
      description:
        "A successful entrepreneur accused of murder and a witness preparation expert have less ",
      rating: "****",
      image: Movie2,
      id: "002",
    },
    {
      name: "underwater",
      description:
        "A crew of oceanic researchers working for a deep sea drilling company try to get to ",
      rating: "****",
      image: Movie4,
      id: "003",
    },
    {
      name: "Fight CLub",
      description:
        "An insomniac office worker and a devil-may-care soapmaker form an underground fight ",
      rating: "**",
      image: Movie5,
      id: "004",
    },
    {
      name: "The Wretched ",
      description:
        "A defiant teenage boy, struggling with his parent's imminent divorce, faces off with ",
      rating: "**",
      image: Movie6,
      id: "005",
    },
    {
      name: "First Lady ",
      description:
        "A woman not married to the President runs for First Lady, but she winds up getting ",
      rating: "*",
      image: Movie7,
      id: "006",
    },
    {
      name: "How to Build a Girl ",
      description:
        "The novel charts the journey of teenager Johanna Morrigan (Beanie Feldstein), ",
      rating: "*",
      image: Movie8,
      id: "007",
    },
  ];

  state = {
    movies: this.movies,
    loading: true,
    favourites: [],
  };
  SearchBar = (e) => {
    if (e.target.value.length === 0) {
      this.setState({ movies: this.movies });
      console.log(this.state.movies);
    } else {
      this.setState({
        movies: this.state.movies.filter((fil) =>
          fil.name.includes(e.target.value)
        ),
      });
    }
  };
  /*********************************Search by Rate************************ */
  getrate = (r) => {
    console.log(r);
    let newlist = this.movies.filter((el) => el.rating.length >= r);
    this.setState({ movies: newlist });
  };
  /***********************loading Spinner ******************************/
  componentWillMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }
  //**************************************************Add to favoris ******************* */
  addFavoris = (e) => {
    alert("MOvied added to favourites");
    this.state.favourites.push(e);
    console.log(this.state.favourites);
  };
  /********************************Remove******************************** */
  removeMovie = (e) => {
    alert("Movie Removed");
    let a = "";
    let c = [];
    for (let i = 0; i < this.state.favourites.length; i++) {
      if (e == this.state.favourites[i]) {
        a += i;
        c = [...this.state.favourites.splice(1, 1)];
      }
    }
    this.setState({
      favourites: c,
    });
  };

  //console.log(this.state.movies);
  render() {
    if (this.state.loading) {
      return <Spinner />;
    }
    return (
      <Router>
        <div className="App">
          <Navbar SearchBar={this.SearchBar} />
          <Switch>
            <Route exact path={"/"}>
              <Home
                movies={this.state.movies}
                getrate={this.getrate}
                addFavoris={this.addFavoris}
              />
            </Route>
            <Route path={"/favourite"}>
              <Favoris
                favourites={this.state.favourites}
                removeMovie={this.removeMovie}
              />
            </Route>

            {this.movies.map((el) => (
              <Route path={"/detail/" + el.id}>
                <Detail el={el} />
              </Route>
            ))}

            <Route path={"/signup"}>
              <SignInValiationForm />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
