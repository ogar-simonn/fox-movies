import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
const MovieList = ({
  id,
  title,
  original_title,
  vote_average,
  poster_path,
  IMG_PATH,
}) => {
  return (
    <div className="movie" key={id}>
      <img src={IMG_PATH + poster_path} alt={title} />
      <div className="movie-operations">
        <p className="movie-title">{title ? title : original_title}</p>
        <div className="detail">
          <p>
            <AiFillStar className="star" /> <span>{vote_average}</span>
          </p>
        </div>

        <div className="movie-btn-container">
          <button className="btn watchlist-btn">
            <FiPlus style={{ fontSize: "1.2rem", fontWeight: "bold" }} />
            watchlist
          </button>
          <Link to={`/single-movie/${id}`} className="btn view-details-btn">
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MovieList;
