import { Link } from "react-router-dom";
import "./MovieListBox.css";

function MovieListBox(props) {
  const { id, title, poster, imdbRating } = props;
  return (
    <Link to={`/movies/${id}`} className="movie-list-item">
      <div className="movie-list-item-wrapper">
        <div className="movie-list-item-img">
          <img src={poster} alt={title} />
        </div>
        <div className="movie-list-item-desc">
          <div className="movie-list-item-title">{title}</div>
          <div className="movie-list-item-rating">{imdbRating}</div>
        </div>
      </div>
    </Link>
  );
}

export default MovieListBox;
