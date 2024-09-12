import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, ScrollView, View, Image, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const AddCard = () => {
  const [cardName, setCardName] = useState('');
  const [cardType, setCardType] = useState('');
  const [cardHolder, setcardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [permissionGranted, setPermissionGranted] = useState(true); // Assume permission is granted

  const handleAddCard = async () => {
    if (permissionGranted) { // Check if permission is granted
      if (cardName && cardType && cardNumber && cardExpiry && cardCVV) {
        const cardData = {
          cardName,
          cardType,
          cardNumber,
          cardExpiry,
          cardCVV,
          cardHolder
        };

        try {
          const existingCards = await AsyncStorage.getItem('cards');
          const cardsArray = existingCards ? JSON.parse(existingCards) : [];

          // Add new card to the existing array
          cardsArray.push(cardData);

          // Store updated data back to AsyncStorage
          await AsyncStorage.setItem('cards', JSON.stringify(cardsArray));

          console.log('Data Written Successfully!!!');
          Alert.alert('Card Added Successfully!!!');
        } catch (error) {
          console.error('Error saving data:', error); // Use console.error for errors
          Alert.alert('An error occurred: ' + error.message);
        }

        // Reset the form
        setCardName('');
        setCardType('');
        setCardNumber('');
        setCardExpiry('');
        setCardCVV('');
        setcardHolder('');
      } else {
        Alert.alert('Please fill all the fields');
      }
    } else {
      Alert.alert('Storage permission is required to save cards.');
    }
  };

  useEffect(() => {
    const requestStoragePermission = async () => {
      // Assuming permission is granted since we are using AsyncStorage
      setPermissionGranted(true);
    };

    requestStoragePermission();
  }, []); // Run only once on mount

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
            placeholder="Card Type"
            placeholderTextColor="gray"
            onChangeText={setCardType}
          />
          
        </View>
        <View style={styles.tab}>
          <TextInput
            style={styles.input}
            placeholder="Holder Name"
            placeholderTextColor="gray"
            onChangeText={setcardHolder}
          />
        </View>
        <View style={styles.tab}>
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            placeholderTextColor="gray"
            keyboardType="numeric"
            onChangeText={setCardNumber}
          />
        </View>
        <View style={[styles.tab, { flexDirection: 'row', justifyContent: 'space-between' }]}>
          <View style={styles.left}>
            <TextInput
              style={[styles.input, { width: 91 }]}
              placeholder="MM"
              placeholderTextColor="gray"
              keyboardType="numeric"
              onChangeText={(text) => setCardExpiry(text + '/')} // Just for the format
            />
            <Text style={styles.GoodText}>/</Text>
            <TextInput
              style={[styles.input, { width: 91 }]}
              placeholder="YY"
              placeholderTextColor="gray"
              keyboardType="numeric"
              onChangeText={(text) => setCardExpiry(prev => prev + text)}
            />
          </View>
          <View style={styles.right}>
            <TextInput
              style={[styles.input, { width: 91 }]}
              placeholder="CVV"
              placeholderTextColor="gray"
              keyboardType="numeric"
              onChangeText={setCardCVV}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.PrimaryButton} onPress={handleAddCard}>
          <Text style={[styles.GoodText, { fontSize: 20 }]}>ADD</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

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

export default AddCard;
