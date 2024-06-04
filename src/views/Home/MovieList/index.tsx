import React, {forwardRef} from 'react';
import {FlatList, Image, Text, View} from 'react-native';

import {styles} from './styles';

const EmptyScreen = () => {
  return (
    <View style={styles.emptyScreen}>
      <Text>There is no data to show...</Text>
    </View>
  );
};

const MovieList = forwardRef((props: any, ref: any) => {
  const {movies, handlePagination} = props;

  return (
    <View style={{marginTop: 12}}>
      <FlatList
        ref={ref}
        data={movies}
        keyExtractor={(item, index) => `${item.id.toString()}-${index}`}
        renderItem={({item}) => {
          const IMAGE_URL =
            'https://image.tmdb.org/t/p/w185' + item.poster_path;
          return (
            <View style={styles.imgContainer}>
              <View style={styles.imgStyle}>
                <Image
                  source={{
                    uri: IMAGE_URL,
                  }}
                  resizeMode="cover"
                  style={styles.imgProps}
                />
                <View style={styles.titleContainer}>
                  <View>
                    <Text numberOfLines={2} style={styles.title}>
                      {item.title}
                    </Text>
                  </View>
                  <View style={styles.releasing}>
                    <Text numberOfLines={3}>{item?.overview}</Text>
                  </View>
                  <View style={styles.releasing}>
                    <Text>Releasing on: </Text>
                    <Text numberOfLines={3} style={styles.font}>
                      {item?.release_date}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        onEndReached={handlePagination}
        onEndReachedThreshold={0.8}
        decelerationRate={0.8}
        ListEmptyComponent={<EmptyScreen />}
      />
    </View>
  );
});

export default MovieList;
