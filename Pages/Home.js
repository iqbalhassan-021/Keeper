import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native'; 

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="white" translucent={false} />
      
      <View style={styles.topBar}>
        <Text style={styles.Title}>Hey, Hassan</Text>
        <TouchableOpacity style={styles.ProfileLogo}>
          <Image source={require('../Assets/avatar.png')} style={styles.image} />
        </TouchableOpacity>
      </View>

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
      </View>

      <View style={styles.CardList}>
        <View style={styles.StackHolder}>
          <View style={styles.Bar}></View>

          <View style={[styles.tab, { backgroundColor: '#0F1013', padding: 0, marginTop: 20 }]}>
            <ScrollView style={styles.ScrollView} contentContainerStyle={styles.scrollContent}>
              {Array(4).fill().map((_, index) => (
                <TouchableOpacity key={index} style={styles.RecentCard}>
                  <View style={styles.leftPart}>
                    <View style={styles.CardiconHolder}>
                      <Image source={require('../Assets/card.png')} style={styles.CardLogo} />
                    </View>
                    <View style={styles.InfoPart}>
                      <Text style={styles.InfoText}>Bank Name</Text>
                      <Text style={[styles.InfoText, { color: '#7A7A7A', fontSize: 12 }]}>Added on</Text>
                      <Text style={[styles.InfoText, { color: '#7A7A7A', fontSize: 12 }]}>Master Card</Text>
                    </View>
                  </View>
                  <View style={styles.RightPart}>
                    <Image source={require('../Assets/arrow.png')} style={styles.CardLogo} />
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
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
    height: 250,
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
  RecentCard: {
    width: '100%',
    height: 92,
    backgroundColor: 'black',
    zIndex: 12,
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: "space-between",
    marginTop: 10,
  },
  CardiconHolder: {
    height: 70,
    width: 70,
    backgroundColor: '#C53F3F',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InfoPart: {
    height: 70,
    flexDirection: 'column',
  },
  InfoText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  leftPart: {
    height: 70,
    flexDirection: 'row',
  },
  RightPart: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  ScrollView: {
    width: '100%',
  },
  scrollContent: {
    paddingBottom: 20,  // Optional: To add padding at the bottom for better UX
  },
});
