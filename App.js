/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React,{useEffect, useState} from 'react';
import { Text } from 'react-native';
import SplashScreen from './Components/Splash_Screen/SplashScreen';
import HomeScreenLoading from './Components/Home_Screen/HomeScreenLoading';
import HomeScreen from './Components/Home_Screen/HomeScreen';
import BookScreen from './Components/Book_Screen/BookScreen';


export default function App() {
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);



  return (
    <>
     {splashVisible ? <SplashScreen /> : <HomeScreen />}
    </>
  );
}
