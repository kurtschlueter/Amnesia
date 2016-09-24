import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';

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
        <TouchableHighlight style={styles.button} onPress={() => this.goBack()}>
          <Text>Back</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => console.log(this.props.navigator.getCurrentRoutes())}>
          <Text>Show Current Routes</Text>
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