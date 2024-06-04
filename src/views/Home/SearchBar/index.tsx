import React, {useState} from 'react';
import {TextInput, View, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {styles} from './styles';
import {setSearchedValue} from '../../../redux/actions/movies';

const SearchBar = (props: any) => {
  const {handleSubmit, handleResetPress} = props;
  const dispatch = useDispatch();
  const {searchedValue} = useSelector(state => state.moviesReducer);

  const handleMovieNameChange = (movieName: string) => {
    dispatch(setSearchedValue(movieName));
  };

  return (
    <View>
      <TextInput
        placeholder="Search movie name..."
        placeholderTextColor={'black'}
        value={searchedValue}
        onChangeText={handleMovieNameChange}
        style={styles.textInput}
      />

      <View style={styles.container}>
        <Button
          title="Submit"
          onPress={handleSubmit}
          disabled={!searchedValue.length}
        />
        <Button
          title="Reset"
          onPress={handleResetPress}
          // disabled={!movieName.length}
        />
      </View>
    </View>
  );
};

export default SearchBar;
