import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, ScrollView, View, Image, Alert, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { openDatabase, createTables, insertLoginCredentials, insertCreditCard, getLoginCredentials, getCreditCards } from '../database';
export default function AddCard() {
  const [cardName, setCardName] = useState('');
  const [cardType, setCardType] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVV, setCardCVV] = useState('');

  const handleAddCard = async () => {
    if (cardName && cardType && cardNumber && cardExpiry && cardCVV) {
      await insertCreditCard(cardName, cardType, cardNumber, cardExpiry, cardCVV);
      const cardsFromDB = await getCreditCards();
      setCards(cardsFromDB);
      setCardName('');
      setCardType('');
      setCardNumber('');
      setCardExpiry('');
      setCardCVV('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
  
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.back}>
          <Text style={styles.buttonText}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ProfileLogo}>
          <Image source={require('../Assets/avatar.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.ScrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.VectorHolder}>
            <Image
                style={styles.Vector}
                source={require('../Assets/Wallet-pana.png')}
            />
        </View>
        <View style={styles.tab}>
          <TextInput
            style={styles.input}
            placeholder="Bank Name"
            placeholderTextColor="gray"
            onChangeText={setCardName}
          />
        </View>
        <View style={styles.tab}>
          <TextInput
            style={styles.input}
            placeholder="Holder Name"
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.tab}>
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            placeholderTextColor="gray"
             keyboardType='numeric'
          />
        </View>
        <View style={[styles.tab, { flexDirection: 'row', justifyContent: 'space-between' }]}>
          <View style={styles.left}>
            <TextInput
              style={[styles.input, { width: 91 }]} // Relative width
              placeholder="MM"
              placeholderTextColor="gray"
               keyboardType='numeric'
            />
            <Text style={styles.GoodText}>/</Text>
            <TextInput
              style={[styles.input, { width: 91 }]} // Relative width
              placeholder="YY"
              placeholderTextColor="gray"
               keyboardType='numeric'
            />
          </View>
          <View style={styles.right}>
            <TextInput
              style={[styles.input, { width: 91 }]} // Relative width
              placeholder="CVV"
              placeholderTextColor="gray"
              keyboardType='numeric'
            />
          </View>
        </View>
        <TouchableOpacity style={styles.PrimaryButton}>
          <Text style={[styles.GoodText, { fontSize: 20 }]}>ADD</Text>
        </TouchableOpacity>
      </ScrollView>
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
  input: {
    height: 70,
    width: '100%', // Use relative width
    color: 'white',
    padding: 20,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    fontSize: 20,
    borderRadius: 8,
  },
  left: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    height: '100%',
  },
  GoodText: {
    color: 'white',
    fontSize: 32,
  },
  PrimaryButton: {
    height: 70,
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
});
