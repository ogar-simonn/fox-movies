import React, { useContext, useReducer, useState, useEffect } from "react";
import reducer from "./reducer";
import data from "./data";
import axios from "axios";
const AppContext = React.createContext();
const defaultState = {
  loading: true,
  movies: {},
  moviesByGenre: [],
  genres: [],
  selectedGenre: [],
  searchTerm: "",
  searchResult: [],
  movie: {},
  watchList: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [index, setIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(data[index]);

  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  const mainURL = `https://api.themoviedb.org/3/movie/`;
  const popularUrl = `popular?api_key=67b88c8062ce3cdf8f0b2d0f65fb0a21`;
  const upcomingUrl = `upcoming?api_key=67b88c8062ce3cdf8f0b2d0f65fb0a21`;

  const trendingUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=67b88c8062ce3cdf8f0b2d0f65fb0a21`;
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=67b88c8062ce3cdf8f0b2d0f65fb0a21&language=en-US&query=`;
  const recomendationUrl = `https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=`;

  const fetchMovies = async () => {
    await Promise.allSettled([
      axios(`${mainURL}${popularUrl}`),
      axios(`${mainURL}${upcomingUrl}`),
      axios(`${trendingUrl}`),
    ]).then((results) => {
      const [popular, upcoming, trending] = results;
      if (popular.status === "fulfilled" && upcoming.status === "fulfilled") {
        const popularResult = popular.value.data.results;
        const upcomingResult = upcoming.value.data.results;
        const trendingResult = trending.value.data.results;
        dispatch({
          type: "MAIN_MOVIES",
          payload: {
            popular: popularResult,
            upcoming: upcomingResult,
            trending: trendingResult,
          },
        });
      }
    });
  };

  const getMoviesByGenre = async (ids) => {
    const genreMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=67b88c8062ce3cdf8f0b2d0f65fb0a21&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${ids}&with_watch_monetization_types=flatrate`;
    const response = await axios(genreMoviesUrl);
    const { results } = await response.data;
    console.log(results);
    dispatch({ type: "GENRE_MOVIES", payload: results });
  };
  const fetchSearch = async (searchTerm) => {
    if (searchTerm) {
      const response = await axios(`${searchUrl}${searchTerm}`);
      const data = await response.data;
      const { results } = data;
      dispatch({ type: "UPDATE_SEARCH_RESULT", payload: results });
    }
  };

  const handleSearch = (term) => {
    dispatch({ type: "UPDATE_SEARCH_TERM", payload: term });
  };
  const fetchGenres = async (url) => {
    const response = await axios(url);
    const data = await response.data.genres;
    dispatch({ type: "GET_GENRES", payload: data });
  };

  const addToGenre = (item) => {
    dispatch({ type: "ADD_GENRE", payload: item });
  };
  const removeGenre = (genre) => {
    dispatch({ type: "REMOVE_GENRE", payload: genre });
  };
  const fetchSingleMovie = async (id) => {
    const response = await axios(`${mainURL}${id}${singleMovieUrl}`);
    const data = await response.data;
    if (data) {
      const {
        backdrop_path,
        poster_path,
        genres,
        original_title,
        overview,
        release_date,
        runtime,
        vote_average,
      } = data;
      const newMovie = {
        backdrop_path,
        poster_path,
        genres,
        original_title,
        overview,
        release_date,
        runtime,
        vote_average,
      };
      return newMovie;
    }
  };

  const addToWatchList = async (id) => {
    await fetchSingleMovie(id).then((data) => {
      dispatch({ type: "WATCHLIST", payload: data });
    });
  };
  const removeFromWatchList = (id) => {
    dispatch({ type: "REMOVE_WATCHLIST", payload: id });
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <AppContext.Provider
      value={{
        ...state,
        handleSearch,
        fetchSearch,
        addToGenre,
        removeGenre,
        IMG_PATH,
        getMoviesByGenre,
        fetchGenres,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useContextGlobal = () => {
  return useContext(AppContext);
};

export const useGenre = (genreArr) => {
  if (genreArr.length < 1) return "";
  const genreIds = genreArr.map((genre) => genre.id);
  return genreIds.reduce((acc, curr) => acc + "," + curr);
};
export default AppProvider;
