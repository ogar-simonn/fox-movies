import React, { useEffect, useState } from "react";
import { Chip } from "@mui/material";
import { Navigations, Loading, GenreMovies } from "../components";
import { useContextGlobal, useGenre } from "../context/context";

const Discover = () => {
  const {
    genres,
    selectedGenre,
    addToGenre,
    removeGenre,
    fetchGenres,
    getMoviesByGenre,
    moviesByGenre,
  } = useContextGlobal();
  const [loading, setLoading] = useState(true);
  const genreId = useGenre(selectedGenre);
  const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=67b88c8062ce3cdf8f0b2d0f65fb0a21&language=en-US`;
  useEffect(() => {
    const genreInit = async () => {
      await fetchGenres(genreUrl).then(() => setLoading(false));
    };
    genreInit();
  }, []);
  useEffect(() => {
    getMoviesByGenre(genreId);
  }, [genres]);
  return (
    <section className="section">
      <header>
        <h3>Discover movies</h3>
      </header>
      <div>
        <Navigations />
        <p>Discover movies by their genre.</p>
        {selectedGenre.map((item) => {
          return (
            <Chip
              key={item.id}
              color="primary"
              label={item.name}
              style={{ margin: "0.2rem 0.2rem", fontSize: "1rem" }}
              onDelete={() => removeGenre(item)}
            />
          );
        })}
        {loading ? (
          <Loading />
        ) : (
          <div>
            {genres.map((item) => {
              const list = [...item.name];
              return (
                <Chip
                  key={item.id}
                  color="primary"
                  clickable
                  onClick={() => addToGenre(item)}
                  label={list.map((item) => {
                    return item;
                  })}
                  style={{ margin: "0.2rem 0.2rem", fontSize: "1rem" }}
                  variant="outlined"
                />
              );
            })}
            <GenreMovies />
          </div>
        )}
      </div>
    </section>
  );
};

export default Discover;
