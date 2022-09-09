import React from "react";
import {
  Header,
  TrendingMovies,
  Loading,
  Upcoming,
  Popular,
  Navigations,
  Footer,
} from "../components";
const Home = () => {
  return (
    <main>
      <Header />
      <Popular />
      <Upcoming />
      <TrendingMovies />
      <Navigations />
      <Footer />
      {/* <Loading /> */}
    </main>
  );
};

export default Home;