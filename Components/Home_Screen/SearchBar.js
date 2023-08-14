/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View,Text, TextInput, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const SearchBar = ({onSearch}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

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
          <Icon name="search" size={20} color="#333" />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 125,
    top: 20,
    left: 20,
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
    color: 'black', // Change the text color if needed
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 10,
    resizeMode: 'cover', // or 'contain' or 'stretch' as per your needs
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
  /* iconContainer: {
    width: 15.28352165222168,
    height: 12.70588207244873,
    top: 97.14706420898438,
    left: 16.238800048828125,
    padding: 0,
    borderWidth: 1.5,
    borderColor: '#122704',
    alignItems: 'center', // Align the icon vertically
    justifyContent: 'center', // Align the icon horizontally
  }, */
});

export default SearchBar;

