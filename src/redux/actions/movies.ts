import axios from 'axios';

import {
  API_KEY,
  BASE_URL,
  GET_MOVIES_POPULAR,
  GET_SEARCHED_MOVIES,
} from './config';
import {
  GET_POPULAR_MOVIES,
  IS_SEARCHED_MOVIE,
  RESET_POPULAR_MOVIES,
  RESET_SEARCHED_MOVIES,
  SET_SEARCHED_MOVIES,
  SET_SEARCHED_VALUE,
} from '../actions';

export const getPopularMovies = (data: {language: string; page: number}) => {
  try {
    return async dispatch => {
      const res = await axios.get(
        `${BASE_URL}${GET_MOVIES_POPULAR}?api_key=${API_KEY}&language=${data.language}&page=${data.page}`,
      );
      if (res.data) {
        dispatch({
          type: GET_POPULAR_MOVIES,
          payload: res.data.results,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {}
};

export const getSeachedMovies = (data: {
  language: string;
  page: number;
  query: string;
}) => {
  try {
    return async dispatch => {
      const res = await axios.get(
        `${BASE_URL}${GET_SEARCHED_MOVIES}?api_key=${API_KEY}&query=${data.query}&language=${data.language}&page=${data.page}`,
      );
      if (res.data) {
        dispatch({
          type: SET_SEARCHED_MOVIES,
          payload: res.data.results,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {}
};

export const resetPopularMovies = () => {
  try {
    return async dispatch => {
      dispatch({
        type: RESET_POPULAR_MOVIES,
        payload: [],
      });
    };
  } catch (error) {}
};

export const resetSearchedMovies = () => {
  try {
    return async dispatch => {
      dispatch({
        type: RESET_SEARCHED_MOVIES,
        payload: [],
      });
      dispatch({
        type: SET_SEARCHED_VALUE,
        payload: '',
      });
    };
  } catch (error) {}
};

export const isSeachedValue = (value: boolean) => {
  try {
    return async dispatch => {
      dispatch({
        type: IS_SEARCHED_MOVIE,
        payload: value,
      });
    };
  } catch (error) {}
};

export const setSearchedValue = (value: string) => {
  try {
    return async dispatch => {
      dispatch({
        type: SET_SEARCHED_VALUE,
        payload: value,
      });
    };
  } catch (error) {}
};
