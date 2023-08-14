/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

/* import Icon from 'react-native-vector-icons/FontAwesome'; */
import Icon from 'react-native-vector-icons/FontAwesome';
import Star from '../Star';

//import Spinner from 'react-native-loading-spinner-overlay';

const FullScreen = ({onSearch}) => {
  const [searchText, setSearchText] = useState('');

  // const handleSearch = () => {
  //   onSearch(searchText);
  // };
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch('https://books-list-api.vercel.app/books', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': '#b0@6hX8YasCq6^unOaPw1tqR',
        },
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = () => {

    const filteredResults = data.data.filter(item =>
      item.title.toLowerCase().includes(searchText.toLowerCase()),
    );

    setData(filteredResults);

  };

  const [imageTap, setImageTap] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Hi Nick</Text>
        <View>
          <Image
            source={require('../../images/Profile.png')}
            style={styles.imageStyle}
          />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.iconContainer}>
          <Icon name="search" size={20} color="#122704" />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={searchText}
          onChangeText={text => {
            setSearchText(text);
            handleSearch();
          }}
          // onSubmitEditing={handleSearch}
        />
      </View>
      <View style={styles.containerContent}>
        {data.data && data.data.length > 0 ? (
          Array.from({length: data.data.length}).map((_, index) => (
            <View style={styles.itemContainer} key={index}>
              <View style={styles.imageContainer}>
                <Image
                  source={{uri: `${data.data[index].imageLink}`}}
                  style={styles.image}
                />
                <TouchableOpacity
                  style={styles.smallIcon}
                  onPress={() => {
                    setImageTap(!imageTap);
                  }}>
                  <Image
                    source={
                      imageTap
                        ? require('../../images/heartblank.png')
                        : require('../../images/heartfill.png')
                    } // Adjust the image path
                    // style={styles.smallIcon}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.itemText}>{data.data[index].title}</Text>
              <View style={styles.ratingContainer}>
                <Star rating={data.data[index].rating} />
                <Text style={styles.ratingText}>
                  ({data.data[index].reviews})
                </Text>
              </View>
              <Text style={styles.price}>${data.data[index].price}</Text>
            </View>
          ))
        ) : (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 125,
    left: 20,
    top: 20,
    gap: 30,
    padding: 20,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 320,
    height: 50,
    gap: 208,
  },
  name: {
    //width: 62,
    height: 27,
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 27,
    letterSpacing: 0,
    textAlign: 'center',
    color: 'black',
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  searchContainer: {
    width: 320,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30, // Border radius in pixels, not "1.5px"
    //borderWidth: 1.5,
    //borderColor: '#122704', //color is defined but screen is not showing color in figma so you can comment this section if you want to
    padding: 8,
    backgroundColor: '#EFEFEF',
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    paddingVertical: 0,
  },
  iconContainer: {
    //width: 15.28352165222168,
    //height: 12.70588207244873,
    //top: 97.14706420898438,
    //left: 16.238800048828125,
    //padding: 0,
    //borderWidth: 1.5,
    //borderColor: '#122704',
    //alignItems: 'center', // Align the icon vertically
    //justifyContent: 'center', // Align the icon horizontally
  },
  containerContent: {
    flexDirection: 'row', // Display items in a row
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    width: 320,
    height: 627,
    marginTop: 20,
    borderRadius: 10,
    flexWrap: 'wrap',
  },
  itemContainer: {
    //alignItems: 'center',
    display: 'flex',
    overflow: 'hidden',
    width: 147,
  },
  image: {
    width: 147,
    height: 219,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  itemText: {
    marginTop: 10,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 21,
    letterSpacing: 0,
    //textAlign: 'center',
    //width: 120,
    height: 21,
    color: '#000000',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 131,
    height: 17,
    marginTop: 5,
  },
  ratingStar: {
    width: 16,
    height: 16,
    top: -0.5,
    left: 2,
  },
  ratingText: {
    width: 32,
    height: 18,
    top: -0.5,
    left: 2,
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#B2B2B2',
    marginBottom: 5,
  },
  price: {
    width: 30,
    height: 18,
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#000000',
    marginBottom: 15,
  },
  smallIcon: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: 10.5,
    left: 115,
    // padding: 6,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
  },
  loader: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FullScreen;

/* import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BookItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
        <Image source={item.heartIcon} style={styles.smallIcon} />
      </View>
      <Text style={styles.itemText}>{item.title}</Text>
      <View style={styles.ratingContainer}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Icon
            key={index}
            name="star"
            size={12}
            color={index < item.rating ? '#DF9401' : '#D9D9D9'}
            style={styles.ratingStar}
          />
        ))}
        <Text style={styles.ratingText}>({item.ratingCount})</Text>
      </View>
      <Text style={styles.price}>${item.price}</Text>
    </View>
  );
};

const SearchResults = ({ searchResults }) => {
  return (
    <View style={styles.containerContent}>
      {searchResults.map((item, index) => (
        <BookItem key={index} item={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  // Your styles here
});

export default SearchResults;
 */

/* 
<Icon
                  name="star"
                  size={12}
                  color="#DF9401"
                  style={styles.ratingStar}
                />
                <Icon
                  name="star"
                  size={12}
                  color="#DF9401"
                  style={styles.ratingStar}
                />
                <Icon
                  name="star"
                  size={12}
                  color="#DF9401"
                  style={styles.ratingStar}
                />
                <Icon
                  name="star"
                  size={12}
                  color="#DF9401"
                  style={styles.ratingStar}
                />
                <Icon
                  name="star"
                  size={12}
                  color="#D9D9D9"
                  style={styles.ratingStar}
                />
<View style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../images/book2.png')} // Adjust the image path
              style={styles.image}
            />
            <Image
              source={require('../../images/heartblank.png')} // Adjust the image path
              style={styles.smallIcon}
            />
          </View>
          <Text style={styles.itemText}>Fairy Tales</Text>
          <View style={styles.ratingContainer}>
            <Icon
              name="star"
              size={12}
              color="#DF9401"
              style={styles.ratingStar}
            />
            <Icon
              name="star"
              size={12}
              color="#DF9401"
              style={styles.ratingStar}
            />
            <Icon
              name="star"
              size={12}
              color="#DF9401"
              style={styles.ratingStar}
            />
            <Icon
              name="star"
              size={12}
              color="#DF9401"
              style={styles.ratingStar}
            />
            <Icon
              name="star"
              size={12}
              color="#D9D9D9"
              style={styles.ratingStar}
            />
            <Text style={styles.ratingText}>(88)</Text>
          </View>
          <Text style={styles.price}>$7</Text>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../images/book3.png')} // Adjust the image path
              style={styles.image}
            />
            <Image
              source={require('../../images/heartblank.png')} // Adjust the image path
              style={styles.smallIcon}
            />
          </View>
          <Text style={styles.itemText}>Dante Alighieri</Text>
          <View style={styles.ratingContainer}>
            <Icon
              name="star"
              size={12}
              color="#DF9401"
              style={styles.ratingStar}
            />
            <Icon
              name="star"
              size={12}
              color="#DF9401"
              style={styles.ratingStar}
            />
            <Icon
              name="star"
              size={12}
              color="#DF9401"
              style={styles.ratingStar}
            />
            <Icon
              name="star"
              size={12}
              color="#DF9401"
              style={styles.ratingStar}
            />
            <Icon
              name="star"
              size={12}
              color="#D9D9D9"
              style={styles.ratingStar}
            />
            <Text style={styles.ratingText}>(88)</Text>
          </View>
          <Text style={styles.price}>$7</Text>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../images/book4.png')} // Adjust the image path
              style={styles.image}
            />
            <Image
              source={require('../../images/heartfill.png')} // Adjust the image path
              style={styles.smallIcon}
            />
          </View>
          <Text style={styles.itemText}>The Epic Of Gilga...</Text>
          <View style={styles.ratingContainer}>
            <Icon
              name="star"
              size={12}
              color="#DF9401"
              style={styles.ratingStar}
            />
            <Icon
              name="star"
              size={12}
              color="#DF9401"
              style={styles.ratingStar}
            />
            <Icon
              name="star"
              size={12}
              color="#DF9401"
              style={styles.ratingStar}
            />
            <Icon
              name="star"
              size={12}
              color="#DF9401"
              style={styles.ratingStar}
            />
            <Icon
              name="star"
              size={12}
              color="#D9D9D9"
              style={styles.ratingStar}
            />
            <Text style={styles.ratingText}>(88)</Text>
          </View>
          <Text style={styles.price}>$7</Text>
        </View> */
