import React from "react";
import { useContextGlobal } from "../context/context";
import MovieList from "./MovieList";
import { Loading } from "../components";
const Trending = () => {
  const { movies, loading, IMG_PATH } = useContextGlobal();
  if (loading) {
    return <Loading />;
  }

  return (
    <section className="main-section">
      <header>
        <h3>Popular Movies</h3>
      </header>
      <div className="movies">
        {movies.trending.map((movie) => {
          return <MovieList {...movie} IMG_PATH={IMG_PATH} />;
        })}
      </div>
    </section>
  );
};

export default Trending;
