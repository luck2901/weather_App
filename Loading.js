import React from "react";
import {StyleSheet, Text, View} from "react-native";
import * as Location from "expo-location";

export default function Loading(){
    return <View style={styles.container}>
        <Text style ={styles.text}>Getting the fucking weather</Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end", //content의 내용을 밑단으로 내림.
        paddingHorizontal:30,
        paddingVertical : 150,
        backgroundColor:"#FDF6AA"
    },
    text:{
        color:"#2c2c2c",
        fontSize: 20
    }
});