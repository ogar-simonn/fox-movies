import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { MdPlaylistPlay, MdOutlineExplore } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";
const Navigations = () => {
  return (
    <nav className="navigations">
      <div className="navigations-container">
        <div className="home-link">
          <Link to="/">
            <AiFillHome className="icon home" />
          </Link>
        </div>
        <div className="search-link">
          <Link to="/search">
            <BiSearchAlt2 className="icon search" />
          </Link>
        </div>
        <div className="discover-link">
          <Link to="/discover">
            <MdOutlineExplore className="icon  discover" />
          </Link>
        </div>
        <div className="watchlist-link">
          <Link to="/watchlist">
            <MdPlaylistPlay className="icon watchlist" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigations;
