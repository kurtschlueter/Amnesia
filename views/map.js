import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import MapView from 'react-native-maps';

export default class Map extends Component {

  state = {
    initialPosition: 'unknown',
    lastPosition: 'unknown',
  };

  watchID: ?number = null;

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var ip = {
          long: parseFloat(position.coords.longitude),
          lat: parseFloat(position.coords.latitude)
        }
        this.setState({
          initialPosition: ip
        })
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 5000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lp = {
        long: parseFloat(position.coords.longitude),
        lat: parseFloat(position.coords.latitude)
      }
      this.setState({lastPosition: lp});
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
      <MapView
        style={{position:'absolute', top: 0, bottom: 0, right: 0, left: 0}}
        showsUserLocation={true}
        region={{
          latitude: this.state.lastPosition.lat,
          longitude: this.state.lastPosition.long,
          latitudeDelta: 0.3,
          longitudeDelta: 0.3,
        }}
      />
    );
  }
}
