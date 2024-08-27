import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, posterPath, title, overview, genreIds }) {
  return (
    <div>
      <img src={posterPath} width="100" alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{overview.length > 200 ? `${overview.slice(0, 200)}...` : overview}</p>
      <ul>
        {genreIds.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genreIds: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Movie;
