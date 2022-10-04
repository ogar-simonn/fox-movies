import React from "react";
import { useContextGlobal } from "../context/context";
const WatchList = () => {
  const { WatchList } = useContextGlobal();
  if (WatchList.length < 1) {
    return (
      <div className="section">
        <h2>You have no movies in your watchList</h2>
      </div>
    );
  }
  return <div>WatchList</div>;
};

export default WatchList;
