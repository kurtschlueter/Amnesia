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

  mixins: [React.addons.LinkedStateMixin]

  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 'unknown',
      routeCoordinates: []
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('----------shouldComponentUpdate---------');
    return nextState.currentPosition !== this.state.currentPosition;
    // return false
  }

  componentDidMount(){
    var xxx = 's';
    this.currentLocation()
    // this.startTracking()
    console.log('yas')
    // console.log(this.state.currentPosition)
    // setInterval.apply(console.log('cat'),3000)
  }
  currentLocation() {

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const cp = {
          long: parseFloat(position.coords.longitude),
          lat: parseFloat(position.coords.latitude)
        };
        // this.linkState('currentPosition');
        this.setState({currentPosition: cp})
        // console.log(this.state.currentPosition)
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 5000}
    );

  }

  startTracking() {
    navigator.geolocation.clearWatch(this.watchID);
    this.watchID = navigator.geolocation.watchPosition((position) => {
      // console.log('yes')
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
    console.log(this.state.currentPosition)
    return (
      // <HomePage currentPosition={this.state.currentPosition} />
      <Text> dddfffffffffffffffd</Text>
    )
  }
}
AppRegistry.registerComponent('Amnesia', () => Amnesia);
