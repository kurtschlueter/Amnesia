import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';

import Map from './map';

export default class HomePage extends Component {

  componentDidMount(){
    // console.log('dddddddddddd')
    // console.log(this.props.currentPosition)
  }
  goToMap() {
    this.props.navigator.push({
      component: Map,
      name: 'Map',
      passProps: {
        refresh: true
      }
    })
  }

  pastMemories() {
    console.log('yes')
  }

  render() {
    // console.log(this.props.currentPosition)
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={() => this.goToMap()}>
          <Text>Map</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => this.pastMemories()}>
          <Text>Past Memories</Text>
        </TouchableHighlight>
      </View>
    );
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