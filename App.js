import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from "./Loading";
import {Alert} from "react-native";
import axios from "axios";

const API_KEY = "d6ee5391a7da7b3a908bb7093fd3fa0d";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) =>{
    const {data} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
      console.log(data);
  };
  getLocation = async() =>{
    try{
      await Location.requestPermissionsAsync();
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
      //send to API and get weather!
      this.getWeather(latitude, longitude);
      this.setState({isLoading:false});
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