import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Navigator
} from 'react-native';

import HomePage from './views/homePage';
import Map from './views/map';
// import Firebase from 'firebase';
// import Test from './javascripts/geolocation';
class Amnesia extends Component {

  componentDidMount(){
    // console.log('yas')
    // setInterval.apply(console.log('cat'),3000)
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
