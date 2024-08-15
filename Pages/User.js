import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Linking, TextInput, ScrollView, View, Image, Alert, Dimensions, Button } from 'react-native';
import { TouchableOpacity } from 'react-native'; 

export default function User({ navigation }) {
    const handleConnect = () => {
       
        const url = 'https://www.linkedin.com/in/iqbal-hassan-b156b5314/';
        Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
      };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="white" translucent={false} />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.back}>
          <Text style={styles.buttonText}>{'<'}</Text>
        </TouchableOpacity>
      </View>
    <View style={styles.tab}>
       <View
        style={styles.tabItem}>
          <Image source={require('../Assets/avatar.png')} style={styles.image} />
          <View >
            <Text style={{color:'white',fontSize:20,}}>
                Hassan Ashfaq
            </Text>
            <Text style={{color:'white',fontSize:20,}}>
                Cards : 4
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
    
      <View style={styles.tab}>
            <TouchableOpacity style={styles.PrimaryButton}> 
                <Text style={styles.GoodText}>
                    Logout
                </Text>
            </TouchableOpacity>
      </View>
    </View>
    </View>
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
    width: 396,
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
