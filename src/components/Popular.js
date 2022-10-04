import React from "react";

import MovieList from "./MovieList";
import Loading from "./Loading";
import { useContextGlobal } from "../context/context";
const Popular = () => {
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
        {movies.popular.map((movie) => {
          return <MovieList {...movie} IMG_PATH={IMG_PATH} />;
        })}
      </div>
    </section>
  );
};
export default Popular;
