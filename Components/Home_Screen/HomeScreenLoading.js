/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import SearchBar from './SearchBar'; // Adjust the path as needed

const HomeScreenLoading = () => {
  const handleSearch = query => {
    // Perform search-related actions, e.g., filter data based on the query
    console.log('Search query:', query);
    // Implement your search logic here
  };

  return (
    <View>
      {/* <Text>Home Screen Loading</Text> */}
      <SearchBar onSearch={handleSearch} />
      {/* Additional content for your HomeScreenLoading */}
    </View>
  );
};

export default HomeScreenLoading;
