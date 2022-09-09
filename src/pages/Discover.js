import React from "react";
import { Chip } from "@mui/material";
import { Navigations, Loading } from "../components";
import { useContextGlobal } from "../context/context";

const Discover = () => {
  const { genres, selectedGenre, addToGenre, removeGenre } = useContextGlobal();

  return (
    <section className="section">
      <header>
        <h3>Discover movies</h3>
      </header>
      <div>
        <p>Discover movies by their genre.</p>
        {selectedGenre.map((item) => {
          return (
            <Chip
              key={item.id}
              color="primary"
              label={item.name}
              onDelete={() => removeGenre(item)}
            />
          );
        })}
        {genres.map((item) => {
          return (
            <Chip
              key={item.id}
              color="primary"
              clickable
              onClick={() => addToGenre(item)}
              label={item.name}
              style={{ margin: "0.2rem 0.2rem", fontSize: "1rem" }}
              variant="outlined"
            />
          );
        })}
      </div>
      <Loading />

      <Navigations />
    </section>
  );
};

export default Discover;
