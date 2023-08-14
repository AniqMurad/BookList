/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Star = ({rating}) => {
  const renderStars = () => {
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const remainingStars = totalStars - filledStars;

    const stars = [];

    // Filled stars
    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <Icon
          key={i}
          name="star"
          size={12}
          color="#DF9401"
          style={{marginRight: 2}}
        />,
      );
    }

    // Remaining stars
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Icon
          key={filledStars + i}
          name="star"
          size={12}
          color="#D9D9D9"
          style={{marginRight: 2}}
        />,
      );
    }

    return stars;
  };

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {renderStars()}
    </View>
  );
};

export default Star;
