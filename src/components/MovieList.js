import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useContextGlobal } from "../context/context";
const MovieList = ({
  id,
  title,
  original_title,
  vote_average,
  poster_path,
  IMG_PATH,
}) => {
  const { addToWatchList } = useContextGlobal();

  return (
    <div className="movie" key={id}>
      <img src={IMG_PATH + poster_path} alt={title} />
      <div className="movie-operations">
        <p className="movie-title">
          {title
            ? title.length > 10
              ? `${title.slice(0, 12)}...`
              : title
            : original_title}
        </p>
        <div className="movie-btn-container">
          <button
            className="btn watchlist-btn"
            onClick={() => {
              addToWatchList(id);
              console.log("hello");
            }}
          >
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
