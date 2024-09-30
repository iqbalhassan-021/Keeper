import React, { useState, useEffect } from 'react';
import { StatusBar, Modal, Text, TextInput, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';


const AddCard = ({ navigation }) => {
  const [cardName, setCardName] = useState('');
  const [cardType, setCardType] = useState('');
  const [cardHolder, setcardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [permissionGranted, setPermissionGranted] = useState(true); 


  const handleAddCard = async () => {
    if (permissionGranted) {
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

          cardsArray.push(cardData);
          await AsyncStorage.setItem('cards', JSON.stringify(cardsArray));

          Toast.show({
            type: 'success',    // You can also use 'info' or 'success' as type
            text1: 'Card Added',   // Corrected key
            text2: 'The card details are successfully saved.',  // Message shown under the title
            position: 'bottom',     // Optional: You can position the toast (top or bottom)
          });

          navigation.navigate('Home');

        } catch (error) {
          Toast.show({
            type: 'error',    // You can also use 'info' or 'success' as type
            text1: 'Error in adding card',   // Corrected key
            text2: 'Your card details are not added, try again.',  // Message shown under the title
            position: 'bottom',     // Optional: You can position the toast (top or bottom)
          });
        }

        setCardName('');
        setCardType('');
        setCardNumber('');
        setCardExpiry('');
        setCardCVV('');
        setcardHolder('');
      } else {
        Toast.show({
          type: 'error',    // You can also use 'info' or 'success' as type
          text1: 'Error',   // Corrected key
          text2: 'User must fill all the fields.',  // Message shown under the title
          position: 'bottom',     // Optional: You can position the toast (top or bottom)
        });
      }
    } else {
      Toast.show({
        type: 'error',    // You can also use 'info' or 'success' as type
        text1: 'Error',   // Corrected key
        text2: 'Storage permission is required to save cards.',  // Message shown under the title
        position: 'bottom',     // Optional: You can position the toast (top or bottom)
      });

    }
  };

  useEffect(() => {
    const requestStoragePermission = async () => {
      setPermissionGranted(true);
    };

    requestStoragePermission();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('User')}>
          <Text style={styles.buttonText}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ProfileLogo}>
          <Image source={require('../Assets/avatar.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.ScrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.VectorHolder}>
          <Image style={styles.Vector} source={require('../Assets/Wallet-pana.png')} />
        </View>
        {/* Form Fields */}
        <View style={styles.tab}>
          <TextInput style={styles.input} placeholder="Bank Name" placeholderTextColor="gray" onChangeText={setCardName} />
        </View>
        <View style={styles.tab}>
          <TextInput style={styles.input} placeholder="Card Type" placeholderTextColor="gray" onChangeText={setCardType} />
        </View>
        <View style={styles.tab}>
          <TextInput style={styles.input} placeholder="Holder Name" placeholderTextColor="gray" onChangeText={setcardHolder} />
        </View>
        <View style={styles.tab}>
          <TextInput style={styles.input} placeholder="Card Number" placeholderTextColor="gray" keyboardType="numeric" onChangeText={setCardNumber} />
        </View>
        <View style={[styles.tab, { flexDirection: 'row', justifyContent: 'space-between' }]}>
          <View style={styles.left}>
            <TextInput style={[styles.input, { width: 91 }]} placeholder="MM" placeholderTextColor="gray" keyboardType="numeric" onChangeText={(text) => setCardExpiry(text + '/')} />
            <Text style={styles.GoodText}>/</Text>
            <TextInput style={[styles.input, { width: 91 }]} placeholder="YY" placeholderTextColor="gray" keyboardType="numeric" onChangeText={(text) => setCardExpiry(prev => prev + text)} />
          </View>
          <View style={styles.right}>
            <TextInput style={[styles.input, { width: 91 }]} placeholder="CVV" placeholderTextColor="gray" keyboardType="numeric" onChangeText={setCardCVV} />
          </View>
        </View>
        <TouchableOpacity style={styles.PrimaryButton} onPress={handleAddCard}>
          <Text style={[styles.GoodText, { fontSize: 20 }]}>ADD</Text>
        </TouchableOpacity>
      </ScrollView>
      <Toast />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1013',
    color: '#fff',
  },
  topBar: {
    backgroundColor: '#0F1013',
    width: '100%',
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
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
  VectorHolder: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Vector: {
    height: 293,
    width: 398,
  },
  tab: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 70,
    width: '100%',
    color: 'white',
    padding: 20,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    fontSize: 20,
    borderRadius: 8,
  },
  GoodText: {
    color: 'white',
    fontSize: 32,
  },
  PrimaryButton: {
    height: 70,
    width: '100%',
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
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: '#000',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default AddCard;
