import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Pages/Splash';
import Home from './Pages/Home';
import AddCard from './Pages/AddCard';
import Auth from './Pages/Auth';
import Login from './Pages/LoginPage';
import RagisterUser from './Pages/RegisterUser';
import RegisterUser from './Pages/RegisterUser';
import MyCards from './Pages/MyCards';
import Pin from './Pages/Pin';
import User from './Pages/User';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Splash">
    //     <Stack.Screen name="Splash" component={Splash}   options={{ headerShown: false }}/>
    //     <Stack.Screen name="Home" component={Home}   options={{ headerShown: false }}/>
    //     <Stack.Screen name="AddCard" component={AddCard}   options={{ headerShown: false }}/>
    //     <Stack.Screen name="Auth" component={Auth}   options={{ headerShown: false }}/>
    //     <Stack.Screen name="Login" component={Login}   options={{ headerShown: false }}/>
    //     <Stack.Screen name="RagisterUser" component={RagisterUser}   options={{ headerShown: false }}/>
    //     <Stack.Screen name="MyCards" component={MyCards} />
    //     <Stack.Screen name="Pin" component={Pin}   options={{ headerShown: false }}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
  // <Splash></Splash>
  // <Home></Home>
  // <AddCard></AddCard>
  // <Auth></Auth>
  // <Login></Login>
  // <RegisterUser></RegisterUser>
  // <MyCards></MyCards>
  // <Pin></Pin>
  <User></User>
  );
};
