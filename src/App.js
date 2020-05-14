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

class App extends Component {
  movies = [
    {
      name: "Jocker",
      description:
        "mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. ",
      rating: "*****",
      image: Movie1,
      id: "001",
    },
    {
      name: "Before we go ",
      description:
        "New York, le temps d'une nuit. Après s'être fait voler son sac à main, la jolie Brooke loupe son train pour Boston. Sur son chemin elle croise Nick Vaughan, musicien. Destinés à se rencontrer,",
      rating: "***",
      image: Movie3,
      id: "002",
    },
    {
      name: "L'accusée",
      description:
        "Après s’être réveillé à côté du corps sans vie de sa petite amie à l’hôtel, un homme d’affaires engage une grande avocate pour comprendre ce qui s’est passé.",
      rating: "****",
      image: Movie2,
      id: "002",
    },
    {
      name: "underwater",
      description:
        "A crew of oceanic researchers working for a deep sea drilling company try to get to safety after a mysterious earthquake devastates their deepwater research and drilling facility located at the bottom of the Mariana Trench.",
      rating: "****",
      image: Movie4,
      id: "003",
    },
  ];

  state = {
    movies: this.movies,
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
