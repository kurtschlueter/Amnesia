import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Navigator
} from 'react-native';

import HomePage from './views/homePage';
import Map from './views/map';
import Realm from 'realm';
import pastMemories from './views/pastMemories';

class Amnesia extends Component {

  componentDidMount(){
    // console.log('yas')
  }

  renderScene(route, navigator){
    return <route.component navigator={navigator}/>;
  }

  render() {

    const routes = [
      {component: HomePage},
      {component: Map},
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={this.renderScene}
      />
    )
  }
}

AppRegistry.registerComponent('Amnesia', () => Amnesia);
