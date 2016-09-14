import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';

import Map from './map';

export default class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      view: 'home'
    }
  }

  currentLocationCallback1() {
    this.props.currentLocation()
  }

  startTrackingCallback1() {
    this.props.startTracking()
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('----------shouldHome-------------------')
  //   console.log(nextProps.currentPosition)
  //   console.log(this.props.currentPosition)
  //   return nextProps.currentPosition !== this.props.currentPosition;
  // }

  componentDidMount(){
    // this.currentLocationCallback1()
    // this.startTrackingCallback1()
    // console.log(this.props.currentPosition)
  }

  setMapState(){
    this.setState({view: 'map'})
  }
  goToMap() {
      return (
        <Map currentPosition={this.props.currentPosition} routeCoordinates={this.props.routeCoordinates} startTracking={this.startTrackingCallback1.bind(this)} currentLocation={this.currentLocationCallback1.bind(this)}/>
      )
  }

  stayHome() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={() => this.setMapState()}>
          <Text>Map</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => this.pastMemories()}>
          <Text>Past Memories</Text>
        </TouchableHighlight>
      </View>
    )
  }
  pastMemories() {
    console.log('yes')
  }

  render() {
    if(this.state.view == "home"){
      return(
        <View>
          {this.stayHome()}
        </View>
      )
    } else {
      return(
        <View>
          {this.goToMap()}
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'rgba(236,64,122,0.7)',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 60,
  },
});