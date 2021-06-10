import React from "react";
import MovieListBox from "./MovieListBox";
import NavBar from "./NavBar";
import "./HomePage.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(`/api/movies`)
      .then((response) => response.json())
      .then((movies) => {
        this.setState({ movies });
      });
  }
  render() {
    const { movies } = this.state;
    console.log(movies);
    return (
      <div>
        <NavBar />
        <div className="section">
          <div className="movie-list">
            {movies.map((movie) => {
              const { id, title, imdbRating, poster } = movie;
              return (
                <MovieListBox
                  key={id}
                  id={id}
                  title={title}
                  imdbRating={imdbRating}
                  poster={poster}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
