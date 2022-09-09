import React from "react";
import { Home, Discover, Search, SingleMovie } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/single-movie" element={<SingleMovie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
