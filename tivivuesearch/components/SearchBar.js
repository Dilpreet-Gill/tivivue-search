import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

export default function SearchBar({}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SDFSDF</Text>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    borderRadius: 8,
    margin: 10,
    borderWidth: 1,
    borderColor: 'blue'
  },
  text: {
    width: '90%',
    fontSize: '50',
    fontFamily: 'New York',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'white',
    backgroundColor: 'black',
  },
});
