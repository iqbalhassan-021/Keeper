import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './Pages/Splash';
import Home from './Pages/Home';
import AddCard from './Pages/AddCard';
import Auth from './Pages/Auth';
import Login from './Pages/LoginPage';
import RagisterUser from './Pages/RegisterUser';
import RegisterUser from './Pages/RegisterUser';
import MyCards from './Pages/MyCards';
import Pin from './Pages/Pin';

export default function App() {
  return (
  //  <Splash></Splash>
  // <Home></Home>
  // <AddCard></AddCard>
  // <Auth></Auth>
  // <Login></Login>
  // <RegisterUser></RegisterUser>
  // <MyCards></MyCards>
  <Pin></Pin>
  );
};
