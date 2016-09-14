import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import MapView from 'react-native-maps';

export default class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      memoryRunning: false,
      routeCoordinates: [],
      currentPosition: 'unknown',
    }
  }

  watchID: ?number = null;

  componentDidMount() {
    console.log('-----------------didMAP-----------------')
    this.currentLocation()
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  currentLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const cp = {
          long: parseFloat(position.coords.longitude),
          lat: parseFloat(position.coords.latitude)
        };
        // this.props.yes
        this.setState({currentPosition: cp});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 5000}
    );
  }

  startTracking() {
    navigator.geolocation.clearWatch(this.watchID);
    this.watchID = navigator.geolocation.watchPosition((position) => {
      console.log('yes')
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

  endMemory() {
    navigator.geolocation.clearWatch(this.watchID);
    this.setState({
      routeCoordinates: [],
      memoryRunning: false
    });
  }

  startMemory() {
    navigator.geolocation.clearWatch(this.watchID);
    this.setState({
      memoryRunning: true
    });
    this.startTracking()
  }

  menu() {
    this.props.navigator.jumpBack(1) ;
  }

  memoryStatus() {
    if(this.state.memoryRunning == false) {
      return (
        <TouchableHighlight style={styles.buttonLeft} onPress={() => this.startMemory()}>
          <Text>Start Memory</Text>
        </TouchableHighlight>
      )
    } else {
      return (
        <TouchableHighlight style={styles.buttonLeft} onPress={() => this.endMemory()}>
          <Text>End Memory</Text>
        </TouchableHighlight>
      )
    }
  }

  render() {

    console.log(this.state.routeCoordinates)
    // console.log(this.watchID)
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
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
        <TouchableHighlight style={styles.buttonRight} onPress={() => this.menu()}>
          <Text>Menu</Text>
        </TouchableHighlight>
        {this.memoryStatus()}
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  },
  map: {
    position:'absolute',
    top: 20,
    bottom: 0,
    right: 0,
    left: 0
  },

  buttonLeft: {
    position: 'absolute',
    top: 25,
    right: 5,
    backgroundColor: 'rgba(236,64,122,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  buttonRight: {
    position: 'absolute',
    top: 25,
    left: 5,
    backgroundColor: 'rgba(236,64,122,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  }
});