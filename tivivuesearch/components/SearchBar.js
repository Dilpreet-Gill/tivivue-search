import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

export default function SearchBar({value, onChangeText}) {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.text}
        value={value}
        onChangeText={onChangeText}
        editable={false}
        placeholder="Search..."
        placeholderTextColor="#888"
      >
        {value}
      </TextInput>
        
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
