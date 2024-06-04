import {
  GET_POPULAR_MOVIES,
  IS_SEARCHED_MOVIE,
  RESET_POPULAR_MOVIES,
  RESET_SEARCHED_MOVIES,
  SET_SEARCHED_MOVIES,
  SET_SEARCHED_VALUE,
} from '../actions';

const initialState = {
  popularMovies: [],
  searchedMovies: [],
  isSearched: false,
  searchedValue: '',
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: [...state.popularMovies, ...action.payload],
      };
    case SET_SEARCHED_MOVIES:
      return {
        ...state,
        searchedMovies: [...state.searchedMovies, ...action.payload],
      };
    case RESET_SEARCHED_MOVIES:
      return {
        ...state,
        searchedMovies: [],
      };
    case RESET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: [],
      };
    case IS_SEARCHED_MOVIE:
      return {
        ...state,
        isSearched: action.payload,
      };
    case SET_SEARCHED_VALUE:
      return {
        ...state,
        searchedValue: action.payload,
      };
    default:
      return state;
  }
};
export default moviesReducer;
