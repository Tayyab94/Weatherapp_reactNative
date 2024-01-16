import React, { useState } from 'react'
import { StyleSheet, View, Text, Dimensions, TextInput, Pressable } from "react-native"
import { Ionicons } from '@expo/vector-icons';



const SearchBar = (props) => {

    const [name, setName] = useState('');

    const cityNameHandler = (cityName) => {
        setName(cityName);
    }

    function nameEnterHandler() {
        if (name !== null && name !== '') {
            props.cityName(name)
        } else {
            alert("Enter City Name")
        }
    }


    return (
        <>
            <View style={styles.searchBar}>
                <TextInput placeholder='Search By City' onChangeText={cityNameHandler} />
                <Pressable onPress={nameEnterHandler}>
                    <Ionicons name="search" size={24} color="black" />
                </Pressable>
            </View>
        </>
    )
}

export default SearchBar


const styles = StyleSheet.create({
    searchBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1.5,
        borderColor: "black",
        width: Dimensions.get("screen").width - 80,
        padding: 10,
        borderRadius: 5,
        alignSelf: "center",
        marginTop: 200
    }
})
