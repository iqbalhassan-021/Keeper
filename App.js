import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Pages/Splash';
import Home from './Pages/Home';
import AddCard from './Pages/AddCard';
import RagisterUser from './Pages/RegisterUser';
import MyCards from './Pages/MyCards';
import Pin from './Pages/Pin';
import User from './Pages/User';
import ResetPin from './Pages/ResetPin';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={Splash}   options={{ headerShown: false }}/>
          <Stack.Screen name="Home" component={Home}   options={{ headerShown: false }}/>
          <Stack.Screen name="AddCard" component={AddCard}   options={{ headerShown: false }}/>
          <Stack.Screen name="RagisterUser" component={RagisterUser}   options={{ headerShown: false }}/>
          <Stack.Screen name="MyCards" component={MyCards} options={{ headerShown: false }}/>
          <Stack.Screen name="User" component={User} options={{ headerShown: false }}/>
          <Stack.Screen name="Pin" component={Pin}   options={{ headerShown: false }}/>
          <Stack.Screen name="ResetPin" component={ResetPin}   options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>

  );
};
