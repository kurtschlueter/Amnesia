import React, { Component } from 'react';
import {
  Text,
  View,
  AlertIOS,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import MapView from 'react-native-maps';

export default class SpecificMemory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      routeCoordinates: [],
      centeredPosition: 'unknown',
    }
  }

  // watchID: ?number = null;

  componentDidMount() {
    console.log('-----------------didMAP-----------------')
    // this.getCenteredPosition()
    // debugger
    var tempCoordHolder = []
    for (var i = 0; i < this.props.memoryData.coords.length; i++) {
      tempCoordHolder.push({
        longitude: this.props.memoryData.coords[i].longitude,
        latitude: this.props.memoryData.coords[i].latitude,
        timeStamp: this.props.memoryData.coords[i].timeStamp
      });
    }
    this.setState({
      routeCoordinates: tempCoordHolder,
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  currentLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          currentPosition: {
            latitude: parseFloat(position.coords.latitude),
            longitude: parseFloat(position.coords.longitude),
            timeStamp: position.timestamp
          }
        });
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 5000}
    );
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
    // console.log('--------------------------')
    // console.log(this.state.currentPosition.timeStamp)
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          showsUserLocation={false}
          followUserLocation={false}
          region={{
            latitude: 37.33444604,
            longitude: -122.04187567,
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