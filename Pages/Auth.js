import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, ScrollView, View, Image, Alert, Dimensions, Button } from 'react-native';
import { TouchableOpacity } from 'react-native'; 

export default function Auth() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="white" translucent={false} />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.back}>
          <Text style={styles.buttonText}>{'<'}</Text>
        </TouchableOpacity>
      </View>
    <View style={styles.tab}>
        <Image
            source={require('../Assets/Login-cuate.png')}
            style={styles.Image}
        >

        </Image>
    </View>
    <View style={[styles.tab,{height:'50%'}]}>
        <TouchableOpacity
        style={[styles.PrimaryButton,{backgroundColor:'#C53F3F'}]}
        >
            <Text style={styles.GoodText}>
                Login
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.PrimaryButton}
        >
            <Text style={styles.GoodText}>
                Register 
            </Text>
        </TouchableOpacity>
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
    height: 54,
    width: '100%', // Use relative width
    backgroundColor: '#414141',
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
});
