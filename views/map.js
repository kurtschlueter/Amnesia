import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
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

  endMemory() {
    console.log('end')
    this.props.navigator.popN(1)
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView style={{position:'absolute', top: 20, bottom: 40, right: 0, left: 0}}
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
        <TouchableHighlight style={styles.button} onPress={() => this.endMemory()}>
          <Text>End Memory</Text>
        </TouchableHighlight>
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
    bottom: 40,
    right: 0,
    left: 0
  },
  button: {
    bottom: 0,
    right: 0,
    left: 0,
    position:'absolute',
    paddingHorizontal: 12,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: 'rgba(236,64,122,0.7)',
  },

});