import React from "react";
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'

export default function Keyboard({}) {
    
    const alphabetList = [
        ["A", "B", "C", "D", "E", "F"],
        ["G", "H", "I", "J", "K", "L"],
        [ "M", "N", "O", "P", "Q", "R"],
        ["S", "T", "U", "V", "W", "X"],
        [ "Y", "Z", "1", "2", "3", "4"],
        ["5", "6", "7", "8", "9", "0"]
    ]
    
    return (
        <View>
            <View style={styles.container}>
                {alphabetList.map((row, rowIndex) => (
                <View style={styles.row} key={rowIndex} >
                    {row.map((letter) => (
                        <TouchableOpacity key={letter} onPress={() => console.log(letter)} style={styles.key}>
                            <Text style={styles.keyText} key={letter}>{letter}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                ))}
            </View>
            <View style={{display: 'flex', flexDirection:'row', }}>
                <View>
                    <TouchableOpacity style={[styles.key, {width: 170}]}>
                        <Text style={styles.keyText}>Delete</Text>
                    </TouchableOpacity  >
                </View>
                <View>
                    <TouchableOpacity style={[styles.key, {width: 170}]}>
                        <Text style={styles.keyText}>Space</Text>
                    </TouchableOpacity  >
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        
    
    },

    key: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 1,
        width: 55,
        height: 60,
        margin: 1,
    },

    keyText: {
        fontSize:32,
        color: 'white'
    }






})