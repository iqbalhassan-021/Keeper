import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Alert, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

export default function Splash ({ navigation }) {
  
  const handleNavigation = async () =>{
    try{
      const userData = await AsyncStorage.getItem('user'); // Retrieve the saved user data
      if (userData !== null) {
        navigation.navigate('Pin');
      }
      else{
        navigation.navigate('RagisterUser');
      }
    }
    catch(error){
      console.error('Error getting data:', error);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.SplashCardTop}>
        <Image 
          source={require('../Assets/E-Wallet-pana.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.SplashCardBottom}>
        <Text style={styles.GoodText}>KEEPER</Text>
        <Text style={styles.smallText}>
          Keeper is a secure app designed to safely store and manage
          your ATM card details, ensuring quick and easy access while
          maintaining top-notch security. Simplify your financial
          management with Keeper's intuitive interface and robust
          protection features.
        </Text>
        <TouchableOpacity style={styles.button}   onPress={handleNavigation}>
          <Text style={styles.buttonText}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1013',
    color: '#fff',
  },
  GoodText: {
    color: 'white',
    fontSize: 40,
  },
  SplashCardTop: {
    width: '100%',
    height: '50%',
    backgroundColor: '#0F1013',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SplashCardBottom: {
    width: '100%',
    height: '35%',
    backgroundColor: '#0F1013',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  smallText: {
    color: '#7A7A7A',
    textAlign: 'center',
    width: '90%',
  },
  button: {
    backgroundColor: '#000000',
    borderRadius: 360,
    padding: 0,
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    zIndex:10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 30,
  },
});
