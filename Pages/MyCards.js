import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Alert, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function MyCards({ navigation }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const existingCards = await AsyncStorage.getItem('cards');
        const cardsArray = existingCards ? JSON.parse(existingCards) : [];
        setCards(cardsArray);
      } catch (error) {
        Toast.show({
          type: 'error',    // You can also use 'info' or 'success' as type
          text1: 'Error',   // Corrected key
          text2: 'Error fetching cards.',  // Message shown under the title
          position: 'bottom',     // Optional: You can position the toast (top or bottom)
        });
      }
    };

    fetchCards();
  }, []);

  return (

    <SafeAreaView style={styles.container}>
 <StatusBar style="light" />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('User')}>
          <Text style={styles.buttonText}>{'<'}</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.ScrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.CardHolder}>
          {cards.map((card, index) => (
            <View key={index} style={styles.Card}>
              <View style={styles.CardNameHolder}>
                <Text style={styles.CardText}>{card.cardName}</Text>
              </View>
              <View style={styles.AdditionalDrtails}>
                <View style={{ height: 50, width: '100%', backgroundColor: 'black' }}></View>
                <View style={styles.tab}>
                  <Text style={styles.CardText}>{card.cardNumber}</Text>
                </View>
                <View style={[styles.tab, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                  <Text style={styles.CardText}>{card.cardExpiry}</Text>
                  <Text style={styles.CardText}>CVV: {card.cardCVV}</Text>
                </View>
                <View style={[styles.tab, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                  <Text style={styles.CardText}>{card.cardHolder}</Text>
                  <Text style={styles.CardText}>{card.cardType}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
  
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    color: '#fff',
  },
  topBar: {
    backgroundColor: 'black',
    width: '100%',
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  Title: {
    color: 'white',
    fontSize: 32,
  },
  CardHolder: {
    width: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Card: {
    height: 221,
    width: 395,
    backgroundColor: '#C53F3F',
    borderRadius: 8,
    elevation: 5,
    marginTop: 20,
  },
  CardNameHolder: {
    backgroundColor: "#C53F3F",
    height: 50,
    width: '100%',
    borderRadius: 8,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  CardText: {
    fontSize: 16,
    color: 'white',
  },
  AdditionalDrtails: {
    height: 131,
    width: '100%',
    backgroundColor: '#C53F3F',
    borderRadius: 8,
  },
  tab: {
    width: '100%',
    backgroundColor: '#C53F3F',
    padding: 5,
    borderRadius: 8,
  },
  ScrollView: {
    width: '100%',
  },
  scrollContent: {
    paddingBottom: 20,  // Optional: To add padding at the bottom for better UX
  },
  buttonText: {
    color: 'white',
    fontSize: 26,
  },
});
