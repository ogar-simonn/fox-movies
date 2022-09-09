const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return {
      ...state,
      loading: false,
    };
  }
  if (action.type === "UPDATE_POPULAR_MOVIES") {
    return {
      ...state,
      popularMovies: action.payload,
    };
  }
  if (action.type === "UPDATE_TRENDING_MOVIES") {
    return {
      ...state,
      loading: false,
      popularMovies: action.payload,
    };
  }
  if (action.type === "UPDATE_UPCOMING_MOVIES") {
    return {
      ...state,
      popularMovies: action.payload,
    };
  }
  if (action.type === "GET_GENRES") {
    return {
      ...state,
      genres: action.payload,
    };
  }
  if (action.type === "ADD_GENRE") {
    const newGenre = state.genres.filter(
      (genre) => genre.id !== action.payload.id
    );
    return {
      ...state,
      genres: newGenre,
      selectedGenre: [action.payload, ...state.selectedGenre],
    };
  }
  if (action.type === "REMOVE_GENRE") {
    const newArr = state.selectedGenre.filter(
      (genre) => genre.id !== action.payload.id
    );
    return {
      ...state,
      genres: [...state.genres, action.payload].sort((a, b) => {
        return a > b ? 1 : a === b ? 0 : -1;
      }),
      selectedGenre: newArr,
    };
  }

  return {};
};
export default reducer;
