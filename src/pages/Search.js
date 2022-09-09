import React from "react";
import { SearchForm, Loading } from "../components";
const Search = () => {
  return (
    <section className="section">
      <header>
        <SearchForm />
      </header>
      <div>
        <Loading />
      </div>
    </section>
  );
};

export default Search;
