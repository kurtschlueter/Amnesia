import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Navigator
} from 'react-native';

import HomePage from './views/homePage';
// import Firebase from 'firebase';

class Amnesia extends Component {

  renderScene(route, navigator){
    if(route.name == 'Map') {
      return <route.component navigator={navigator} {...route.passProps}/>;
    } else {
      return <route.component navigator={navigator} {...route.passProps}/>;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'Home', component: HomePage}}
        renderScene={this.renderScene}
      />
    )
  }
}
AppRegistry.registerComponent('Amnesia', () => Amnesia);
