import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native'; 

export default function Pin() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="white" translucent={false} />
      
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.back}>
          <Text style={styles.buttonText}>{'<'}</Text>
        </TouchableOpacity>
      </View>
     <View style={styles.tab}>
            <Text style={styles.GoodText}>
            ENTER PIN
            </Text>
            <TextInput
            style={styles.input}
            placeholder="0000"
            placeholderTextColor="white"
            autoFocus={true}  // Automatically focuses the input and opens the keyboard
          />
          <TouchableOpacity>
            <Text style={{color:'white'}}>
                Forgot pin
            </Text>
          </TouchableOpacity>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C53F3F',
    color: '#fff',
  },
  topBar: {
    backgroundColor: '#C53F3F',
    width: '100%',
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  
  buttonText:{
    color: 'white',
    fontSize:26,
  },
  tab: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',

  },
  GoodText:{
    color:'white',
    fontSize:40,
  
  },
  input: {
    height: 70,
    width: '40%',
    color: 'white',
    padding: 20,
    borderColor: '#FFFFFF',
    borderBottomWidth: 2,  // Only the bottom border is defined
    fontSize: 20,
    borderRadius: 0,  // Remove border radius for a flat bottom border
    marginBottom: 20,
    textAlign: 'center',
  },
  
});
