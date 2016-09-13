import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import MapView from 'react-native-maps';

export default class Map extends Component {

  state = {
    routeCoordinates: [],
    currentPosition: 'unknown',
  };

  watchID: ?number = null;

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {},
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 5000}
    );
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

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  componentDidUpdate(){
    console.log(this.state.routeCoordinates);
  }

  render() {
    return (
      <MapView
        style={{position:'absolute', top: 0, bottom: 0, right: 0, left: 0}}
        showsUserLocation={true}
        followUserLocation={true}
        region={{
          latitude: this.state.currentPosition.lat,
          longitude: this.state.currentPosition.long,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
      <MapView.Polyline
        coordinates= {this.state.routeCoordinates}
        strokeColor='#19B5FE'
        fillColor="'#19B5FE'"
        strokeWidth={5}
      />
      </MapView>
    );
  }
}
