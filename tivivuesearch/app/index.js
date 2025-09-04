import { Text, View, TextInput, StyleSheet, SafeAreaView,  } from "react-native";
import React, { useState, } from 'react';
import SearchBar from '../components/SearchBar';
import Keyboard from "../components/Keyboard";


export default function SearchPage() {


    const [query, setQuery] = useState('');

    return (
        <View style={{flex: 1, backgroundColor: 'black'}}>
            <View style={styles.container}>
                <View  style={styles.SearchBarContainer}>
                    <View style ={styles.KeyBoardStyle}>
                        <Keyboard/>
                    </View>
                    <View style ={styles.GenreStyle}></View>
                </View>

                <View style={styles.resultContainer}>
                    <View style ={styles.SearchbarStyle}>
                        <SearchBar
                            value={query}
                
                        />
                    </View>
                    <View style ={styles.MovieResultStyle}></View>
                </View>
                
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
  MovieResultStyle: {
    flex: 4,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'yellow',
  },

  SearchbarStyle: {
    flex: 0.5,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'yellow',
  },
  KeyBoardStyle: {
    justifyContent: 'center',
    alignItems: 'center',
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