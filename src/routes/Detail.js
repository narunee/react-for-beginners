import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(
        //`https://gist.githubusercontent.com/narunee/87b2990137e93f54dc93ea8c1062bc18/raw/c37a7bd79ed92bbcd87516dca2ac1b874ed8876f/movie.json?movie_id=${id}`
        `https://nomad-movies.nomadcoders.workers.dev/movies?id=${id}`
      )
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>detail</h1>;
}

export default Detail;
