import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';

import RealmObjects from '../realm/objects';

export default class pastMemories extends Component {

  componentDidMount() {
    console.log('------------------didpastMemories-------------------')
  }

  componentWillUnmount() {
    console.log('------------------removedpastMemories---------------')
  }

  goBack() {
    this.props.navigator._jumpN(-2);
  }

  pastMemories() {
    console.log('s');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.buttonLeft} onPress={() => this.goBack()}>
          <Text>Back</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => console.log(this.props.navigator.getCurrentRoutes())}>
          <Text>Show Current Routes</Text>
        </TouchableHighlight>
        <Text>
         Count of Memories in Realm: {RealmObjects.countMemories()}
       </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
    top: 50,
    backgroundColor: 'rgba(236,64,122,0.7)',
    paddingVertical: 12,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 60,
  },
  buttonRight: {
    position: 'absolute',
    top: 0,
    right: 5,
    backgroundColor: 'rgba(236,64,122,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  buttonLeft: {
    position: 'absolute',
    top: 0,
    left: 5,
    backgroundColor: 'rgba(236,64,122,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  }
});