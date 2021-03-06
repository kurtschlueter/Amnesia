import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';

import Map from './map';
import pastMemories from './pastMemories';

export default class HomePage extends Component {

  componentDidMount() {
    console.log('------------------didHOME-------------------')
  }

  goToMap() {
    this.props.navigator.jumpForward(1);
  }

  goToPastMemories() {
    this.props.navigator.replace({component: pastMemories});
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={() => this.goToMap()}>
          <Text>Map</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => this.goToPastMemories()}>
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