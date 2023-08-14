/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import FullScreen from './FullScreen'; // Adjust the path as needed

const HomeScreen = () => {
  const handleSearch = query => {
    // Perform search-related actions, e.g., filter data based on the query
    console.log('Search query:', query);
    // Implement your search logic here
  };

  return (
    <View>
      {/* <Text>Home Screen Loading</Text> */}
      <FullScreen onSearch={handleSearch} />
      {/* Additional content for your HomeScreenLoading */}
    </View>
  );
};

export default HomeScreen;
