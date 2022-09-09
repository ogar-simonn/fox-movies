import React from "react";
import { Link } from "react-router-dom";
import placholder1 from "./placeholder-img.jpg";
import placholder2 from "./placeholder-2.jpg";
import placholder3 from "./placeholder-3.jpg";
const Trending = () => {
  return (
    <section className="main-section">
      <header>
        <h3>Trending</h3>
      </header>
      <div className="movies">
        <div className="movie">
          <div>
            <img src={placholder1} alt="breaking bad" />
            <h4 className="movie-title">Breaking bad</h4>
            <p>2015</p>
          </div>
        </div>
        <div className="movie">
          <div>
            <img src={placholder2} alt="breaking bad" />
            <h4 className="movie-title">Breaking bad</h4>
            <p>2011</p>
          </div>
        </div>
        <div className="movie">
          <div>
            <img src={placholder3} alt="breaking bad" />
            <h4 className="movie-title">Breaking bad</h4>
            <p>2021</p>
          </div>
        </div>
        <div className="movie">
          <div>
            <img src={placholder3} alt="breaking bad" />
            <h4 className="movie-title">Breaking bad</h4>
            <p>1999</p>
          </div>
        </div>
        <div>
          <button className="btn">see more</button>
        </div>
      </div>
    </section>
  );
};

export default Trending;
