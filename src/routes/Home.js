import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      //   "https://gist.githubusercontent.com/narunee/8fe0573cfb4c14dec299a6868b47ee0b/raw/af6c833994baf807e3ed42d201c5473e09579bdc/movie.json"
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await response.json();
    setMovies(json);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
              overview={movie.overview}
              genreIds={movie.genre_ids}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
