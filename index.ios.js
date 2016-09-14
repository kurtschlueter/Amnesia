import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  // Navigator
} from 'react-native';

import MapView from 'react-native-maps';
import HomePage from './views/homePage';
// import Firebase from 'firebase';
// import Test from './javascripts/geolocation';
class Amnesia extends Component {

  watchID: ?number = null;

  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 'unknown',
      routeCoordinates: []
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('----------shouldIndex-------------------')
    console.log(nextState.currentPosition)
    console.log(this.state.currentPosition)
    return nextState.currentPosition !== this.state.currentPosition;
  }

  componentDidMount(){
    // this.currentLocation()
    // this.startTracking()
  }
  currentLocation() {

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const cp = {
          long: parseFloat(position.coords.longitude),
          lat: parseFloat(position.coords.latitude)
        };
        this.setState({currentPosition: cp})
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 5000}
    );
  }

  startTracking() {
    navigator.geolocation.clearWatch(this.watchID);
    this.watchID = navigator.geolocation.watchPosition((position) => {
      const cp = {
        long: parseFloat(position.coords.longitude),
        lat: parseFloat(position.coords.latitude)
      }
      this.setState({
        routeCoordinates: this.state.routeCoordinates.concat({latitude: cp.lat, longitude: cp.long}),
        currentPosition: cp
      });
    });
  }

  // renderScene(route, navigator){
  //   if(route.name == 'Map') {
  //     return <Map navigator={navigator} currentPosition={this.state.currentPosition}/>;
  //   } else {
  //     return <HomePage navigator={navigator} currentPosition={this.state.currentPosition}/>;
  //   }
  // }

  render() {
    return (
      <HomePage currentPosition={this.state.currentPosition} routeCoordinates={this.state.routeCoordinates} startTracking={this.startTracking.bind(this)} currentLocation={this.currentLocation.bind(this)}/>
    )
  }
}
AppRegistry.registerComponent('Amnesia', () => Amnesia);
