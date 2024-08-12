import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, ScrollView, View, Image, Alert, Dimensions, Button } from 'react-native';
import { TouchableOpacity } from 'react-native'; 

export default function RegisterUser() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="white" translucent={false} />
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.back}>
          <Text style={styles.buttonText}>{'<'}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.ScrollView} contentContainerStyle={styles.scrollContent}> 
    <View style={styles.tab}>
        <Image
            source={require('../Assets/Login-cuate.png')}
            style={styles.Image}
        >

        </Image>
    </View>

    <View style={[styles.tab]}>
   
    <TextInput
            style={styles.input}
            placeholder="username..."
            placeholderTextColor="gray"
      
          />
              <TextInput
            style={styles.input}
            placeholder="Full Name..."
            placeholderTextColor="gray"
      
          />
              <TextInput
            style={styles.input}
            placeholder="Password..."
            placeholderTextColor="gray"
            secureTextEntry ={true} 

          />
              <TextInput
            style={styles.input}
            placeholder="Pin..."
            placeholderTextColor="gray"
            secureTextEntry ={true} 

          />
        <TouchableOpacity
        style={[styles.PrimaryButton,{backgroundColor:'#C53F3F'}]}
        >
            <Text style={styles.GoodText}>
                Login
            </Text>
        </TouchableOpacity> 
      
    </View>
    </ScrollView>
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
   width:331,
   height:292.
  },
  GoodText:{
    color:'white',
    fontSize:18,
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
    marginBottom:20
  },
  scrollContent: {
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',

  },
  ScrollView:{
    width:'100%',
  },
});
