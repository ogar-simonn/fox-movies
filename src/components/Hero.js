import React from "react";
const Hero = () => {
  return (
    <article className="hero-content">
      <h2 className="hero-content-title">
        FOX MOVIES - HOME TO WORLD'S BEST MOVIES
      </h2>
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis
        minus saepe laudantium reiciendis ullam nihil rerum possimus, laboriosam
        quas!
      </p>
      <link to="/discover" className="btn">
        Discover Movies
      </link>
    </article>
  );
};
export default Hero;
