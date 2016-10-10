import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  ListView,
  View,
  StyleSheet
} from 'react-native';

import RealmObjects from '../realm/objects';

export default class listTest extends Component {

  componentDidMount() {
    this.state.items.push(RealmObjects.countMemories()[0], RealmObjects.countMemories()[1]);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.state.items),
    });

  }

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    };
  }
  render() {
    return (
      <ListView
        removeClippedSubviews={false}
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <View><Text>{data.description}</Text></View>}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});