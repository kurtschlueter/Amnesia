import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Navigator
} from 'react-native';

import HomePage from './views/homePage';
// import Firebase from 'firebase';
// import Test from './javascripts/geolocation';
class Amnesia extends Component {

  componentDidMount(){
    // console.log('yas')
    // setInterval.apply(console.log('cat'),3000)
  }

  renderScene(route, navigator){
    if(route.name == 'Map') {
      return <route.component navigator={navigator}/>;
    } else {
      return <route.component navigator={navigator}/>;
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
