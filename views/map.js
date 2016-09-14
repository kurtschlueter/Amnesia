import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import MapView from 'react-native-maps';

export default class Map extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     memoryRunning: false,
  //     routeCoordinates: [],
  //     currentPosition: 'unknown',
  //   }
  // }

  currentLocationCallback2() {
    this.props.currentLocation()
  }

  startTrackingCallback2() {
    this.props.startTracking()
  }

  watchID: ?number = null;

  componentDidMount() {
    this.currentLocationCallback2()

    // this.startTracking()
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('----------shouldMap----------')
    console.log(nextProps.currentPosition)
    console.log(this.props.currentPosition)
    return nextProps.currentPosition !== this.props.currentPosition;
  }

  componentWillUnmount() {
    // navigator.geolocation.clearWatch(this.watchID);
  }

  endMemory() {
    // navigator.geolocation.clearWatch(this.watchID);
    // this.setState({
    //   routeCoordinates: [],
    //   memoryRunning: false
    // });
  }

  startMemory() {
    // navigator.geolocation.clearWatch(this.watchID);
    // this.setState({
    //   memoryRunning: true
    // });
    // this.startTracking()
    this.startTrackingCallback2()
  }

  menu() {
    // this.props.navigator.popN(1);
  }

  memoryStatus() {
    // if(this.state.memoryRunning == false) {
      return (
        <TouchableHighlight style={styles.buttonLeft} onPress={() => this.startMemory()}>
          <Text>Start Memory</Text>
        </TouchableHighlight>
      )
    // } else {
    //   return (
    //     <TouchableHighlight style={styles.buttonLeft} onPress={() => this.endMemory()}>
    //       <Text>End Memory</Text>
    //     </TouchableHighlight>
    //   )
    // }
  }

  render() {
    console.log('--------map-----------')
    console.log(this.props.currentPosition)
    // console.log(this.watchID)
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          showsUserLocation={true}
          followUserLocation={true}
          region={{
            latitude: this.props.currentPosition.lat,
            longitude: this.props.currentPosition.long,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        >
          <MapView.Polyline
            coordinates= {this.props.routeCoordinates}
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