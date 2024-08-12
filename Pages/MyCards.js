import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native'; 

export default function MyCards() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="white" translucent={false} />
      
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.back}>
          <Text style={styles.buttonText}>{'<'}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView  style={styles.ScrollView} contentContainerStyle={styles.scrollContent}>
      <View style={styles.CardHolder}>
    
        <View style={styles.Card}>
          <View style={styles.CardNameHolder}>
            <Text style={styles.CardText}>Card Name</Text>
          </View>
          <View style={styles.AdditionalDrtails}>
            <View style={{ height: 50, width: '100%', backgroundColor: 'black' }}></View>
            <View style={styles.tab}>
              <Text style={styles.CardText}>5300 1234 5678 9012</Text>
            </View>
            <View style={[styles.tab, { flexDirection: 'row', justifyContent: 'space-between' }]}>
              <Text style={styles.CardText}>11/23</Text>
              <Text style={styles.CardText}>CVV: 456</Text>
            </View>
            <View style={[styles.tab, { flexDirection: 'row', justifyContent: 'space-between' }]}>
              <Text style={styles.CardText}>HASSAN ASHFAQ</Text>
              <Text style={styles.CardText}>MASTER CARD</Text>
            </View>
          </View>
        </View>
        <View style={styles.Card}>
          <View style={styles.CardNameHolder}>
            <Text style={styles.CardText}>Card Name</Text>
          </View>
          <View style={styles.AdditionalDrtails}>
            <View style={{ height: 50, width: '100%', backgroundColor: 'black' }}></View>
            <View style={styles.tab}>
              <Text style={styles.CardText}>5300 1234 5678 9012</Text>
            </View>
            <View style={[styles.tab, { flexDirection: 'row', justifyContent: 'space-between' }]}>
              <Text style={styles.CardText}>11/23</Text>
              <Text style={styles.CardText}>CVV: 456</Text>
            </View>
            <View style={[styles.tab, { flexDirection: 'row', justifyContent: 'space-between' }]}>
              <Text style={styles.CardText}>HASSAN ASHFAQ</Text>
              <Text style={styles.CardText}>MASTER CARD</Text>
            </View>
          </View>
        </View>
        <View style={styles.Card}>
          <View style={styles.CardNameHolder}>
            <Text style={styles.CardText}>Card Name</Text>
          </View>
          <View style={styles.AdditionalDrtails}>
            <View style={{ height: 50, width: '100%', backgroundColor: 'black' }}></View>
            <View style={styles.tab}>
              <Text style={styles.CardText}>5300 1234 5678 9012</Text>
            </View>
            <View style={[styles.tab, { flexDirection: 'row', justifyContent: 'space-between' }]}>
              <Text style={styles.CardText}>11/23</Text>
              <Text style={styles.CardText}>CVV: 456</Text>
            </View>
            <View style={[styles.tab, { flexDirection: 'row', justifyContent: 'space-between' }]}>
              <Text style={styles.CardText}>HASSAN ASHFAQ</Text>
              <Text style={styles.CardText}>MASTER CARD</Text>
            </View>
          </View>
        </View>
        <View style={styles.Card}>
          <View style={styles.CardNameHolder}>
            <Text style={styles.CardText}>Card Name</Text>
          </View>
          <View style={styles.AdditionalDrtails}>
            <View style={{ height: 50, width: '100%', backgroundColor: 'black' }}></View>
            <View style={styles.tab}>
              <Text style={styles.CardText}>5300 1234 5678 9012</Text>
            </View>
            <View style={[styles.tab, { flexDirection: 'row', justifyContent: 'space-between' }]}>
              <Text style={styles.CardText}>11/23</Text>
              <Text style={styles.CardText}>CVV: 456</Text>
            </View>
            <View style={[styles.tab, { flexDirection: 'row', justifyContent: 'space-between' }]}>
              <Text style={styles.CardText}>HASSAN ASHFAQ</Text>
              <Text style={styles.CardText}>MASTER CARD</Text>
            </View>
          </View>
        </View>
      
      </View>
      </ScrollView>
    </View>
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
  ProfileLogo: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  CardHolder: {
    width: '100%',
    
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardList: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0F1013',
    borderRadius: 10,
  },
  StackHolder: {
    padding: 10,
    backgroundColor: '#0F1013',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  Bar: {
    height: 5,
    width: 97,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  Card: {
    height: 221,
    width: 395,
    backgroundColor: '#C53F3F',
    borderRadius: 8,
    elevation: 5,
    marginTop:20,
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
  buttonText:{
    color: 'white',
    fontSize:26,
  },
});
