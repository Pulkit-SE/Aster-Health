import React, {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import MovieList from './MovieList';
import SearchBar from './SearchBar';

import {
  getPopularMovies,
  getSeachedMovies,
  isSeachedValue,
  resetPopularMovies,
  resetSearchedMovies,
} from '../../redux/actions/movies';
import {styles} from './styles';

const HomeScreen = () => {
  const {popularMovies, searchedMovies, searchedValue, isSearched} =
    useSelector(state => state.moviesReducer);

  const dispatch = useDispatch();
  const listRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);

  const getMovies = () => {
    const params = {
      page: currentPage,
      language: 'en-US',
    };
    dispatch(getPopularMovies(params));
  };

  useEffect(() => {
    getMovies();
  }, [currentPage]);

  const handlePagination = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleSubmit = () => {
    setCurrentPage(1);
    dispatch(isSeachedValue(true));
    const data = {
      page: currentPage === 1 ? currentPage : 1,
      query: searchedValue,
      language: 'en-US',
    };
    dispatch(getSeachedMovies(data));
  };

  // removing all existing data and calling api for fresh data
  const handleResetPress = () => {
    dispatch(resetPopularMovies());
    dispatch(resetSearchedMovies());
    dispatch(isSeachedValue(false));
    if (listRef?.current) {
      listRef?.current?.scrollToOffset({offset: 0, animated: true});
    }
    if (currentPage === 1) {
      getMovies();
    }
    setCurrentPage(1);
  };

  const moviesList = isSearched ? searchedMovies : popularMovies;

  return (
    <View style={styles.container}>
      <SearchBar
        handleSubmit={handleSubmit}
        handleResetPress={handleResetPress}
      />
      <MovieList
        ref={listRef}
        movies={moviesList}
        handlePagination={handlePagination}
      />
    </View>
  );
};

export default HomeScreen;
