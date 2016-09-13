import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Navigator
} from 'react-native';

import Map from './views/map';

class Amnesia extends Component {
  render() {
    const routes = [
      {title: 'Map', index: 0},
      {title: 'Second Scene', index: 1},
    ];

    return (
      <Navigator
        initialRoute={routes[0]}
        renderScene={(route, navigator) =>
          <Map />
        }
      />
    )
  }
}
AppRegistry.registerComponent('Amnesia', () => Amnesia);
