import { Text, View, TextInput, StyleSheet, SafeAreaView,  } from "react-native";
import React, { useState, } from 'react';
import SearchBar from '../components/SearchBar';


export default function SearchPage() {


    const [query, setQuery] = useState('');

    return (
        <View style={{flex: 1, backgroundColor: 'dimgray'}}>
            <View style={styles.container}>
                <View  style={styles.SearchBarContainer}>
                    <View style ={styles.SearchbarStyle}>
                        <SearchBar
                        value={query}
                        onChangeText={setQuery}
                        placeholder="Search"
                        />
                    </View>
                    <View style ={styles.KeyBoardStyle}></View>
                    <View style ={styles.GenreStyle}></View>
                </View>
                <View style={styles.resultContainer}></View>
                
            </View>
        </View>
    );
}


const styles = StyleSheet.create({

  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    borderWidth: 2,
    borderColor: 'blue',
  },
  SearchBarContainer: {
    display: 'flex',
    flex:1,
    borderWidth: 1,
    borderColor: 'green',

  },
  resultContainer: {
    flex: 2,
    borderWidth: 1,
    borderColor: 'yellow',
  },

  SearchbarStyle: {
    flex: 0.5,
    borderWidth: 1,
    borderColor: 'yellow',
  },
  KeyBoardStyle: {
    flex:2,
    borderWidth: 1,
    borderColor: 'yellow',
  },
  GenreStyle: {
    flex:2,
    borderWidth: 1,
    borderColor: 'yellow',
  },
  


})