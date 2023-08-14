/* eslint-disable prettier/prettier */
import React from 'react';
import { View,Image,StyleSheet } from 'react-native';

export default function SplashScreen() {
  return (
    <>
      <View style={styles.container}>
        <Image
          source={require('../../images/Splash.png')}
          style={styles.imageStyle}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100vh',
    width: '100vw',
  },
  imageStyle: {
    width: 200,
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover', // or 'contain' or 'stretch' as per your needs
  },
});
