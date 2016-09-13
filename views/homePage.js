import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';

import Map from './map';

export default class HomePage extends Component {

  startMemory() {
    this.props.navigator.push({
      component: Map
    })
  }

  pastMemories() {
    console.log('yes')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={() => this.startMemory()}>
          <Text>Start Memory</Text>
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