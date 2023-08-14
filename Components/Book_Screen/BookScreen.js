/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function BookScreen({navigation}) {
  const handleBackPress = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Image
          source={require('../../images/backicon.jpg')}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <View style={styles.mainbox}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../images/bookscreen.png')}
            style={styles.imageStyle}
          />
          <View style={styles.textContainer}>
            <View style={styles.RateContainer}>
              <Text style={styles.textRating}>Rating</Text>
              <View style={styles.starContainer}>
                <Text style={styles.star}>&#9733;</Text>
                <Text style={styles.star}>&#9733;</Text>
                <Text style={styles.star}>&#9733;</Text>
                <Text style={styles.star}>&#9733;</Text>
                <Text style={styles.starInactive}>&#9733;</Text>
              </View>
            </View>
            <View style={styles.ReviewContainer}>
              <Text style={styles.textReviews}>Reviews</Text>
              <Text style={styles.Reviews}>(88)</Text>
            </View>
            <View style={styles.PriceContainer}>
              <Text style={styles.textPrice}>Price</Text>
              <Text style={styles.Price}>$7</Text>
            </View>
          </View>
        </View>
        <Text style={styles.title}>Things for apart</Text>
        <View style={styles.Tcontainer}>
          <Text style={styles.authorNormal}>author: Chinua Achebe</Text>
          <Text style={styles.countryNormal}>country: Nigeria</Text>
          <Text style={styles.languageNormal}>language: English</Text>
          <Text style={styles.yearNormal}>year:1958</Text>
          <Text style={styles.pagesNormal}>Pages:209</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    /* flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', */
  },
  mainbox: {
    width: 320,
    height: 705,
    top: 74,
    //left: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // Add any other styles you want to apply to the mainbox component
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  imageContainer: {
    width: 315,
    height: 498,
    //left: 2.5,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 0,
    elevation: 4,
    flexDirection: 'column', // Adjust as needed
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  imageStyle: {
    width: 275,
    height: 410,
    borderRadius: 10,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 44,
    width: 275,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  textRating: {
    width: 46,
    height: 21,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#000000',
    borderRadius: 10,
  },
  textReviews: {
    width: 57,
    height: 21,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#000000',
    borderRadius: 10,
  },
  textPrice: {
    width: 35,
    height: 21,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#000000',
    borderRadius: 10,
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -0.5,
    //height: 12,
    width: 71,
  },
  star: {
    width: 12,
    height: 18,
    color: '#DF9401',
    fontSize: 12,
  },
  starInactive: {
    width: 12,
    height: 18,
    color: '#D9D9D9',
    fontSize: 12,
  },
  Reviews: {
    width: 27,
    height: 18,
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#B2B2B2',
    //marginTop: 26,
    //marginLeft: 15,
  },
  Price: {
    width: 15,
    height: 18,
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#B2B2B2',
    //marginTop: 26,
    //marginLeft: 10,
  },
  RateContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 38,
    width: 71,
  },
  ReviewContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 57,
    height: 44,
  },
  PriceContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 44,
  },
  title: {
    width: 188,
    height: 33,
    //top: 518.044677734375,
    fontFamily: 'Poppins',
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 33,
    letterSpacing: 0,
    color: '#000000',
    alignSelf: 'flex-start',
  },
  Tcontainer: {
    flex: 0, // No flex
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    width: 186,
    height: 140,
    //top: 571.044677734375,
    marginVertical: 5
  },
  authorNormal: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'left',
  },
  countryNormal: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'left',
    width: 130,
    height: 24,
  },
  languageNormal: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'left',
    width: 145,
    height: 24,
  },
  yearNormal: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'left',
    width: 100,
    height: 24,
  },
  pagesNormal: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'left',
    width: 87,
    height: 24,
  },
});
