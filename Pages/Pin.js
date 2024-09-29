import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

export default function Pin({ navigation }) {

  const [userpin, setuserpin] = useState('');
  // Function to load the saved pin from AsyncStorage
  const handlePinValidation = async () => {
    try {
      const userData = await AsyncStorage.getItem('user'); // Retrieve the saved user data
      if (userData !== null) {
        const { pin } = JSON.parse(userData); // Parse the user data and extract the pin
        if(userpin === pin){
          navigation.navigate('Home'); // Navigate to the Home screen if the pin is correct
       
          setuserpin('');
        }
        else{
          alert('Invalid Pin');
          }
      }
    } catch (error) {
      console.error('Error loading pin:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Splash')}>
          <Text style={styles.buttonText}>{'<'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tab}>
        <Text style={styles.GoodText}>ENTER PIN</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="white"
          autoFocus={true}  // Automatically focuses the input and opens the keyboard
          keyboardType='numeric'
          value={userpin} // Set the TextInput value to the saved pin
          onChangeText={setuserpin} // Update pin state
          onSubmitEditing={handlePinValidation}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Splash')}>
          <Text style={{color:'white'}}>Forgot pin</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C53F3F',
    color: '#fff',
  },
  topBar: {
    backgroundColor: '#C53F3F',
    width: '100%',
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  
  buttonText:{
    color: 'white',
    fontSize:26,
  },
  tab: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',

  },
  GoodText:{
    color:'white',
    fontSize:40,
  
  },
  input: {
    height: 70,
    width: '40%',
    color: 'white',
    padding: 20,
    borderColor: '#FFFFFF',
    borderBottomWidth: 2,  // Only the bottom border is defined
    fontSize: 20,
    borderRadius: 0,  // Remove border radius for a flat bottom border
    marginBottom: 20,
    textAlign: 'center',
  },
  
});
