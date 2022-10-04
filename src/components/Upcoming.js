import React from "react";
import { useContextGlobal } from "../context/context";
import MovieList from "./MovieList";
import Loading from "./Loading";
const Upcoming = () => {
  const { movies, loading, IMG_PATH, upcomingMovies } = useContextGlobal();
  console.log(movies);
  if (loading) {
    return (
      <section className="main-section">
        <Loading />
      </section>
    );
  }
  return (
    <section className="main-section">
      <header>
        <h3>Upcoming movies</h3>
      </header>
      <div className="movies">
        {movies.upcoming.map((movie) => {
          return <MovieList {...movie} IMG_PATH={IMG_PATH} />;
        })}
      </div>
    </section>
  );
};

export default Upcoming;
