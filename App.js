import React from 'react';
import Loading from "./Loading";
import {Alert} from "react-native";
import axios from "axios";
import Weather from './Weather';
import * as Location from "expo-location";

const API_KEY = "d6ee5391a7da7b3a908bb7093fd3fa0d"

  export default class extends React.Component {
    state = {
      isLoading: true
    };
    getWeather = async (latitude, longitude) => {
      const { data:{main :{temp},
      weather
    } } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
      );
      console.log(data);
      this.setState({ isLoading: false,condition:weather[0].main, temp});
    };
    getLocation = async () => {
      try {
        await Location.requestPermissionsAsync();
        const {
          coords: { latitude, longitude }
        } = await Location.getCurrentPositionAsync();
        this.getWeather(latitude, longitude);
        this.setState({ isLoading: false });
      } catch (error) {
        Alert.alert("Can't find you.", "So sad");
      }
    }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading,condition, temp } = this.state;
    return isLoading? <Loading /> : <Weather temp={temp} condition={condition}/>;
  }
}