import React from "react";
import { FiPlus } from "react-icons/fi";
import placholder1 from "./placeholder-img.jpg";
import placholder2 from "./placeholder-2.jpg";
import placholder3 from "./placeholder-3.jpg";
import { Link } from "react-router-dom";
const Popular = () => {
  return (
    <section className="main-section">
      <header>
        <h3>Popular Movies</h3>
      </header>
      <div className="movies">
        <div className="movie">
          <div>
            <img src={placholder1} alt="breaking bad" />
            <div className="movie-operations">
              <h4 className="movie-title">Breaking bad</h4>
              <div className="detail">
                <p>8.9</p>
                <p>year: 2015</p>
              </div>

              <div className="movie-btn-container">
                <button className="btn watchlist-btn">
                  <FiPlus /> watchlist
                </button>
                <Link to="/single-movie" className="btn view-details-btn">
                  View details
                </Link>
                <img src={"./placeholder-2.jpg"} alt="dhdh" />
              </div>
            </div>
          </div>
        </div>
        <div className="movie">
          <div>
            <img src={placholder1} alt="breaking bad" />
            <div className="movie-operations">
              <h4 className="movie-title">Breaking bad</h4>
              <div className="detail">
                <p>8.9</p>
                <p>year: 2015</p>
              </div>

              <div className="movie-btn-container">
                <button className="btn watchlist-btn">
                  <FiPlus className="plus-icon" /> watchlist
                </button>
                <button className="btn view-details-btn">View details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="movie">
          <div>
            <img src={placholder1} alt="breaking bad" />
            <div className="movie-operations">
              <h4 className="movie-title">Breaking bad</h4>
              <div className="detail">
                <p>8.9</p>
                <p>year: 2015</p>
              </div>

              <div className="movie-btn-container">
                <button className="btn watchlist-btn">
                  <FiPlus /> watchlist
                </button>
                <button className="btn view-details-btn">View details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="movie">
          <div>
            <img src={placholder1} alt="breaking bad" />
            <div className="movie-operations">
              <h4 className="movie-title">Breaking bad</h4>
              <div className="detail">
                <p>8.9</p>
                <p>year: 2015</p>
              </div>

              <div className="movie-btn-container">
                <button className="btn watchlist-btn">
                  <FiPlus /> watchlist
                </button>
                <button className="btn view-details-btn">View details</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="btn">see more</button>
        </div>
      </div>
    </section>
  );
};
export default Popular;
