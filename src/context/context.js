import React, { useContext, useReducer, useState, useEffect } from "react";
import reducer from "./reducer";
import data from "./data";
import axios from "axios";
const AppContext = React.createContext();
const defaultState = {
  loading: true,
  movies: {},
  genres: [
    { id: 1, name: "Action" },
    { id: 2, name: "Adventure" },
    { id: 3, name: "Animation" },
    { id: 4, name: "Comedy" },
    { id: 5, name: "Crime" },
    { id: 6, name: "Documentary" },
    { id: 7, name: "Drama" },
    { id: 8, name: "Romance" },
    { id: 9, name: "Western" },
  ],
  selectedGenre: [],
};
const apiKey = `${process.env.REACT_REACT_APP_MOVIE_API_KEY}`;
console.log(apiKey);
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [index, setIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(data[index]);
  const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
  const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
  const trendingUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`;
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=`;
  const recomendationUrl = `https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=${apiKey}`;
  const fetchPopularMovies = async (url) => {
    const response = await axios(url);
    const data = response.data;
    const { results } = data;
    dispatch({ type: "UPDATE_POPULAR_MOVIES", payload: results });
  };
  const fetchGenres = async (url) => {
    const response = await axios(url);
    const data = response.data.genres;
    dispatch({ type: "GET_GENRES", payload: data });
  };
  const fetchUpcomingMovies = async (url) => {
    const response = await axios(url);
    const data = response.data;
    const { results } = data;
    dispatch({ type: "UPDATE_UPCOMING_MOVIES", payload: results });
  };
  const fetchTrendingMovies = async (url) => {
    const response = await axios(url);
    const data = response.data;
    const { results } = data;
    dispatch({ type: "UPDATE_TRENDING_MOVIES", payload: results });
  };
  const addToGenre = (item) => {
    dispatch({ type: "ADD_GENRE", payload: item });
  };
  const removeGenre = (genre) => {
    dispatch({ type: "REMOVE_GENRE", payload: genre });
  };
  // const startSlide = () => {
  //   setIndex((prev) => prev + 1);
  //   if (index > data.length) {
  //     setIndex(0);
  //   }
  //   setActiveSlide(data[index]);
  // };
  // useEffect(() => {
  // dispatch({type: "LOADING"})
  //   let interval = setInterval(() => {
  //     setIndex((prev) => prev + 1);
  //     if (index > data.length - 1) {
  //       setIndex(0);
  //     }
  //     setActiveSlide(data[index]);
  //     // console.log(activeSlide);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // });
  useEffect(() => {
    // fetchPopularMovies(popularUrl);
    // fetchUpcomingMovies(upcomingUrl);
    // fetchTrendingMovies(trendingUrl)
  }, []);
  return (
    <AppContext.Provider value={{ ...state, activeSlide, addToGenre, removeGenre }}>
      {children}
    </AppContext.Provider>
  );
};

export const useContextGlobal = () => {
  return useContext(AppContext);
};

export default AppProvider;
