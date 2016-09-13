import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Navigator
} from 'react-native';

import HomePage from './views/homePage';
// import Firebase from 'firebase';

class Amnesia extends Component {
  render() {
    // const routes = [
    //   {title: 'Home', index: 0},
    //   {title: 'Map', index: 1},
    // ];

    return (
      <Navigator
        initialRoute={{name: 'Home', component: HomePage}}
        renderScene={(route, navigator) =>
          React.createElement(route.component, { navigator })
        }
      />
    )
  }
}
AppRegistry.registerComponent('Amnesia', () => Amnesia);
