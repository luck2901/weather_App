import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from "./Loading";
import {Alert} from "react-native";

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getLocation = async() =>{
    try{
      await Location.requestPermissionsAsync();
      const {coords : {latitude, longtinude}} = await Location.getCurrentPositionAsync();
      //send to API and get weather!
      this.setState({isLoading:false})
    }catch(error){
      Alert.alert("Can't find you.", "so sad");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading } = this.state;
    return isLoading? <Loading /> : null;
  }
}