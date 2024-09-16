import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Linking, TextInput, ScrollView, View, Image, Alert, Dimensions, Button, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function User({ navigation }) { 
   const [cards, setCards] = useState([]);
   const [username, setUsername] = useState(''); // Add a state variable for username
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const existingCards = await AsyncStorage.getItem('cards');
        const userData = await AsyncStorage.getItem('user'); // Retrieve the saved user data
        const { fullName: storedUsername } = JSON.parse(userData); // Parse the user data and extract the username
        setUsername(storedUsername); // Update the username state
        const cardsArray = existingCards ? JSON.parse(existingCards) : [];
        setCards(cardsArray);
      } catch (error) {
        console.error('Error fetching cards:', error);
        Alert.alert('An error occurred while fetching cards.');
      }
    };

    fetchCards();
  }, []);

  const handleConnect = () => {
    const url = 'https://www.linkedin.com/in/iqbal-hassan-b156b5314/';
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };


  return (
    <SafeAreaView style={styles.container}>
    <StatusBar style="light" />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Home')}> 
          <Text style={styles.buttonText}>{'<'}</Text>
        </TouchableOpacity>
      </View>
    <View style={styles.tab}>
       <View
        style={styles.tabItem}>
          <Image source={require('../Assets/avatar.png')} style={styles.image} />
          <View >
            <Text style={{color:'white',fontSize:20,}}>
                {username}
            </Text>
            <Text style={{color:'white',fontSize:20,}}>
            Cards : {cards.length}
            </Text>
          </View>
       </View>
    </View>
    <View style={styles.tab}>
      <View style={styles.tab}>
            <TouchableOpacity style={styles.PrimaryButton} onPress={() => navigation.navigate('MyCards')}> 
                <Text style={styles.GoodText}>
                    My Cards
                </Text>
            </TouchableOpacity>
      </View>
      <View style={styles.tab}>
            <TouchableOpacity style={styles.PrimaryButton} onPress={() => navigation.navigate('AddCard')}> 
                <Text style={styles.GoodText}>
                    Add a Card
                </Text>
            </TouchableOpacity>
      </View>
      <View style={styles.tab}>
            <TouchableOpacity style={styles.PrimaryButton} onPress={handleConnect}> 
                <Text style={styles.GoodText}>
                    Let's Connect
                </Text>
            </TouchableOpacity>
      </View>

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
  VectorHolder: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Vector: {
    height: 293,
    width: 398,
  },
  topBar: {
    backgroundColor: '#0F1013',
    width: '100%',
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  Title: {
    color: 'white',
    fontSize: 32,
  },
  ProfileLogo: {
    width: 50,
    height: 50,
    backgroundColor: '#0F1013',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  buttonText: {
    color: '#fff',
    fontSize: 26,
  },
  back: {
    height: '100%',
    width: 50,
  },
  tab: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  PrimaryButton: {
    height: 57,
    width: '100%', // Use relative width
    backgroundColor: '#000000',
    fontSize: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  Image:{
    width: 331,
    height:292,
  },
  GoodText:{
    color:'white',
    fontSize:18,
  },
  tabItem:{
    width: '97%',
    height:120,
    backgroundColor:'#000000',
    borderRadius:8,
    flexDirection:'row',
    alignItems: 'center',

    padding:10,
  },
  image:{
    height:100,
    width:100,
  },
});
