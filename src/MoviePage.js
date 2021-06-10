import React from "react";
import NavBar from "./NavBar";
import "./MoviePage.css";

class MoviePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.movieId !== this.props.match.params.movieId) {
      this.fetchData();
    }
  }
  fetchData() {
    const movieId = this.props.match.params.movieId;
    fetch(`/api/movies/${movieId}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
      });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="movie-page-wrapper">
        <NavBar />
        <div className="section">
          <div className="movie-page-top-part">
            <div className="movie-page-poster-container">
              <img src={data.poster} alt={data.title} />
            </div>
            <div className="movie-page-movie-meta">
              <div className="movie-page-title">{data.title}</div>
              <div className="movie-page-rating">{data.imdbRating}</div>
            </div>
          </div>
          <div className="movie-page-plot">{data.plot}</div>
        </div>
      </div>
    );
  }
}

export default MoviePage;
